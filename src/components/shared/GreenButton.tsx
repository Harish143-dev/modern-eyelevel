import React, { Children } from "react";
import { motion } from "framer-motion";

interface GreenButtonprops {
  children: React.ReactNode;
}

const GreenButton = ({ children }: GreenButtonprops) => {
  return (
    <div className="flex justify-center w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center justify-center gap-2 rounded-full px-4 md:px-5 py-2 md:py-2.5 mb-6 mt-4 max-w-full"
        style={{
          backgroundColor: "rgba(226, 254, 165, 0.1)",
          border: "1px solid rgba(226, 254, 165, 0.2)",
        }}
      >
        <span
          className="text-xs sm:text-sm font-medium font-bricolage tracking-wider text-primary text-center whitespace-normal"
        >
          {children}
        </span>
      </motion.div>
    </div>
  );
};

export default GreenButton;


