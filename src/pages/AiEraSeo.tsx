import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Search, Bot, Cpu, Code, MapPin, BarChart } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { aiEraSeoSchema, breadcrumbSchema } from "@/hooks/schemas";

import { HeroSection } from "@/components/sections/services/AI ERA SEO/HeroSection";
import { IncludesSection } from "@/components/sections/services/AI ERA SEO/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/AI ERA SEO/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/AI ERA SEO/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/AI ERA SEO/IndustriesSection";
import { CTASection } from "@/components/sections/services/AI ERA SEO/CTASection";

const AiEraSeo = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="AI-Era SEO Agency Chennai | AEO & GEO | Eyelevel Growth Studio"
        description="Traditional SEO plus AEO (AI Overviews, featured snippets) and GEO (ChatGPT, Gemini, Perplexity). We optimise for where buyers find answers now."
        keywords={[
          "SEO agency Chennai",
          "AI SEO agency India",
          "AEO agency",
          "GEO optimization India",
          "Google AI Overview optimization",
          "local SEO Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          aiEraSeoSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "AI-Era SEO", url: "https://theeyelevelstudio.com/services/ai-era-seo" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/ai-era-seo"
        url="https://theeyelevelstudio.com/services/ai-era-seo"
      />
      <Header />

            <HeroSection />
      <IncludesSection />
      <WhoIsItForSection />
      <QuoteSection />
      <IndustriesSection />
      <CTASection />

      <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
    </div >
  );
};

export default AiEraSeo;
