import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, 'src');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Case-insensitive regex for extensions
  content = content.replace(/\.(jpg|jpeg|png)(?=['"`;\s\)])/gi, '.webp');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${path.relative(SRC_DIR, filePath)}`);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

console.log('Starting case-insensitive extension replacement...');
traverse(SRC_DIR);
console.log('Replacement complete.');
