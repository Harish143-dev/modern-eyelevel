import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";

const WhyEyeLevelExists = () => {
  return (
    <section className="py-20 px-4 sm:px-10 md:px-20 relative bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-center text-center"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 justify-center"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            <span className="text-sm font-medium font-bricolage text-primary">
              Our Story
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase text-primary text-center">
            Why <WavyUnderline>Eyelevel</WavyUnderline> exists
          </h2>
        </motion.div>

        {/* Editorial Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Progressive Timeline Story (7/12 width) */}
          <div className="lg:col-span-7 relative">
            <div className="border-l-2 border-primary/10 pl-8 space-y-12 relative ml-3 md:ml-4">
              {/* Item 01 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <p className="text-lg md:text-xl font-bricolage leading-relaxed text-foreground">
                  For 15 years, our founder sat on the other side of the table. He was
                  the marketing head agencies pitched to. The person deciding which
                  agency got the budget, which strategy got approved, and which agency
                  got fired.
                </p>
              </motion.div>

              {/* Item 02 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <p className="text-base md:text-lg leading-relaxed font-bricolage text-foreground/80">
                  He saw the same pattern everywhere. Agencies built to bill, not to
                  grow. Retainers that padded. Reports that obscured. That is not a few
                  bad agencies. That is how the industry is structured.
                </p>
              </motion.div>

              {/* Item 03 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <p className="text-base md:text-lg leading-relaxed font-bricolage text-foreground/80">
                  Eyelevel answers one question. What would the agency look like if it
                  were built by the client, for the client? Marketing as a growth
                  engine, not a cost center.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column — Pull Quote Card (5/12 width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Background glow behind card */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl transform rotate-3 scale-95 opacity-50 pointer-events-none" />

            <div
              className="relative rounded-3xl p-8 md:p-10 backdrop-blur-md overflow-hidden"
              style={{
                backgroundColor: "rgba(226, 254, 165, 0.04)",
                border: "1px solid rgba(226, 254, 165, 0.15)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Giant quote mark icon in bottom-right */}
              <span
                className="absolute right-4 bottom-2 text-primary/5 text-9xl font-dela pointer-events-none select-none"
                style={{ fontFamily: 'serif' }}
              >
                ”
              </span>

              <div className="relative z-10 space-y-6">
                <p className="font-dela text-xl md:text-2xl text-primary leading-snug tracking-tight">
                  "We're not your agency. We're your extended marketing team."
                </p>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyEyeLevelExists;
