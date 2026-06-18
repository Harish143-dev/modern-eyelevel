import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";

const HowItConnects = () => {
  return (
    <section className="py-24 md:py-32 px-4 relative bg-forest-deep text-center z-10">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow only, as requested by user to not repeat headline */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            <span className="text-sm font-medium font-bricolage text-primary">
              How it all connects
            </span>
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase text-primary mb-8 leading-tight">
              These are not nine <WavyUnderline>separate services</WavyUnderline>
            </h2>
            <p className="text-lg md:text-xl lg:text-xl font-bricolage leading-relaxed" style={{ color: "rgba(248, 255, 232, 0.85)" }}>
              They are nine parts of one growth system. Strategy informs creative. <br />Creative feeds performance. Performance data shapes SEO. SEO feeds content. <br /> Content builds the brand. The brand closes the deal.
            </p>
            <p className="text-lg md:text-xl lg:text-xl font-bricolage leading-relaxed mt-6 text-primary">
              When one studio runs all of it, nothing gets lost in translation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItConnects;
