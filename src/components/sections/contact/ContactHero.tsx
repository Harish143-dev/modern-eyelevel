import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";

const ContactHero = () => {
  return (
    <section className="px-4 min-h-[70vh] md:min-h-screen flex flex-col justify-center ] pt-32 pb-[80px]" style={{ backgroundColor: "#1F3D2E" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary font-bricolage text-sm font-medium mb-14">
            Talk to Eyelevel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-dela mb-6 text-primary uppercase leading-tight max-w-4xl text-center mx-auto">
            <span className="block"> Book your</span>
            <span className="text-2xl md:text-3xl lg:text-5xl block md:inline relative bottom-2"> 30-minute <WavyUnderline>diagnostic</WavyUnderline></span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 font-bricolage max-w-4xl text-white/90 leading-relaxed text-center">
            No pitch deck. No slide show. A direct conversation about what is and is not working in your marketing — and what we would do differently.
          </p>
          <p className="text-base font-bricolage max-w-3xl text-white/60 leading-relaxed text-center">
            We do not send a proposal on call one. We listen, ask the questions that matter, and tell you honestly what we see. If there is a fit, we talk next steps.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
