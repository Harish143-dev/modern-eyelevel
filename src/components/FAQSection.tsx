import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import WavyUnderline from "@/components/WavyUnderline";

const faqs = [
  {
    question:
      'What exactly is a growth studio? Is it just a trendy term for an agency?',
    answer:
      "No. An agency charges you to push buttons. A Growth Studio builds the machine. We don't just execute tasks to fill a timesheet; we fuse strategy, creativity and code into a single system designed to generate revenue, not just noise.",
    tag: "The Truth",
  },
  {
    question: "Why shouldn't I just hire a traditional marketing firm?",
    answer:
      'Because you don\'t need more chaos; you need a direction. Traditional firms are great at spending budget on "spray and pray" tactics. We use the Rod of Growth to part the seas of complexity and build a single, clear path to Growth.',
    tag: "Fair Point",
  },
  {
    question: "What results can I actually expect?",
    answer:
      'If you want "likes" and "brand love," hire a poet. If you want bankable growth, hire us. We ignore vanity metrics in favor of the only stats that matter: Leads. Sales. Profit.',
    tag: "Show Me Money",
  },
  {
    question: "Do you know my industry?",
    answer:
      "We specialize in Edu-Marketing, Sports, Real Estate, and B2B. But frankly, growth is a discipline, not a niche. We carry a Shape-Shifting Toolkit (Strategy, AI, Automation) that works regardless - selling condos or courses.",
    tag: "Industry",
  },
  {
    question: "How much does this cost?",
    answer:
      "It depends on how fast you want to grow. We don't do \"cookie-cutter\" pricing because we don't do cookie-cutter strategy. Let us run a Growth Audit first - if we can't make you money, we don't deserve yours.",
    tag: "Investment",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 px-4 bg-[#173229] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Interrogation badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-[#E2FEA5]/30 bg-[#E2FEA5]/5"
          >
            <span
              className="text-sm font-medium font-bricolage"
              style={{ color: "#E2FEA5" }}
            >
              The Interrogation
            </span>
          </motion.div>

          <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl text-[#E2FEA5] mb-6 leading-tight uppercase">
            Here’s what people <WavyUnderline> want to know</WavyUnderline>
          </h2>
          <p className="font-bricolage text-lg">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wider"
              style={{ backgroundColor: "#d0e999", color: "#163027" }}
            >
              ("Just the facts...")
            </span>
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "bg-gradient-to-br from-lime/20 via-lime/10 to-transparent border-lime/30"
                    : "bg-white/5 hover:bg-white/[0.07] border-white/10"
                } border`}
              >
                {/* Question Button */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full p-6 md:p-8 text-left flex items-start gap-4 group"
                >
                  {/* Number indicator */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-dela text-sm transition-all duration-300"
                    style={{
                      backgroundColor:
                        openIndex === index
                          ? "#d0e999"
                          : "rgba(255,255,255,0.1)",
                      color:
                        openIndex === index
                          ? "#173229"
                          : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    {/* Tag */}
                    <span
                      className={`inline-block text-[10px] uppercase tracking-wider font-bricolage mb-2 transition-colors duration-300 ${
                        openIndex === index ? "text-lime" : "text-white/40"
                      }`}
                    >
                      {faq.tag}
                    </span>

                    {/* Question */}
                    <h3
                      className={`font-bricolage text-lg md:text-xl font-semibold pr-8 transition-colors duration-300 ${
                        openIndex === index ? "text-white" : "text-white/80"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor:
                        openIndex === index
                          ? "#d0e999"
                          : "rgba(255,255,255,0.1)",
                      color:
                        openIndex === index
                          ? "#173229"
                          : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[4.5rem] md:pl-[5.5rem]">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="relative"
                        >
                          {/* Decorative line */}
                          <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-lime/50 via-lime/20 to-transparent" />

                          <p className="text-white/70 font-bricolage text-base md:text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 hover:border-lime/30 transition-all duration-300 group"
          >
            <span className="text-white/60 font-bricolage text-sm">
              Still have questions?
            </span>
            <span
              className="font-bricolage text-sm font-semibold group-hover:translate-x-1 transition-transform"
              style={{ color: "#d0e999" }}
            >
              Let's talk →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
