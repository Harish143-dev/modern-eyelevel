import { motion } from "framer-motion";
import { Star } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";

const Difference = () => {
  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-24 px-4 bg-forest-deep relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <GreenButton>The Difference</GreenButton>
          <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl text-primary mb-6 uppercase leading-tight">
            What makes us <WavyUnderline>different</WavyUnderline>
          </h2>
        </motion.div>

        {/* 3 Differentiator Cards */}
        <div className="grid md:grid-cols-3 gap-6 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background rounded-3xl p-5 border border-white/10"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <h3 className="font-dela text-xl md:text-2xl text-white mb-4 uppercase">Built from the client side</h3>
            <p className="font-bricolage text-white/60">Eyelevel was built by a marketing head who spent 15 years being pitched to, deciding which agency got the budget and which got fired. (The full career story and the brands live on the founder's personal site.)</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-background rounded-3xl p-5 border border-white/10"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <h3 className="font-dela text-xl md:text-2xl uppercase text-white mb-4">One team, full stack</h3>
            <p className="font-bricolage text-white/60">Strategy, creative, performance, SEO, and content from the same people. Nothing subcontracted.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-background rounded-3xl p-5 border border-white/10"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <h3 className="font-dela text-xl md:text-2xl uppercase text-white mb-4">Revenue Attribution built in</h3>
            <p className="font-bricolage text-white/60">Every growth retainer ties campaigns to a business outcome, not vanity metrics.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
