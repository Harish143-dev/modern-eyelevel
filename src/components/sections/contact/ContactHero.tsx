import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";
import eyelevelLogo from "@/assets/branding/eyelevel_Logo.svg";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden px-4 min-h-[65vh] lg:min-h-[95vh] flex flex-col justify-center pt-40 pb-[100px] bg-forest-deep">
      {/* Background Logo Watermark */}
      <div className="absolute top-60 -translate-y-1/2 -right-20 md:-right-40 w-[200px] md:w-[400px] lg:w-[700px] opacity-[0.03] pointer-events-none select-none z-0">
        <img
          src={eyelevelLogo}
          alt=""
          className="w-full h-auto object-contain brightness-0 invert"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <GreenButton>Talk to Eyelevel</GreenButton>
          <h1 className="mt-2 md:mt-4 text-3xl md:text-5xl lg:text-7xl font-dela text-primary uppercase leading-tight max-w-4xl text-center mx-auto">
            <span> Book your </span>
            <span className="block"><WavyUnderline>30-minute</WavyUnderline></span>
            <span> diagnostic </span>
          </h1>

          <div className="w-20 h-1 opacity-50 bg-primary my-8 rounded-full mx-auto"></div>
          <p className="text-base md:text-xl lg:text-2xl mb-4 font-bricolage max-w-4xl text-white/90 leading-relaxed text-center mx-auto px-2">
            No pitch deck. No slide show. A direct conversation about what is and is not working in your marketing — and what we would do differently.
          </p>
          <p className="text-sm md:text-base font-bricolage max-w-3xl text-white/60 leading-relaxed text-center mx-auto px-2">
            We do not send a proposal on call one. We listen, ask the questions that matter, and tell you honestly what we see. If there is a fit, we talk next steps.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
