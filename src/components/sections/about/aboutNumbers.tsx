import { motion, animate, useInView } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    stat: "15+",
    title: "Years client-side",
    subtitle: "Deep experience on your side, not someone else's.",
  },
  {
    stat: "5",
    title: "Industries, hands-on",
    subtitle: "Property, SaaS, B2B, eCommerce and more.",
  },
  {
    stat: "0",
    title: "Account Managers",
    subtitle: "You work with the people doing the work.",
  },
];

const AnimatedCounter = ({ value, duration = 1.5 }: { value: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!inView) return;

    // Parse the number and optional suffix
    const numericMatch = value.match(/^(\d+)(.*)$/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(numericMatch[1], 10);
    const suffix = numericMatch[2] || "";

    // For "0", count down from 10 to 0 for a playful effect.
    // Otherwise, count up from 0 to target.
    const startValue = targetNumber === 0 ? 10 : 0;

    const controls = animate(startValue, targetNumber, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest) + suffix);
      },
    });

    return () => controls.stop();
  }, [inView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
};

const Numbers = () => {
  return (
    <section className="px-4 relative bg-secondary py-[100px]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{
                backgroundColor: "rgba(226, 254, 165, 0.1)",
                border: "1px solid rgba(226, 254, 165, 0.2)",
              }}
            >
              <span className="text-sm font-medium font-bricolage text-primary">
                The Numbers
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-dela uppercase text-center leading-tight">
            <span className="text-primary block md:inline">Built on experience, </span>
            <span className="text-white block md:inline"><WavyUnderline>not layers</WavyUnderline></span>
          </h2>

          <p className="text-base md:text-lg max-w-2xl mx-auto font-bricolage text-[#d1d7d5]/80 mt-6 text-center">
            Real results. Hands-on expertise. Zero account managers in between.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0 relative pt-[-10]">
          {stats.map((item, index) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col items-center justify-start text-center px-4 md:px-8 py-8 md:py-4 min-h-[100px]"
            >
              {/* Vertical divider line for desktop */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-4 bottom-4 w-[1px] bg-primary/10" />
              )}

              {/* Horizontal divider line for mobile */}
              {index > 0 && (
                <div className="block md:hidden w-1/2 h-[1px] bg-primary/10 mb-8 mx-auto" />
              )}

              <span className="text-4xl md:text-6xl font-bricolage text-primary leading-none mb-4"
              >
                <AnimatedCounter value={item.stat} />
              </span>

              {/* Short green line below number */}
              <div className="w-8 h-[2px] bg-primary/30 mb-5" />

              <h3 className="text-lg md:text-xl font-bricolage font-semibold text-white">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
