import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/pages/industries/new/healthcare_market-problem_1.webp";
import { motion } from "framer-motion";
import { healthcareIndustrySchema, breadcrumbSchema } from "@/hooks/schemas";

export const WhyEyeLevelSection = () => {
  return (
    <>
      {/* Why EyeLevel */}
        <section className="px-4 bg-background flex flex-col justify-start py-[100px]">
          <div className="max-w-4xl mx-auto w-full text-center">
            <GreenButton>Why EyeLevel</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary">
              Why <WavyUnderline>EyeLevel</WavyUnderline>
            </h2>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl leading-relaxed text-foreground/70">
              Right Hospitals, Kilpauk, trusted us to build their patient acquisition system from day one. We understand the difference between healthcare marketing and product marketing.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/10 bg-secondary/50 font-bricolage text-sm md:text-base text-foreground/80">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2FEA5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E2FEA5]"></span>
              </span>
              Proof: Right Hospitals, Kilpauk, Chennai — Active Retainer Client
            </div>
          </div>
        </section>
    </>
  );
};
