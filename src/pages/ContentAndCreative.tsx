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

import { HeroSection } from "@/components/sections/services/CONTENT AND CREATIVE/HeroSection";
import { IncludesSection } from "@/components/sections/services/CONTENT AND CREATIVE/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/CONTENT AND CREATIVE/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/CONTENT AND CREATIVE/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/CONTENT AND CREATIVE/IndustriesSection";
import { CTASection } from "@/components/sections/services/CONTENT AND CREATIVE/CTASection";

const ContentAndCreative = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="Content Marketing Agency Chennai | Creative Services | Eyelevel Growth Studio"
        description="AI handles production speed. Humans handle strategy and voice. Video, design, copy, and brand assets built with your brief, delivered with your tone."
        keywords={[
          "content marketing agency Chennai",
          "creative agency Chennai",
          "video production Chennai",
          "copywriting agency India",
          "brand content agency Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          contentAndCreativeSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "Content and Creative", url: "https://theeyelevelstudio.com/services/content-and-creative" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/content-and-creative"
        url="https://theeyelevelstudio.com/services/content-and-creative"
      />
      <Header />

            <HeroSection />
      <IncludesSection />
      <WhoIsItForSection />
      <QuoteSection />
      <IndustriesSection />
      <CTASection />

      <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
    </div>
  );
};

export default ContentAndCreative;
