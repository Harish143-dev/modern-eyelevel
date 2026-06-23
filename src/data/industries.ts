/**
 * Industries/Verticals Data Model
 * 5 primary industries Eyelevel specializes in
 */

export interface Industry {
  id: string;
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  icon: string;
  color: string;
  overview: string;
  keyStats: Array<{ label: string; value: string }>;
  capabilities: string[];
  challenges: string[];
  successMetrics: string[];
  keywords: string[];
  image?: string;
}

export const industries: Industry[] = [
  {
    id: "sports-marketing",
    slug: "sports-marketing-agency",
    name: "Sports Marketing",
    seoTitle:
      "Sports League Marketing Agency | Fan Engagement & Sponsorship | Eyelevel",
    seoDescription:
      "Sports marketing agency specializing in league promotion, fan engagement, sponsorship activation, and sports event marketing for leagues, teams, and sporting brands.",
    shortDescription:
      "Drive fan engagement and sponsorship revenue for sports leagues through strategic marketing and event promotion.",
    icon: "⚽",
    color: "from-green-500 to-green-600",
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
    challenges: [
      "Building and retaining fan loyalty in crowded markets",
      "Maximizing sponsorship ROI and activation",
      "Creating compelling fan experiences across channels",
      "Managing athlete and team reputations",
      "Driving ticket sales and event attendance",
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
    id: "healthcare-marketing",
    slug: "healthcare-marketing-agency",
    name: "Healthcare Marketing",
    seoTitle:
      "Healthcare Marketing Agency | Patient Acquisition & Reputation | Eyelevel",
    seoDescription:
      "Healthcare marketing for hospitals, clinics, practitioners, and medical brands. Patient acquisition, reputation management, and compliant digital marketing.",
    shortDescription:
      "Attract patients through ethical, compliant healthcare marketing and reputation building.",
    icon: "🏥",
    color: "from-red-500 to-red-600",
    overview:
      "Healthcare marketing has unique challenges: regulatory compliance, trust-building, and patient decision criteria. Our healthcare marketing expertise helps hospitals, clinics, practitioners, and medical brands attract patients, build authority, and manage online reputation. We understand healthcare regulations while building compelling patient journeys.",
    keyStats: [
      { label: "Patient Leads Generated", value: "100,000+" },
      { label: "Healthcare Providers Served", value: "200+" },
      { label: "Average Patient Acquisition Increase", value: "45%" },
      { label: "Years of Healthcare Expertise", value: "15+" },
    ],
    capabilities: [
      "Patient Lead Generation",
      "Medical SEO & Local SEO",
      "Reputation Management",
      "Patient Education Content",
      "Telemedicine Marketing",
      "Insurance Integration Marketing",
      "Healthcare Event Marketing",
      "Compliance-First Digital Strategy",
    ],
    challenges: [
      "Maintaining HIPAA compliance in marketing",
      "Building trust with new patients",
      "Managing online reviews and reputation",
      "Educating patients on complex health topics",
      "Competing with larger healthcare systems",
    ],
    successMetrics: [
      "New patient inquiries",
      "Patient acquisition cost",
      "Online review ratings",
      "Appointment booking rate",
      "Patient retention",
      "Medical service reputation score",
    ],
    keywords: [
      "healthcare marketing",
      "patient acquisition",
      "medical marketing",
      "healthcare SEO",
      "patient marketing",
      "clinic marketing",
    ],
  },
  {
    id: "education-marketing",
    slug: "education-marketing-agency",
    name: "Education Marketing",
    seoTitle:
      "Education Marketing Agency | Student Enrollment Solutions | Eyelevel",
    seoDescription:
      "Specialized education marketing agency helping schools, colleges & institutions boost student enrollment through targeted digital strategies, SEO, and lead generation.",
    shortDescription:
      "Boost student enrollment with data-driven education marketing strategies tailored for schools and institutions.",
    icon: "🎓",
    color: "from-blue-500 to-blue-600",
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
    challenges: [
      "Standing out in competitive education market",
      "Reaching target student demographics",
      "Building trust with parents and students",
      "Improving enrollment conversion rates",
      "Managing institution reputation online",
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
    id: "real-estate-marketing",
    slug: "real-estate-marketing-agency",
    name: "Real Estate Marketing",
    seoTitle:
      "Real Estate Marketing Agency | Property Sales & Lead Generation | Eyelevel",
    seoDescription:
      "Real estate marketing expertise for developers, brokers, and agents. Drive property sales through targeted digital strategies, virtual tours, and qualified buyer generation.",
    shortDescription:
      "Accelerate property sales with digital marketing strategies designed for real estate developers, brokers, and agents.",
    icon: "🏠",
    color: "from-yellow-500 to-yellow-600",
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
    challenges: [
      "Standing out in crowded real estate market",
      "Reaching qualified buyers",
      "Building buyer confidence and trust",
      "Faster property sales cycles",
      "Managing lead quality",
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
    slug: "b2b-marketing-agency",
    name: "B2B Marketing",
    seoTitle: "B2B Marketing Agency | Enterprise Sales Growth | Eyelevel",
    seoDescription:
      "B2B marketing agency specializing in enterprise sales growth, lead generation, account-based marketing, and marketing automation for SaaS and technology companies.",
    shortDescription:
      "Accelerate B2B enterprise sales with account-based marketing and sophisticated lead generation strategies.",
    icon: "💼",
    color: "from-indigo-500 to-indigo-600",
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
    challenges: [
      "Building long, complex sales pipelines",
      "Reaching multiple decision makers",
      "Creating compelling ROI stories",
      "Sales and marketing alignment",
      "Demonstrating thought leadership",
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

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find((i) => i.slug === slug);
};

export const getIndustryById = (id: string): Industry | undefined => {
  return industries.find((i) => i.id === id);
};

export const getAllIndustries = (): Industry[] => {
  return industries;
};

// Schema builder function
export const getIndustrySchema = (
  industry: Industry,
  baseUrl = "https://theeyelevelstudio.com",
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/industries/${industry.slug}#service`,
    name: industry.name,
    description: industry.overview,
    url: `${baseUrl}/industries/${industry.slug}`,
    image: industry.image,
    provider: {
      "@type": "Organization",
      name: "Eyelevel Growth Studio",
      url: baseUrl,
    },
    areaServed: { "@type": "Place", name: "Global" },
    serviceType: industry.capabilities,
  };
};
