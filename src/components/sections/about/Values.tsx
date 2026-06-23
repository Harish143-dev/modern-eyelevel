import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";

const values = [
  {
    title: "Strategic Clarity",
    description:
      "Clear strategy is the foundation of all successful marketing. We don't guess - we plan with precision.",
    gradient: "from-[#E2FEA5] to-[#a8e063]",
  },
  {
    title: "Precision Execution",
    description:
      "We execute with discipline and attention to detail. Every campaign, every asset, every touchpoint matters.",
    gradient: "from-[#FFB347] to-[#FF6B6B]",
  },
  {
    title: "Data-Driven",
    description:
      "We use data to make informed decisions and measure success. No vanity metrics - only what moves the needle.",
    gradient: "from-[#667eea] to-[#764ba2]",
  },
  {
    title: "Transparent Partnership",
    description:
      "Open communication showing exactly what's working. You'll always know where your money goes.",
    gradient: "from-[#f093fb] to-[#f5576c]",
  },
  {
    title: "Continuous Growth",
    description:
      "Always learning, always improving, always growing. Stagnation is the enemy of success.",
    gradient: "from-[#4facfe] to-[#00f2fe]",
  },
];

const Values = () => {
  return (
    <section
      className="px-4 relative border-t border-b overflow-hidden py-[100px]"
      style={{
        backgroundColor: "#253e35",
        borderColor: "rgba(248, 255, 232, 0.15)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#667eea]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            <span className="text-sm font-medium font-bricolage text-primary">
              Our Values
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-dela uppercase text-primary">
            WHY WE STAND FOR
            <br />
            <WavyUnderline>EXCELLENCE</WavyUnderline>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {/* Large card - spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 relative group"
          >
            <div
              className="h-full min-h-[280px] rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
              style={{
                backgroundColor: "#F8FFE8",
                border: "1px solid rgba(37, 62, 53, 0.2)",
              }}
            >
              <div className="relative z-10">
                <span className="text-6xl md:text-8xl font-dela opacity-20 text-forest-muted">
                  01
                </span>
                <h3 className="text-2xl md:text-3xl font-dela mt-4 mb-4 uppercase text-forest-muted">
                  {values[0].title}
                </h3>
                <p
                  className="text-base md:text-lg font-bricolage max-w-md"
                  style={{ color: "rgba(37, 62, 53, 0.7)" }}
                >
                  {values[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Medium card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 relative group"
          >
            <div
              className="h-full min-h-[280px] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
              style={{
                backgroundColor: "#F8FFE8",
                border: "1px solid rgba(37, 62, 53, 0.2)",
              }}
            >
              <div className="relative z-10">
                <span className="text-5xl md:text-6xl font-dela opacity-20 text-forest-muted">
                  02
                </span>
                <h3 className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase text-forest-muted">
                  {values[1].title}
                </h3>
                <p
                  className="text-sm md:text-base font-bricolage"
                  style={{ color: "rgba(37, 62, 53, 0.7)" }}
                >
                  {values[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Medium card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 relative group"
          >
            <div
              className="h-full min-h-[260px] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
              style={{
                backgroundColor: "#F8FFE8",
                border: "1px solid rgba(37, 62, 53, 0.2)",
              }}
            >
              <div className="relative z-10">
                <span className="text-5xl md:text-6xl font-dela opacity-20 text-forest-muted">
                  03
                </span>
                <h3 className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase text-forest-muted">
                  {values[2].title}
                </h3>
                <p
                  className="text-sm md:text-base font-bricolage"
                  style={{ color: "rgba(37, 62, 53, 0.7)" }}
                >
                  {values[2].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Medium card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 relative group"
          >
            <div
              className="h-full min-h-[260px] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
              style={{
                backgroundColor: "#F8FFE8",
                border: "1px solid rgba(37, 62, 53, 0.2)",
              }}
            >
              <div className="relative z-10">
                <span className="text-5xl md:text-6xl font-dela opacity-20 text-forest-muted">
                  04
                </span>
                <h3 className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase text-forest-muted">
                  {values[3].title}
                </h3>
                <p
                  className="text-sm md:text-base font-bricolage"
                  style={{ color: "rgba(37, 62, 53, 0.7)" }}
                >
                  {values[3].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Wide card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 relative group"
          >
            <div
              className="h-full min-h-[260px] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
              style={{
                backgroundColor: "#F8FFE8",
                border: "1px solid rgba(37, 62, 53, 0.2)",
              }}
            >
              <div className="relative z-10">
                <span className="text-5xl md:text-6xl font-dela opacity-20 text-forest-muted">
                  05
                </span>
                <h3 className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase text-forest-muted">
                  {values[4].title}
                </h3>
                <p
                  className="text-sm md:text-base font-bricolage"
                  style={{ color: "rgba(37, 62, 53, 0.7)" }}
                >
                  {values[4].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Values;
