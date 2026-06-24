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

import { HeroSection } from "@/components/sections/services/LINKEDIN B2B MARKETING/HeroSection";
import { IncludesSection } from "@/components/sections/services/LINKEDIN B2B MARKETING/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/LINKEDIN B2B MARKETING/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/LINKEDIN B2B MARKETING/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/LINKEDIN B2B MARKETING/IndustriesSection";
import { CTASection } from "@/components/sections/services/LINKEDIN B2B MARKETING/CTASection";

const LinkedInB2BMarketing = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="LinkedIn B2B Marketing Agency India | Eyelevel Growth Studio"
        description="Profile optimisation, content strategy, and targeted outreach that builds real pipeline. For founders and companies that sell to other businesses."
        keywords={[
          "LinkedIn marketing agency India",
          "LinkedIn B2B marketing Chennai",
          "LinkedIn content strategy India",
          "LinkedIn ads agency",
          "B2B marketing agency Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          linkedInB2BMarketingSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "LinkedIn B2B Marketing", url: "https://theeyelevelstudio.com/services/linkedin-b2b-marketing" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/linkedin-b2b-marketing"
        url="https://theeyelevelstudio.com/services/linkedin-b2b-marketing"
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

export default LinkedInB2BMarketing;
