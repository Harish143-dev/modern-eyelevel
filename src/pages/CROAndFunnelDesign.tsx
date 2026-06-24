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

import { HeroSection } from "@/components/sections/services/CRO AND FUNNEL DESIGN/HeroSection";
import { IncludesSection } from "@/components/sections/services/CRO AND FUNNEL DESIGN/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/CRO AND FUNNEL DESIGN/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/CRO AND FUNNEL DESIGN/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/CRO AND FUNNEL DESIGN/IndustriesSection";
import { CTASection } from "@/components/sections/services/CRO AND FUNNEL DESIGN/CTASection";

const CROAndFunnelDesign = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="CRO Agency Chennai | Conversion Rate Optimization | Eyelevel Growth Studio"
        description="We fix what happens after the click. Landing pages, conversion flows, and lead qualification systems built to turn visitors into conversations."
        keywords={[
          "CRO agency Chennai",
          "conversion rate optimization India",
          "landing page agency Chennai",
          "funnel design agency",
          "lead conversion agency Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          croAndFunnelDesignSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "CRO and Funnel Design", url: "https://theeyelevelstudio.com/services/cro-and-funnel-design" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/cro-and-funnel-design"
        url="https://theeyelevelstudio.com/services/cro-and-funnel-design"
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

export default CROAndFunnelDesign;
