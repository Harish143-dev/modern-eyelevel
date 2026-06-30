import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/pages/industries/new/realestateproblems.webp";
import { motion } from "framer-motion";
import { realEstateIndustrySchema, breadcrumbSchema } from "@/hooks/schemas";



import { HeroSection } from "@/components/sections/industries/REAL ESTATE/HeroSection";
import { TheProblemSection } from "@/components/sections/industries/REAL ESTATE/TheProblemSection";
import { WhatWeDoSection } from "@/components/sections/industries/REAL ESTATE/WhatWeDoSection";
import { WhyEyeLevelSection } from "@/components/sections/industries/REAL ESTATE/WhyEyeLevelSection";
import { CTABandSection } from "@/components/sections/industries/REAL ESTATE/CTABandSection";

const RealEstate = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background selection:bg-brand-lime selection:text-black">
      <SEO
        title="Real Estate Marketing Agency Chennai | Eyelevel Growth Studio"
        description="Performance marketing, SEO, and content for real estate developers. Qualified site visits and bookings — not cheap form fills. Chennai's real estate marketing specialists."
        keywords={["real estate marketing agency Chennai", "property marketing agency Chennai", "real estate digital marketing India", "real estate lead generation Chennai", "real estate SEO India"]}
        image="https://theeyelevelstudio.com/og/industries-1200x630.png"
        schema={[
          realEstateIndustrySchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Industries", url: "https://theeyelevelstudio.com/industries" },
            { name: "Real Estate", url: "https://theeyelevelstudio.com/industries/real-estate" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/industries/real-estate"
        url="https://theeyelevelstudio.com/industries/real-estate"
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

export default RealEstate;
