import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WavyUnderline from "@/components/shared/WavyUnderline";
import ClientLottie, { type ClientLottieRef } from "@/components/shared/ClientLottie";
import { useEffect, useRef, useState } from "react";
import GreenButton from "@/components/shared/GreenButton";

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

const ServicesHero = () => {
  const ref = useRef(null);
  const lottieRef = useRef<ClientLottieRef>(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/magic wand.json")
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
      className="relative flex flex-col justify-start items-center px-4 overflow-hidden min-h-[65vh] lg:min-h-[95vh] bg-forest-deep pt-40 pb-[100px]"
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

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <GreenButton>What we do</GreenButton>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="-mt-2 md:-mt-4 font-dela uppercase text-center leading-[1.05] mb-5 text-primary"
        >
          {/* BIG TITLE */}
          <span className="relative flex items-end justify-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            <span className="">
              <span className="sr-only">O</span>
              {animationData && (
                <ClientLottie
                  lottieRef={lottieRef}
                  animationData={animationData}
                  autoPlay={false}
                  loop
                  className="w-[30px] sm:w-[38px] md:w-[53px] lg:w-[63px] pointer-events-none"
                />
              )}
            </span>
            NE STUDIO
          </span>
          {" "}
          {/* SUBTITLE – ONE LINE, SMALLER */}
          <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-wide mt-3">
            NINE CAPABILITIES{" "}
            <span className="block sm:inline mt-2 sm:mt-0">
              <WavyUnderline>ZERO HANDOFF</WavyUnderline>
            </span>
          </span>
        </motion.h1>
        <div className="w-20 h-1 opacity-50 bg-primary my-8 rounded-full mx-auto"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-bricolage leading-relaxed"
          style={{ color: "rgba(248, 255, 232, 0.7)" }}
        >
          Most companies run 3 to 5 vendors for what we do inside one studio. Strategy, performance, content, SEO, and creatives - all connected, all accountable to the same outcome.
        </motion.p>
      </div>
      <div className="flex items-center rounded-full relative font-bricolage z-1000 mt-8 justify-start gap-4">
        <Link to="/booking">
          <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full">
            Book a free 30-min diagnostic
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesHero;
