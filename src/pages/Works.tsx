import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Play, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import WavyUnderline from "@/components/shared/WavyUnderline";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { Button } from "@/components/ui/button";

// images

import print_2 from "@/assets/content/works/misc/print_2.webp";
import print_3 from "@/assets/content/works/misc/print_3.webp";

import brand_1 from "@/assets/content/works/misc/brand_1.webp";
import brand_2 from "@/assets/content/works/misc/brand_2.webp";

import brand_4 from "@/assets/content/works/misc/brand_4.webp";
import brand_5 from "@/assets/content/works/misc/brand_5.webp";
import brand_6 from "@/assets/content/works/misc/brand_6.webp";
import brand_7 from "@/assets/content/works/misc/brand_7.webp";

import social_1 from "@/assets/content/works/misc/social_media_1.webp";
import social_2 from "@/assets/content/works/misc/social_media_2.webp";
import social_3 from "@/assets/content/works/misc/social_media_3.webp";

import web_1 from "@/assets/content/works/misc/web_1.webp";
import web_2 from "@/assets/content/works/misc/web_2.webp";

import shoot_1 from "@/assets/content/works/misc/shoot_1.webp";

type Category =
  | "Social Media"
  | "Branding"
  | "Print"
  | "Website"
  | "Photo Shoot"
  | "Videos"
  | "Events";

interface Work {
  id: string;
  title: string;
  description: string;
  category: Category;
  type: "image" | "video";
  src: string;
  orientation: "portrait" | "landscape";
  url?: string; // external link (e.g. websites)
  themeColor: string; // HSL color string matching brand theme
}

const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Social Media",
  "Branding",
  "Print",
  "Website",
  "Photo Shoot",
  "Videos",
  "Events",
];



const WORKS: Work[] = [
  {
    id: "w1",
    title: "Mascot & Sports Branding Design",
    description:
      "A custom mascot and brand environment created for an energetic pickleball sports experience.",
    category: "Branding",
    type: "image",
    src: brand_1,
    orientation: "landscape",
    themeColor: "76 96% 82%",
  },

  {
    id: "w2",
    title: "Wishlist App Flyer Design",
    description:
      "A promotional flyer designed for the Pickabuuu wishlist app launch campaign.",
    category: "Print",
    type: "image",
    src: print_2,
    orientation: "landscape",
    themeColor: "76 96% 82%", // Lime
  },
  {
    id: "w3",
    title: "Healthcare Awareness Flyer Design",
    description:
      "A healthcare flyer designed for a dialysis awareness and support initiative.",
    category: "Print",
    type: "image",
    src: print_3,
    orientation: "landscape",
    themeColor: "76 96% 82%", // Lime
  },
  {
    id: "w4",
    title: "Business Card Mock-up Design",
    description:
      "A premium business card mock-up for brand identity presentation.",
    category: "Branding",
    type: "image",
    src: brand_2,
    orientation: "landscape",
    themeColor: "58 91% 87%", // Yellow
  },

  {
    id: "w5",
    title: "Wellness Brand Business Card Design",
    description:
      "A premium business card design for a wellness and aesthetic brand.",
    category: "Branding",
    type: "image",
    src: brand_4,
    orientation: "landscape",
    themeColor: "76 96% 82%", // Peach
  },
  {
    id: "w6",
    title: "Outdoor Billboard Branding Design",
    description:
      "A billboard branding design created for a healthcare and wellness brand launch campaign.",
    category: "Branding",
    type: "image",
    src: brand_5,
    orientation: "landscape",
    themeColor: "76 96% 82%", // Lime
  },
  {
    id: "w7",
    title: "Pickleball Court Branding Design",
    description:
      "A vibrant court branding design created for a pickleball sports experience.",
    category: "Branding",
    type: "image",
    src: brand_6,
    orientation: "landscape",
    themeColor: "76 96% 82%", // Lime
  },
  {
    id: "w8",
    title: "Sports League Launch Campaign",
    description:
      "A social media campaign designed for a pickleball league launch announcement.",
    category: "Social Media",
    type: "image",
    src: social_2,
    orientation: "landscape",
    themeColor: "76 96% 82%",
  },

  {
    id: "w9",
    title: "Real Estate Brochure Design",
    description: "A premium brochure cover design for a real estate project.",
    category: "Branding",
    type: "image",
    src: brand_7,
    orientation: "landscape",
    themeColor: "76 96% 82%",
  },
  {
    id: "w10",
    title: "Luxury Product Photoshoot",
    description:
      "A premium product photoshoot for a luxury fragrance gift box collection.",
    category: "Photo Shoot",
    type: "image",
    src: shoot_1,
    orientation: "landscape",
    themeColor: "76 96% 82%",
  },
  {
    id: "w11",
    title: "Responsive Website Mock-up Design",
    description:
      "A responsive website mock-up designed for a luxury real estate brand.",
    category: "Website",
    type: "image",
    src: web_1,
    orientation: "landscape",
    themeColor: "76 96% 82%",
  },
  {
    id: "w12",
    title: "E-commerce Website Mock-up",
    description:
      "A creative website mock-up designed for an online lifestyle brand.",
    category: "Website",
    type: "image",
    src: web_2,
    orientation: "landscape",
    themeColor: "76 96% 82%",
  },
  {
    id: "w13",
    title: "Kombucha Social Media Campaign",
    description: "A social media creative for a kombucha wellness brand.",
    category: "Social Media",
    type: "image",
    src: social_1,
    orientation: "landscape",
    themeColor: "76 96% 82%",
  },
];

