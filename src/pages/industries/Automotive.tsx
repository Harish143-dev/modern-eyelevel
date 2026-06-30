import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/pages/industries/automotive_problem_realistic.png";
import { motion } from "framer-motion";
import { automotiveIndustrySchema, breadcrumbSchema } from "@/hooks/schemas";



import { HeroSection } from "@/components/sections/industries/AUTOMOTIVE/HeroSection";
import { TheProblemSection } from "@/components/sections/industries/AUTOMOTIVE/TheProblemSection";
import { WhatWeDoSection } from "@/components/sections/industries/AUTOMOTIVE/WhatWeDoSection";
import { WhyEyeLevelSection } from "@/components/sections/industries/AUTOMOTIVE/WhyEyeLevelSection";
import { CTABandSection } from "@/components/sections/industries/AUTOMOTIVE/CTABandSection";

const Automotive = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background selection:bg-brand-lime selection:text-black">
      <SEO
        title="Automotive Marketing Agency Chennai | Dealership Marketing | Eyelevel Growth Studio"
        description="Performance marketing for dealerships and component makers. Showroom footfall, test-drive bookings, and OEM mandate compliance — one studio, full attribution."
        keywords={["automotive marketing agency Chennai", "car dealership marketing Chennai", "automotive digital marketing India", "dealership lead generation", "OEM marketing India", "automotive advertising agency Chennai"]}
        image="https://theeyelevelstudio.com/og/industries-1200x630.png"
        schema={[
          automotiveIndustrySchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Industries", url: "https://theeyelevelstudio.com/industries" },
            { name: "Automotive", url: "https://theeyelevelstudio.com/industries/automotive" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/industries/automotive"
        url="https://theeyelevelstudio.com/industries/automotive"
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

export default Automotive;
