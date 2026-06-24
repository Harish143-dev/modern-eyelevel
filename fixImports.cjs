const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');

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
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // If already has HeroSection import, skip
  if (content.includes(`import { HeroSection } from "@/components/sections/services/${page.folder}/HeroSection";`)) {
    return;
  }

  const mainImports = `import { HeroSection } from "@/components/sections/services/${page.folder}/HeroSection";
import { IncludesSection } from "@/components/sections/services/${page.folder}/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/${page.folder}/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/${page.folder}/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/${page.folder}/IndustriesSection";
import { CTASection } from "@/components/sections/services/${page.folder}/CTASection";\n`;

  // Insert before "const AiEraSeo = () => {"
  const componentMatch = content.match(/const \w+ = \(\) => {/);
  if (componentMatch) {
    content = content.replace(componentMatch[0], `${mainImports}\n${componentMatch[0]}`);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in ${page.file}`);
  }
});
console.log('Done fixing imports!');
