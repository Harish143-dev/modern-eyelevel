import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, MessageSquare, Video, Image, BookOpen } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { contentAndCreativeSchema, breadcrumbSchema } from "@/hooks/schemas";

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
            WHAT IT <WavyUnderline>INCLUDES</WavyUnderline>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Box 1 */}
          <motion.div
            {...scrollAnimProps}
            className="md:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <FileText className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">LONG-FORM CONTENT</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">Blog articles, white papers, LinkedIn articles, and case studies</p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <MessageSquare className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">SHORT-FORM CONTENT</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">Social captions, ad copy, email sequences, and WhatsApp broadcasts</p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Video className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">VIDEO</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">Scripts, shoots, and editing — end to end</p>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">DESIGN & VISUAL ASSETS</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">Social creatives, brochures, presentation decks, and campaign visuals</p>
          </motion.div>

          {/* Box 5 (wide) */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-primary/5 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <BookOpen className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">BRAND VOICE DOCUMENTATION</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl">So every content piece sounds like the same company</p>
          </motion.div>
        </div>
      </section>
 
    </>
  );
};
