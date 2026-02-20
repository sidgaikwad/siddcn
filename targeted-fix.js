const fs = require('fs');
const path = require('path');

const files = [
  'apps/website/app/components/page.tsx',
  'apps/website/app/components/[category]/page.tsx',
  'apps/website/app/components/[category]/[variant]/page.tsx',
  'apps/website/app/themes/page.tsx',
];

const replacements = [
  { regex: /text-terminal-text\/([0-9]+)/g, replacement: 'text-zinc-400/$1 dark:text-zinc-300/$1' },
  { regex: /text-terminal-text/g, replacement: 'text-zinc-400 dark:text-zinc-300' },
  { regex: /bg-terminal-text\/([0-9]+)/g, replacement: 'bg-zinc-400/$1 dark:bg-zinc-300/$1' },
  { regex: /bg-terminal-text/g, replacement: 'bg-zinc-400 dark:bg-zinc-300' },
  { regex: /border-terminal-text\/([0-9]+)/g, replacement: 'border-zinc-700/$1 dark:border-zinc-700/$1' },
  { regex: /border-terminal-text/g, replacement: 'border-zinc-700 dark:border-zinc-700' },

  { regex: /text-terminal-cyan\/([0-9]+)/g, replacement: 'text-emerald-500/$1 dark:text-emerald-400/$1' },
  { regex: /text-terminal-cyan/g, replacement: 'text-emerald-500 dark:text-emerald-400' },
  { regex: /bg-terminal-cyan\/([0-9]+)/g, replacement: 'bg-emerald-500/$1 dark:bg-emerald-400/$1' },
  { regex: /bg-terminal-cyan/g, replacement: 'bg-emerald-500/20 dark:bg-emerald-400/20' },
  { regex: /border-terminal-cyan\/([0-9]+)/g, replacement: 'border-emerald-500/$1 dark:border-emerald-400/$1' },
  { regex: /border-terminal-cyan/g, replacement: 'border-emerald-500/30 dark:border-emerald-400/30' },

  { regex: /text-terminal-green/g, replacement: 'text-emerald-500 dark:text-emerald-400' },
  { regex: /bg-terminal-green/g, replacement: 'bg-emerald-500/20 dark:bg-emerald-400/20' },

  { regex: /text-terminal-red/g, replacement: 'text-red-500 dark:text-red-400' },
  { regex: /bg-terminal-red/g, replacement: 'bg-red-500/20 dark:bg-red-400/20' },

  { regex: /bg-terminal-bg\/([0-9]+)/g, replacement: 'bg-black/$1 dark:bg-[#0a0a0a]/$1' },
  { regex: /bg-terminal-bg/g, replacement: 'bg-black/50 dark:bg-[#0a0a0a]' },
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
