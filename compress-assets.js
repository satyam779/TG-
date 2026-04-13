/* global require, __dirname */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ASSETS_DIR = path.join(__dirname, "src", "assets");
const IMAGE_EXTS = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];
const SKIP_DIRS = ["optimized"];

let totalOriginal = 0;
let totalCompressed = 0;
let count = 0;

function getAllImageFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.includes(entry.name)) results.push(...getAllImageFiles(fullPath));
    } else if (IMAGE_EXTS.includes(path.extname(entry.name))) {
      results.push(fullPath);
    }
  }
  return results;
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalSize = fs.statSync(filePath).size;
  const tmpPath = filePath + ".tmp";

  try {
    if (ext === ".png") {
      await sharp(filePath)
        .png({ compressionLevel: 9, palette: true, quality: 90 })
        .toFile(tmpPath);
    } else {
      await sharp(filePath)
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(tmpPath);
    }

    const newSize = fs.statSync(tmpPath).size;

    if (newSize < originalSize) {
      fs.renameSync(tmpPath, filePath);
      totalOriginal += originalSize;
      totalCompressed += newSize;
      count++;
      const saved = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
      console.log(`✓ ${path.relative(ASSETS_DIR, filePath)} — ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${saved}% saved)`);
    } else {
      fs.unlinkSync(tmpPath);
      console.log(`— ${path.relative(ASSETS_DIR, filePath)} — already optimal, skipped`);
    }
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    console.error(`✗ ${path.relative(ASSETS_DIR, filePath)} — ${err.message}`);
  }
}

async function main() {
  console.log("🔍 Scanning assets...\n");
  const files = getAllImageFiles(ASSETS_DIR);
  console.log(`Found ${files.length} image files\n`);

  for (const file of files) {
    await compressImage(file);
  }

  const savedMB = ((totalOriginal - totalCompressed) / 1024 / 1024).toFixed(2);
  const savedPct = totalOriginal > 0 ? (((totalOriginal - totalCompressed) / totalOriginal) * 100).toFixed(1) : 0;
  console.log(`\n✅ Done! Compressed ${count} files`);
  console.log(`📦 Total saved: ${savedMB}MB (${savedPct}% reduction)`);
}

main();
