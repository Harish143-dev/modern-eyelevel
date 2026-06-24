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

import { HeroSection } from "@/components/sections/services/WEBSITE DESIGN AND DEVELOPMENT/HeroSection";
import { IncludesSection } from "@/components/sections/services/WEBSITE DESIGN AND DEVELOPMENT/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/WEBSITE DESIGN AND DEVELOPMENT/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/WEBSITE DESIGN AND DEVELOPMENT/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/WEBSITE DESIGN AND DEVELOPMENT/IndustriesSection";
import { CTASection } from "@/components/sections/services/WEBSITE DESIGN AND DEVELOPMENT/CTASection";

const WebsiteDesignAndDevelopment = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="Website Design Agency Chennai | Web Development | Eyelevel Growth Studio"
        description="Fast, conversion-optimised websites built as sales tools, not brochures. Design, development, SEO, and copywriting from one studio. Chennai and India."
        keywords={[
          "website design agency Chennai",
          "web development agency Chennai",
          "website design company Chennai",
          "Webflow agency Chennai",
          "WordPress agency Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          websiteDesignAndDevelopmentSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "Website Design and Development", url: "https://theeyelevelstudio.com/services/website-design-and-development" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/website-design-and-development"
        url="https://theeyelevelstudio.com/services/website-design-and-development"
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

export default WebsiteDesignAndDevelopment;
