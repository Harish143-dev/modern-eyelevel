const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');
const targetDir = path.join(srcDir, 'components', 'sections', 'services');

const pages = [
  { file: 'AiEraSeo.tsx', folder: 'AI ERA SEO' },
  { file: 'BrandAndIdentity.tsx', folder: 'BRAND AND IDENTITY' },
  { file: 'CROAndFunnelDesign.tsx', folder: 'CRO AND FUNNEL DESIGN' },
  { file: 'ContentAndCreative.tsx', folder: 'CONTENT AND CREATIVE' },
  { file: 'LinkedInB2BMarketing.tsx', folder: 'LINKEDIN B2B MARKETING' },
  { file: 'RevenueAttributionDashboard.tsx', folder: 'REVENUE ATTRIBUTION DASHBOARD' },
  { file: 'SocialMediaManagement.tsx', folder: 'SOCIAL MEDIA MANAGEMENT' },
  { file: 'WebsiteDesignAndDevelopment.tsx', folder: 'WEBSITE DESIGN AND DEVELOPMENT' },
];

pages.forEach(page => {
  const filePath = path.join(pagesDir, page.file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${page.file}, not found.`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Extract sections based on comments
  const s1Idx = content.indexOf('{/* Section 1');
  const s2Idx = content.indexOf('{/* Section 2');
  const s3Idx = content.indexOf('{/* Section 3');
  const s4Idx = content.indexOf('{/* Section 4');
  const s5Idx = content.indexOf('{/* Section 5');
  const s6Idx = content.indexOf('{/* Section 6');
  const footerIdx = content.indexOf('<EnhancedFooter');

  if (s1Idx === -1 || s2Idx === -1 || s3Idx === -1 || s4Idx === -1 || s5Idx === -1 || s6Idx === -1 || footerIdx === -1) {
    console.log(`Skipping ${page.file}, sections not found.`);
    return;
  }

  const s1 = content.slice(s1Idx, s2Idx).trim();
  const s2 = content.slice(s2Idx, s3Idx).trim();
  const s3 = content.slice(s3Idx, s4Idx).trim();
  const s4 = content.slice(s4Idx, s5Idx).trim();
  const s5 = content.slice(s5Idx, s6Idx).trim();
  const s6 = content.slice(s6Idx, footerIdx).trim();

  const compDir = path.join(targetDir, page.folder);
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }

  // Common constants
  const animPropsStr = `  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };\n\n`;

  const heroExtract = content.match(/const heroRef = useRef\(null\);[\s\S]*?const backgroundY = useTransform\(scrollYProgress, \[0, 1\], \["0%", "30%"\]\);/);
  const heroSetupStr = heroExtract ? `  ${heroExtract[0]}\n\n` : '';

  const parallaxExtract = content.match(/const parallaxItems: iCardItem\[\] = \[[\s\S]*?\];/);
  let parallaxItemsStr = parallaxExtract ? parallaxExtract[0] : '';
  if(parallaxItemsStr) {
      parallaxItemsStr = `interface iCardItem {\n  title: string;\n  description: string;\n  tag: string;\n  src: string;\n  link: string;\n  color: string;\n  textColor: string;\n}\n\n` + parallaxItemsStr + '\n\n';
  }

  // Gather imports
  const importsMatch = content.match(/import.*?from.*?;/g);
  let importsStr = importsMatch ? importsMatch.join('\n') : '';

  // Add missing imports
  if (!importsStr.includes('CardsParallax')) {
     importsStr += `\nimport { CardsParallax } from "@/components/shared/CardsParallax";`;
  }

  const heroFile = `import { useRef } from "react";\n${importsStr}\n\nexport const HeroSection = () => {\n${heroSetupStr}  return (\n    ${s1}\n  );\n};\n`;
  const includesFile = `${importsStr}\n\nexport const IncludesSection = () => {\n${animPropsStr}  return (\n    ${s2}\n  );\n};\n`;
  const whoFile = `${importsStr}\n\nexport const WhoIsItForSection = () => {\n${animPropsStr}  return (\n    ${s3}\n  );\n};\n`;
  const quoteFile = `${importsStr}\n\nexport const QuoteSection = () => {\n${animPropsStr}  return (\n    ${s4}\n  );\n};\n`;
  const indFile = `${importsStr}\n\n${parallaxItemsStr}export const IndustriesSection = () => {\n${animPropsStr}  return (\n    ${s5}\n  );\n};\n`;
  const ctaFile = `${importsStr}\n\nexport const CTASection = () => {\n${animPropsStr}  return (\n    ${s6}\n  );\n};\n`;

  fs.writeFileSync(path.join(compDir, 'HeroSection.tsx'), heroFile);
  fs.writeFileSync(path.join(compDir, 'IncludesSection.tsx'), includesFile);
  fs.writeFileSync(path.join(compDir, 'WhoIsItForSection.tsx'), whoFile);
  fs.writeFileSync(path.join(compDir, 'QuoteSection.tsx'), quoteFile);
  fs.writeFileSync(path.join(compDir, 'IndustriesSection.tsx'), indFile);
  fs.writeFileSync(path.join(compDir, 'CTASection.tsx'), ctaFile);

  // Rebuild main file
  const preS1 = content.slice(0, s1Idx);
  const postFooter = content.slice(footerIdx);

  const mainImports = `import { HeroSection } from "@/components/sections/services/${page.folder}/HeroSection";
import { IncludesSection } from "@/components/sections/services/${page.folder}/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/${page.folder}/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/${page.folder}/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/${page.folder}/IndustriesSection";
import { CTASection } from "@/components/sections/services/${page.folder}/CTASection";\n`;

  // Remove the large component logic from the main file
  // Basically, keep the top part up to "return (" and just render the components
  let newPreS1 = preS1.replace(/const heroRef = useRef\(null\);[\s\S]*?return \(/, 'return (');
  newPreS1 = newPreS1.replace(/interface iCardItem \{[\s\S]*?\}/, '');

  let newMainContent = newPreS1 + `      <HeroSection />\n      <IncludesSection />\n      <WhoIsItForSection />\n      <QuoteSection />\n      <IndustriesSection />\n      <CTASection />\n\n      ` + postFooter;

  // Insert component imports right after SEO import
  newMainContent = newMainContent.replace(/(import SEO from.*?;\n)/, `$1\n${mainImports}`);

  // Clean up unused stuff like useScroll, etc. We'll leave them to avoid regex mess, linter will handle them
  fs.writeFileSync(filePath, newMainContent);
  console.log(`Refactored ${page.file}`);
});
console.log('Done!');
