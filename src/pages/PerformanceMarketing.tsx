import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { performanceMarketingSchema, breadcrumbSchema } from "@/hooks/schemas";

import { HeroSection } from "@/components/sections/services/PERFORMANCE MARKETING/HeroSection";
import { IncludesSection } from "@/components/sections/services/PERFORMANCE MARKETING/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/PERFORMANCE MARKETING/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/PERFORMANCE MARKETING/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/PERFORMANCE MARKETING/IndustriesSection";
import { CTASection } from "@/components/sections/services/PERFORMANCE MARKETING/CTASection";

const PerformanceMarketing = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="Performance Marketing Agency Chennai | Eyelevel Growth Studio"
        description="Meta and Google Ads built for revenue, not reach. Full-funnel campaigns with complete attribution from ad to close. No black-box reporting."
        keywords={[
          "performance marketing agency Chennai",
          "Meta Ads agency Chennai",
          "Google Ads agency Chennai",
          "digital advertising Chennai",
          "performance marketing India",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          performanceMarketingSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "Performance Marketing", url: "https://theeyelevelstudio.com/services/performance-marketing" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/performance-marketing"
        url="https://theeyelevelstudio.com/services/performance-marketing"
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

export default PerformanceMarketing;
