/**
 * Portfolio content — the single source of truth for /portfolio and its six
 * category pages.
 *
 * Media is never listed by hand. Every folder under
 * `src/assets/content/works/portfolio/` is globbed, and the path a file sits at
 * is what tags it: the photography subfolder picks the tab, the video subfolder
 * names the client, the AI-video filename becomes the tile label. Drop a file in
 * and it publishes. See that folder's README.md for the full contract.
 *
 * The folders ship empty, so everything here has to survive a glob that returns
 * nothing — missing images resolve to `undefined` and the grids fall back to the
 * design's hatch placeholder rather than breaking the build.
 */

export type PanelId =
  | "websites"
  | "photography"
  | "brand-and-campaign"
  | "social-media"
  | "videos"
  | "ai-videos";

/** Which of the six SVGs in `components/portfolio/icons.tsx` a category uses. */
export type IconKey = "web" | "photo" | "brand" | "social" | "video" | "ai";

export interface CategoryButton {
  id: PanelId;
  label: string;
  icon: IconKey;
}

export interface HomeCard {
  id: PanelId;
  icon: IconKey;
  title: string;
  description: string;
  imageUrl?: string;
  mediaLabel?: string;
}

export interface SiteCard {
  name: string;
  description: string;
  link: string;
  /** Basename of the file in `portfolio/websites/`, without extension. */
  image?: string;
  /** The client's own brand colour, shown behind their logo. */
  imageBg?: string;
  /** True for a full screenshot that should fill the tile edge to edge. */
  fullBleed?: boolean;
  flag?: string;
  badges?: string[];
  /** Shown on the hatch placeholder while the image is missing. */
  shotLabel: string;
  imageUrl?: string;
  /**
   * True when the live site can be shown inside an iframe. Sites that send
   * X-Frame-Options / CSP frame-ancestors (Shopify stores, same-origin locks)
   * can't be embedded — leave this false and they show `previewUrl` instead.
   */
  embeddable?: boolean;
  /** Domain shown in the preview title bar, e.g. "vososports.com". */
  domain?: string;
  /**
   * Basename of a full-page screenshot in `portfolio/websites/previews/`.
   * Used as the fallback for non-embeddable sites and as the placeholder shown
   * while an embeddable site's iframe is still loading.
   */
  preview?: string;
  /** Resolved at build time from `preview`. */
  previewUrl?: string;
}

export interface SocialCard {
  /** Basename of the avatar in `portfolio/social/`, without extension. */
  avatar?: string;
  name?: string;
  category?: string;
  iconText: string;
  platform: string;
  handle: string;
  description: string;
  link?: string;
  linkText: string;
  logoUrl?: string;
  embedUrl?: string;
  followers?: string;
  following?: string;
  postsCount?: string;
  bio?: string;
  bioLink?: string;
  storyHighlights?: { name: string; icon?: string }[];
  highlights?: string[];
  pitch?: string;
}

export interface VideoTile {
  label: string;
  format: string;
  url: string;
  /** A sibling .jpg, when one exists. Otherwise the player captures a frame. */
  poster?: string;
  posterTime?: number;
}

export interface Tool {
  name: string;
  icon?: string;
}

export type PhotoTabLabel = "Fashion" | "Product" | "Architectural";

export interface Photo {
  url: string;
  tab?: PhotoTabLabel;
}

export interface PhotoTab {
  label: PhotoTabLabel;
  photos: Photo[];
}

export interface Service {
  id: PanelId;
  icon: IconKey;
  title: string;
  description: string;
  whatWeDo: string[];
  toolsLabel: string;
  tools: Tool[];
  workTitle: string;
  workNote: string;
  /** Shown in place of the grid while the category has no media yet. */
  emptyNote: string;
  workType: "sites" | "photos" | "social" | "videos";
  siteCards?: SiteCard[];
  photos?: Photo[];
  photoTabs?: PhotoTab[];
  socialCards?: SocialCard[];
  videos?: VideoTile[];
  gridCols?: number;
}

