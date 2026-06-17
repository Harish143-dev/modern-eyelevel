import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";

const WhyEyeLevelExists = () => {
  return (
    <section className="py-20 px-4 relative bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            <span className="text-sm font-medium font-bricolage text-primary">
              Our Story
            </span>
          </div>

          <h2 className="text-2xl  md:text-4xl lg:text-5xl font-dela uppercase text-primary">
            Why <WavyUnderline>EyeLevel</WavyUnderline> exists
          </h2>
        </motion.div>

        {/* Body + Pull-quote grid */}
        <div className="grid md:grid-cols-[1fr_1px_360px] gap-10 md:gap-14 items-start">
          {/* Left — paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p
              className="text-lg leading-relaxed font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              For 15 years, our founder sat on the other side of the table. He was
              the marketing head agencies pitched to. The person deciding which
              agency got the budget, which strategy got approved, and which agency
              got fired.
            </p>
            <p
              className="text-lg leading-relaxed font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              He saw the same pattern everywhere. Agencies built to bill, not to
              grow. Retainers that padded. Reports that obscured. That is not a few
              bad agencies. That is how the industry is structured.
            </p>
            <p
              className="text-lg leading-relaxed font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              EyeLevel answers one question. What would the agency look like if it
              were built by the client, for the client? Marketing as a growth
              engine, not a cost center.
            </p>
          </motion.div>

          {/* Vertical divider — hidden on mobile */}
          <div
            className="hidden md:block w-px self-stretch"
            style={{ backgroundColor: "rgba(226, 254, 165, 0.15)" }}
          />

          {/* Right — pull-quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* Horizontal rule above on mobile */}
            <div
              className="block md:hidden h-px w-full mb-8"
              style={{ backgroundColor: "rgba(226, 254, 165, 0.15)" }}
            />

            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                backgroundColor: "rgba(226, 254, 165, 0.07)",
                border: "1px solid rgba(226, 254, 165, 0.12)",
              }}
            >
              <span
                className="block text-5xl font-dela leading-none mb-4 text-primary"
                aria-hidden="true"
              >
                "
              </span>

              <p className="text-xl md:text-2xl font-dela leading-snug text-primary">
                We're not your agency. We're your extended marketing team.
              </p>

              <div className="flex items-center gap-3 mt-6">
                <div
                  className="w-8 h-px"
                  style={{ backgroundColor: "rgba(226, 254, 165, 0.4)" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyEyeLevelExists;
