import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";

const pillars = [
  {
    number: "01",
    title: "The Insider Advantage",
    body: "Built from the client side. The person who builds your strategy has sat in your chair.",
  },
  {
    number: "02",
    title: "One Team, Full Stack",
    body: "Strategy and campaigns built by the same people. Nothing subcontracted.",
  },
  {
    number: "03",
    title: "Outcomes, Not Activities",
    body: "We measure what your board measures. Not reach. Not impressions. Revenue.",
  },
];

const Beliefs = () => {
  return (
    <section className="py-20 px-4 relative bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
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
                Our Beliefs
              </span>
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase text-primary text-center">
            What we <WavyUnderline>believe</WavyUnderline>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, index) => (
            <div key={pillar.number} className="relative flex">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-4 rounded-2xl p-6 md:p-8 h-full min-h-[200px] relative z-10 w-full"
                style={{
                  backgroundColor: "rgba(226, 254, 165, 0.1)",
                  border: "2px solid rgba(226, 254, 165, 0.1)",
                }}
              >
                <h3 className="text-lg font-dela uppercase text-primary leading-snug">
                  {pillar.title}
                </h3>

                <p
                  className="text-sm font-bricolage leading-relaxed"
                  style={{ color: "rgba(248, 255, 232, 0.7)" }}
                >
                  {pillar.body}
                </p>
              </motion.div>

              {index < pillars.length - 1 && (
                <>
                  {/* Mobile connector */}
                  <div className="md:hidden absolute left-1/2 top-full -translate-x-1/2 w-[2px] h-5 bg-primary" />

                  {/* Desktop connector */}
                  <div className="hidden md:block absolute top-1/2 left-full -translate-y-1/2 w-5 h-[2px] bg-primary" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beliefs;