const Works = () => {
  const [active, setActive] = useState<"All" | Category>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return active === "All"
      ? WORKS
      : WORKS.filter((w) => w.category === active);
  }, [active]);

  const open = openId ? (WORKS.find((w) => w.id === openId) ?? null) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-4 md:px-8 pt-32 pb-[100px]">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(226, 254, 165, 0.1)",
                border: "1px solid rgba(226, 254, 165, 0.2)",
              }}
            >
              <span
                className="text-sm font-medium font-bricolage text-primary"
              >
                Selected Works
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="-mt-2 md:-mt-4 font-dela text-4xl md:text-6xl lg:text-7xl uppercase mb-8 pt-8 leading-[1.05] text-primary"
            >
              WORK WE'RE <WavyUnderline>PROUD OF</WavyUnderline>
            </motion.h1>
             <div className="w-20 h-1 opacity-50 bg-primary my-8 rounded-full mx-auto"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-lg lg:text-lg max-w-3xl mx-auto font-bricolage leading-relaxed"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              A curated mix of campaigns, brands, sites, films and events. Tap
              any card to view in detail.
            </motion.p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 mt-10 justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full font-bricolage text-sm transition-all border-2 ${isActive
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground border-foreground/15 hover:border-foreground/40"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((w) => (
                <motion.div
                  layout
                  key={w.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35 }}
                >
                  <button
                    onClick={() => setOpenId(w.id)}
                    style={{
                      // @ts-ignore - CSS custom properties are valid
                      "--theme-color": w.themeColor,
                      boxShadow: `0 0 35px -15px hsl(${w.themeColor} / 0.45)`,
                    } as React.CSSProperties}
                    className="group relative flex flex-col w-full h-full overflow-hidden rounded-[24px] bg-[#1a261f] border border-white/5 transition-all duration-300 text-left hover:border-white/15 hover:-translate-y-1 hover:shadow-[0_0_50px_-15px_hsl(var(--theme-color)/0.6)]"
                  >
                    <div className="relative w-full aspect-video overflow-hidden bg-black shrink-0">
                      {w.type === "video" ? (
                        <>
                          <video
                            src={w.src}
                            muted
                            playsInline
                            loop
                            preload="metadata"
                            onMouseEnter={(e) => e.currentTarget.play().catch(() => { })}
                            onMouseLeave={(e) => {
                              e.currentTarget.pause();
                              e.currentTarget.currentTime = 0;
                            }}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 z-0"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0 z-20">
                            <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                              <Play className="w-6 h-6 ml-0.5 text-foreground" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105 z-0"
                          style={{ backgroundImage: `url(${w.src})` }}
                        />
                      )}

                      <span
                        className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{
                          color: "#E2FEA5",
                          backgroundColor: "#1a261f",
                          border: "1px solid rgba(226,254,165,0.3)",
                        }}
                      >
                        {w.category}
                      </span>
                    </div>

                    <div className="p-5 md:p-6 flex flex-col flex-grow text-white">
                      <h3 className="font-dela text-lg md:text-xl leading-snug text-white mb-2 line-clamp-2">
                        {w.title}
                      </h3>
                      <p className="font-bricolage text-sm text-white/70 leading-relaxed line-clamp-2 mb-6">
                        {w.description}
                      </p>

                      <div className="mt-auto flex items-center gap-2 font-bricolage text-sm font-semibold transition-colors duration-300 group-hover:underline" style={{ color: `hsl(${w.themeColor})` }}>
                        View Project <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpenId(null)}
          >
            <button
              onClick={() => setOpenId(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex flex-col w-full overflow-hidden rounded-3xl bg-[#1a261f] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                {/* Media Container */}
                <div className="relative w-full overflow-hidden bg-[black] shrink-0 flex items-center justify-center">
                  {open.type === "video" ? (
                    <video
                      src={open.src}
                      controls
                      autoPlay
                      className="max-h-[55vh] w-auto max-w-full"
                    />
                  ) : (
                    <img
                      src={open.src}
                      alt={open.title}
                      className="max-h-[55vh] w-auto max-w-full object-contain"
                    />
                  )}

                  {/* Badge */}
                  <span
                    className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{
                      color: "#E2FEA5",
                      backgroundColor: "#1a261f",
                      border: "1px solid rgba(226,254,165,0.3)",
                    }}
                  >
                    {open.category}
                  </span>
                </div>

                {/* Detail Panel */}
                <div className="p-6 md:p-8 flex flex-col text-white">
                  <h3 className="font-dela text-2xl md:text-3xl text-white mb-2 leading-tight">
                    {open.title}
                  </h3>
                  <p className="font-bricolage text-sm md:text-base text-white/70 leading-relaxed">
                    {open.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <EnhancedFooter mascotBgClass="bg-background" />
    </div>
  );
};

export default Works;



