import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    <section className="px-4 bg-background relative z-10 py-[100px]">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.h2
          {...scrollAnimProps}
          className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-6"
        >
          READY TO <WavyUnderline> TALK? </WavyUnderline>
        </motion.h2>

        <motion.p
          {...scrollAnimProps}
          className="font-bricolage text-foreground text-lg mb-10"
        >
          30 minutes. No pitch deck. We will tell you what we see.
        </motion.p>

        <motion.div
          {...scrollAnimProps}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link to="/booking">
            <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full">
              Book a free 30-min diagnostic
            </Button>
          </Link>
          <a
            href="/services"
            className="font-bricolage font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
          >
            See all services <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
 
    </>
  );
};
