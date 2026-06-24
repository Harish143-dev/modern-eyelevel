import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, LayoutDashboard, Link as LinkIcon, Coins, FileSpreadsheet, Bell, Package } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { revenueAttributionDashboardSchema, breadcrumbSchema } from "@/hooks/schemas";

import { HeroSection } from "@/components/sections/services/REVENUE ATTRIBUTION DASHBOARD/HeroSection";
import { IncludesSection } from "@/components/sections/services/REVENUE ATTRIBUTION DASHBOARD/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/REVENUE ATTRIBUTION DASHBOARD/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/REVENUE ATTRIBUTION DASHBOARD/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/REVENUE ATTRIBUTION DASHBOARD/IndustriesSection";
import { CTASection } from "@/components/sections/services/REVENUE ATTRIBUTION DASHBOARD/CTASection";

const RevenueAttributionDashboard = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="Revenue Attribution Dashboard | Marketing Analytics Chennai | Eyelevel Growth Studio"
        description="Every campaign tied to a business outcome you can show your board. Custom dashboard bundled into growth retainers. GA4, Meta Ads, Google Ads, and CRM unified."
        keywords={[
          "marketing analytics agency Chennai",
          "revenue attribution dashboard India",
          "marketing ROI tracking",
          "marketing analytics agency India",
          "campaign attribution Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          revenueAttributionDashboardSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "Revenue Attribution Dashboard", url: "https://theeyelevelstudio.com/services/revenue-attribution-dashboard" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/revenue-attribution-dashboard"
        url="https://theeyelevelstudio.com/services/revenue-attribution-dashboard"
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

export default RevenueAttributionDashboard;
