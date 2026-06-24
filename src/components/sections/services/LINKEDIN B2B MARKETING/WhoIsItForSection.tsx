import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, UserCheck, Building2, FileText, UserPlus, Megaphone, LineChart } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { linkedInB2BMarketingSchema, breadcrumbSchema } from "@/hooks/schemas";

export const WhoIsItForSection = () => {
  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    {/* Section 3 — Who it is for */}
      <section className="px-4 bg-secondary relative z-10 overflow-hidden py-[100px]">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-8"
          >
            WHO IT IS <WavyUnderline> FOR </WavyUnderline>
          </motion.h2>

          <motion.p
            {...scrollAnimProps}
            className="text-lg font-bricolage text-foreground max-w-3xl mx-auto text-center leading-relaxed"
          >
            IT and SaaS founders invisible on LinkedIn while competitors build brand there. Manufacturing and B2B businesses that rely on trade shows and referrals and need a digital channel that works between events. Any B2B company where the decision maker is on LinkedIn and not aware the seller exists.
          </motion.p>
        </div>
      </section>
 
    </>
  );
};
