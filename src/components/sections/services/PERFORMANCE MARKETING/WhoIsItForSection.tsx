import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";

export const WhoIsItForSection = () => {
  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    <section className="px-4 bg-background relative z-10 overflow-hidden py-[100px]">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.h2
          {...scrollAnimProps}
          className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-8"
        >
          WHO IT IS <WavyUnderline> FOR </WavyUnderline>
        </motion.h2>

        <motion.p
          {...scrollAnimProps}
          className="text-lg font-bricolage text-foreground max-w-3xl mx-auto text-center leading-relaxed"
        >
          Real estate developers who need qualified site visit bookings. Healthcare clinics that need patient calls, not vanity impressions. D2C and retail brands who need ROAS they can defend to a board.
        </motion.p>
      </div>
    </section>
 
    </>
  );
};
