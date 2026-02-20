const fs = require('fs');
const path = require('path');

const files = [
  'apps/website/app/components/page.tsx',
  'apps/website/app/components/[category]/page.tsx',
  'apps/website/app/components/[category]/[variant]/page.tsx',
  'apps/website/app/themes/page.tsx',
];

const simpleReplacements = {
  'terminal-cyan': 'cyan-400',
  'terminal-text': 'neutral-300',
  'terminal-bg': 'black',
  'terminal-green': 'green-400',
  'terminal-red': 'red-400',
};

for (const relPath of files) {
  const fullPath = path.join(__dirname, relPath);
  if (!fs.existsSync(fullPath)) continue;
  
  let content = fs.readFileSync(fullPath, 'utf-8');
  let originalContent = content;
  
  for (const [term, rep] of Object.entries(simpleReplacements)) {
    const regex = new RegExp(term, 'g');
    content = content.replace(regex, rep);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`Updated ${relPath}`);
  }
}
