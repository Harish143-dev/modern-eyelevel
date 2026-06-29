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

export const TheProblemSection = () => {
  return (
    <>
      {/* The Problem */}
        <section className="px-4 bg-background min-h-[65vh] lg:min-h-[95vh] flex flex-col justify-center py-[100px]">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-block">
                <GreenButton>The Problem</GreenButton>
              </div>
              <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary">
                The <WavyUnderline>problem</WavyUnderline> with healthcare marketing
              </h2>
              <p className="font-bricolage text-sm md:text-base lg:text-base leading-relaxed text-foreground/70">
                Healthcare marketing done wrong looks like FMCG marketing. Promotional posts, discount-driven ads, and content that treats patients like consumers. It erodes trust. Healthcare decisions are high-stakes and slow. The marketing has to earn trust before it earns a booking.
              </p>
            </div>
            <div className="lg:col-span-5 w-full flex justify-start lg:justify-end">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                src={problemImage} 
                alt="Healthcare Marketing Problem" 
                className="w-full h-[300px] lg:h-[400px] xl:h-[450px] object-cover rounded-3xl border-2 border-primary/20 shadow-[0_0_40px_rgba(226,254,165,0.15)] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>
    </>
  );
};
