import print_2 from "@/assets/content/works/misc/print_2.webp";
import print_3 from "@/assets/content/works/misc/print_3.webp";
import brand_1 from "@/assets/content/works/misc/brand_1.webp";
import brand_2 from "@/assets/content/works/misc/brand_2.webp";
import brand_4 from "@/assets/content/works/misc/brand_4.webp";
import brand_5 from "@/assets/content/works/misc/brand_5.webp";
import brand_6 from "@/assets/content/works/misc/brand_6.webp";
import brand_7 from "@/assets/content/works/misc/brand_7.webp";
import heavensElix from "@/assets/content/works/social media/heavens-elix.webp";
import rightHospitals from "@/assets/content/works/social media/right-hospitals.webp";
import vosoSports from "@/assets/content/works/social media/voso-sports.webp";
import tnPickleball from "@/assets/content/works/social media/tamilnadu-pickleball.webp";
import web_1 from "@/assets/content/works/misc/web_1.webp";
import web_2 from "@/assets/content/works/misc/web_2.webp";
import shoot_1 from "@/assets/content/works/misc/shoot_1.webp";

export type WorkCategoryId =
  | "social-media"
  | "branding"
  | "print"
  | "website"
  | "photo-shoot"
  | "videos"
  | "events";

/**
 * How a category presents its work. Each category picks the treatment that
 * suits its medium, so add a variant here rather than special-casing a
 * category id inside the page.
 *
 * - `grid`           evenly sized cards, the default
 * - `phone-carousel` one 9:16 device frame at a time, paged with arrows
 */
export type WorkLayout = "grid" | "phone-carousel";

export type WorkCategory = {
  id: WorkCategoryId;
  name: string;
  /** Presentation for this category. Defaults to "grid" when omitted. */
  layout?: WorkLayout;
  /** One aspect ratio per category keeps each grid even. */
  aspect: string;
  /**
   * Card width at lg and up, sized so a row holds 3 or 4 with the 24px gap.
   * The row is centred, so a partial row stays centred instead of hugging left.
   */
  cols: string;
  desc: string;
  /** Marks the category as video work (adds the play affordance + format chip). */
  video?: boolean;
  format?: string;
};

export type WorkItem = {
  id: string;
  title: string;
  description: string;
  /** Short descriptor shown as the card's pill. */
  tag: string;
  category: WorkCategoryId;
  type: "image" | "video";
  src: string;
};

/**
 * Category order, ratio and column count. A category only appears on the page
 * once it has work in WORKS below — see `workCategories`.
 */
export const CATEGORY_DEFS: WorkCategory[] = [
  {
    id: "social-media",
    name: "Social Media",
    layout: "phone-carousel",
    aspect: "aspect-[9/16]",
    cols: "lg:w-[calc(25%-18px)]",
    desc: "Campaigns and always-on content built to be watched, not scrolled past.",
  },
  {
    id: "branding",
    name: "Branding",
    aspect: "aspect-[3/2]",
    cols: "lg:w-[calc(33.333%-16px)]",
    desc: "Identity, environments and brand systems. Built to hold up everywhere they land.",
  },
  {
    id: "print",
    name: "Print & Graphic",
    aspect: "aspect-[3/4]",
    cols: "lg:w-[calc(25%-18px)]",
    desc: "Posters, flyers and campaign key visuals. Type set with intent, never dropped into a template.",
  },
  {
    id: "website",
    name: "Website",
    aspect: "aspect-[4/3]",
    cols: "lg:w-[calc(33.333%-16px)]",
    desc: "Sites and storefronts designed around the journey, not the homepage.",
  },
  {
    id: "photo-shoot",
    name: "Photo Shoot",
    aspect: "aspect-[3/4]",
    cols: "lg:w-[calc(25%-18px)]",
    desc: "Product, portrait and event stills. Lit, shot and graded in house.",
  },
  {
    id: "videos",
    name: "Videos",
    aspect: "aspect-video",
    cols: "lg:w-[calc(33.333%-16px)]",
    desc: "Brand films and ads. Concept, script, shoot and edit, delivered ready to run.",
    video: true,
    format: "4K",
  },
  {
    id: "events",
    name: "Events",
    aspect: "aspect-[3/2]",
    cols: "lg:w-[calc(33.333%-16px)]",
    desc: "On-ground production, sponsorship and live coverage.",
  },
];

