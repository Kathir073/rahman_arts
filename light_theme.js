const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/components');

const replacements = {
  'text-white': 'text-slate-900',
  'text-slate-400': 'text-slate-600',
  'text-slate-300': 'text-slate-700',
  'bg-black': 'bg-slate-50',
  'bg-zinc-950': 'bg-white',
  'bg-[#09090b]/95': 'bg-white/95',
  'border-white/10': 'border-slate-200',
  'border-white/20': 'border-slate-300',
  'bg-white/5': 'bg-slate-100',
  'hover:bg-white/5': 'hover:bg-slate-100',
  'bg-white/10': 'bg-slate-200',
  'bg-[var(--bg-primary)]': 'bg-transparent',
  'text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600': 'text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700',
  'shadow-black/50': 'shadow-slate-200/50',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  
  for (const [search, replace] of Object.entries(replacements)) {
    newContent = newContent.split(search).join(replace);
  }
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

processDirectory(directoryPath);
