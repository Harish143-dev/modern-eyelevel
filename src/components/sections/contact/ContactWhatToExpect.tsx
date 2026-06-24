import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";

const ContactWhatToExpect = () => {
  return (
    <section className="px-4 border-t border-white/5 py-[100px] bg-forest-deep">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(226,254,165,0)", "0px 0px 25px rgba(226,254,165,0.06)", "0px 0px 0px rgba(226,254,165,0)"]
              }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }
              }}
              className="bg-background rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col h-full group hover:border-primary/30 transition-colors duration-500 relative overflow-hidden"
            >
              {/* Background Running Number Effect */}
              <motion.div 
                animate={{ y: [0, -10, 0], opacity: [0.02, 0.06, 0.02] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 1 }}
                className="absolute -bottom-2 -right-2 text-8xl md:text-[120px] font-dela text-white group-hover:text-primary transition-colors duration-500 z-0 pointer-events-none select-none"
              >
                {card.num}
              </motion.div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl md:text-2xl font-dela mb-4 uppercase text-white group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm font-bricolage text-white/60 leading-relaxed flex-1 group-hover:text-white/80 transition-colors duration-300">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactWhatToExpect;
