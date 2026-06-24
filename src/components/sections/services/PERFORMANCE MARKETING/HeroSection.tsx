import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star18 } from "@/components/shared/Star18";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
    <section
      ref={heroRef}
      className="relative min-h-[65vh] lg:min-h-[95vh]  flex items-center px-4 overflow-hidden bg-background pt-40 pb-[100px]"
    >
      {/* Rotating star background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 m-auto w-[350px] md:w-[600px] lg:w-[750px] h-[350px] md:h-[600px] lg:h-[750px] text-forest-dark/60 pointer-events-none"
      >
        <Star18 className="w-full h-full text-secondary" />
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
          <GreenButton>SERVICES / PERFORMANCE MARKETING</GreenButton>
        </motion.div>

        <AnimatedHeroHeading
          words={[
            "META",
            "AND",
            "GOOGLE",
            "ADS",
            "BUILT",
            "FOR",
            "REVENUE,",
            <WavyUnderline key="wavy">NOT REACH</WavyUnderline>
          ]}
        />
        <div className="w-20 h-1 opacity-50 bg-primary my-8 rounded-full mx-auto"></div>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-bricolage text-lg max-w-3xl mx-auto mb-10 leading-relaxed text-foreground"
        >
          Full-funnel campaigns. Flat fees. Complete attribution from ad to close. No black-box reporting, no padded spend.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
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
