import { motion } from "framer-motion";
import {
  Zap,
  Target,
  TrendingUp,
  Lightbulb,
  User,
  Quote,
} from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import Eyeball from "@/components/shared/Eyeball";
import GreenButton from "@/components/shared/GreenButton";

const pillars = [
  { Icon: User, title: "Senior practitioners", caption: "run every strategy" },
  { Icon: Zap, title: "AI-native production", caption: "human-led judgment" },
  { Icon: Target, title: "Outcomes, not activities", caption: "" },
];

const WhyEyeLevelExists = () => {
  return (
    <section
      id="about"
      className="px-4 md:px-6 overflow-hidden relative ] bg-secondary py-[100px]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GreenButton align="start">Why Eyelevel exists</GreenButton>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-dela text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight mb-6 uppercase text-foreground"
            >
              Eyelevel is built to{" "}
              <WavyUnderline color="hsl(var(--primary))">grow</WavyUnderline>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-bricolage leading-relaxed text-foreground/80 mt-8"
            >
              Eyelevel Growth Studio is a digital marketing agency in Chennai
              that runs strategy, performance, content, and AI as one connected
              system. Not three vendors. Not three invoices. One studio.
            </motion.p>

            <div className="h-px bg-foreground/10 my-8 md:my-10" />

            {/* Three pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0"
            >
              {pillars.map(({ Icon, title, caption }, index) => (
                <div
                  key={title}
                  className={`sm:px-5 sm:first:pl-0 sm:last:pr-0 ${
                    index > 0 ? "sm:border-l sm:border-foreground/10" : ""
                  }`}
                >
                  <div className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-bricolage font-semibold text-foreground text-base md:text-lg leading-snug">
                    {title}
                  </p>
                  {caption && (
                    <p className="font-bricolage text-sm text-foreground/50 mt-1">
                      {caption}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Pull Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-7 flex items-start gap-5"
            >
              <Quote className="w-8 h-8 md:w-9 md:h-9 text-primary fill-primary shrink-0" />
              <div className="border-l border-primary/20 pl-5">
                <p className="font-dela italic text-primary text-base md:text-lg leading-snug">
                  We're not your agency.
                  <br />
                  We're your extended marketing team.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: The Unblinking Eye Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
        </div>
      </div>
    </section>
  );
};
export default WhyEyeLevelExists;
