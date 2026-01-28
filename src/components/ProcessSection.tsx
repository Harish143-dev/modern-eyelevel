import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import WavyUnderline from "@/components/WavyUnderline";
import Lottie from "lottie-react";
import stare from "@/assets/stackingCardsAnimation/stare.json";
import blocks from "@/assets/stackingCardsAnimation/blocks.json";
import gun from "@/assets/stackingCardsAnimation/gun.json";
import scatt from "@/assets/stackingCardsAnimation/scatt.json";
import GreenButton from "./GreenButton";

const processSteps = [
  {
    animationPath: stare,
    number: "1",
    title: "We Stare.",
    description:
      "Most agencies blink; we don't. We find the leaks in your funnel that others miss.",
  },
  {
    animationPath: scatt,
    number: "2",
    title: "We Guide.",
    description:
      "You don't need options; you need a decision. We chart the straightest route to profit.",
  },
  {
    animationPath: blocks,
    number: "3",
    title: "We Build.",
    description:
      "Strategy without tactics is just an illusion. We build the systems that print results.",
  },
  {
    animationPath: gun,
    number: "4",
    title: "We Enforce.",
    description:
      "We act as your Growth Enforcer. We kill wasteful ads and scale the winners.",
  },
];
const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to active step index (0-3)
  // const activeIndex = useTransform(scrollYProgress, [0, 1], [0, 3.99]);
  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, 3]);

  return (
    <section
      ref={containerRef}
      className="relative border-t border-b"
      style={{
        backgroundColor: "#253e35",
        borderColor: "rgba(248, 255, 232, 0.15)",
        height: "400vh", // Reduced scroll height
      }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 min-h-[100vh] flex items-center overflow-hidden pb-0">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
          {/* Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center py-0"
          >
            <GreenButton>The EyeLevel Growth System</GreenButton>
            <h2 className="font-dela text-4xl text-[#E2FEA5] md:text-5xl lg:text-6xl leading-[1.05] uppercase">
              HOW WE <span></span>
              <WavyUnderline>DOMINATE</WavyUnderline>
            </h2>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 md:gap-5 items-center">
            {/* Left: Mascot */}
            <div className="relative h-[280px] md:h-[400px] flex items-center justify-center ">
              {processSteps.map((step, index) => (
                // <MascotImage
                //   key={index}
                //   index={index}
                //   activeIndex={activeIndex}
                //   image={step.image}
                // />
                <MascotLottie
                  index={index}
                  activeIndex={activeIndex}
                  animation={step.animationPath}
                />
              ))}
            </div>

            {/* Right: Text content */}
            <div className="relative h-[250px] md:h-[300px]">
              {processSteps.map((step, index) => (
                <StepContent
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  step={step}
                />
              ))}
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-3">
            {processSteps.map((_, index) => (
              <ProgressDot
                key={index}
                index={index}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type MascotLottieProps = {
  index: number;
  activeIndex: MotionValue<number>;
  animation: any; // Lottie JSON
};

const MascotLottie = ({ index, activeIndex, animation }: MascotLottieProps) => {
  const opacity = useTransform(activeIndex, (latest: number) => {
    const d = Math.abs(latest - index);
    if (d < 0.3) return 1;
    if (d < 0.6) return 1 - (d - 0.3) / 0.3;
    return 0;
  });

  const scale = useTransform(activeIndex, (latest: number) => {
    const d = Math.abs(latest - index);
    if (d < 0.3) return 1;
    if (d < 0.6) return 0.9 + 0.1 * (1 - (d - 0.3) / 0.3);
    return 0.9;
  });

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-56 h-56 md:w-72 md:h-72 lg:w-78 lg:h-78 lg:ml-48">
        <Lottie
          animationData={animation}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </motion.div>
  );
};

// Mascot image component with scroll-based opacity and parallax
const MascotImage = ({
  index,
  activeIndex,
  image,
}: {
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
  image: string;
}) => {
  const opacity = useTransform(activeIndex, (latest) => {
    const d = Math.abs(latest - index);
    if (d < 0.3) return 1;
    if (d < 0.6) return 1 - (d - 0.3) / 0.3;
    return 0;
  });

  const scale = useTransform(activeIndex, (latest) => {
    const d = Math.abs(latest - index);
    if (d < 0.3) return 1;
    if (d < 0.6) return 0.9 + 0.1 * (1 - (d - 0.3) / 0.3);
    return 0.9;
  });

  // const y = useTransform(activeIndex, (latest) => {
  //   if (Math.round(latest) === index) return 0;
  //   if (latest < index) return 40;
  //   return -40;
  // });

  return (
    <motion.div
      style={{ opacity, scale }}
      transition={{
        opacity: {
          duration: 0.35,
          ease: "easeInOut",
        },
        scale: {
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 0.6,
        },
        y: {
          type: "spring",
          stiffness: 120,
          damping: 22,
          mass: 0.7,
        },
      }}
      className="absolute inset-0 flex lg:pl-42 items-center justify-center"
    >
      <img
        src={image}
        className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
        alt=""
      />
    </motion.div>
  );
};

// Step content component with scroll-based animations
const StepContent = ({
  index,
  activeIndex,
  step,
}: {
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
  step: (typeof processSteps)[0];
}) => {
  // Sharp snap: fully visible only when this is the active step
  const opacity = useTransform(activeIndex, (latest: number) => {
    const roundedIndex = Math.round(latest);
    if (roundedIndex === index) return 1;
    return 0;
  });
  const y = useTransform(activeIndex, (latest: number) => {
    const roundedIndex = Math.round(latest);
    if (roundedIndex === index) return 0;
    if (latest < index) return 40; // Coming from below
    return -40; // Going above
  });
  const display = useTransform(activeIndex, (latest: number) => {
    const roundedIndex = Math.round(latest);
    return roundedIndex === index ? "flex" : "none";
  });
  return (
    <motion.div
      style={{
        opacity,
        y,
        display,
      }}
      className="absolute inset-0 flex-col justify-center"
    >
      {/* Step number */}
      <div className="inline-flex items-center gap-3 mb-6">
        <span
          className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold"
          style={{
            backgroundColor: "#E2FEA5",
            color: "#173229",
          }}
        >
          {step.number}
        </span>
        <div
          className="h-[2px] w-16 md:w-24"
          style={{
            backgroundColor: "rgba(226, 254, 165, 0.4)",
          }}
        />
      </div>

      {/* Title */}
      <h3
        className="font-dela text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-3 md:mb-6 uppercase"
        style={{
          color: "#E2FEA5",
        }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="font-bricolage text-xl md:text-2xl leading-relaxed max-w-xl"
        style={{
          color: "#F8FFE8",
        }}
      >
        {step.description}
      </p>
    </motion.div>
  );
};

// Progress dot component
const ProgressDot = ({
  index,
  activeIndex,
}: {
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
}) => {
  const scale = useTransform(activeIndex, (latest: number) => {
    const distance = Math.abs(latest - index);
    return distance < 0.5 ? 1.5 : 1;
  });
  const backgroundColor = useTransform(activeIndex, (latest: number) => {
    const distance = Math.abs(latest - index);
    return distance < 0.5 ? "#E2FEA5" : "rgba(248, 255, 232, 0.3)";
  });
  return (
    <motion.div
      style={{
        scale,
        backgroundColor,
      }}
      className="w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300"
    />
  );
};
export default ProcessSection;
