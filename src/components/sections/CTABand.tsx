import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CTABand = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-forest-deep relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-dela text-primary mb-8 leading-tight"
        >
          What is actually stopping your marketing from working?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-4"
        >
          <Link
            to="/booking"
            
          >
            <Button
              size="lg"
              className="group px-5 sm:px-10 py-4 mt-5 text-sm md:text-lg w-full sm:w-auto"
            >
              Book a free 30-min diagnostic
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>

          </Link>

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
