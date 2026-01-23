import { motion } from "framer-motion";

interface WavyUnderlineProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const WavyUnderline = ({
  children,
  color = "#ffffff",
  className = "",
}: WavyUnderlineProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span style={{ color }}>{children}</span>
      <motion.svg
        className="absolute -bottom-3 w-full"
        height="8"
        viewBox="0 0 200 8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.path
          d="M0 4 Q50 0, 100 4 T200 4"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.svg>
    </span>
  );
};

export default WavyUnderline;
