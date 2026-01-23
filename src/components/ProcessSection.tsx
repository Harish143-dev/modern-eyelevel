import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WavyUnderline from "@/components/WavyUnderline";
import mascotStare from "@/assets/mascot.png";
import mascotPointing from "@/assets/mascot-pointing.png";
import mascotThinking from "@/assets/mascot-thinking.png";
import mascotPistol from "@/assets/mascot-pistol.png";
import stare from "@/assets/stare.png";
import guide from "@/assets/guide.png";
import enforcement from "@/assets/enforcement.png";

const processSteps = [
  {
    image: stare,
    number: "1",
    title: "We Stare.",
    description:
      "Most agencies blink; we don't. We find the leaks in your funnel that others miss.",
  },
  {
    image: guide,
    number: "2",
    title: "We Guide.",
    description:
      "You don't need options; you need a decision. We chart the straightest route to profit.",
  },
  {
    image: enforcement,
    number: "3",
    title: "We Build.",
    description:
      "Strategy without tactics is just an illusion. We build the systems that print results.",
  },
  {
    image: mascotPistol,
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
  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, 3.99]);
  return (
    <section
      ref={containerRef}
      className="relative border-t border-b"
      style={{
        backgroundColor: "#253e35",
        borderColor: "rgba(248, 255, 232, 0.15)",
        height: "300vh", // Reduced scroll height
      }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 min-h-screen flex items-center overflow-hidden pt-10 pb-0">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 -mt-16 md:-mt-24">
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
            className="text-center mb-6 md:mb-8 py-0"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-[#E2FEA5]/30 bg-[#E2FEA5]/5"
            >
              <span
                className="text-sm font-medium font-bricolage"
                style={{
                  color: "#E2FEA5",
                }}
              >
                The EyeLevel Growth System
              </span>
            </motion.div>
            <h2 className="font-dela text-4xl md:text-5xl lg:text-6xl leading-[1.05] uppercase">
              <span
                style={{
                  color: "#E2FEA5",
                }}
              >
                HOW WE
              </span>
              <br />
              <WavyUnderline>DOMINATE</WavyUnderline>
            </h2>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: Mascot */}
            <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
              {processSteps.map((step, index) => (
                <MascotImage
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  scrollProgress={scrollYProgress}
                  image={step.image}
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
          <div className="flex justify-center gap-3 mt-12">
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

// Mascot image component with scroll-based opacity and parallax
const MascotImage = ({
  index,
  activeIndex,
  scrollProgress,
  image,
}: {
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
  scrollProgress: ReturnType<typeof useTransform<number, number>>;
  image: string;
}) => {
  const opacity = useTransform(activeIndex, (latest: number) => {
    const distance = Math.abs(latest - index);
    if (distance < 0.5) return 1;
    if (distance < 1) return 1 - (distance - 0.5) * 2;
    return 0;
  });
  const scale = useTransform(activeIndex, (latest: number) => {
    const distance = Math.abs(latest - index);
    if (distance < 0.5) return 1;
    if (distance < 1) return 0.9 + 0.1 * (1 - (distance - 0.5) * 2);
    return 0.9;
  });

  // Subtle parallax effect - each mascot has slightly different movement
  const parallaxY = useTransform(
    scrollProgress,
    [0, 1],
    [20 - index * 5, -20 + index * 5],
  );
  const parallaxRotate = useTransform(
    scrollProgress,
    [0, 1],
    [-2 + index, 2 - index],
  );
  return (
    <motion.div
      style={{
        opacity,
        scale,
        y: parallaxY,
        rotate: parallaxRotate,
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <img
        src={image}
        alt={`Growth Monster step ${index + 1}`}
        className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
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
        className="font-dela text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6 uppercase"
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
