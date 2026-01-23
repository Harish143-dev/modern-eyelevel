import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import WavyUnderline from "./WavyUnderline";
import { useMotionValueEvent } from "framer-motion";

// 14-pointed star SVG component
const Star18 = ({ className }: { className?: string }) => {
  const points = 18;
  const outerRadius = 100;
  const innerRadius = 75;
  const cx = 100;
  const cy = 100;

  let pathData = "";
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (Math.PI * i) / points - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    pathData += `${i === 0 ? "M" : "L"} ${x} ${y} `;
  }
  pathData += "Z";

  return (
    <svg viewBox="0 0 200 200" className={className}>
      <path d={pathData} fill="currentColor" />
    </svg>
  );
};

const Hero = () => {
  // animation
  const ref = useRef(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/monster shoot_v5.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  const hasPlayedInitial = useRef(false);
  const hasLeftHero = useRef(false);

  const playAnimation = () => {
    if (!lottieRef.current) return;
    lottieRef.current.setSpeed(1.5);
    lottieRef.current.goToAndPlay(0, true);
  };
  useEffect(() => {
    if (animationData && !hasPlayedInitial.current) {
      playAnimation();
      hasPlayedInitial.current = true;
    }
  }, [animationData]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // User came BACK into hero
          if (hasLeftHero.current) {
            playAnimation();
            hasLeftHero.current = false;
          }
        } else {
          // User left hero
          hasLeftHero.current = true;
        }
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center pt-40 md:pt-48 pb-4 px-4 overflow-hidden"
      style={{ backgroundColor: "#253e35" }}
    >
      {/* Rotating 32-pointed star - centered upper area */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 m-auto w-[800px] md:w-[1000px] lg:w-[1200px] h-[800px] md:h-[1000px] lg:h-[1200px] text-[#1e3329] pointer-events-none"
      >
        <Star18 className="w-full h-full" />
      </motion.div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="w-full relative z-10">
        <div className=" max-w-6xl mx-auto text-center px-4 overflow-visible">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dela mb-8 leading-[1.05] tracking-tight text-center overflow-visible"
            style={{ color: "#E2FEA5" }}
          >
            <span className=" relative inline-flex items-center gap-2 md:gap-4">
              <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem]">
                FIRE
              </span>
              {animationData && (
                <Lottie
                  lottieRef={lottieRef}
                  animationData={animationData}
                  autoPlay={false}
                  loop={false}
                  className="absolute left-3/4 top-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] md:w-[520px] lg:w-[830px] pointer-events-none"
                />
              )}
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 whitespace-nowrap">
              YOUR <WavyUnderline>AD AGENCY!</WavyUnderline>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bricolage text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed"
            style={{ color: "#F8FFE8" }}
          >
            Say goodbye to empty promises and hello to measurable growth.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <Link to="/booking">
              <Button
                size="lg"
                className="group rounded-full px-10 py-7 text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: "#FCFAC2",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
              >
                What Am I Losing?
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
        {/* {animationData && (
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={true}
            height={5}
            className="absolute top-[22%] right-[-200px] -translate-y-1/2 pointer-events-none "
          />
        )} */}
      </div>
    </section>
  );
};

export default Hero;
