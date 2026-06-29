import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";

const WhyEyeLevelExists = () => {
  return (
    <section className="px-4 relative bg-background py-[100px] md:py-[120px]">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-center text-center"
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

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase text-center text-primary">
            Why <WavyUnderline>Eyelevel</WavyUnderline> Exists
          </h2>
        </motion.div>

        {/* Editorial Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Progressive Timeline Story (7/12 width) */}
          <div className="lg:col-span-7 relative">
            <div className="relative space-y-8">
              {/* Item 01 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-8"
              >
                {/* Vertical line segment */}
                <div className="absolute left-[7px] top-4 bottom-8 w-[1px] bg-primary/20" />

                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border border-primary bg-background flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <p className="text-sm lg:text-lg leading-relaxed font-bricolage font-light" style={{ color: "rgba(248, 255, 232, 0.8)" }}>
                  For 15 years, our founder sat on the other side of the table. He was
                  the marketing head agencies pitched to. The person deciding which
                  agency got the budget, which strategy got approved, and which agency
                  got fired.
                </p>

                {/* Divider line */}
                <div className="w-full h-[1px] bg-primary/10 mt-8" />
              </motion.div>

              {/* Item 02 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative pl-8"
              >
                {/* Vertical line segment */}
                <div className="absolute left-[7px] top-4 bottom-8 w-[1px] bg-primary/20" />

                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border border-primary bg-background flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <p className="text-sm md:text-lg leading-relaxed font-bricolage font-light" style={{ color: "rgba(248, 255, 232, 0.8)" }}>
                  He saw the same pattern everywhere. Agencies built to bill, not to
                  grow. Retainers that padded. Reports that obscured. That is not a few
                  bad agencies. That is how the industry is structured.
                </p>

                {/* Divider line */}
                <div className="w-full h-[1px] bg-primary/10 mt-8" />
              </motion.div>

              {/* Item 03 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative pl-8"
              >
                {/* Vertical line segment */}
                <div className="absolute left-[7px] top-4 bottom-1 w-[1px] bg-primary/20" />

                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border border-primary bg-background flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <p className="text-sm md:text-lg leading-relaxed font-bricolage font-light" style={{ color: "rgba(248, 255, 232, 0.8)" }}>
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
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl transform rotate-3 scale-95 opacity-30 pointer-events-none" />

            <div
              className="relative rounded-3xl p-8 md:p-10 backdrop-blur-md overflow-hidden bg-[#0D1F1A]/95 border border-primary/10"
              style={{
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Topographic Lines SVG Overlay */}
              {/*<svg
                className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none opacity-[0.05] text-primary"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="200" cy="200" r="40" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="200" stroke="currentColor" strokeWidth="1.5" />
              </svg>*/}

              <div className="relative z-10">
                {/* Large quotes */}
                <span className="font-serif text-6xl md:text-7xl text-primary/30 block leading-none select-none pointer-events-none mb-6">
                  “
                </span>

                <p className="text-xl md:text-2xl lg:text-3xl text-white font-bricolage font-medium leading-snug tracking-tight mb-8">
                  We're not your agency. <br />
                  We're your <span className="text-primary font-semibold">extended <br />marketing</span> team.
                </p>

                {/* Divider line inside card */}
                <div className="w-full h-[1px] bg-primary/10 mb-6" />

                {/* Card footer */}
                <div className="flex items-center gap-2">
                  <span className="text-primary/60 text-xs font-semibold tracking-widest uppercase font-bricolage">
                    - Eyelevel growth STUDIO
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyEyeLevelExists;
