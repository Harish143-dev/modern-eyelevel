import { useRef } from "react";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Edit3, Users, UserPlus, PieChart } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { socialMediaManagementSchema, breadcrumbSchema } from "@/hooks/schemas";

export const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
    {/* Section 1 — Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] lg:min-h-[95vh]  flex items-center px-4 overflow-hidden bg-secondary pt-40 pb-[100px]">
        {/* Rotating star background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-[350px] md:w-[600px] lg:w-[750px] h-[350px] md:h-[600px] lg:h-[750px] text-forest-dark/60 pointer-events-none"
        >
          <Star18 className="w-full h-full" />
        </motion.div>

        {/* Parallax background elements */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-2xl" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-0"
          >
            <GreenButton>SERVICES / SOCIAL MEDIA MANAGEMENT</GreenButton>
          </motion.div>

          <AnimatedHeroHeading
            words={[
              "CONTENT", "THAT", "BUILDS", "THE", "AUDIENCE", "YOUR", "SALES", "TEAM",
              <WavyUnderline key="wavy">ACTUALLY NEEDS</WavyUnderline>
            ]}
          />
          <div className="w-20 h-1 opacity-50 bg-primary my-8 rounded-full mx-auto"></div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="font-bricolage text-lg max-w-3xl mx-auto mb-10 leading-relaxed text-foreground"
          >
            Strategy, calendars, creative, and posting — fully managed. Communities that convert, not just follower counts.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center rounded-full relative font-bricolage z-1000 justify-start gap-4"
          >
            <Link to="/booking">
              <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full group overflow-hidden relative">
                <span className="relative z-10">Book a free 30-min diagnostic</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
 
    </>
  );
};
