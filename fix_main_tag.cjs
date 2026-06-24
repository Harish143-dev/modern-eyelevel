const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages', 'industries');
const targetDir = path.join(srcDir, 'components', 'sections', 'industries');

const pages = [
  { file: 'Automotive.tsx', folder: 'AUTOMOTIVE' },
  { file: 'Healthcare.tsx', folder: 'HEALTHCARE' },
  { file: 'ITSaaS.tsx', folder: 'IT SAAS' },
  { file: 'ManufacturingB2B.tsx', folder: 'MANUFACTURING B2B' },
  { file: 'RealEstate.tsx', folder: 'REAL ESTATE' },
];

pages.forEach(page => {
  // Fix the CTABandSection.tsx by removing </main>
  const ctaFile = path.join(targetDir, page.folder, 'CTABandSection.tsx');
  if (fs.existsSync(ctaFile)) {
    let content = fs.readFileSync(ctaFile, 'utf8');
    content = content.replace('</main>', '');
    fs.writeFileSync(ctaFile, content);
  }

  // Fix the main file by adding </main> right before <EnhancedFooter
  const mainFile = path.join(pagesDir, page.file);
  if (fs.existsSync(mainFile)) {
    let content = fs.readFileSync(mainFile, 'utf8');
    if (!content.includes('</main>')) {
      content = content.replace(/<EnhancedFooter/, '</main>\n      <EnhancedFooter');
      fs.writeFileSync(mainFile, content);
    }
  }
});
console.log('Fixed main tags!');