/* ===== Asset discovery =====
 *
 * Vite needs a literal pattern per glob, so each folder is spelled out. All of
 * them are allowed to come back empty.
 */

// Vite parses these statically — the pattern and the options object both have
// to be literals, so there is no factoring the repetition out.
const homeModules = import.meta.glob(
  "../assets/content/works/portfolio/home/*.{webp,jpg,jpeg,png,svg,avif}",
  { eager: true, query: "?url", import: "default" },
);
const websiteModules = import.meta.glob(
  "../assets/content/works/portfolio/websites/*.{webp,jpg,jpeg,png,svg,avif}",
  { eager: true, query: "?url", import: "default" },
);
// Full-page screenshots for the live-preview modal, kept in their own subfolder
// so they don't get picked up as card logos above.
const websitePreviewModules = import.meta.glob(
  "../assets/content/works/portfolio/websites/previews/*.{webp,jpg,jpeg,png,avif}",
  { eager: true, query: "?url", import: "default" },
);
const socialModules = import.meta.glob(
  "../assets/content/works/portfolio/social/*.{webp,jpg,jpeg,png,svg,avif}",
  { eager: true, query: "?url", import: "default" },
);
const brandModules = import.meta.glob(
  "../assets/content/works/portfolio/brand/**/*.{webp,jpg,jpeg,png,svg,avif}",
  { eager: true, query: "?url", import: "default" },
);
const fashionModules = import.meta.glob(
  "../assets/content/works/portfolio/photography/fashion/**/*.{webp,jpg,jpeg,png,svg,avif}",
  { eager: true, query: "?url", import: "default" },
);
const productModules = import.meta.glob(
  "../assets/content/works/portfolio/photography/product/**/*.{webp,jpg,jpeg,png,svg,avif}",
  { eager: true, query: "?url", import: "default" },
);
const architecturalModules = import.meta.glob(
  "../assets/content/works/portfolio/photography/architectural/**/*.{webp,jpg,jpeg,png,svg,avif}",
  { eager: true, query: "?url", import: "default" },
);
const videoModules = import.meta.glob(
  "../assets/content/works/portfolio/video/**/*.{mp4,mov,webm}",
  { eager: true, query: "?url", import: "default" },
);
const videoPosterModules = import.meta.glob(
  "../assets/content/works/portfolio/video/**/*.{jpg,jpeg,webp}",
  { eager: true, query: "?url", import: "default" },
);
const aiVideoModules = import.meta.glob(
  "../assets/content/works/portfolio/ai-video/**/*.{mp4,mov,webm}",
  { eager: true, query: "?url", import: "default" },
);
const aiVideoPosterModules = import.meta.glob(
  "../assets/content/works/portfolio/ai-video/**/*.{jpg,jpeg,webp}",
  { eager: true, query: "?url", import: "default" },
);

type Modules = Record<string, unknown>;

const urlsOf = (modules: Modules) => Object.entries(modules) as [string, string][];

const stripExtension = (path: string) => path.replace(/\.[^./]+$/, "");

const basenameOf = (path: string) =>
  stripExtension(path.split("/").pop() ?? "").toLowerCase();

const HOME_ALIASES: Record<string, string> = {
  "website-design-&-development": "websites",
  "website-design-and-development": "websites",
  "website-design": "websites",
  websites: "websites",
  website: "websites",
  photography: "photography",
  "eyelevel-photography": "photography",
  photo: "photography",
  "brand-&-campaign": "brand-and-campaign",
  "brand-and-campaign": "brand-and-campaign",
  "brand-campaign": "brand-and-campaign",
  branding: "brand-and-campaign",
  "social-media": "social-media",
  "social-media-management": "social-media",
  "eyelevel-social-media-management": "social-media",
  videos: "videos",
  video: "videos",
  "eyelevel-videography": "videos",
  videography: "videos",
  "ai-video": "ai-videos",
  "ai-videos": "ai-videos",
  "ai-film": "ai-videos",
};

