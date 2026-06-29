import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/industries/new/healthcare_market-problem_1.webp";
import { motion } from "framer-motion";
import { healthcareIndustrySchema, breadcrumbSchema } from "@/hooks/schemas";




import { HeroSection } from "@/components/sections/industries/HEALTHCARE/HeroSection";
import { TheProblemSection } from "@/components/sections/industries/HEALTHCARE/TheProblemSection";
import { WhatWeDoSection } from "@/components/sections/industries/HEALTHCARE/WhatWeDoSection";
import { WhyEyeLevelSection } from "@/components/sections/industries/HEALTHCARE/WhyEyeLevelSection";
import { CTABandSection } from "@/components/sections/industries/HEALTHCARE/CTABandSection";

const Healthcare = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background selection:bg-brand-lime selection:text-black">
      <SEO
        title="Healthcare Marketing Agency Chennai | Hospital Marketing | Eyelevel Growth Studio"
        description="Patient acquisition built on trust. SEO, social media, and performance marketing for specialty clinics and hospitals. Not product marketing — trust architecture."
        keywords={["healthcare marketing agency Chennai", "hospital marketing agency Chennai", "clinic marketing India", "patient acquisition agency", "healthcare digital marketing Chennai", "medical marketing agency India"]}
        image="https://theeyelevelstudio.com/og/industries-1200x630.png"
        schema={[
          healthcareIndustrySchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Industries", url: "https://theeyelevelstudio.com/industries" },
            { name: "Healthcare", url: "https://theeyelevelstudio.com/industries/healthcare" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/industries/healthcare"
        url="https://theeyelevelstudio.com/industries/healthcare"
      />
      <Header />

      <main>
      <HeroSection />
      <TheProblemSection />
      <WhatWeDoSection />
      <WhyEyeLevelSection />
      <CTABandSection />

        
      </main>
      <EnhancedFooter showCTA={false} mascotBgClass="bg-forest-deep" />
    </div>
  );
};

export default Healthcare;
