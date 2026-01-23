import React, { Children } from "react";
import { motion } from "framer-motion";

interface GreenButtonprops {
  children: React.ReactNode;
}

const GreenButton = ({ children }: GreenButtonprops) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
      style={{
        backgroundColor: "rgba(226, 254, 165, 0.1)",
        border: "1px solid rgba(226, 254, 165, 0.2)",
      }}
    >
      <span
        className="text-sm font-medium font-bricolage tracking-wider"
        style={{ color: "#E2FEA5" }}
      >
        {children}
      </span>
    </motion.div>
  );
};

export default GreenButton;
