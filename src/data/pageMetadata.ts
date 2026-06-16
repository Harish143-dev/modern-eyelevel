/**
 * Centralized SEO Metadata Registry
 * Single source of truth for all page metadata, titles, descriptions, and keywords
 * Used by Navigation, Breadcrumbs, SEO components, and individual pages
 */

export interface PageMetadata {
  route: string;
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  robots?: {
    noindex?: boolean;
    nofollow?: boolean;
  };
  ogType?: string;
  schemas?: string[]; // List of schema keys to apply
}

export const pageMetadataRegistry: Record<string, PageMetadata> = {
  // Core Pages (Published)
  "/": {
    route: "/",
    title: "Digital Marketing Agency Chennai | EyeLevel Growth Studio",
    description:
      "EyeLevel Growth Studio is a full-service AI-powered marketing agency in Chennai. Real Estate, Healthcare, IT/SaaS, Automotive, Manufacturing. Book a free 30-min diagnostic.",
    keywords: [
      "digital marketing agency Chennai",
      "AI-powered marketing agency",
      "real estate marketing agency Chennai",
      "healthcare marketing agency Chennai",
      "fractional CMO India",
      "performance marketing Chennai",
    ],
    canonical: "https://theeyelevelstudio.com/",
    ogType: "website",
    schemas: ["organization", "website", "homePage", "localBusiness", "faq"],
  },
  "/about-us": {
    route: "/about-us",
    title: "Best Digital Marketing Agency Chennai | EyeLevel",
    description:
      "EyeLevel is Chennai's specialized agency for Sports, Healthcare & Education, 15+ years experience. Book a free consultation today.",
    keywords: [
      "digital marketing agency",
      "marketing agency Chennai",
      "growth agency",
      "best marketing agency",
    ],
    canonical: "https://theeyelevelstudio.com/about-us",
    ogType: "website",
    schemas: ["organization", "localBusiness"],
  },
  "/services": {
    route: "/services",
    title: "Marketing & Event Production Services Chennai | EyeLevel",
    description:
      "Full-service marketing engine: event production, Google Ads, video production, SEO & social media for Sports, Healthcare & Education. Free proposal.",
    keywords: [
      "marketing services",
      "digital marketing",
      "event production",
      "video production",
      "Google Ads",
      "SEO services",
    ],
    canonical: "https://theeyelevelstudio.com/services",
    ogType: "website",
    schemas: ["services", "breadcrumb"],
  },
  "/industries": {
    route: "/industries",
    title: "Sports, Healthcare & Education Agency | EyeLevel",
    description:
      "EyeLevel specializes in marketing for sports leagues, healthcare providers & educational institutions across India. Vertical expertise, highly customised solutions.",
    keywords: [
      "sports marketing",
      "healthcare marketing",
      "education marketing",
      "vertical expertise",
      "industry solutions",
    ],
    canonical: "https://theeyelevelstudio.com/industries",
    ogType: "website",
    schemas: ["industries", "breadcrumb"],
  },
  "/contact-us": {
    route: "/contact-us",
    title: "Contact EyeLevel — Free Marketing Consultation Chennai",
    description:
      "Book a free 30-min consultation with EyeLevel — Chennai's specialized agency for Sports, Healthcare & Education. Call +91 97890 99499 or email us.",
    keywords: [
      "contact us",
      "free consultation",
      "marketing consultation",
      "contact marketing agency",
    ],
    canonical: "https://theeyelevelstudio.com/contact-us",
    ogType: "website",
    schemas: ["contactPage", "organization"],
  },
  "/careers": {
    route: "/careers",
    title: "Digital Marketing Jobs in Chennai | EyeLevel Careers",
    description:
      "EyeLevel is hiring digital marketing specialists, videographers & designers in Chennai. Work with Sports, Healthcare & Education sectors. Apply now.",
    keywords: [
      "digital marketing jobs",
      "marketing jobs Chennai",
      "designer jobs",
      "videographer jobs",
      "careers",
    ],
    canonical: "https://theeyelevelstudio.com/careers",
    ogType: "website",
    schemas: ["organization"],
  },
  "/blog": {
    route: "/blog",
    title: "Sports, Healthcare & Education Marketing Blog | EyeLevel",
    description:
      "EyeLevel's marketing blog: sports sponsorship, healthcare patient discovery, education admission marketing & growth strategy insights.",
    keywords: [
      "marketing blog",
      "growth strategy",
      "sports marketing",
      "healthcare marketing",
      "education marketing",
    ],
    canonical: "https://theeyelevelstudio.com/blog",
    ogType: "website",
    schemas: ["breadcrumb"],
  },

  // Marketing Verticals (New - Ready for Page Implementation)
  "/edu-marketing": {
    route: "/edu-marketing",
    title: "Education Marketing Agency | Student Enrollment Solutions | EyeLevel",
    description:
      "Specialized education marketing agency helping schools, colleges & institutions boost student enrollment through targeted digital strategies, SEO, and lead generation.",
    keywords: [
      "education marketing",
      "student enrollment",
      "college marketing",
      "school marketing",
      "education lead generation",
    ],
    canonical: "https://theeyelevelstudio.com/edu-marketing",
    ogType: "website",
    schemas: ["marketingVertical", "breadcrumb", "localBusiness"],
  },
  "/sports-marketing": {
    route: "/sports-marketing",
    title: "Sports League Marketing Agency | Fan Engagement & Sponsorship | EyeLevel",
    description:
      "Sports marketing agency specializing in league promotion, fan engagement, sponsorship activation, and sports event marketing for leagues, teams, and sporting brands.",
    keywords: [
      "sports marketing",
      "sports league marketing",
      "sports event marketing",
      "fan engagement",
      "sponsorship activation",
    ],
    canonical: "https://theeyelevelstudio.com/sports-marketing",
    ogType: "website",
    schemas: ["marketingVertical", "breadcrumb", "localBusiness"],
  },
  "/real-estate-marketing": {
    route: "/real-estate-marketing",
    title: "Real Estate Marketing Agency | Property Sales & Lead Generation | EyeLevel",
    description:
      "Real estate marketing expertise for developers, brokers, and agents. Drive property sales through targeted digital strategies, virtual tours, and qualified buyer generation.",
    keywords: [
      "real estate marketing",
      "property marketing",
      "real estate leads",
      "real estate SEO",
      "property sales",
    ],
    canonical: "https://theeyelevelstudio.com/real-estate-marketing",
    ogType: "website",
    schemas: ["marketingVertical", "breadcrumb", "localBusiness"],
  },
  "/b2b-marketing": {
    route: "/b2b-marketing",
    title: "B2B Marketing Agency | Enterprise Sales Growth | EyeLevel",
    description:
      "B2B marketing agency specializing in enterprise sales growth, lead generation, account-based marketing, and marketing automation for SaaS and technology companies.",
    keywords: [
      "B2B marketing",
      "enterprise marketing",
      "SaaS marketing",
      "B2B lead generation",
      "account-based marketing",
    ],
    canonical: "https://theeyelevelstudio.com/b2b-marketing",
    ogType: "website",
    schemas: ["marketingVertical", "breadcrumb", "localBusiness"],
  },
  "/services/whatsapp-marketing": {
    route: "/services/whatsapp-marketing",
    title: "WhatsApp Marketing Agency India — EyeLevel Growth Studio",
    description:
      "Full-service WhatsApp marketing: broadcasts, drip sequences, chatbots, and Business API setup. EyeLevel runs WhatsApp campaigns for D2C brands, hospitals, schools, and SaaS companies across India.",
    keywords: [
      "WhatsApp marketing agency India",
      "WhatsApp Business API India",
      "WhatsApp marketing for D2C brands India",
      "WhatsApp broadcast campaign India",
      "Gupshup WATI Twixor India",
    ],
    canonical: "https://theeyelevelstudio.com/services/whatsapp-marketing",
    ogType: "website",
    schemas: ["marketingVertical", "breadcrumb", "localBusiness"],
  },

  // Transactional Pages (Minimal SEO)
  "/booking": {
    route: "/booking",
    title: "Schedule a Marketing Consultation | EyeLevel",
    description:
      "Book your free 30-minute consultation with EyeLevel's marketing experts. Choose your preferred time slot.",
    keywords: ["consultation", "booking", "scheduling"],
    canonical: "https://theeyelevelstudio.com/booking",
    ogType: "website",
    schemas: ["contactPage"],
  },
  "/apply": {
    route: "/apply",
    title: "Apply Now | Join EyeLevel Team",
    description:
      "Apply for open positions at EyeLevel. Showcase your skills and join our creative, strategic team.",
    keywords: ["apply", "job application", "careers"],
    canonical: "https://theeyelevelstudio.com/apply",
    ogType: "website",
  },

  // Legal & Informational Pages
  "/privacy-policy": {
    route: "/privacy-policy",
    title: "Privacy Policy | EyeLevel",
    description:
      "Privacy policy for EyeLevel Studio. Learn how we collect, use, and protect your personal information.",
    canonical: "https://theeyelevelstudio.com/privacy-policy",
    ogType: "website",
    robots: { noindex: false }, // Include in index for legal compliance
  },
  "/terms-and-condition": {
    route: "/terms-and-condition",
    title: "Terms & Conditions | EyeLevel",
    description:
      "Terms and conditions for using EyeLevel Studio's website and services.",
    canonical: "https://theeyelevelstudio.com/terms-and-condition",
    ogType: "website",
    robots: { noindex: false },
  },
  "/thank-you": {
    route: "/thank-you",
    title: "Thank You | EyeLevel",
    description: "Thank you for your inquiry. We'll be in touch shortly.",
    canonical: "https://theeyelevelstudio.com/thank-you",
    ogType: "website",
    robots: { noindex: true, nofollow: true }, // Don't index thank-you page
  },

  // 404 / Not Found
  "/404": {
    route: "/404",
    title: "Page Not Found | EyeLevel",
    description: "The page you're looking for doesn't exist.",
    canonical: "https://theeyelevelstudio.com/404",
    ogType: "website",
    robots: { noindex: true, nofollow: true },
  },

  // Dynamic Routes (Examples - actual URLs vary)
  "blog-category": {
    route: "/blog/category/:slug",
    title: "{categoryName} Articles | EyeLevel Blog",
    description:
      "Read our latest {categoryName} insights from EyeLevel Studio's marketing experts.",
    keywords: ["{categoryName}", "marketing blog", "insights"],
    canonical: "https://theeyelevelstudio.com/blog/category/{slug}",
    ogType: "website",
    schemas: ["breadcrumb"],
  },
  "blog-post": {
    route: "/blog/{slug}",
    title: "{postTitle} | EyeLevel Blog",
    description: "{postExcerpt}",
    keywords: ["{keyword1}", "{keyword2}", "{keyword3}"],
    canonical: "https://theeyelevelstudio.com/blog/{slug}",
    ogType: "article",
    schemas: ["article", "breadcrumb"],
  },
  "job-detail": {
    route: "/careers/{slug}",
    title: "{jobTitle} Job in Chennai | EyeLevel",
    description: "{jobDescription}",
    keywords: ["{jobTitle}", "job", "careers", "Chennai"],
    canonical: "https://theeyelevelstudio.com/careers/{slug}",
    ogType: "website",
    schemas: ["breadcrumb"],
  },

  // Future - Service Detail Page
  "service-detail": {
    route: "/services/{slug}",
    title: "{serviceTitle} Marketing Services | EyeLevel",
    description: "{serviceDescription}",
    keywords: ["{service}", "marketing", "services"],
    canonical: "https://theeyelevelstudio.com/services/{slug}",
    ogType: "website",
    schemas: ["serviceDetail", "breadcrumb", "localBusiness"],
  },

  // Future - Industry Detail Page
  "industry-detail": {
    route: "/industries/{slug}",
    title: "{industryName} Marketing Solutions | EyeLevel",
    description: "{industryDescription}",
    keywords: ["{industry}", "marketing", "solutions"],
    canonical: "https://theeyelevelstudio.com/industries/{slug}",
    ogType: "website",
    schemas: ["marketingVertical", "breadcrumb", "localBusiness"],
  },
};

// Helper functions

/**
 * Get metadata for a specific route
 * @param route Route path
 * @returns Page metadata or undefined
 */
export const getPageMetadata = (route: string): PageMetadata | undefined => {
  return pageMetadataRegistry[route];
};

/**
 * Get all page metadata entries
 * @returns Array of all page metadata
 */
export const getAllPages = (): PageMetadata[] => {
  return Object.values(pageMetadataRegistry);
};

/**
 * Get indexable pages (excluding noindex)
 * @returns Array of indexable page metadata
 */
export const getIndexablePages = (): PageMetadata[] => {
  return getAllPages().filter((page) => !(page.robots?.noindex === true));
};

/**
 * Get pages by schema type
 * @param schemaType Type of schema (e.g., 'breadcrumb', 'localBusiness')
 * @returns Array of pages using this schema
 */
export const getPagesBySchema = (schemaType: string): PageMetadata[] => {
  return getAllPages().filter((page) => page.schemas?.includes(schemaType));
};
