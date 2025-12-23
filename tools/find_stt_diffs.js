const fs = require('fs');
const path = require('path');

function walk(dir) {
  const arr = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) {
      arr.push(...walk(full));
    } else if (it.isFile()) {
      arr.push(full);
    }
  }
  return arr;
}

function rel(p, base) {
  return path.relative(base, p).replace(/\\\\/g, '/');
}

const root = path.resolve(__dirname, '..');
const sttRoot = path.join(root, 'STT');
const mainRoot = path.join(root, 'src');

if (!fs.existsSync(sttRoot)) {
  console.error('STT folder not found:', sttRoot);
  process.exit(2);
}

const sttFiles = walk(sttRoot).map(f => rel(f, sttRoot));

const diffs = [];
for (const relPath of sttFiles) {
  const sttFile = path.join(sttRoot, relPath);
  const mainFile = path.join(mainRoot, relPath);
  if (!fs.existsSync(mainFile)) {
    diffs.push({ path: relPath, type: 'added' });
    continue;
  }
  const a = fs.readFileSync(sttFile);
  const b = fs.readFileSync(mainFile);
  if (a.length !== b.length || !a.equals(b)) {
    diffs.push({ path: relPath, type: 'modified' });
  }
}

fs.writeFileSync(path.join(root, 'stt-diffs.json'), JSON.stringify(diffs, null, 2));
console.log('Wrote stt-diffs.json with', diffs.length, 'items');
