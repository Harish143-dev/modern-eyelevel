import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/industries/new/manufacturing_market_problem_2.webp";
import { motion } from "framer-motion";
import { manufacturingB2BIndustrySchema, breadcrumbSchema } from "@/hooks/schemas";

export const WhyEyeLevelSection = () => {
  return (
    <>
      {/* Why EyeLevel */}
        <section className="px-4 bg-background flex flex-col justify-start py-[100px]">
          <div className="max-w-4xl mx-auto w-full text-center">
            <GreenButton>Why EyeLevel</GreenButton>
            <h2 className="font-dela text-2xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary">
              Why <WavyUnderline>EyeLevel</WavyUnderline>
            </h2>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl leading-relaxed text-foreground/70">
              We translate complex products into clear value propositions that buyers can act on. No fluff. No generic content. Copy and strategy that reflects how your buyers actually evaluate vendors.
            </p>
          </div>
        </section>
    </>
  );
};
