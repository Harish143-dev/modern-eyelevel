export const ORG_ID = "https://theeyelevelstudio.com/#organization";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": ORG_ID,
  name: "Eyelevel Growth Studio",
  url: "https://theeyelevelstudio.com",
  logo: "https://theeyelevelstudio.com/logo.png",
  email: "hello@eyelevelstudio.in",
  telephone: "+919789099499",
  address: {
    "@type": "PostalAddress",
    streetAddress: "43, 2nd Cross Street, 2nd Main Road Navarathna Garden",
    addressLocality: "Ekkatuthangal",
    addressRegion: "Tamil Nadu",
    postalCode: "600032",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0224363,
    longitude: 80.2010678,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/theeyelevelstudio",
    "https://www.instagram.com/theeyelevelstudio",
    "https://www.youtube.com/@theeyelevelstudio",
    "https://x.com/Eye_Levelstudio",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://theeyelevelstudio.com/#website",
  url: "https://theeyelevelstudio.com/",
  name: "Eyelevel Growth Studio",
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://theeyelevelstudio.com/#homepage",
  url: "https://theeyelevelstudio.com/",
  name: "Marketing & Growth Agency for Global Brands",
};

export const homeServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Services",
  provider: { "@id": ORG_ID },
  areaServed: "Global",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type": "Service", name: "Education Marketing" },
      { "@type": "Service", name: "Sports Marketing" },
      { "@type": "Service", name: "Real Estate Marketing" },
      { "@type": "Service", name: "B2B Marketing" },
      { "@type": "Service", name: "FinTech Marketing" },
      { "@type": "Service", name: "Pickleball Marketing" },
    ],
  },
};

export const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Eyelevel Growth Studio — Marketing Services",
  description: "Nine digital marketing services from one AI-powered studio in Chennai.",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Performance Marketing", url: "https://theeyelevelstudio.com/services/performance-marketing" },
    { "@type": "ListItem", position: 2, name: "AI-Era SEO", url: "https://theeyelevelstudio.com/services/ai-era-seo" },
    { "@type": "ListItem", position: 3, name: "Social Media Management", url: "https://theeyelevelstudio.com/services/social-media-management" },
    { "@type": "ListItem", position: 4, name: "Content and Creative", url: "https://theeyelevelstudio.com/services/content-and-creative" },
    { "@type": "ListItem", position: 5, name: "LinkedIn B2B Marketing", url: "https://theeyelevelstudio.com/services/linkedin-b2b-marketing" },
    { "@type": "ListItem", position: 6, name: "CRO and Funnel Design", url: "https://theeyelevelstudio.com/services/cro-and-funnel-design" },
    { "@type": "ListItem", position: 7, name: "Revenue Attribution Dashboard", url: "https://theeyelevelstudio.com/services/revenue-attribution-dashboard" },
    { "@type": "ListItem", position: 8, name: "Brand and Identity", url: "https://theeyelevelstudio.com/services/brand-and-identity" },
    { "@type": "ListItem", position: 9, name: "Website Design and Development", url: "https://theeyelevelstudio.com/services/website-design-and-development" },
  ],
};

export const industriesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Industries We Serve",
  url: "https://theeyelevelstudio.com/industries",
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Eyelevel Growth Studio",
  description: "Book a 30-minute diagnostic with Eyelevel Growth Studio.",
  url: "https://theeyelevelstudio.com/contact",
};

export const contactLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Eyelevel Growth Studio",
  url: "https://theeyelevelstudio.com",
  telephone: "+919789099499",
  email: "hello@eyelevelstudio.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: "Chennai",
  serviceType: "Digital Marketing Agency",
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://theeyelevelstudio.com/about",
  name: "About Eyelevel Growth Studio | Built From the Client Side",
  mainEntity: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
    description: "Full-service AI-powered growth studio in Chennai. The extended marketing team built by a marketing head who spent 15 years on the client side.",
    founder: [
      { "@type": "Person", name: "Mohammad Jameel", jobTitle: "Founder" },
      {
        "@type": "Person",
        name: "Akmal Rahman",
        jobTitle: "Co-Founder",
        url: "https://akmalrahman.com",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    email: "hello@eyelevelstudio.in",
    telephone: "+91-97890-99499",
  },
};

export const bookingPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing Consultation Booking",
  provider: {
    "@id": ORG_ID,
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://theeyelevelstudio.com/booking",
    },
    result: {
      "@type": "Reservation",
      name: "Consultation Booking",
    },
  },
};

export const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Eyelevel Blog",
  url: "https://theeyelevelstudio.com/blog",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly is a growth studio? Is it just a trendy term for an agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. An agency charges you to push buttons. A Growth Studio builds the machine. We don't just execute tasks to fill a timesheet; we fuse strategy, creativity and code into a single system designed to generate revenue, not just noise.",
      },
    },
    {
      "@type": "Question",
      name: "Why shouldn't I just hire a traditional marketing firm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because you don't need more chaos; you need a direction. Traditional firms are great at spending budget on spray and pray tactics. We use the Rod of Growth to part the seas of complexity and build a single, clear path to Growth.",
      },
    },
    {
      "@type": "Question",
      name: "What results can I actually expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you want likes and brand love, hire a poet. If you want bankable growth, hire us. Our focus extends beyond vanity metrics like shares and follows to include what matters most: Leads, Sales, Profits.",
      },
    },
    {
      "@type": "Question",
      name: "Do you know my industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in Edu-Marketing, Sports, Real Estate, and B2B. But growth is a discipline, not a niche. We use a toolkit of Strategy, AI, and Automation that works across industries, selling anything from a pin to a plane.",
      },
    },
    {
      "@type": "Question",
      name: "How much does this cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on how fast you want to grow. We design unique solutions for unique demands and do not use cookie-cutter pricing. We start with a Growth Audit - if we can't make you money, we don't deserve yours.",
      },
    },
  ],
};

