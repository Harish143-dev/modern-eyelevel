import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";
import { Quote } from "lucide-react";
import founderImg from "@/assets/people/akmal.webp";

const FounderSection = () => {
  return (
    <section className="lg:py-10  md:py-32 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-10 text-center ">
              <GreenButton>The Founder</GreenButton>
              <h2 className="font-dela text-[26px] sm:text-3xl md:text-5xl text-primary mt-6 leading-[1.1] uppercase break-words">
                The marketing practitioner who sat on <WavyUnderline>your side</WavyUnderline> of the table
              </h2>
            </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4 ">
              <h3 className="font-dela text-2xl text-primary">Akmal Rahman</h3>
              <p className="font-bricolage text-xl text-foreground/80 font-medium">Chief Growth Architect</p>

              <p className="font-bricolage text-lg text-foreground/70 leading-relaxed">
                <span className="font-bold text-foreground">15 years client-side.</span> Before building EyeLevel, Akmal managed multi-million dollar budgets and ran aggressive growth mandates for some of the biggest names in the industry.
              </p>
            </div>

            <div className="py-6 border-y border-white/10">
              <h4 className="font-bricolage text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">Past Leadership & Mandates at:</h4>
              <div className="flex flex-wrap gap-3">
                {["Hyundai Motors India", "SPR Highliving", "FreshToHome", "Schwing Stetter India", "Propel Industries"].map((employer, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-bricolage text-sm text-foreground/80">
                    {employer}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-primary/5 rounded-2xl p-2 sm:p-4 text-center border border-primary/20">
                <div className="font-dela text-[22px] sm:text-2xl md:text-3xl text-primary mb-1">15+</div>
                <div className="font-bricolage text-[10px] sm:text-xs text-foreground/70 uppercase break-words">Years Client-Side</div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-2 sm:p-4 text-center border border-primary/20">
                <div className="font-dela text-[22px] sm:text-2xl md:text-3xl text-primary mb-1">5+</div>
                <div className="font-bricolage text-[10px] sm:text-xs text-foreground/70 uppercase break-words">Major Verticals</div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-2 sm:p-4 text-center border border-primary/20">
                <div className="font-dela text-[22px] sm:text-2xl md:text-3xl text-primary mb-1">100%</div>
                <div className="font-bricolage text-[10px] sm:text-xs text-foreground/70 uppercase break-words">Accountability</div>
              </div>
            </div>

            {/* Quote */}
            <div className="relative pt-6">
              <Quote className="absolute top-0 left-0 w-8 h-8 text-primary/20 -scale-x-100" />
              <p className="font-dela text-lg md:text-xl text-foreground/90 italic leading-relaxed pl-10">
                Founder Quote to be added. E.g., 'Agencies are built to bill you. We are built to grow you.
              </p>
            </div>

          </motion.div>

          {/* Right Column: Headshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden group border border-white/5">
              {/* Background styling for image container */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              <img
                src={founderImg}
                alt="Akmal Rahman - Chief Growth Architect"
                className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-bricolage text-white text-sm font-medium tracking-wider uppercase">Built For Growth</span>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
