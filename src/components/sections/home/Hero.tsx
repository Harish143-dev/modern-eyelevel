import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ClientLottie, { type ClientLottieRef } from "@/components/shared/ClientLottie";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { useMotionValueEvent } from "framer-motion";
import GreenButton from "@/components/shared/GreenButton";

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
  const lottieRef = useRef<ClientLottieRef>(null);
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
      className="relative min-h-[65vh] lg:min-h-[95vh]  flex flex-col items-center justify-center px-4 overflow-hidden bg-secondary pt-40 pb-[100px]"
    >
      {/* Rotating 32-pointed star - centered upper area */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 m-auto w-[350px] md:w-[600px] lg:w-[750px] h-[350px] md:h-[600px] lg:h-[750px] text-forest-dark/60 pointer-events-none"
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
        <div className="max-w-5xl mx-auto text-center overflow-visible">
          {/* Eyebrow */}
          <GreenButton>Full-service AI-powered growth studio — Chennai</GreenButton>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dela mb-8 leading-[1.05] tracking-tight text-center overflow-visible text-primary"
          >
            <span className="relative inline-flex items-center px-4 gap-2 md:gap-4 ">
              <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]">
                FIRE
              </span>
              {animationData && (
                <ClientLottie
                  lottieRef={lottieRef}
                  animationData={animationData}
                  autoPlay={false}
                  loop={false}
                  className="absolute left-3/4 top-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] md:w-[520px] lg:w-[700px] pointer-events-none"
                />
              )}
            </span>
            {" "}
            <span className="block text-2xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 whitespace-nowrap">
              YOUR <WavyUnderline>AD AGENCY</WavyUnderline>
            </span>
          </motion.h1>
          <div className="w-20 h-1 opacity-50 bg-primary my-8 rounded-full mx-auto"></div>
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bricolage text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-14 leading-relaxed text-foreground"
          >
            Not an agency you manage. Your extended marketing team. Built to grow you, not to bill you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <Link to="/booking">
              <Button
                size="lg"
                className="group px-5 sm:px-10 py-4 mt-5 text-sm md:text-lg w-full sm:w-auto"
              >
                Book a free 30-min diagnostic
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="group px-8 sm:px-10 py-7 mt-5 text-base md:text-lg w-full sm:w-auto"
              >
                See our work
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Proof row */}
          {/*<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 md:mt-12 text-sm md:text-base font-bricolage text-foreground/70 flex flex-wrap justify-center items-center gap-x-3 gap-y-1 px-4"
          >
            <span>15+ years client-side</span>
            <span className="hidden md:inline">&middot;</span>
            <span>5 verticals with named-employer proof</span>
            <span className="hidden md:inline">&middot;</span>
            <span>1 team, strategy to execution</span>
          </motion.div>*/}
        </div>

      </div>
    </section>
  );
};

export default Hero;


