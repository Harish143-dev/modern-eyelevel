import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "@/components/WavyUnderline";

const industries = [{
  id: "education",
  number: "01",
  title: "Edu-Marketing",
  tagline: "Enroll More.",
  description: "Partner with us to streamline your admissions funnel and attract students who are the perfect fit for your campus.",
  href: "/industries/education",
  accentColor: "#B8D4BE",
  stats: ["3x Enrollment Growth", "45% Lower CAC"]
}, {
  id: "sports",
  number: "02",
  title: "Sports Marketing",
  tagline: "Win Bigger.",
  description: "Go beyond the game with brand strategies that maximize your reach and monetize your global fanbase.",
  href: "/industries/sports",
  accentColor: "#FFB4B4",
  stats: ["10M+ Fan Reach", "200% ROI"]
}, {
  id: "real-estate",
  number: "03",
  title: "Real Estate",
  tagline: "Sell Faster.",
  description: "Leverage high-performance digital systems built specifically to move real estate inventory in competitive markets.",
  href: "/industries/real-estate",
  accentColor: "#E2FEA5",
  stats: ["50% Faster Sales", "8x Lead Quality"]
}, {
  id: "b2b",
  number: "04",
  title: "B2B Marketing",
  tagline: "Close Sooner.",
  description: "Build a sophisticated engine that identifies high-value targets and moves them efficiently through your sales cycle.",
  href: "/industries/b2b",
  accentColor: "#FCFAC2",
  stats: ["5x Pipeline Growth", "30% Shorter Cycle"]
}];
const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return <section style={{
    backgroundColor: '#173229'
  }} className="py-12 px-4 relative overflow-hidden md:py-[32px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-16 md:mb-20 text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-[#E2FEA5]/30 bg-[#E2FEA5]/5">
            <span className="text-sm font-medium font-bricolage" style={{
            color: '#E2FEA5'
          }}>
              Industries We Dominate
            </span>
          </motion.div>
          <h2 className="font-dela text-4xl md:text-5xl lg:text-6xl leading-[1.05] uppercase">
            <span style={{
            color: '#E2FEA5'
          }}>SPECIALIZED</span>
            <br />
            <WavyUnderline>EXPERTISE</WavyUnderline>
          </h2>
        </motion.div>

        {/* Interactive Cards */}
        <div className="space-y-3">
          {industries.map((industry, index) => <IndustryCard key={industry.id} industry={industry} index={index} isActive={activeIndex === index} onHover={() => setActiveIndex(index)} onLeave={() => setActiveIndex(null)} />)}
        </div>
      </div>
    </section>;
};
interface IndustryCardProps {
  industry: typeof industries[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}
const IndustryCard = ({
  industry,
  index,
  isActive,
  onHover,
  onLeave
}: IndustryCardProps) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    delay: index * 0.1
  }} onMouseEnter={onHover} onMouseLeave={onLeave} className="group cursor-pointer">
      <Link to={industry.href}>
        <motion.div animate={{
        height: isActive ? "auto" : "auto",
        backgroundColor: isActive ? 'rgba(248, 255, 232, 0.05)' : 'transparent'
      }} transition={{
        duration: 0.3,
        ease: "easeOut"
      }} className="rounded-2xl border transition-colors duration-300 overflow-hidden" style={{
        borderColor: isActive ? industry.accentColor : 'rgba(248, 255, 232, 0.1)'
      }}>
          {/* Main Row */}
          <div className="px-6 md:px-10 py-6 md:py-8 flex items-center gap-6 md:gap-10">
            {/* Number */}
            <span className="font-bricolage text-sm md:text-base font-medium shrink-0" style={{
            color: 'rgba(248, 255, 232, 0.4)'
          }}>
              {industry.number}
            </span>

            {/* Title & Tagline */}
            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
              <h3 className="font-dela text-2xl md:text-3xl lg:text-4xl transition-colors duration-300" style={{
              color: isActive ? industry.accentColor : '#F8FFE8'
            }}>
                {industry.title}
              </h3>
              <motion.span initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: isActive ? 1 : 0.6,
              x: 0
            }} className="font-bricolage text-base md:text-lg" style={{
              color: isActive ? '#F8FFE8' : 'rgba(248, 255, 232, 0.6)'
            }}>
                {industry.tagline}
              </motion.span>
            </div>

            {/* Accent Bar (visible on hover) */}
            <motion.div initial={{
            scaleX: 0
          }} animate={{
            scaleX: isActive ? 1 : 0
          }} transition={{
            duration: 0.3
          }} className="hidden lg:block h-1 w-24 rounded-full origin-left" style={{
            backgroundColor: industry.accentColor
          }} />

            {/* Arrow */}
            <motion.div animate={{
            x: isActive ? 0 : -5,
            opacity: isActive ? 1 : 0.4
          }} transition={{
            duration: 0.3
          }} className="shrink-0">
              <ArrowRight className="w-6 h-6 md:w-7 md:h-7" style={{
              color: isActive ? industry.accentColor : '#F8FFE8'
            }} />
            </motion.div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isActive && <motion.div initial={{
            height: 0,
            opacity: 0
          }} animate={{
            height: "auto",
            opacity: 1
          }} exit={{
            height: 0,
            opacity: 0
          }} transition={{
            duration: 0.3,
            ease: "easeOut"
          }} className="overflow-hidden">
                <div className="px-6 md:px-10 pb-8 pt-2">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 lg:items-end">
                    {/* Description */}
                    <p className="font-bricolage text-base md:text-lg leading-relaxed max-w-xl lg:pl-16" style={{
                  color: 'rgba(248, 255, 232, 0.85)'
                }}>
                      {industry.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-6 lg:gap-10 lg:ml-auto lg:pr-12">
                      {industry.stats.map((stat, i) => <motion.div key={i} initial={{
                    opacity: 0,
                    y: 10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    delay: 0.1 + i * 0.1
                  }} className="text-center">
                          <span className="font-dela text-lg md:text-xl block" style={{
                      color: industry.accentColor
                    }}>
                            {stat.split(' ')[0]}
                          </span>
                          <span className="font-bricolage text-xs md:text-sm" style={{
                      color: 'rgba(248, 255, 232, 0.6)'
                    }}>
                            {stat.split(' ').slice(1).join(' ')}
                          </span>
                        </motion.div>)}
                    </div>
                  </div>
                </div>
              </motion.div>}
          </AnimatePresence>
        </motion.div>
      </Link>
    </motion.div>;
};
export default IndustriesSection;