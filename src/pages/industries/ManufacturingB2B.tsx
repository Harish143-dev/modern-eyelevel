import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/industries/manufacturing_problem_realistic_v2.png";
import { motion } from "framer-motion";
import { manufacturingB2BIndustrySchema, breadcrumbSchema } from "@/hooks/schemas";



import { HeroSection } from "@/components/sections/industries/MANUFACTURING B2B/HeroSection";
import { TheProblemSection } from "@/components/sections/industries/MANUFACTURING B2B/TheProblemSection";
import { WhatWeDoSection } from "@/components/sections/industries/MANUFACTURING B2B/WhatWeDoSection";
import { WhyEyeLevelSection } from "@/components/sections/industries/MANUFACTURING B2B/WhyEyeLevelSection";
import { CTABandSection } from "@/components/sections/industries/MANUFACTURING B2B/CTABandSection";

const ManufacturingB2B = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background selection:bg-brand-lime selection:text-black">
      <SEO
        title="Manufacturing Marketing Agency Chennai | B2B Marketing | Eyelevel Growth Studio"
        description="LinkedIn, SEO, and content for Chennai and Coimbatore manufacturers. Your buyers moved online — we help them find you and choose you before the first call."
        keywords={["manufacturing marketing agency Chennai", "B2B marketing agency Chennai", "manufacturing digital marketing India", "industrial marketing agency", "Coimbatore B2B marketing", "manufacturing SEO India"]}
        image="https://theeyelevelstudio.com/og/industries-1200x630.png"
        schema={[
          manufacturingB2BIndustrySchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Industries", url: "https://theeyelevelstudio.com/industries" },
            { name: "Manufacturing and B2B", url: "https://theeyelevelstudio.com/industries/manufacturing-b2b" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/industries/manufacturing-b2b"
        url="https://theeyelevelstudio.com/industries/manufacturing-b2b"
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

export default ManufacturingB2B;