/** Basename → url, so a card can ask for "voso" and get undefined if it's absent. */
const indexByBasename = (modules: Modules) => {
  const index: Record<string, string> = {};
  for (const [path, url] of urlsOf(modules)) {
    const rawBase = basenameOf(path);
    index[rawBase] = url;
    const normalized = rawBase.replace(/[-_]logo$/i, "").replace(/[\s_]+/g, "-");
    index[normalized] = url;
    if (HOME_ALIASES[normalized]) {
      index[HOME_ALIASES[normalized]] = url;
    }
  }
  return index;
};

const homeImages = indexByBasename(homeModules);
const websiteImages = indexByBasename(websiteModules);
const websitePreviews = indexByBasename(websitePreviewModules);
const socialImages = indexByBasename(socialModules);

/** Full path minus extension → url, so a poster can be matched to its clip. */
const indexByPath = (modules: Modules) => {
  const index: Record<string, string> = {};
  for (const [path, url] of urlsOf(modules)) index[stripExtension(path)] = url;
  return index;
};

const videoPosters = indexByPath(videoPosterModules);
const aiVideoPosters = indexByPath(aiVideoPosterModules);

/** "madurai-all-stars" → "Madurai All Stars" */
const titleCase = (slug: string) =>
  slug
    .replace(/[_-]+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

/* ===== Photography ===== */

const photosFrom = (modules: Modules, tab: PhotoTabLabel): Photo[] =>
  urlsOf(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => ({ url, tab }));

// Tab order is fixed; a tab with no files is dropped rather than shown empty.
export const photoTabs: PhotoTab[] = (
  [
    { label: "Fashion" as const, photos: photosFrom(fashionModules, "Fashion") },
    { label: "Product" as const, photos: photosFrom(productModules, "Product") },
    {
      label: "Architectural" as const,
      photos: photosFrom(architecturalModules, "Architectural"),
    },
  ] satisfies PhotoTab[]
).filter((tab) => tab.photos.length > 0);

const photographyImages: Photo[] = photoTabs.flatMap((tab) => tab.photos);

/* ===== Brand & campaign ===== */

/**
 * The brand gallery leads with these clients, in this order, then everything
 * else in glob order. The folder is flat, so clients are matched on file name.
 */
const BRAND_LEAD_CLIENTS = [["voso"], ["heavens-elix", "heaven-elix"]];

const brandRank = (path: string) => {
  const name = path.toLowerCase();
  const rank = BRAND_LEAD_CLIENTS.findIndex((names) =>
    names.some((n) => name.includes(n)),
  );
  return rank === -1 ? BRAND_LEAD_CLIENTS.length : rank;
};

const brandImages: Photo[] = urlsOf(brandModules)
  .sort(([a], [b]) => brandRank(a) - brandRank(b) || a.localeCompare(b))
  .map(([, url]) => ({ url }));

/* ===== Video ===== */

/**
 * Client order on the Videos page. Keys are folder names under `video/`.
 * Anything unlisted sorts alphabetically after everything listed.
 */
const VIDEO_CLIENT_ORDER: Record<string, number> = {
  "madurai-all-stars": 1,
  "tamil-nadu-pickleball-association": 2,
  "heavens-elix": 3,
  brigade: 4,
  voso: 5,
  "right-hospitals": 6,
  liza: 7,
};

/** The folder directly under `video/` is the client. */
const clientFolderOf = (path: string) => {
  const [, tail] = path.split("/video/");
  const segments = (tail ?? "").split("/");
  return segments.length > 1 ? segments[0] : "";
};

const rankOfClient = (path: string) =>
  VIDEO_CLIENT_ORDER[clientFolderOf(path)] ?? 99;

const videoTiles: VideoTile[] = urlsOf(videoModules)
  .sort(
    ([a], [b]) => rankOfClient(a) - rankOfClient(b) || a.localeCompare(b),
  )
  .map(([path, url]) => {
    const folder = clientFolderOf(path);
    return {
      label: titleCase(folder || basenameOf(path)),
      format: "Video",
      url,
      poster: videoPosters[stripExtension(path)],
      posterTime: 0.5,
    };
  });

const aiVideoTiles: VideoTile[] = urlsOf(aiVideoModules)
  .map(([path, url]) => ({
    label: titleCase(basenameOf(path).replace(/[-_]compressed$/i, "")),
    format: "AI Video",
    url,
    poster: aiVideoPosters[stripExtension(path)],
    posterTime: 0.5,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

/* ===== Categories ===== */

export const CATEGORY_BUTTONS: CategoryButton[] = [
  { id: "websites", label: "Website Design & Development", icon: "web" },
  { id: "photography", label: "Photography", icon: "photo" },
  { id: "brand-and-campaign", label: "Brand & Campaign", icon: "brand" },
  { id: "social-media", label: "Social Media Management", icon: "social" },
  { id: "videos", label: "Videos", icon: "video" },
  { id: "ai-videos", label: "AI Videos", icon: "ai" },
];

export const HOME_CARDS: HomeCard[] = [
  {
    id: "websites",
    icon: "web",
    title: "Website Design & Development",
    description:
      "Ecommerce stores and brand websites, designed and built end to end.",
    mediaLabel: "Websites",
    imageUrl: homeImages.websites,
  },
  {
    id: "photography",
    icon: "photo",
    title: "Photography",
    description: "Studio and on-location shoots for products and brands.",
    mediaLabel: "Photography",
    imageUrl: homeImages.photography,
  },
  {
    id: "brand-and-campaign",
    icon: "brand",
    title: "Brand & Campaign",
    description:
      "Brand identity and campaigns built to launch, not sit in a folder.",
    mediaLabel: "Brand & Campaign",
    imageUrl: homeImages["brand-and-campaign"],
  },
  {
    id: "social-media",
    icon: "social",
    title: "Social Media Management",
    description: "Social handled end to end, planning through reporting.",
    mediaLabel: "Social Media",
    imageUrl: homeImages["social-media"],
  },
  {
    id: "videos",
    icon: "video",
    title: "Videos",
    description: "Reels, ad films and event coverage, scripted through edited.",
    mediaLabel: "Videos",
    imageUrl: homeImages.videos,
  },
  {
    id: "ai-videos",
    icon: "ai",
    title: "AI Videos",
    description:
      "AI-generated films and product visuals, made without a shoot day.",
    mediaLabel: "AI Videos",
    imageUrl: homeImages["ai-videos"],
  },
];

const SITE_CARDS: SiteCard[] = [
  {
    name: "VOSO",
    description: "Shopify store selling premium sportswear and activewear.",
    link: "https://vososports.com/",
    domain: "vososports.com",
    embeddable: false,
    preview: "voso",
    image: "voso",
    imageBg: "#000000",
    flag: "Ecommerce",
    badges: ["Shopify", "Premium Sportswear"],
    shotLabel: "VOSO Website",
  },
  {
    name: "ESSA Garments",
    description:
      "Apparel manufacturer and clothing brand for men, women and kids.",
    link: "https://essa.in/",
    domain: "essa.in",
    embeddable: false,
    preview: "essa",
    image: "essa",
    imageBg: "#ffffff",
    flag: "Apparel",
    badges: ["Clothing", "Manufacturing"],
    shotLabel: "ESSA Website",
  },
  {
    name: "Heaven's Elix",
    description:
      "Premium kombucha and probiotic drinks for everyday gut health.",
    link: "https://heavenselix.com/",
    domain: "heavenselix.com",
    embeddable: false,
    preview: "heavens-elix",
    image: "heavens-elix",
    imageBg: "#0a0a0a",
    flag: "Beverage Brand",
    badges: ["Kombucha", "Probiotics"],
    shotLabel: "Heaven's Elix Website",
  },
  {
    name: "TNPPL",
    description: "Official league site with franchise sign-ups and fixtures.",
    link: "https://tnppl.com/",
    domain: "tnppl.com",
    embeddable: false,
    preview: "tnppl",
    image: "tnppl",
    imageBg: "#ffffff",
    flag: "Sports League",
    badges: ["Tournament Portal", "Registrations"],
    shotLabel: "TNPPL Website",
  },
  {
    name: "Vilaasa Estates",
    description:
      "Luxury real estate and investment across India, Dubai and beyond.",
    link: "https://www.vilaasaestates.com/",
    domain: "vilaasaestates.com",
    embeddable: true,
    preview: "vilaasa",
    image: "vilaasa",
    imageBg: "#ffffff",
    flag: "Real Estate",
    badges: ["Luxury Properties", "Global Markets"],
    shotLabel: "Vilaasa Website",
  },
  {
    name: "Pickabuuu",
    description: "Social gifting platform for shareable, personalised wishlists.",
    link: "https://pickabuuu.com/",
    domain: "pickabuuu.com",
    embeddable: true,
    preview: "pickabuuu",
    image: "pickabuuu",
    imageBg: "#ffffff",
    flag: "Social Platform",
    badges: ["Social Gifting", "Wishlists"],
    shotLabel: "Pickabuuu Website",
  },
  {
    name: "NJ Macson",
    description: "Financial advisory and family office for wealth management.",
    link: "https://www.njmacson.com/",
    domain: "njmacson.com",
    embeddable: true,
    preview: "nj-macson",
    image: "nj-macson",
    imageBg: "#ffffff",
    flag: "Service Website",
    badges: ["Wealth Management", "Advisory"],
    shotLabel: "NJ Macson Website",
  },
  {
    name: "VERTX Drone Show",
    description: "Synchronised aerial drone light shows for events and brands.",
    link: "https://vertxdroneshow.in/",
    domain: "vertxdroneshow.in",
    embeddable: true,
    preview: "vertx",
    image: "vertx",
    imageBg: "#111318",
    flag: "Brand Website",
    badges: ["Drone Shows", "Entertainment"],
    shotLabel: "VERTX Website",
  },
  {
    name: "Right Hospitals",
    description:
      "Multi-speciality hospital for surgical, emergency and critical care.",
    link: "https://righthospitals.in/",
    domain: "righthospitals.in",
    embeddable: true,
    preview: "right-hospitals",
    image: "right-hospitals",
    imageBg: "#ffffff",
    flag: "Healthcare",
    badges: ["Multi-Speciality", "Critical Care"],
    shotLabel: "Right Hospitals Website",
  },
].map((card) => ({
  ...card,
  imageUrl: card.image ? websiteImages[card.image] : undefined,
  previewUrl: card.preview ? websitePreviews[card.preview] : undefined,
}));

const SOCIAL_CARDS: SocialCard[] = [
  {
    avatar: "voso",
    name: "VOSO Sports",
    category: "Activewear & Athleisure",
    iconText: "VS",
    platform: "Instagram",
    handle: "@vososports_india",
    followers: "18.2k",
    following: "42",
    postsCount: "180+",
    bio: "Engineered for movement. High performance activewear & athleisure.",
    description: "VOSO Sports — premium activewear and high-performance athleisure brand.",
    pitch: "High-energy athlete shoots, product drop trailers, and daily community reels that turn activewear into a lifestyle movement.",
    link: "https://www.instagram.com/vososports_india",
    embedUrl: "https://www.instagram.com/vososports_india/embed",
    linkText: "View profile →",
    highlights: ["High-Energy Reels", "Product Drop Teasers", "Influencer Strategy"],
  },
  {
    avatar: "bengaluru-jawans",
    name: "Bengaluru Jawans",
    category: "Franchise Sports Team",
    iconText: "BJ",
    platform: "Instagram",
    handle: "@bengaluru.jawans",
    followers: "15.8k",
    following: "28",
    postsCount: "210+",
    bio: "Official Instagram of Bengaluru Jawans. Season 1 Champions of WPBL.",
    description:
      "Official Instagram of the Bengaluru Jawans pickleball team, Season 1 champions of WPBL.",
    pitch: "Real-time matchday coverage, high-fps action reels, trophy celebrations, and player spotlight campaigns.",
    link: "https://www.instagram.com/bengaluru.jawans",
    embedUrl: "https://www.instagram.com/bengaluru.jawans/embed",
    linkText: "View profile →",
    highlights: ["Matchday Live Coverage", "Player Spotlights", "Sponsor Integrations"],
  },
  {
    avatar: "madurai-all-stars",
    name: "Madurai All-Stars",
    category: "Franchise Sports Team",
    iconText: "MA",
    platform: "Instagram",
    handle: "@madurai_allstars",
    followers: "8.4k",
    following: "19",
    postsCount: "95+",
    bio: "The pride of Madurai in the Tamil Nadu Pickleball Premier League (TNPPL).",
    description:
      "The official Instagram for the Madurai franchise in the Tamil Nadu Pickleball Premier League.",
    pitch: "Regional pride storytelling, fierce player introductions, behind-the-scenes training camp footage, and fan engagement.",
    link: "https://www.instagram.com/madurai_allstars",
    embedUrl: "https://www.instagram.com/madurai_allstars/embed",
    linkText: "View profile →",
    highlights: ["Fan Contests", "Training Camp BTS", "Jersey Launch Films"],
  },
  {
    avatar: "tnpa",
    name: "TNPA",
    category: "State Sports Federation",
    iconText: "TN",
    platform: "Instagram",
    handle: "@tamilnadupickleball.assn",
    followers: "9.6k",
    following: "34",
    postsCount: "145+",
    bio: "Official State Pickleball Governing Body in Tamil Nadu. Organizers of TNPPL.",
    description:
      "The official state pickleball body in Tamil Nadu, promoting the TNPPL and association activities.",
    pitch: "Tournament broadcasts, official announcements, state ranking releases, and grassroot sports development storytelling.",
    link: "https://www.instagram.com/tamilnadupickleball.assn/",
    embedUrl: "https://www.instagram.com/tamilnadupickleball.assn/embed",
    linkText: "View profile →",
    highlights: ["Tournament Calendars", "Official Circulars", "Live Score Graphics"],
  },
  {
    avatar: "heavens-elix",
    name: "Heavens Elix Probiotics",
    category: "Health Food Store",
    iconText: "HE",
    platform: "Instagram",
    handle: "@heavens.elix",
    followers: "1,104",
    following: "812",
    postsCount: "288",
    bio: "✨ Kombucha, Kimchi and Ferments🌿\n🍹 Gut-friendly brews & ferments\n📍 Chennai | 💌 DM for orders",
    bioLink: "https://rzp.io/rzp/Heavenselix-Kombucha-Workshop",
    description: "Heaven's Elix — artisanal kombucha, gut-friendly brews and prebiotic ferments crafted in Chennai.",
    pitch: "Clean, thirst-provoking visual aesthetics highlighting organic ingredients, fermentation workshops, and gut-health education.",
    link: "https://www.instagram.com/heavens.elix",
    embedUrl: "https://www.instagram.com/heavens.elix/embed",
    linkText: "View profile →",
    storyHighlights: [
      { name: "Elix X Voko" },
      { name: "Workshop" },
      { name: "Reviews❤️" },
      { name: "Korean Ferments" },
    ],
    highlights: ["Sensory Video Ads", "Health Education Carousels", "Retail Launch Campaigns"],
  },
  {
    iconText: "ES",
    name: "ESSA Garments",
    category: "Clothing Manufacturer",
    platform: "Instagram",
    handle: "@essa_garments",
    followers: "24.6k",
    following: "0",
    postsCount: "280+",
    bio: "Clothing manufacturer | B2B clothing brand | essagarments.com",
    description:
      "A B2B clothing manufacturer, and one of the largest accounts in the apparel trade.",
    pitch: "The pieces shot on Tuesday are posted the same week, and those films become the advertising. Nothing is produced twice.",
    link: "https://www.instagram.com/essa_garments",
    embedUrl: "https://www.instagram.com/essa_garments/embed",
    linkText: "View profile →",
    highlights: ["Weekly Production Reels", "B2B Catalog Launches", "High-Reach Meta Ads"],
  },
].map((card) => ({ ...card, logoUrl: card.avatar ? socialImages[card.avatar] : undefined }));

export const SERVICES: Record<PanelId, Service> = {
  websites: {
    id: "websites",
    icon: "web",
    title: "Websites built to sell, not just to exist.",
    description:
      "We design and build websites that do actual work for your business — ecommerce stores that are easy to buy from, and brand or service websites that make people trust you enough to call. Every site is built for speed, mobile and search from day one.",
    whatWeDo: [
      "Ecommerce Store Setup",
      "Brand & Landing Pages",
      "Custom Development",
      "SEO-Ready Builds",
      "Mobile & Speed Optimization",
      "Hosting & Maintenance",
    ],
    toolsLabel: "Platforms & Tools We Use",
    tools: [
      { name: "Shopify", icon: "simple-icons:shopify" },
      { name: "WordPress", icon: "simple-icons:wordpress" },
      { name: "WooCommerce", icon: "simple-icons:woocommerce" },
      { name: "Webflow", icon: "simple-icons:webflow" },
      { name: "React", icon: "simple-icons:react" },
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
    ],
    workTitle: "Our Work",
    workNote: "Ecommerce stores and brand websites we've delivered.",
    emptyNote: "Site screenshots are being prepared. Links are live below.",
    workType: "sites",
    siteCards: SITE_CARDS,
  },
  photography: {
    id: "photography",
    icon: "photo",
    title: "Product photography that stops the scroll.",
    description:
      "From studio product shots to lifestyle photography, we shoot content that makes products look like they belong on a bigger shelf. Every shoot is planned around how the images will actually be used — website, catalogue, ads and social.",
    whatWeDo: [
      "Studio Product Shoots",
      "Lifestyle & On-Location Shoots",
      "Photo Editing & Retouching",
      "Catalogue Photography",
      "Flat-Lay & Detail Shots",
      "Content Batching for Social",
    ],
    toolsLabel: "Tools & Setup We Use",
    tools: [
      { name: "Studio Lighting", icon: "flat-color-icons:idea" },
      { name: "DSLR & Mirrorless", icon: "flat-color-icons:camera" },
      { name: "Adobe Lightroom", icon: "logos:adobe-lightroom" },
      { name: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
    ],
    workTitle: "Our Work",
    workNote: "A sample of shoots from past client work.",
    emptyNote: "Shoot galleries are being added. Check back shortly.",
    workType: "photos",
    photos: photographyImages,
    photoTabs: photoTabs,
    gridCols: 3,
  },
  "brand-and-campaign": {
    id: "brand-and-campaign",
    icon: "brand",
    title: "Brand and campaign work built to launch, not sit in a folder.",
    description:
      "We build the identity and the campaigns that carry it — logo and brand guidelines, launch campaigns, print and outdoor creative, and event branding. Everything is designed to work across every channel it needs to show up on.",
    whatWeDo: [
      "Brand Identity & Guidelines",
      "Campaign Concept & Creative",
      "Launch Campaigns",
      "Print & Outdoor Creative",
      "Event Branding",
      "Positioning & Messaging",
    ],
    toolsLabel: "Tools We Use",
    tools: [
      { name: "Adobe Creative Suite", icon: "simple-icons:adobecreativecloud" },
      { name: "Print & OOH", icon: "flat-color-icons:print" },
      { name: "Digital Ad Creative", icon: "flat-color-icons:advertising" },
      { name: "Event Collateral", icon: "flat-color-icons:calendar" },
    ],
    workTitle: "Our Work",
    workNote: "Brand identity and campaign work for retainer clients.",
    emptyNote: "Campaign work is being added. Check back shortly.",
    workType: "photos",
    photos: brandImages,
    gridCols: 3,
  },
  "social-media": {
    id: "social-media",
    icon: "social",
    title: "Social media, run end to end, not just posted.",
    description:
      "We handle the whole social calendar so it doesn't fall on you. Content is planned, designed, shot, scheduled and reported on every month, across the platforms that actually matter for your business.",
    whatWeDo: [
      "Content Calendar",
      "Posts & Story Design",
      "Short-Form Videos",
      "Scheduling",
      "Community Management",
      "Monthly Reporting",
    ],
    toolsLabel: "Platforms We Manage",
    tools: [
      { name: "Instagram", icon: "skill-icons:instagram" },
      { name: "YouTube", icon: "logos:youtube-icon" },
      { name: "Facebook", icon: "logos:facebook" },
      { name: "LinkedIn", icon: "logos:linkedin-icon" },
    ],
    workTitle: "Our Work",
    workNote: "Instagram pages and other social handles currently run by us.",
    emptyNote: "Account list is being updated.",
    workType: "social",
    socialCards: SOCIAL_CARDS,
  },
  videos: {
    id: "videos",
    icon: "video",
    title: "Video that gets watched, not skipped.",
    description:
      "From reels to ad films to event coverage, we script, shoot and edit video built for how people actually watch today — fast hooks, short attention spans, made for the platform it's going on.",
    whatWeDo: [
      "Reels & Short-Form Content",
      "Ad Films",
      "Event Coverage",
      "Scripting & Storyboarding",
      "Shoot & Production",
      "Editing & Post-Production",
    ],
    toolsLabel: "Where It Goes",
    tools: [
      { name: "Instagram Reels", icon: "skill-icons:instagram" },
      { name: "YouTube", icon: "logos:youtube-icon" },
      { name: "Meta Ads", icon: "logos:meta-icon" },
      { name: "Client Websites", icon: "vscode-icons:file-type-html" },
    ],
    workTitle: "Our Work",
    workNote: "Reels, ad films and event coverage produced for retainer clients.",
    emptyNote: "Reels are being compressed for the web. Check back shortly.",
    workType: "videos",
    videos: videoTiles,
    gridCols: 3,
  },
  "ai-videos": {
    id: "ai-videos",
    icon: "ai",
    title: "AI video that looks shot, not generated.",
    description:
      "Ad films, product visuals and brand reels built with AI — no crew, no location, no shoot day. We write the concept, generate the footage, and finish it in edit so it lands like a proper production instead of a demo clip.",
    whatWeDo: [
      "AI Ad Films",
      "AI Product Visuals",
      "Concept & Prompt Direction",
      "AI Voiceover & Sound",
      "Motion Graphics & VFX",
      "Editing & Post-Production",
    ],
    toolsLabel: "Tools We Use",
    tools: [
      { name: "Higgsfield", icon: "hugeicons:ai-brain-01" },
      { name: "Flow", icon: "hugeicons:ai-magic" },
      { name: "Midjourney", icon: "logos:midjourney" },
      { name: "Runway", icon: "hugeicons:ai-video" },
      { name: "ElevenLabs", icon: "simple-icons:elevenlabs" },
      { name: "After Effects", icon: "logos:adobe-after-effects" },
      { name: "Premiere Pro", icon: "logos:adobe-premiere" },
    ],
    workTitle: "Our Work",
    workNote: "AI-generated films and product visuals produced in-house.",
    emptyNote: "AI films are being compressed for the web. Check back shortly.",
    workType: "videos",
    videos: aiVideoTiles,
    gridCols: 3,
  },
};

export const isPanelId = (value: string | undefined): value is PanelId =>
  !!value && value in SERVICES;

/**
 * Legacy `?c=` values from the old /portfolio page, mapped to their new route.
 * `print` and `events` have no equivalent — they fold into Brand & Campaign.
 */
export const LEGACY_CATEGORY_REDIRECTS: Record<string, PanelId> = {
  "social-media": "social-media",
  branding: "brand-and-campaign",
  print: "brand-and-campaign",
  website: "websites",
  "photo-shoot": "photography",
  videos: "videos",
  events: "videos",
};
