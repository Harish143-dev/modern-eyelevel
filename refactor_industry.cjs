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
  const filePath = path.join(pagesDir, page.file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${page.file}, not found.`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Extract sections based on exact comments
  const s1Idx = content.indexOf('{/* Hero */}');
  const s2Idx = content.indexOf('{/* The Problem */}');
  const s3Idx = content.indexOf('{/* What We Do */}');
  const s4Idx = content.indexOf('{/* Why EyeLevel */}');
  const s5Idx = content.indexOf('{/* CTA Band */}');
  const footerIdx = content.indexOf('<EnhancedFooter');

  if (s1Idx === -1 || s2Idx === -1 || s3Idx === -1 || s4Idx === -1 || s5Idx === -1 || footerIdx === -1) {
    console.log(`Skipping ${page.file}, sections not found.`);
    return;
  }

  const s1 = content.slice(s1Idx, s2Idx).trim();
  const s2 = content.slice(s2Idx, s3Idx).trim();
  const s3 = content.slice(s3Idx, s4Idx).trim();
  const s4 = content.slice(s4Idx, s5Idx).trim();
  const s5 = content.slice(s5Idx, footerIdx).trim();

  // Create folder
  const compDir = path.join(targetDir, page.folder);
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }

  // Gather setup logic (services array)
  const servicesExtract = content.match(/const services = \[[\s\S]*?\];/);
  let servicesStr = servicesExtract ? servicesExtract[0] : '';
  if (servicesStr) servicesStr += '\n\n';

  // Gather imports
  const importsMatch = content.match(/import.*?from.*?;/g);
  let importsStr = importsMatch ? importsMatch.join('\n') : '';

  // Ensure fragment wrapper for JSX returns
  const wrap = (jsx) => `return (\n    <>\n      ${jsx}\n    </>\n  );`;

  const heroFile = `import { Link } from "react-router-dom";\n${importsStr}\n\nexport const HeroSection = () => {\n  ${wrap(s1)}\n};\n`;
  const probFile = `${importsStr}\n\nexport const TheProblemSection = () => {\n  ${wrap(s2)}\n};\n`;
  const doFile = `import { Link } from "react-router-dom";\n${importsStr}\n\n${servicesStr}export const WhatWeDoSection = () => {\n  ${wrap(s3)}\n};\n`;
  const whyFile = `${importsStr}\n\nexport const WhyEyeLevelSection = () => {\n  ${wrap(s4)}\n};\n`;
  const ctaFile = `import { Link } from "react-router-dom";\n${importsStr}\n\nexport const CTABandSection = () => {\n  ${wrap(s5)}\n};\n`;

  fs.writeFileSync(path.join(compDir, 'HeroSection.tsx'), heroFile);
  fs.writeFileSync(path.join(compDir, 'TheProblemSection.tsx'), probFile);
  fs.writeFileSync(path.join(compDir, 'WhatWeDoSection.tsx'), doFile);
  fs.writeFileSync(path.join(compDir, 'WhyEyeLevelSection.tsx'), whyFile);
  fs.writeFileSync(path.join(compDir, 'CTABandSection.tsx'), ctaFile);

  // Rebuild main file
  const preS1 = content.slice(0, s1Idx);
  const postFooter = content.slice(footerIdx);

  const mainImports = `import { HeroSection } from "@/components/sections/industries/${page.folder}/HeroSection";
import { TheProblemSection } from "@/components/sections/industries/${page.folder}/TheProblemSection";
import { WhatWeDoSection } from "@/components/sections/industries/${page.folder}/WhatWeDoSection";
import { WhyEyeLevelSection } from "@/components/sections/industries/${page.folder}/WhyEyeLevelSection";
import { CTABandSection } from "@/components/sections/industries/${page.folder}/CTABandSection";\n`;

  // Remove the large component logic from the main file
  let newPreS1 = preS1.replace(/const services = \[[\s\S]*?\];/, '');
  newPreS1 = newPreS1.replace(/<main>/, '<main>\n      <HeroSection />\n      <TheProblemSection />\n      <WhatWeDoSection />\n      <WhyEyeLevelSection />\n      <CTABandSection />\n');

  let newMainContent = newPreS1 + `\n      ` + postFooter;

  // Insert component imports right after SEO import
  const componentMatch = newMainContent.match(/const \w+ = \(\) => {/);
  if (componentMatch) {
    newMainContent = newMainContent.replace(componentMatch[0], `${mainImports}\n${componentMatch[0]}`);
  }

  fs.writeFileSync(filePath, newMainContent);
  console.log(`Refactored ${page.file}`);
});
console.log('Done!');
