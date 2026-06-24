import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Layers, FileText, Sparkles, RefreshCcw, PenTool } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { brandAndIdentitySchema, breadcrumbSchema } from "@/hooks/schemas";

import { HeroSection } from "@/components/sections/services/BRAND AND IDENTITY/HeroSection";
import { IncludesSection } from "@/components/sections/services/BRAND AND IDENTITY/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/BRAND AND IDENTITY/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/BRAND AND IDENTITY/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/BRAND AND IDENTITY/IndustriesSection";
import { CTASection } from "@/components/sections/services/BRAND AND IDENTITY/CTASection";

const BrandAndIdentity = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="Brand Identity Agency Chennai | Branding Services | Eyelevel Growth Studio"
        description="Visual identity, positioning, and brand architecture for companies that are growing and need their brand to do the work. Logo, guidelines, tone of voice."
        keywords={[
          "brand identity agency Chennai",
          "branding agency Chennai",
          "brand strategy agency India",
          "logo design agency Chennai",
          "rebranding agency Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          brandAndIdentitySchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "Brand and Identity", url: "https://theeyelevelstudio.com/services/brand-and-identity" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/brand-and-identity"
        url="https://theeyelevelstudio.com/services/brand-and-identity"
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

export default BrandAndIdentity;
