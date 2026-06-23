import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";

const stats = [
  { stat: "15+", label: "Years client-side" },
  { stat: "5", label: "Industries, hands-on" },
  { stat: "0", label: "Account Managers between you and the person accountable" },
];

const Numbers = () => {
  return (
    <section className="py-20 px-4 relative bg-secondary">
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

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase text-primary text-center">
            Built on experience, <WavyUnderline>not layers</WavyUnderline>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4 md:px-8 py-10 md:py-12 gap-2 rounded-2xl"
              style={{
                border: "2px solid rgba(226, 254, 165, 0.15)",
                backgroundColor: "rgba(226, 254, 165, 0.03)",
              }}
            >
              <span className="text-4xl md:text-6xl lg:text-7xl font-dela text-primary leading-none">
                {item.stat}
              </span>

              <span
                className="text-xs md:text-sm font-bricolage leading-relaxed max-w-[120px] md:max-w-[160px] min-h-[72px] flex items-center"
                style={{ color: "rgba(248, 255, 232, 0.6)" }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
