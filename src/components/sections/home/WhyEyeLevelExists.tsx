import { motion } from "framer-motion";
import {
  Zap,
  Target,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import Eyeball from "@/components/shared/Eyeball";
import GreenButton from "@/components/shared/GreenButton";

const WhyEyeLevelExists = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-6 overflow-hidden relative md:py-[28px] bg-secondary"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Headline */}
        <div className="text-center mb-16 md:mb-24">
          <GreenButton>Why EyeLevel exists</GreenButton>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dela text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight mb-6 mt-6 uppercase"
          >
 
            <span className="text-primary">EyeLevel is built to <WavyUnderline className=" text-primary">grow</WavyUnderline></span>
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: The Unblinking Eye Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[10%] rounded-full border border-white/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[20%] rounded-full border border-white/30"
              />

              {/* The Eye */}
              <div className="absolute inset-[25%] flex items-center justify-center">
                <Eyeball />
              </div>

              {/* Floating icons around the eye */}
              {[
                { Icon: Zap, position: "top-0 left-1/2 -translate-x-1/2", delay: 0 },
                { Icon: Target, position: "right-0 top-1/2 -translate-y-1/2", delay: 0.2 },
                { Icon: TrendingUp, position: "bottom-0 left-1/2 -translate-x-1/2", delay: 0.4 },
                { Icon: Lightbulb, position: "left-0 top-1/2 -translate-y-1/2", delay: 0.6 },
              ].map(({ Icon, position, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + delay, duration: 0.4 }}
                  className={`absolute ${position}`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-xl bg-background border border-white/10 shadow-lg flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Body Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg md:text-xl font-bricolage leading-relaxed text-foreground">
                EyeLevel Growth Studio is a digital marketing agency in Chennai that runs strategy, performance, content, and AI as one connected system. Not three vendors. Not three invoices. One studio.
              </p> <br />
              <p className="text-lg md:text-xl font-bricolage leading-relaxed text-foreground">
                Every retainer pads. Every report obscures. Every campaign looks busier than it works. That is not a few bad agencies. That is how the industry is structured.
              </p> <br />
              <p className="text-lg md:text-xl font-bricolage leading-relaxed text-foreground">
                EyeLevel was built by a marketing head who spent 15 years on the client side, being the one pitched to. It is the team he always wished he could plug in.
              </p>
            </motion.div>

            {/* Three Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ul className="space-y-4">
                {[
                  "Senior practitioners run every strategy",
                  "AI-native production, human-led judgment",
                  "Outcomes, not activities",
                ].map((point, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-bricolage text-foreground/90 font-medium text-lg">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Pull Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative pt-4"
            >
              <div className="p-6 md:p-8 border-l-4 border-primary bg-primary/5 rounded-r-2xl relative overflow-hidden">
                <p className="font-dela text-xl md:text-2xl text-primary leading-tight relative z-10 italic">
                  "We're not your agency. We're your extended marketing team."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default WhyEyeLevelExists;
