import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/industries/automotive_problem_realistic.png";
import { motion } from "framer-motion";
import { automotiveIndustrySchema, breadcrumbSchema } from "@/hooks/schemas";

export const HeroSection = () => {
  return (
    <>
      {/* Hero */}
        <section className="px-4 text-center bg-secondary min-h-[65vh] lg:min-h-[95vh] flex flex-col justify-center relative overflow-hidden pt-40 pb-[100px]">
          <div className="max-w-5xl mx-auto relative z-10 w-full">
              <GreenButton>
                Industries / Automotive
              </GreenButton>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-dela text-3xl md:text-5xl lg:text-6xl mb-8 leading-[0.95] uppercase text-primary"
            >
              Showroom visits don't happen by <WavyUnderline>accident</WavyUnderline>
            </motion.h1>
            <div className="w-20 h-1 opacity-50 bg-primary my-8 rounded-full mx-auto"></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="font-bricolage text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-foreground/80"
            >
              Dealerships and component makers. Footfall, test-drive bookings, OEM mandates — one team that handles all of it.
            </motion.p>
            <Link to="/booking" className="w-full sm:w-auto block sm:inline-block">
              <Button
                size="lg"
                className="group w-full sm:w-auto px-6 py-5 md:px-10 md:py-7 text-sm md:text-lg flex justify-center items-center"
              >
                Book a free 30-min diagnostic
                <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </Button>
            </Link>
          </div>
        </section>
    </>
  );
};
