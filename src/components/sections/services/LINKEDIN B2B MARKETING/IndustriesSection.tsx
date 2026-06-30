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
import { CardsParallax } from "@/components/shared/CardsParallax";
import { linkedInB2BMarketingSchema, breadcrumbSchema } from "@/hooks/schemas";
import realestateImg from "@/assets/pages/homepage/realestate.webp";
import healthcareImg from "@/assets/pages/homepage/healthcare.webp";
import automotiveImg from "@/assets/pages/homepage/automotive.webp";
import itsaasImg from "@/assets/pages/homepage/ITSAAS.webp";
import b2bImg from "@/assets/pages/homepage/manufacturingb2b.webp";


interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

const parallaxItems: iCardItem[] = [
    {
      title: "IT / SaaS",
      description: "B2B thought leadership, founder branding, and product updates.",
      tag: "IT/SaaS",
      src: itsaasImg,
      link: "#",
      color: "#1a2f28",
      textColor: "#F8FFE8",
    },
    {
      title: "Manufacturing / B2B",
      description: "Digital pipeline built for businesses that still rely on trade shows and referrals.",
      tag: "Manufacturing/B2B",
      src: b2bImg,
      link: "#",
      color: "#2a4f44",
      textColor: "#F8FFE8",
    },
    {
      title: "Automotive",
      description: "High-octane creative, dealership promotions, and test-drive campaigns.",
      tag: "Automotive",
      src: automotiveImg,
      link: "#",
      color: "#1a2f28",
      textColor: "#F8FFE8",
    },
  ];

export const IndustriesSection = () => {
  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    {/* Section 5 — Industry verticals */}
      <section className="px-4 bg-secondary relative z-10 py-[100px]">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">


          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
          >
            Industries <WavyUnderline className="text-white">We work in</WavyUnderline>
          </motion.h2>

          <div className="w-full">
            <CardsParallax items={parallaxItems} />
          </div>
        </div>
      </section>
 
    </>
  );
};