/** Add real work here. `src` accepts an imported image or a video file. */
export const WORKS: WorkItem[] = [
  {
    id: "w1",
    title: "Mascot & Sports Branding Design",
    description:
      "A custom mascot and brand environment created for an energetic pickleball sports experience.",
    tag: "Mascot",
    category: "branding",
    type: "image",
    src: brand_1,
  },
  {
    id: "w2",
    title: "Wishlist App Flyer Design",
    description:
      "A promotional flyer designed for the Pickabuuu wishlist app launch campaign.",
    tag: "Flyer",
    category: "print",
    type: "image",
    src: print_2,
  },
  {
    id: "w3",
    title: "Healthcare Awareness Flyer Design",
    description:
      "A healthcare flyer designed for a dialysis awareness and support initiative.",
    tag: "Flyer",
    category: "print",
    type: "image",
    src: print_3,
  },
  {
    id: "w4",
    title: "Business Card Mock-up Design",
    description:
      "A premium business card mock-up for brand identity presentation.",
    tag: "Stationery",
    category: "branding",
    type: "image",
    src: brand_2,
  },
  {
    id: "w5",
    title: "Wellness Brand Business Card Design",
    description:
      "A premium business card design for a wellness and aesthetic brand.",
    tag: "Stationery",
    category: "branding",
    type: "image",
    src: brand_4,
  },
  {
    id: "w6",
    title: "Outdoor Billboard Branding Design",
    description:
      "A billboard branding design created for a healthcare and wellness brand launch campaign.",
    tag: "Billboard",
    category: "branding",
    type: "image",
    src: brand_5,
  },
  {
    id: "w7",
    title: "Pickleball Court Branding Design",
    description:
      "A vibrant court branding design created for a pickleball sports experience.",
    tag: "Environment",
    category: "branding",
    type: "image",
    src: brand_6,
  },
  {
    id: "w8",
    title: "Tamilnadu Pickleball Association",
    description:
      "The official state federation's feed, built around league announcements, player features and match-day coverage.",
    tag: "Sports",
    category: "social-media",
    type: "image",
    src: tnPickleball,
  },
  {
    id: "w15",
    title: "Heavens Elix",
    description:
      "Always-on content for a Chennai kombucha and ferments brand — product drops, founder features and taste-test reels.",
    tag: "D2C",
    category: "social-media",
    type: "image",
    src: heavensElix,
  },
  {
    id: "w16",
    title: "Right Hospitals",
    description:
      "Patient education and specialist storytelling for a multi-speciality hospital, turning clinical expertise into content people watch.",
    tag: "Healthcare",
    category: "social-media",
    type: "image",
    src: rightHospitals,
  },
  {
    id: "w17",
    title: "Voso Sports",
    description:
      "Brand-led activewear content — campaign key visuals, product launches and category storytelling for an everyday performance label.",
    tag: "Apparel",
    category: "social-media",
    type: "image",
    src: vosoSports,
  },
  {
    id: "w9",
    title: "Real Estate Brochure Design",
    description: "A premium brochure cover design for a real estate project.",
    tag: "Brochure",
    category: "branding",
    type: "image",
    src: brand_7,
  },
  {
    id: "w10",
    title: "Luxury Product Photoshoot",
    description:
      "A premium product photoshoot for a luxury fragrance gift box collection.",
    tag: "Product",
    category: "photo-shoot",
    type: "image",
    src: shoot_1,
  },
  {
    id: "w11",
    title: "Responsive Website Mock-up Design",
    description:
      "A responsive website mock-up designed for a luxury real estate brand.",
    tag: "Web Design",
    category: "website",
    type: "image",
    src: web_1,
  },
  {
    id: "w12",
    title: "E-commerce Website Mock-up",
    description:
      "A creative website mock-up designed for an online lifestyle brand.",
    tag: "Web Design",
    category: "website",
    type: "image",
    src: web_2,
  },
];

export const worksByCategory = (id: WorkCategoryId) =>
  WORKS.filter((w) => w.category === id);

/** Only categories that actually have work — an empty tab is worse than no tab. */
export const workCategories = CATEGORY_DEFS.filter(
  (c) => worksByCategory(c.id).length > 0,
).map((c, index) => ({ ...c, n: String(index + 1).padStart(2, "0") }));
