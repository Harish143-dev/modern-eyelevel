import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Eye, LayoutTemplate, Filter, GitMerge, Split, Mail } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { croAndFunnelDesignSchema, breadcrumbSchema } from "@/hooks/schemas";

export const QuoteSection = () => {
  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    {/* Section 4 — The outcome */}
      <section className="px-4 bg-background relative z-10 flex justify-start items-center py-[100px]">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
          >
            THE <WavyUnderline> OUTCOME </WavyUnderline>
          </motion.h2>

          {/* Quote + Line */}
          <div className="flex items-stretch gap-8">
            <div className="w-px bg-primary"></div>

            <motion.h2
              {...scrollAnimProps}
              className="font-dela text-lg md:text-2xl lg:text-3xl uppercase text-primary max-w-3xl leading-[1.2] text-left"
            >
              "MORE OF YOUR EXISTING TRAFFIC CONVERTS. YOUR COST PER LEAD DROPS WITHOUT SPENDING MORE ON ADS."
            </motion.h2>
          </div>
        </div>
      </section>
 
    </>
  );
};
