import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";

interface FAQ {
  question: string;
  answer: string;
}
interface FAQSectionProps {
  faqs: FAQ[];
  bgClass?: string;
}
const FAQSection = ({
  faqs,
  bgClass = "bg-forest-deep",
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`py-12 md:py-16 px-4 ${bgClass} relative overflow-hidden`}>
      {/* Background Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div> */}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Interrogation badge */}
          <GreenButton>Common questions</GreenButton>

          <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight uppercase">
            Here’s what people <WavyUnderline> want to know</WavyUnderline>
          </h2>
          <p className="font-bricolage text-lg">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wider bg-primary text-secondary"
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
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${openIndex === index
                  ? "bg-gradient-to-br from-lime/20 via-lime/10 to-transparent border-primary/30"
                  : "bg-white/5 hover:bg-white/[0.07] border-white/10"
                  } border`}
              >
                {/* Question Button */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full p-6 md:p-8 text-left flex flex-col md:flex-row md:items-start gap-4 group"
                >
                  {/* Mobile Top Row: Number & Icon */}
                  <div className="flex items-center justify-between w-full md:w-auto">
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

                    {/* Toggle Icon (Mobile Only) */}
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex md:hidden items-center justify-center transition-all duration-300"
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
                  </div>

                  <div className="flex-1 pt-1 md:pt-[6px]">
                    {/* Question */}
                    <h3
                      className={`font-bricolage text-lg md:text-xl font-semibold md:pr-8 transition-colors duration-300 ${openIndex === index ? "text-white" : "text-white/80"
                        }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon (Desktop Only) */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full hidden md:flex items-center justify-center transition-all duration-300"
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
                      <div className="px-6 md:px-8 pb-6 md:pb-8 md:pl-[5.5rem]">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="relative"
                        >
                          {/* Decorative line (desktop only since mobile has no indent) */}
                          <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-lime/50 via-lime/20 to-transparent hidden md:block" />

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
            to="/contact-us"
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
          >
            <span className="text-white/60 font-bricolage text-sm">
              Still have questions?
            </span>
            <span
              className="font-bricolage text-sm font-semibold group-hover:translate-x-1 transition-transform text-primary"
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




