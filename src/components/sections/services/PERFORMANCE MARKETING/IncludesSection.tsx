import { motion } from "framer-motion";
import { Search, Target, MousePointerClick, LineChart } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";

export const IncludesSection = () => {
  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    <section className="px-4 sm:px-10 md:px-20 bg-background relative z-10 py-20 md:py-[100px]">
      <motion.h2
        {...scrollAnimProps}
        className="font-dela text-center uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
      >
        WHAT IT <WavyUnderline>INCLUDES</WavyUnderline>
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">

        {/* Box 1 */}
        <motion.div
          {...scrollAnimProps}
          className="lg:col-span-2 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />

          <Search className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
          <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
            META & GOOGLE ADS
          </h3>
          <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 max-w-md">
            Full campaign build, audience architecture, creative iteration across Search, Display, YouTube, and Performance Max.
          </p>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          {...scrollAnimProps}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Target className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
          <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
            CONVERSION TRACKING
          </h3>
          <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">
            GA4, Meta Pixel, and offline conversion integration.
          </p>
        </motion.div>

        {/* Box 3 */}
        <motion.div
          {...scrollAnimProps}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <MousePointerClick className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
          <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
            A/B TESTING
          </h3>
          <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">
            Creative, copy, landing page, and audience simultaneously.
          </p>
        </motion.div>

        {/* Box 4 */}
        <motion.div
          {...scrollAnimProps}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-primary/5 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <LineChart className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
          <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
            REVENUE ATTRIBUTION DASHBOARD
          </h3>
          <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl">
            Bundled into every retainer. Plus monthly performance reviews with a single P&L view.
          </p>
        </motion.div>

      </div>
    </section>
 
    </>
  );
};
