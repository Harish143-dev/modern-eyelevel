import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";

const ContactWhatToExpect = () => {
  return (
    <section className="py-20 md:py-32 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-dela text-primary mb-16 text-center uppercase"
        >
          What the <WavyUnderline>30 minutes </WavyUnderline> looks like
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              num: "01",
              title: "We ask about your business, not your brief",
              body: "We want to understand what you are trying to grow, what has been tried, and what the board cares about. Not your industry category. Your actual situation."
            },
            {
              num: "02",
              title: "We tell you what we see",
              body: "Based on what you share, we will give you a straight read on where the gaps are. If something obvious is broken, we will say so. This is not a soft intro call."
            },
            {
              num: "03",
              title: "We talk about fit honestly",
              body: "We are not the right studio for every company. If we are not the right fit, we will say that too. If there is a clear match, we outline what working together could look like."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col h-full group"
            >
              <h3 className="text-xl md:text-2xl font-dela mb-4 uppercase text-white group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-base md:text-lg font-bricolage text-white/60 leading-relaxed flex-1">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactWhatToExpect;
