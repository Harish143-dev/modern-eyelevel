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
              We know the sales cycle, the site visit conversation, and what a qualified lead actually looks like. We do not optimise for the metric that looks good in a report. We optimise for the one that shows up in your booking sheet.
            </p>
          </div>
        </section>
    </>
  );
};
