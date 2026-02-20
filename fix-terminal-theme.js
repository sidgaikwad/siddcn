const fs = require('fs');
const path = require('path');

const files = [
  'apps/website/app/components/page.tsx',
  'apps/website/app/components/[category]/page.tsx',
  'apps/website/app/components/[category]/[variant]/page.tsx',
  'apps/website/app/themes/page.tsx',
];

const replacements = [
  // terminal-text -> neutral-300
  { regex: /text-terminal-text\/([0-9]+)/g, replacement: 'text-neutral-300/$1' },
  { regex: /text-terminal-text/g, replacement: 'text-neutral-300' },
  { regex: /bg-terminal-text\/([0-9]+)/g, replacement: 'bg-neutral-300/$1' },
  { regex: /bg-terminal-text/g, replacement: 'bg-neutral-300' },
  { regex: /border-terminal-text\/([0-9]+)/g, replacement: 'border-neutral-500/$1' },
  { regex: /border-terminal-text/g, replacement: 'border-neutral-500' },

  // terminal-cyan -> cyan-400
  { regex: /text-terminal-cyan\/([0-9]+)/g, replacement: 'text-cyan-400/$1' },
  { regex: /text-terminal-cyan/g, replacement: 'text-cyan-400' },
  { regex: /bg-terminal-cyan\/([0-9]+)/g, replacement: 'bg-cyan-400/$1' },
  { regex: /bg-terminal-cyan/g, replacement: 'bg-cyan-400' },
  { regex: /border-terminal-cyan\/([0-9]+)/g, replacement: 'border-cyan-400/$1' },
  { regex: /border-terminal-cyan/g, replacement: 'border-cyan-400' },

  // terminal-green -> green-400
  { regex: /text-terminal-green\/([0-9]+)/g, replacement: 'text-green-400/$1' },
  { regex: /text-terminal-green/g, replacement: 'text-green-400' },
  { regex: /bg-terminal-green\/([0-9]+)/g, replacement: 'bg-green-400/$1' },
  { regex: /bg-terminal-green/g, replacement: 'bg-green-400' },
  { regex: /border-terminal-green\/([0-9]+)/g, replacement: 'border-green-400/$1' },
  { regex: /border-terminal-green/g, replacement: 'border-green-400' },

  // terminal-red -> red-400
  { regex: /text-terminal-red\/([0-9]+)/g, replacement: 'text-red-400/$1' },
  { regex: /text-terminal-red/g, replacement: 'text-red-400' },
  { regex: /bg-terminal-red\/([0-9]+)/g, replacement: 'bg-red-400/$1' },
  { regex: /bg-terminal-red/g, replacement: 'bg-red-400' },
  
  // terminal-bg -> black
  { regex: /bg-terminal-bg\/([0-9]+)/g, replacement: 'bg-black/$1' },
  { regex: /bg-terminal-bg/g, replacement: 'bg-black' },
  { regex: /text-terminal-bg\/([0-9]+)/g, replacement: 'text-black/$1' },
  { regex: /text-terminal-bg/g, replacement: 'text-black' },
];

for (const relPath of files) {
  const fullPath = path.join(__dirname, relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    continue;
  }
  
  let content = fs.readFileSync(fullPath, 'utf-8');
  let originalContent = content;
  
  for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`Updated ${relPath}`);
  } else {
    console.log(`No changes needed for ${relPath}`);
  }
}
