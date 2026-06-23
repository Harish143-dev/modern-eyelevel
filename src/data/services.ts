/**
 * Core Marketing Services Data Model
 * 5 primary services offered by Eyelevel Studio
 */

export interface Service {
  id: string;
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  icon: string;
  color: string;
  overview: string;
  benefits: string[];
  useCases: string[];
  processSteps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
  keywords: string[];
  image?: string;
}

export const coreServices: Service[] = [
  {
    id: "growth-strategy",
    slug: "growth-strategy",
    name: "Growth Strategy",
    seoTitle: "Growth Strategy Services | Growth Audit & Planning | Eyelevel",
    seoDescription:
      "Strategic growth planning for brands. Custom growth audits, competitive analysis, and roadmaps designed to accelerate revenue and market share.",
    shortDescription:
      "Custom growth audits and strategic plans to accelerate brand revenue and scale.",
    icon: "📈",
    color: "from-blue-500 to-blue-600",
    overview:
      "Growth is not a department; it's a discipline. Our growth strategy services help brands understand their market position, identify revenue opportunities, and build executable growth plans. We combine data analysis, competitive research, and strategic thinking to create roadmaps that drive real business results.",
    benefits: [
      "Clear revenue growth roadmap",
      "Competitive positioning clarity",
      "Market opportunity identification",
      "Priority-driven action plans",
      "Data-backed decision making",
      "Aligned cross-functional teams",
    ],
    useCases: [
      "Early-stage startups seeking product-market fit",
      "Established brands wanting to enter new markets",
      "Companies scaling from 5M to 50M revenue",
      "Businesses struggling with stagnant growth",
      "Enterprises launching new product lines",
    ],
    processSteps: [
      {
        number: 1,
        title: "Growth Audit",
        description: "Deep audit of your business, market, and competitive landscape",
      },
      {
        number: 2,
        title: "Opportunity Identification",
        description: "Identify the 3-5 biggest growth opportunities for your business",
      },
      {
        number: 3,
        title: "Roadmap Development",
        description: "Build a prioritized, executable growth roadmap for 12-24 months",
      },
      {
        number: 4,
        title: "Implementation Support",
        description: "Support your team in executing the strategy and adjusting as needed",
      },
    ],
    keywords: [
      "growth strategy",
      "business growth",
      "growth audit",
      "growth planning",
      "revenue growth",
      "market strategy",
    ],
  },
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    name: "Performance Marketing",
    seoTitle: "Performance Marketing Agency | Google Ads & Digital Advertising | Eyelevel",
    seoDescription:
      "Data-driven performance marketing. Google Ads, Facebook/Instagram, LinkedIn campaigns optimized for ROI, leads, and sales.",
    shortDescription:
      "Data-driven paid advertising campaigns optimized for ROI, leads, and sales.",
    icon: "🎯",
    color: "from-red-500 to-red-600",
    overview:
      "Performance marketing is about doing more with less. Our performance marketing expertise delivers measurable results: clicks, leads, sales, and revenue. We manage Google Ads, Facebook, Instagram, LinkedIn, and other channels, constantly optimizing for maximum return on ad spend (ROAS) and customer acquisition cost (CAC).",
    benefits: [
      "Predictable lead and sales generation",
      "Maximum ROI on advertising budget",
      "Real-time performance tracking",
      "Continuous optimization and improvement",
      "Full attribution and transparency",
      "Scalable revenue engine",
    ],
    useCases: [
      "B2B companies generating enterprise leads",
      "E-commerce brands scaling revenue",
      "SaaS companies driving free trial signups",
      "Real estate and education lead generation",
      "Healthcare providers attracting patients",
      "Services connecting with customers",
    ],
    processSteps: [
      {
        number: 1,
        title: "Strategy & Budget Planning",
        description: "Develop channel mix, budget allocation, and target metrics",
      },
      {
        number: 2,
        title: "Campaign Setup",
        description: "Create and configure campaigns across chosen channels",
      },
      {
        number: 3,
        title: "Continuous Optimization",
        description: "Monitor, test, and optimize for better ROAS weekly",
      },
      {
        number: 4,
        title: "Reporting & Scaling",
        description: "Report results and scale winners, pause underperformers",
      },
    ],
    keywords: [
      "performance marketing",
      "Google Ads",
      "paid advertising",
      "digital advertising",
      "marketing ROI",
      "ad campaigns",
    ],
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    name: "AI & Automation",
    seoTitle: "AI & Marketing Automation | Business Process Automation | Eyelevel",
    seoDescription:
      "AI-powered marketing automation and business process optimization. Reduce manual work, improve efficiency, and scale without adding headcount.",
    shortDescription:
      "AI and automation solutions to reduce manual work and scale operations.",
    icon: "🤖",
    color: "from-purple-500 to-purple-600",
    overview:
      "In 2025+, automation isn't optional—it's survival. Our AI and automation expertise helps brands eliminate repetitive work, improve efficiency, and scale without proportionally increasing headcount. From marketing automation to business process automation, we help you work smarter, not just harder.",
    benefits: [
      "Significant time savings (20-40 hours/week)",
      "Improved consistency and quality",
      "Faster customer response times",
      "Reduced operational costs",
      "Data-driven decision automation",
      "Scalable without hiring",
    ],
    useCases: [
      "Email marketing teams overwhelmed with volume",
      "Sales teams managing leads manually",
      "Customer support teams handling repetitive inquiries",
      "Recruiting and HR process automation",
      "Financial and billing process automation",
      "Content and social media management",
    ],
    processSteps: [
      {
        number: 1,
        title: "Process Review",
        description: "Identify manual, repetitive processes ripe for automation",
      },
      {
        number: 2,
        title: "Automation Design",
        description: "Design workflows and automation logic",
      },
      {
        number: 3,
        title: "Implementation",
        description: "Setup automation using AI tools and platforms",
      },
      {
        number: 4,
        title: "Optimization",
        description: "Monitor, refine, and continuously improve automation",
      },
    ],
    keywords: [
      "AI marketing",
      "marketing automation",
      "business automation",
      "workflow automation",
      "process automation",
      "AI tools",
    ],
  },
  {
    id: "creative-branding",
    slug: "creative-branding",
    name: "Creative Branding",
    seoTitle: "Branding Agency | Brand Identity & Design | Eyelevel",
    seoDescription:
      "Creative branding services: brand strategy, logo design, brand guidelines, and visual identity design that makes brands memorable.",
    shortDescription: "Brand strategy and design that makes brands unforgettable.",
    icon: "🎨",
    color: "from-pink-500 to-pink-600",
    overview:
      "Your brand is not your logo—it's how people feel about you. Our creative branding expertise helps you build brands that are memorable, meaningful, and differentiated. From strategy to design, we create complete brand experiences that resonate with your audience.",
    benefits: [
      "Clear, differentiated brand positioning",
      "Memorable visual identity",
      "Consistent brand experience",
      "Stronger customer connection",
      "Premium pricing power",
      "Employee pride and recruitment",
    ],
    useCases: [
      "New companies needing brand identity",
      "Established brands undergoing refresh",
      "Companies with confused brand messaging",
      "Agencies relaunching portfolio companies",
      "Startups wanting to launch strong",
      "Corporations modernizing brand image",
    ],
    processSteps: [
      {
        number: 1,
        title: "Brand Strategy",
        description: "Define purpose, positioning, messaging, and personality",
      },
      {
        number: 2,
        title: "Visual Design",
        description: "Create logo, color palette, typography, and visual system",
      },
      {
        number: 3,
        title: "Brand Guidelines",
        description: "Document usage rules and best practices",
      },
      {
        number: 4,
        title: "Launch Support",
        description: "Support rollout across marketing and customer touchpoints",
      },
    ],
    keywords: [
      "branding",
      "brand strategy",
      "logo design",
      "brand design",
      "brand identity",
      "visual identity",
    ],
  },
  {
    id: "web3-marketing",
    slug: "web3-marketing",
    name: "Web3 Marketing",
    seoTitle: "Web3 Marketing Agency | Crypto & Blockchain Marketing | Eyelevel",
    seoDescription:
      "Web3 and crypto marketing expertise. Community building, token launch marketing, NFT marketing, and blockchain brand positioning.",
    shortDescription:
      "Web3 and crypto marketing: community, tokens, NFTs, and blockchain brands.",
    icon: "⛓️",
    color: "from-orange-500 to-orange-600",
    overview:
      "Web3 requires a different marketing approach. We specialize in blockchain, crypto, and Web3 marketing—from token launches and community building to NFT marketing and HODL strategies. We understand crypto communities, influencers, and the unique dynamics of Web3 brands.",
    benefits: [
      "Strong community engagement",
      "Effective token launch mechanics",
      "Authentic influencer partnerships",
      "Compliant marketing approach",
      "Long-term community loyalty",
      "Differentiation in crowded space",
    ],
    useCases: [
      "Token projects seeking launch marketing",
      "Crypto platforms building liquidity",
      "NFT projects launching collections",
      "DeFi protocols building adoption",
      "DAO communities growing participation",
      "Blockchain companies seeking mainstream adoption",
    ],
    processSteps: [
      {
        number: 1,
        title: "Community Analysis",
        description: "Understand your target community and market dynamics",
      },
      {
        number: 2,
        title: "Launch & Growth Strategy",
        description: "Build community, partnerships, and marketing funnel",
      },
      {
        number: 3,
        title: "Execution",
        description: "Execute across Discord, Twitter, influencers, and channels",
      },
      {
        number: 4,
        title: "Momentum & Scaling",
        description: "Maintain momentum and scale community engagement",
      },
    ],
    keywords: [
      "Web3 marketing",
      "crypto marketing",
      "blockchain marketing",
      "token marketing",
      "NFT marketing",
      "cryptocurrency",
    ],
  },
];

// Helper functions

export const getServiceBySlug = (slug: string): Service | undefined => {
  return coreServices.find((s) => s.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return coreServices.find((s) => s.id === id);
};

export const getAllServices = (): Service[] => {
  return coreServices;
};

// Schema builder function
export const getServiceSchema = (service: Service, baseUrl = "https://theeyelevelstudio.com") => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/services/${service.slug}#service`,
    name: service.name,
    description: service.overview,
    url: `${baseUrl}/services/${service.slug}`,
    image: service.image,
    provider: {
      "@type": "Organization",
      name: "Eyelevel Growth Studio",
      url: baseUrl,
    },
    areaServed: { "@type": "Place", name: "Global" },
    serviceType: service.benefits,
  };
};
