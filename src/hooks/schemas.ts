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

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Marketing Services",
  url: "https://theeyelevelstudio.com/services",
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
  url: "https://theeyelevelstudio.com/contact-us",
  name: "Contact Eyelevel Growth Studio",
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://theeyelevelstudio.com/about-us",
  name: "About Eyelevel Growth Studio",
  about: {
    "@id": ORG_ID,
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
