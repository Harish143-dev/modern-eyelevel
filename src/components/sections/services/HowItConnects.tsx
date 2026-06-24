import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import {
  Link as LinkIcon,
  Compass,
  Palette,
  TrendingUp,
  Search,
  FileText,
  Star,
  Handshake,
  Target,
  RefreshCw,
  ArrowRight
} from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";

const services = [
  {
    num: "01",
    name: "STRATEGY",
    icon: Compass,
    angle: -90,
    labelPos: "bottom" as const,
  },
  {
    num: "02",
    name: "CREATIVE",
    icon: Palette,
    angle: -50,
    labelPos: "bottom" as const,
  },
  {
    num: "03",
    name: "PERFORMANCE",
    icon: TrendingUp,
    angle: -10,
    labelPos: "bottom" as const,
  },
  {
    num: "04",
    name: "SEO",
    icon: Search,
    angle: 30,
    labelPos: "bottom" as const,
  },
  {
    num: "05",
    name: "CONTENT",
    icon: FileText,
    angle: 70,
    labelPos: "bottom" as const,
  },
  {
    num: "06",
    name: "BRANDING",
    icon: Star,
    angle: 110,
    labelPos: "bottom" as const,
  },
  {
    num: "07",
    name: "SALES ENABLEMENT",
    icon: Handshake,
    angle: 150,
    labelPos: "bottom" as const,
  },
  {
    num: "08",
    name: "ANALYTICS",
    icon: Target,
    angle: 190,
    labelPos: "bottom" as const,
  },
  {
    num: "09",
    name: "OPTIMIZATION",
    icon: RefreshCw,
    angle: 230,
    labelPos: "bottom" as const,
  },
];

const HowItConnects = () => {
  const radius = 38; // percent
  const dotRadius = 26; // percent

  return (
    <section className="px-4 sm:px-10 md:px-20 relative bg-forest-green text-left z-10 py-[100px] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <GreenButton>HOW IT ALL CONNECTS</GreenButton>
            </motion.div>

            {/* Heading */}
            <h2 className="font-dela text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-primary mb-6 uppercase tracking-tight leading-[1.1]">
              These are not nine separate services. <br />
            </h2>
            {/* Subtle Divider */}
            <div className="w-12 h-px bg-white/10 mb-8" />

            {/* Body text */}
            <p className="text-base sm:text-lg font-bricolage text-white/70 leading-relaxed mb-6">
              They are nine parts of one growth system. Strategy informs creative. Creative feeds performance. Performance data shapes SEO. SEO feeds content. Content builds the brand. The brand closes the deal.<br /><br />
              When one studio runs all of it, nothing gets lost in translation.
            </p>
          </div>

          {/* Right Column — Circular Diagram */}
          <div className="lg:col-span-7 flex items-center justify-center relative select-none">
            <div className="relative w-[340px] h-[340px] xs:w-[400px] xs:h-[400px] sm:w-[480px] sm:h-[480px] md:w-[500px] md:h-[500px]">

              {/* Radial Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {services.map((item, index) => {
                  const angleRad = (item.angle * Math.PI) / 180;
                  const x2 = 50 + radius * Math.cos(angleRad);
                  const y2 = 50 + radius * Math.sin(angleRad);
                  return (
                    <line
                      key={`line-${index}`}
                      x1="50%"
                      y1="50%"
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="rgba(226, 254, 165, 0.08)"
                      strokeWidth="1"
                    />
                  );
                })}
              </svg>

              {/* Concentric Circles */}
              {/* Outer circle passing through nodes */}
              <div className="w-[76%] h-[76%] rounded-full border border-dashed border-white/10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              {/* Middle circle with dots */}
              <div className="w-[52%] h-[52%] rounded-full border border-dashed border-white/5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              {/* Inner circle around center engine */}
              <div className="w-[32%] h-[32%] rounded-full border border-white/10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

              {/* Dots on Middle Concentric Ring */}
              {services.map((item, index) => {
                const angleRad = (item.angle * Math.PI) / 180;
                const left = 50 + dotRadius * Math.cos(angleRad);
                const top = 50 + dotRadius * Math.sin(angleRad);
                return (
                  <div
                    key={`dot-${index}`}
                    className="w-1.5 h-1.5 bg-primary/40 rounded-full absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                    }}
                  />
                );
              })}

              {/* Center Engine Node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="w-28 h-28 sm:w-[130px] sm:h-[130px] rounded-full border border-primary/30 bg-[#0f1412] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(226,254,165,0.12)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,254,165,0.1)_0%,transparent_75%)] pointer-events-none" />
                  <LinkIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary mb-1.5" />
                  <span className="font-bricolage text-[11px] sm:text-xs font-bold text-white tracking-widest text-center uppercase leading-none block">
                    GROWTH
                  </span>
                  <span className="font-bricolage text-[11px] sm:text-xs font-bold text-white tracking-widest text-center uppercase leading-none block mt-1">
                    ENGINE
                  </span>
                </div>
              </div>

              {/* Radial Node Items */}
              {services.map((item, index) => {
                const angleRad = (item.angle * Math.PI) / 180;
                const left = 50 + radius * Math.cos(angleRad);
                const top = 50 + radius * Math.sin(angleRad);
                const Icon = item.icon;

                return (
                  <motion.div
                    key={`node-${index}`}
                    className="absolute w-10 h-10 sm:w-12 sm:h-12 z-20 group cursor-pointer"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                    }}
                    initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
                    whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.3 }}
                  >
                    {/* Circle Button */}
                    <div className="w-full h-full rounded-full border border-white/10 bg-[#0d100f] backdrop-blur-md flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 shadow-md">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Label (Positioned Absolutely) */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300 ${item.labelPos === "top"
                        ? "bottom-full mb-2 group-hover:-translate-y-0.5"
                        : "top-full mt-2 group-hover:translate-y-0.5"
                        }`}
                    >
                      <span className="font-bricolage text-[9px] sm:text-[10px] text-primary/80 font-bold block tracking-wider leading-none mb-0.5">
                        {item.num}
                      </span>
                      <span className="font-bricolage text-[9px] sm:text-[11px] text-white/80 font-semibold text-center uppercase tracking-wide leading-[1.1] w-max max-w-[70px] sm:max-w-[90px] whitespace-normal">
                        {item.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItConnects;
