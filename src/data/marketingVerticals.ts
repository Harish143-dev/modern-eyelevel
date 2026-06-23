export interface MarketingVertical {
  id: string;
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  overview: string;
  keyStats: Array<{ label: string; value: string }>;
  capabilities: string[];
  useCases: string[];
  successMetrics: string[];
  testimonials?: Array<{
    text: string;
    author: string;
    role: string;
  }>;
  keywords: string[];
  image?: string;
  icon?: string;
  color?: string;
}

export const marketingVerticals: MarketingVertical[] = [
  {
    id: "edu-marketing",
    slug: "edu-marketing",
    name: "Education Marketing",
    seoTitle: "Education Marketing Agency | Student Enrollment Solutions | Eyelevel",
    seoDescription:
      "Specialized education marketing agency helping schools, colleges & institutions boost student enrollment through targeted digital strategies, SEO, and lead generation.",
    shortDescription:
      "Boost student enrollment with data-driven education marketing strategies tailored for schools and institutions.",
    overview:
      "Education institutions face unique challenges in reaching prospective students in an increasingly digital world. Our education marketing expertise helps schools, colleges, and universities attract qualified students, improve enrollment rates, and build strong institutional brands. We combine enrollment marketing with thought leadership positioning to establish your institution as an authority in your field.",
    keyStats: [
      { label: "Student Leads Generated", value: "50,000+" },
      { label: "Institutions Served", value: "150+" },
      { label: "Average Enrollment Increase", value: "35%" },
      { label: "Years of Expertise", value: "15+" },
    ],
    capabilities: [
      "Enrollment Funnel Optimization",
      "Student Lead Generation",
      "Campus Event Marketing",
      "Alumni Engagement",
      "Institutional SEO",
      "Student Recruitment Campaigns",
      "Admissions Page Optimization",
      "Virtual Tour Marketing",
    ],
    useCases: [
      "Schools looking to increase student applications",
      "Colleges targeting specific student demographics",
      "Universities launching new programs",
      "Online learning platforms building student base",
      "EdTech companies acquiring users",
    ],
    successMetrics: [
      "Student application volume increase",
      "Cost per enrolled student reduction",
      "Enrollment rate improvement",
      "Student quality metrics (academic profile)",
      "Enrollment funnel conversion rates",
      "Student lifetime value",
    ],
    keywords: [
      "education marketing",
      "student enrollment",
      "college marketing",
      "school marketing",
      "education lead generation",
      "admissions marketing",
    ],
  },
  {
    id: "sports-marketing",
    slug: "sports-marketing",
    name: "Sports Marketing",
    seoTitle: "Sports League Marketing Agency | Fan Engagement & Sponsorship | Eyelevel",
    seoDescription:
      "Sports marketing agency specializing in league promotion, fan engagement, sponsorship activation, and sports event marketing for leagues, teams, and sporting brands.",
    shortDescription:
      "Drive fan engagement and sponsorship revenue for sports leagues through strategic marketing and event promotion.",
    overview:
      "The sports industry is evolving rapidly with changing fan behaviors and digital consumption patterns. Our sports marketing expertise helps leagues, teams, and sporting brands build engaged fanbases, sell sponsorships, and drive event attendance. We specialize in sports event production, influencer partnerships, and digital fan engagement strategies that convert followers into loyal customers.",
    keyStats: [
      { label: "Sports Events Produced", value: "200+" },
      { label: "Sponsorship Deals Facilitated", value: "$50M+" },
      { label: "Fan Engagement Reach", value: "100M+" },
      { label: "Leagues Partnered", value: "80+" },
    ],
    capabilities: [
      "League Promotion & Branding",
      "Sponsorship Activation",
      "Event Marketing & Production",
      "Influencer Partnerships",
      "Fan Engagement Campaigns",
      "Social Media for Sports",
      "Sports Content Creation",
      "Athlete Endorsement Management",
    ],
    useCases: [
      "Sports leagues launching new seasons",
      "Teams building local fan base",
      "Sporting brands increasing market share",
      "Sports events seeking event promotion",
      "Sponsors maximizing activation ROI",
      "Athletes building personal brands",
    ],
    successMetrics: [
      "Event attendance increase",
      "Sponsorship revenue growth",
      "Social media follower engagement",
      "Ticket sales volume",
      "Brand awareness lift",
      "Fan retention rates",
    ],
    keywords: [
      "sports marketing",
      "sports league marketing",
      "sports event marketing",
      "fan engagement",
      "sponsorship activation",
      "sports branding",
    ],
  },
  {
    id: "real-estate-marketing",
    slug: "real-estate-marketing",
    name: "Real Estate Marketing",
    seoTitle: "Real Estate Marketing Agency | Property Sales & Lead Generation | Eyelevel",
    seoDescription:
      "Real estate marketing expertise for developers, brokers, and agents. Drive property sales through targeted digital strategies, virtual tours, and qualified buyer generation.",
    shortDescription:
      "Accelerate property sales with digital marketing strategies designed for real estate developers, brokers, and agents.",
    overview:
      "Real estate marketing requires a specialized approach combining visual storytelling with targeted lead generation. Our real estate marketing services help developers, brokers, and agents sell properties faster and reach serious buyers. We leverage virtual tours, location-based marketing, and high-intent buyer targeting to maximize property sales and ROI.",
    keyStats: [
      { label: "Properties Sold", value: "5,000+" },
      { label: "Real Estate Brands Served", value: "300+" },
      { label: "Qualified Buyer Leads", value: "200,000+" },
      { label: "Average Sales Velocity Increase", value: "40%" },
    ],
    capabilities: [
      "Property Listing Optimization",
      "Virtual Tour Production",
      "Buyer Lead Generation",
      "Real Estate SEO",
      "Property Marketing Campaigns",
      "Database Remarketing",
      "Project Launch Marketing",
      "Neighborhood Branding",
    ],
    useCases: [
      "Developers launching residential projects",
      "Real estate brokers increasing sales",
      "Commercial property marketing",
      "Property management companies attracting tenants",
      "Luxury real estate marketing",
      "Rental property promotion",
    ],
    successMetrics: [
      "Properties sold",
      "Average sale price",
      "Time on market reduction",
      "Buyer lead volume",
      "Lead to sale conversion",
      "Cost per qualified lead",
    ],
    keywords: [
      "real estate marketing",
      "property marketing",
      "real estate leads",
      "real estate SEO",
      "property sales",
      "real estate advertising",
    ],
  },
  {
    id: "b2b-marketing",
    slug: "b2b-marketing",
    name: "B2B Marketing",
    seoTitle: "B2B Marketing Agency | Enterprise Sales Growth | Eyelevel",
    seoDescription:
      "B2B marketing agency specializing in enterprise sales growth, lead generation, account-based marketing, and marketing automation for SaaS and technology companies.",
    shortDescription:
      "Accelerate B2B enterprise sales with account-based marketing and sophisticated lead generation strategies.",
    overview:
      "B2B marketing is fundamentally about building trust and demonstrating value in complex, multi-stakeholder decision processes. Our B2B marketing expertise helps technology companies, SaaS platforms, and service providers build pipeline, shorten sales cycles, and increase deal values. We specialize in account-based marketing, marketing automation, and sales enablement strategies that align marketing with sales objectives.",
    keyStats: [
      { label: "B2B Enterprises Partnered", value: "400+" },
      { label: "Average Pipeline Increase", value: "150%" },
      { label: "Sales Cycle Reduction", value: "30%" },
      { label: "Deal Value Increase", value: "45%" },
    ],
    capabilities: [
      "Account-Based Marketing (ABM)",
      "Enterprise Lead Generation",
      "Sales Enablement Content",
      "Marketing Automation",
      "Thought Leadership Positioning",
      "SaaS Marketing",
      "Enterprise SEO",
      "Sales Development Program (SDR) Support",
    ],
    useCases: [
      "SaaS companies seeking enterprise clients",
      "Technology vendors expanding market share",
      "Enterprise software companies building pipeline",
      "Service providers targeting large accounts",
      "Startups accelerating Sales growth",
      "Established B2B companies launching new products",
    ],
    successMetrics: [
      "Marketing-qualified leads (MQLs)",
      "Sales pipeline created",
      "Average deal value",
      "Sales cycle length",
      "Customer acquisition cost (CAC)",
      "Marketing attribution revenue",
    ],
    keywords: [
      "B2B marketing",
      "enterprise marketing",
      "SaaS marketing",
      "B2B lead generation",
      "account-based marketing",
      "technology marketing",
    ],
  },
];

// Helper functions

export const getVerticalBySlug = (slug: string): MarketingVertical | undefined => {
  return marketingVerticals.find((v) => v.slug === slug);
};

export const getVerticalById = (id: string): MarketingVertical | undefined => {
  return marketingVerticals.find((v) => v.id === id);
};

export const getAllVerticals = (): MarketingVertical[] => {
  return marketingVerticals;
};

// Schema builder function
export const getVerticalSchema = (vertical: MarketingVertical, baseUrl = "https://theeyelevelstudio.com") => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/${vertical.slug}#service`,
    name: vertical.name,
    description: vertical.overview,
    url: `${baseUrl}/${vertical.slug}`,
    image: vertical.image,
    provider: {
      "@type": "Organization",
      name: "Eyelevel Growth Studio",
      url: baseUrl,
    },
    areaServed: { "@type": "Place", name: "Global" },
    serviceType: vertical.capabilities,
  };
};
