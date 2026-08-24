import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import {
  Link as LinkIcon,
  TrendingUp,
  Search,
  Users,
  Palette,
  Linkedin,
  Filter,
  PieChart,
  Star,
  Layout,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";

interface ServiceItem {
  num: string;
  name: string;
  icon: LucideIcon;
  angle: number;
  labelPos: "top" | "bottom";
  mobileName: string;
}

const services: ServiceItem[] = [
  {
    num: "01",
    name: "PERFORMANCE MARKETING",
    icon: TrendingUp,
    angle: -90,
    labelPos: "bottom",
    mobileName: "Performance"
  },
  {
    num: "02",
    name: "AI ERA SEO",
    icon: Search,
    angle: -50,
    labelPos: "bottom",
    mobileName: "SEO"
  },
  {
    num: "03",
    name: "SOCIAL MEDIA MANAGEMENT",
    icon: Users,
    angle: -10,
    labelPos: "bottom",
    mobileName: "Social Media"
  },
  {
    num: "04",
    name: "CONTENT AND CREATIVE",
    icon: Palette,
    angle: 30,
    labelPos: "bottom",
    mobileName: "Content"
  },
  {
    num: "05",
    name: "LINKEDIN B2B MARKETING",
    icon: Linkedin,
    angle: 70,
    labelPos: "bottom",
    mobileName: "LinkedIn B2B"
  },
  {
    num: "06",
    name: "CRO AND FUNNEL DESIGN",
    icon: Filter,
    angle: 110,
    labelPos: "bottom",
    mobileName: "CRO & Funnel"
  },
  {
    num: "07",
    name: "REVENUE ATTRIBUTION DASHBOARD",
    icon: PieChart,
    angle: 150,
    labelPos: "bottom",
    mobileName: "Attribution"
  },
  {
    num: "08",
    name: "BRAND AND IDENTITY",
    icon: Star,
    angle: 190,
    labelPos: "bottom",
    mobileName: "Branding"
  },
  {
    num: "09",
    name: "WEBSITE DESIGN AND DEVELOPMENT",
    icon: Layout,
    angle: 230,
    labelPos: "bottom",
    mobileName: "Web Design"
  }
];

const HowItConnects = () => {
  const radius = 38;
  const dotRadius = 26;

  return (
    <section className="px-4 sm:px-10 md:px-20 relative bg-forest-green text-left z-10 py-[100px] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Eyebrow (Common Center) */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full flex justify-center"
        >
          <GreenButton>HOW IT ALL CONNECTS</GreenButton>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Content */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start lg:items-start text-center lg:text-left">

            {/* Heading */}
            <h2 className="font-dela text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-primary mb-6 uppercase tracking-tight leading-[1.1]">
              These are not nine separate <WavyUnderline>services</WavyUnderline><br />
            </h2>
            {/* Subtle Divider */}
            <div className="w-12 h-px bg-white/10 mb-8 mx-auto lg:mx-0" />

            {/* Body text */}
            <p className="text-base sm:text-lg font-bricolage text-white/70 leading-relaxed mb-6 max-w-xl">
              They are nine parts of one growth system. Strategy informs creative. Creative feeds performance. Performance data shapes SEO. SEO feeds content. Content builds the brand. The brand closes the deal.<br /><br />
              When one studio runs all of it, nothing gets lost in translation.
            </p>
          </div>

          {/* Right Column — Circular Diagram */}
          <div className="lg:col-span-5 flex items-center justify-center relative select-none">
            <div className="relative w-[90vw] max-w-[500px] aspect-square">

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
              {/* {services.map((item, index) => {
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
              })}*/}

              {/* Center Engine Node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-[130px] md:h-[130px] rounded-full border border-primary/30 bg-[#0f1412] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(226,254,165,0.12)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,254,165,0.1)_0%,transparent_75%)] pointer-events-none" />
                  <LinkIcon className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary mb-1" />
                  <span className="font-bricolage text-[8px] sm:text-[10px] md:text-xs font-bold text-white tracking-wider text-center uppercase leading-none block">
                    GROWTH
                  </span>
                  <span className="font-bricolage text-[8px] sm:text-[10px] md:text-xs font-bold text-white tracking-wider text-center uppercase leading-none block">
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
                    className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 z-20 group cursor-pointer"
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
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Label (Positioned Absolutely) */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300 ${item.labelPos === "top"
                        ? "bottom-full mb-2 group-hover:-translate-y-0.5"
                        : "top-full mt-3 md:mt-2 group-hover:translate-y-0.5"
                        }`}
                    >
                      <span className="font-bricolage text-[9px] sm:text-[10px] text-primary/80 font-bold block tracking-wider leading-none mb-0.5 text-center">
                        {item.num}
                      </span>
                      <span className="font-bricolage text-[7px] sm:text-[9px] md:text-[11px] max-w-[50px] sm:max-w-[70px] md:max-w-[90px] leading-tight w-max whitespace-normal text-center">
                        <>
                          <span className="block sm:hidden">
                            {item.mobileName}
                          </span>

                          <span className="hidden sm:block">
                            {item.name}
                          </span>
                        </>
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HowItConnects;
