import React from "react";
import { motion } from "framer-motion";

interface AnimatedHeroHeadingProps {
  words: React.ReactNode[];
}

export const AnimatedHeroHeading: React.FC<AnimatedHeroHeadingProps> = ({ words }) => {
  return (
    <div className="-mt-4 md:-mt-6 font-dela text-3xl md:text-5xl lg:text-6xl uppercase text-primary leading-[1.15] pt-6 pb-2 tracking-tight flex flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-y-4">
      {words.map((word, i) => (
        <div key={i} className="overflow-hidden -mt-4 -mb-6 px-1 -mx-1">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="pt-4 pb-6"
          >
            {word}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
