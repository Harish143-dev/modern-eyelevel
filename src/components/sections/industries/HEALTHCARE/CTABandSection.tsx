import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/industries/new/healthcare_market-problem_1.webp";
import { motion } from "framer-motion";
import { healthcareIndustrySchema, breadcrumbSchema } from "@/hooks/schemas";

export const CTABandSection = () => {
  return (
    <>
      {/* CTA Band */}
        <section className="px-4 text-center bg-forest-deep min-h-[65vh] lg:min-h-[95vh] flex flex-col justify-center py-[100px]">
          <div className="max-w-4xl mx-auto w-full">
            <GreenButton>CTA band</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-6 uppercase text-primary">
              Ready to talk about your <WavyUnderline> healthcare </WavyUnderline> marketing?
            </h2>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 text-foreground/80">
              30 minutes. No pitch deck. We will tell you what we see.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[280px] sm:max-w-none mx-auto">
              <Link to="/booking" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto px-6 py-6 md:px-10 md:py-7 text-sm md:text-lg flex justify-center items-center"
                >
                  Book a free 30-min diagnostic
                  <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform shrink-0" />
                </Button>
              </Link>
              <Link
                to="/industries"
                className="w-full sm:w-auto font-bricolage font-semibold text-primary hover:text-primary/80 border-2 border-primary/20 hover:bg-primary/10 rounded-full transition-all flex items-center justify-center gap-2 px-6 py-4 md:px-8 md:py-4 text-sm md:text-lg"
              >
                See all industries
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              </Link>
            </div>
          </div>
        </section>
      
    </>
  );
};
