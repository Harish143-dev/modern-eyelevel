import { motion } from "framer-motion";

export const QuoteSection = () => {
  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    <section className="px-4 bg-background relative z-10 flex justify-start items-center py-[100px]">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div
          {...scrollAnimProps}
          className="border border-white/5 rounded-2xl md:rounded-[2rem] p-8 md:p-12 lg:p-16 bg-forest-deep relative overflow-hidden flex flex-col md:flex-row gap-8 md:gap-16 items-start shadow-xl"
        >
          {/* Ambient Background Gradient */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-[2rem] z-0">
            <div className="absolute top-[-30%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full"></div>
            {/* Subtle concentric rings like the image */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[150%] rounded-full border border-primary/5 opacity-50"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[120%] rounded-full border border-primary/5 opacity-50"></div>
          </div>

          {/* Left Side: Eyebrow */}
          <div className="md:w-1/4 shrink-0 flex flex-col items-start relative z-10 pt-2">
            <h3 className="text-white font-bricolage text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold mb-4">
              THE OUTCOME
            </h3>
            <div className="w-8 h-[2px] bg-primary"></div>
          </div>

          {/* Vertical Divider (Desktop only) */}
          <div className="hidden md:block w-px h-auto self-stretch bg-white/10 relative z-10"></div>

          {/* Right Side: Quote */}
          <div className="md:w-3/4 relative z-10">
            <span className="text-4xl md:text-5xl text-primary/40 font-dela leading-none block mb-4">“</span>
            <p className="font-bricolage text-xl md:text-2xl lg:text-[28px] text-white/90 leading-relaxed font-light">
              "YOUR LEADERSHIP IS VISIBLE TO THE BUYERS WHO MATTER. INBOUND DMS FROM PEOPLE WHO ALREADY UNDERSTAND WHAT YOU DO — BECAUSE THEY HAVE BEEN READING YOUR CONTENT."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
 
    </>
  );
};
