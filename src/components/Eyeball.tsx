import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const Eyeball = () => {
  const eyeRef = useRef(null);

  // Motion values for pupil
  const pupilX = useMotionValue(0);
  const pupilY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;

      const angle = Math.atan2(dy, dx);

      const maxMove = rect.width * 0.15; // dynamic radius
      pupilX.set(Math.cos(angle) * maxMove);
      pupilY.set(Math.sin(angle) * maxMove);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
      className="relative w-full h-full"
    >
      {/* Eye background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F8FFE8] to-[#E2FEA5] border-4 border-[#1e3329] shadow-2xl" />

      {/* Iris */}
      <motion.div
        ref={eyeRef}
        animate={{ x: [0, 5, -5, 0], y: [0, -3, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[15%] rounded-full bg-gradient-to-br from-[#1e3329] to-[#253e35] flex items-center justify-center"
      >
        {/* Pupil */}
        <motion.div
          style={{ x: pupilX, y: pupilY }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="w-1/2 h-1/2 rounded-full bg-black flex items-center justify-center"
        >
          {/* Light reflection */}
          <div className="w-3 h-3 rounded-full bg-white/80 -translate-x-1 -translate-y-1" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Eyeball;
