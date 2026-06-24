import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Map, Palette, Code2, SearchCheck, PenLine, Wrench } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { websiteDesignAndDevelopmentSchema, breadcrumbSchema } from "@/hooks/schemas";

export const IncludesSection = () => {
  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    {/* Section 2 — What it includes (Bento Box) */}
      <section className="px-4 sm:px-10 md:px-20 bg-background relative z-10 py-20 md:py-[100px]">
        <div className="w-full flex justify-start text-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
          >
            BUILT FOR BUSINESSES THAT NEED <WavyUnderline>RESULTS</WavyUnderline>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Box 1 — Website Strategy (wide) */}
          <motion.div
            {...scrollAnimProps}
            className="md:col-span-2 bg-primary/5 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Map className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
              WEBSITE STRATEGY
            </h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl">
              Information architecture, conversion flow design, and page hierarchy — so every page has a job to do.
            </p>
          </motion.div>

          {/* Box 2 — UI Design */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Palette className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
              UI & VISUAL DESIGN
            </h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">
              Built inside the client's brand system. Not a template dropped on top of it.
            </p>
          </motion.div>

          {/* Box 3 — SEO */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <SearchCheck className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
              ON-PAGE SEO
            </h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">
              Meta tags, schema markup, and Core Web Vitals optimisation baked in from day one.
            </p>
          </motion.div>

          {/* Box 4 — Development + Copywriting + Support (wide, highlighted) */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-primary/5 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Wrench className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
              DEVELOPMENT, COPY & SUPPORT
            </h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl">
              Responsive, fast-loading, CMS-ready builds (WordPress, Webflow, or custom). Copywriting for all pages included — or copy editing if you supply a draft. 30 days of post-launch fixes bundled in.
            </p>
          </motion.div>
        </div>
      </section>
 
    </>
  );
};
