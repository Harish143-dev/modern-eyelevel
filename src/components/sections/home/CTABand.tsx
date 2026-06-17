import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WavyUnderline from "@/components/shared/WavyUnderline";

const CTABand = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-dela text-primary mb-6 leading-tight uppercase w-full"
        >
          What is actually stopping your <WavyUnderline className="text-white">marketing </WavyUnderline> from working?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/80 font-bricolage text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          30 minutes. No pitch deck. We will tell you what we see.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="group px-5 sm:px-10 py-4 mt-5 text-sm md:text-lg w-full sm:w-auto"
          >
            <Link to="/booking">
              Book a free 30-min diagnostic
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </Button>

          <p className="font-bricolage text-white/80 mt-4 font-medium text-lg">
            Or email <a href="mailto:hello@eyelevelstudio.in" className="underline hover:text-primary transition-colors">hello@eyelevelstudio.in</a>
          </p>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      {/* <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" /> */}
    </section>
  );
};

export default CTABand;
