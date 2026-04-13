import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, "src", "assets");
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);
const SKIP_DIRS = new Set(["optimized"]);

let totalOriginalBytes = 0;
let totalCompressedBytes = 0;
let compressedCount = 0;
let skippedCount = 0;
let errorCount = 0;

function getAllImageFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !SKIP_DIRS.has(entry.name)) {
      results.push(...getAllImageFiles(fullPath));
    } else if (entry.isFile() && IMAGE_EXTS.has(path.extname(entry.name))) {
      results.push(fullPath);
    }
  }
  return results;
}

function formatSize(bytes) {
  return bytes >= 1024 * 1024
    ? (bytes / 1024 / 1024).toFixed(2) + " MB"
    : (bytes / 1024).toFixed(1) + " KB";
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalSize = fs.statSync(filePath).size;
  const tmpPath = filePath + ".__tmp__";
  const relPath = path.relative(ASSETS_DIR, filePath);

  try {
    const img = sharp(filePath);

    if (ext === ".png") {
      // Lossless PNG — max zlib compression, no palette reduction
      await img
        .png({ compressionLevel: 9, adaptiveFiltering: true, force: true })
        .toFile(tmpPath);
    } else {
      // Lossless JPEG — MozJPEG lossless mode
      await img
        .jpeg({ quality: 100, mozjpeg: true, force: true })
        .toFile(tmpPath);
    }

    const newSize = fs.statSync(tmpPath).size;

    if (newSize < originalSize) {
      fs.renameSync(tmpPath, filePath);
      const saved = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
      totalOriginalBytes += originalSize;
      totalCompressedBytes += newSize;
      compressedCount++;
      console.log(
        `  ✓  ${relPath}\n     ${formatSize(originalSize)} → ${formatSize(newSize)}  (${saved}% saved)\n`
      );
    } else {
      fs.unlinkSync(tmpPath);
      skippedCount++;
      console.log(`  —  ${relPath}  [already optimal]\n`);
    }
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    errorCount++;
    console.error(`  ✗  ${relPath}  ERROR: ${err.message}\n`);
  }
}

async function main() {
  console.log("\n========================================");
  console.log("  TechyGuide — Lossless Image Compressor");
  console.log("========================================\n");

  const files = getAllImageFiles(ASSETS_DIR);
  console.log(`Found ${files.length} image files in src/assets/\n`);
  console.log("----------------------------------------\n");

  for (const file of files) {
    await compressImage(file);
  }

  const totalSaved = totalOriginalBytes - totalCompressedBytes;
  const savedPct =
    totalOriginalBytes > 0
      ? (((totalOriginalBytes - totalCompressedBytes) / totalOriginalBytes) * 100).toFixed(1)
      : "0.0";

  console.log("========================================");
  console.log(`  ✅  Compressed : ${compressedCount} files`);
  console.log(`  —   Skipped   : ${skippedCount} files (already optimal)`);
  console.log(`  ✗   Errors    : ${errorCount} files`);
  console.log(`  💾  Total saved: ${formatSize(totalSaved)} (${savedPct}% reduction)`);
  console.log("========================================\n");
}

main();