export type FaqEntry = {
  question: string;
  answer: string;
};

export const faqPageSchema = (
  faqs: FaqEntry[],
  options?: { url?: string; id?: string },
) => {
  const url = options?.url;
  const id = options?.id ?? (url ? `${url}#faq` : undefined);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(id ? { "@id": id } : null),
    ...(url ? { url } : null),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

// Local Business Schema - for local SEO (Chennai-based)
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ORG_ID,
  name: "Eyelevel Growth Studio",
  address: {
    "@type": "PostalAddress",
    streetAddress: "43, 2nd Cross Street, 2nd Main Road Navarathna Garden",
    addressLocality: "Ekkatuthangal",
    addressRegion: "Tamil Nadu",
    postalCode: "600032",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0224363,
    longitude: 80.2010678,
  },
  telephone: "+919789099499",
  email: "hello@eyelevelstudio.in",
  url: "https://theeyelevelstudio.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:00",
    },
  ],
};

// Breadcrumb Schema - dynamic builder
export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
};

// Marketing Vertical Schema - for industry-specific pages
export const marketingVerticalSchema = (vertical: {
  name: string;
  description: string;
  url: string;
  image?: string;
  capabilities: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: vertical.name,
    description: vertical.description,
    url: vertical.url,
    image: vertical.image,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: "Global" },
    serviceType: vertical.capabilities,
  };
};

// Service Schema - for individual service pages
export const serviceDetailSchema = (service: {
  name: string;
  description: string;
  url: string;
  image?: string;
  benefits: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: "Global" },
    agg_rating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
  };
};

export const performanceMarketingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Marketing",
  description: "Meta and Google Ads built for revenue, not reach. Full-funnel campaigns with complete attribution from ad to close. No black-box reporting.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/services/performance-marketing",
};

export const aiEraSeoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI-Era SEO",
  description: "Traditional SEO plus AEO (AI Overviews, featured snippets) and GEO (ChatGPT, Gemini, Perplexity). We optimise for where buyers find answers now.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/services/ai-era-seo",
};

export const socialMediaManagementSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Management",
  description: "Content that builds the audience your sales team actually needs. Strategy, calendars, creative, and posting — fully managed. Communities that convert.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/services/social-media-management",
};

export const contentAndCreativeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Content and Creative",
  description: "AI handles production speed. Humans handle strategy and voice. Video, design, copy, and brand assets built with your brief, delivered with your tone.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/services/content-and-creative",
};

export const linkedInB2BMarketingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LinkedIn B2B Marketing",
  description: "Profile optimisation, content strategy, and targeted outreach that builds real pipeline. For founders and companies that sell to other businesses.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/services/linkedin-b2b-marketing",
};

export const croAndFunnelDesignSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRO and Funnel Design",
  description: "We fix what happens after the click. Landing pages, conversion flows, and lead qualification systems built to turn visitors into conversations.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/services/cro-and-funnel-design",
};

export const revenueAttributionDashboardSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Revenue Attribution Dashboard",
  description: "Every campaign tied to a business outcome you can show your board. Custom dashboard bundled into growth retainers. GA4, Meta Ads, Google Ads, and CRM unified.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/services/revenue-attribution-dashboard",
};

export const brandAndIdentitySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Brand and Identity",
  description: "Visual identity, positioning, and brand architecture for companies that are growing and need their brand to do the work. Logo, guidelines, tone of voice.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/services/brand-and-identity",
};

export const websiteDesignAndDevelopmentSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Design and Development",
  description: "Fast, conversion-optimised websites built as sales tools, not brochures. Design, development, SEO, and copywriting from one studio. Chennai and India.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/services/website-design-and-development",
};

export const realEstateIndustrySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Real Estate Marketing",
  description: "Performance marketing, SEO, and content for real estate developers. Qualified site visits and bookings — not cheap form fills. Chennai's real estate marketing specialists.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/industries/real-estate",
};

export const itSaaSIndustrySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IT and SaaS Marketing",
  description: "Demand gen, LinkedIn brand, and content that produces pipeline for B2B software companies. Performance marketing and SEO for IT and SaaS across India.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/industries/it-saas",
};

export const healthcareIndustrySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Healthcare Marketing",
  description: "Patient acquisition built on trust. SEO, social media, and performance marketing for specialty clinics and hospitals. Not product marketing — trust architecture.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/industries/healthcare",
};

export const automotiveIndustrySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automotive Marketing",
  description: "Performance marketing for dealerships and component makers. Showroom footfall, test-drive bookings, and OEM mandate compliance — one studio, full attribution.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/industries/automotive",
};

export const manufacturingB2BIndustrySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Manufacturing and B2B Marketing",
  description: "LinkedIn, SEO, and content for Chennai and Coimbatore manufacturers. Your buyers moved online — we help them find you and choose you before the first call.",
  provider: {
    "@type": "Organization",
    name: "Eyelevel Growth Studio",
    url: "https://theeyelevelstudio.com",
  },
  areaServed: "India",
  url: "https://theeyelevelstudio.com/industries/manufacturing-b2b",
};
