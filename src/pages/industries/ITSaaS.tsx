import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/pages/industries/itsaas_problem_realistic.png";
import { motion } from "framer-motion";
import { itSaaSIndustrySchema, breadcrumbSchema } from "@/hooks/schemas";




import { HeroSection } from "@/components/sections/industries/IT SAAS/HeroSection";
import { TheProblemSection } from "@/components/sections/industries/IT SAAS/TheProblemSection";
import { WhatWeDoSection } from "@/components/sections/industries/IT SAAS/WhatWeDoSection";
import { WhyEyeLevelSection } from "@/components/sections/industries/IT SAAS/WhyEyeLevelSection";
import { CTABandSection } from "@/components/sections/industries/IT SAAS/CTABandSection";

const ITSaaS = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background selection:bg-brand-lime selection:text-black">
      <SEO
        title="IT & SaaS Marketing Agency India | Eyelevel Growth Studio"
        description="Demand gen, LinkedIn brand, and content that produces pipeline for B2B software companies. Performance marketing and SEO for IT and SaaS across India."
        keywords={["IT marketing agency India", "SaaS marketing agency India", "B2B software marketing", "LinkedIn marketing for SaaS", "demand generation agency Chennai", "IT company marketing India"]}
        image="https://theeyelevelstudio.com/og/industries-1200x630.png"
        schema={[
          itSaaSIndustrySchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Industries", url: "https://theeyelevelstudio.com/industries" },
            { name: "IT and SaaS", url: "https://theeyelevelstudio.com/industries/it-saas" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/industries/it-saas"
        url="https://theeyelevelstudio.com/industries/it-saas"
      />
      <Header />

      <main>
        <HeroSection />
        <TheProblemSection />
        <WhatWeDoSection />
        <WhyEyeLevelSection />
        <CTABandSection />


      </main>
      <EnhancedFooter showCTA={false} mascotBgClass="bg-secondary" />
    </div>
  );
};

export default ITSaaS;
