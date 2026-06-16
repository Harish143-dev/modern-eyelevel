import { motion } from "framer-motion";
import { Check, X, Minus, Trophy, Star } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";
const criteria = [
  "AI-Powered Execution",
  "WhatsApp Marketing Capability",
  "Sports Event Experience",
  "Offshore Client Capability",
  "Speed of Delivery",
  "Transparent Reporting",
  "Senior-Level Strategy",
  "Founder Accountability",
];

// Status: 'yes' = check, 'partial' = minus, 'no' = X
type Status = "yes" | "partial" | "no";
const competitors: {
  name: string;
  checks: Status[];
}[] = [
    {
      name: "In-House Team",
      checks: ["partial", "no", "no", "no", "no", "no", "no", "no"],
    },
    {
      name: "Marketing Agency",
      checks: ["partial", "partial", "no", "no", "partial", "no", "no", "no"],
    },
    {
      name: "Ad Agency",
      checks: ["no", "partial", "no", "partial", "no", "partial", "no", "no"],
    },
    {
      name: "Digital Marketing Agency",
      checks: [
        "no",
        "partial",
        "no",
        "partial",
        "no",
        "partial",
        "partial",
        "no",
      ],
    },
  ];
const WhyEyeLevel = () => {
  const getScore = (checks: Status[]) => {
    return checks.filter((c) => c === "yes" || c === "partial").length;
  };
  return (
    <section className="py-12 md:py-16 px-4 bg-forest-deep relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <GreenButton>The Difference</GreenButton>
          <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl text-primary mb-6 uppercase leading-tight">
            Three things no other <br className="hidden md:block" /> Chennai agency <WavyUnderline>can say</WavyUnderline>
          </h2>
        </motion.div>

        {/* 3 Differentiator Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background rounded-3xl p-8 border border-white/10"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <h3 className="font-dela text-xl text-white mb-4">The Founder Was The Client</h3>
            <p className="font-bricolage text-white/60">Built by someone who knows what it's like to be on the other side of the table, demanding real ROI.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-background rounded-3xl p-8 border border-white/10"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <h3 className="font-dela text-xl text-white mb-4">One Team, Full Stack</h3>
            <p className="font-bricolage text-white/60">Strategy, performance, content, and AI seamlessly connected. Not three vendors, one studio.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-background rounded-3xl p-8 border border-white/10"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <h3 className="font-dela text-xl text-white mb-4">Revenue Attribution Built In</h3>
            <p className="font-bricolage text-white/60">We don't just report on clicks and impressions. We tie every marketing activity directly to closed-won revenue.</p>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-10"
        >
          <h3 className="font-dela text-2xl md:text-3xl text-white/90">And here is how we stack up</h3>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="hidden lg:block rounded-3xl overflow-hidden border border-white/10"
        >
          {/* Table Header */}
          <div className="grid grid-cols-6 bg-background">
            <div className="p-6 font-bricolage text-white/50 text-sm font-medium">
              Criteria
            </div>
            {competitors.map((comp, i) => (
              <div
                key={i}
                className="p-6 font-bricolage text-white/70 text-sm font-medium text-center border-l border-white/10"
              >
                {comp.name}
              </div>
            ))}
            {/* EyeLevel Header - Highlighted */}
            <div
              className="p-6 text-center border-l border-[#d0e999]/30 relative bg-primary"
            >
              <div
                className="absolute -top-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-b-lg bg-background text-primary"
              >
                <Trophy className="w-4 h-4" />
              </div>
              <span className="font-dela text-forest-dark text-sm">
                EyeLevel Growth Studio
              </span>
            </div>
          </div>

          {/* Table Body */}
          {criteria.map((criterion, rowIndex) => (
            <motion.div
              key={criterion}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: rowIndex * 0.05,
              }}
              className={`grid grid-cols-6 ${rowIndex % 2 === 0 ? "bg-[#152420]" : "bg-background"}`}
            >
              <div className="p-5 font-bricolage text-white font-medium border-t border-white/5">
                {criterion}
              </div>
              {competitors.map((comp, colIndex) => (
                <div
                  key={colIndex}
                  className="p-5 flex items-center justify-center border-t border-l border-white/5"
                >
                  <StatusIcon
                    status={comp.checks[rowIndex]}
                    delay={0.1 + rowIndex * 0.05 + colIndex * 0.02}
                  />
                </div>
              ))}
              {/* EyeLevel Column - Always Checked */}
              <div
                className="p-5 flex items-center justify-center border-t border-l"
                style={{
                  borderColor: "rgba(208, 233, 153, 0.2)",
                  backgroundColor: "rgba(208, 233, 153, 0.1)",
                }}
              >
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.1 + rowIndex * 0.05,
                    type: "spring",
                    stiffness: 400,
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "#d0e999",
                    boxShadow: "0 10px 15px -3px rgba(208, 233, 153, 0.3)",
                  }}
                >
                  <Check className="w-6 h-6 text-forest-dark stroke-[3]" />
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Score Row */}
          <div className="grid grid-cols-6 bg-forest-deep border-t border-white/10">
            <div className="p-6 font-dela text-white text-sm">Total Score</div>
            {competitors.map((comp, i) => (
              <div key={i} className="p-6 text-center border-l border-white/10">
                <span className="font-dela text-2xl text-white/40">
                  {getScore(comp.checks)}/8
                </span>
              </div>
            ))}
            <div
              className="p-6 text-center border-l"
              style={{
                borderColor: "rgba(208, 233, 153, 0.3)",
                backgroundColor: "rgba(208, 233, 153, 0.2)",
              }}
            >
              <motion.div
                initial={{
                  scale: 0.5,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="flex items-center justify-center gap-2"
              >
                <Star
                  className="w-6 h-6 text-primary fill-primary"
                />
                <span
                  className="font-dela text-3xl text-primary"
                >
                  8/8
                </span>
                <Star
                  className="w-6 h-6 text-primary fill-primary"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {/* EyeLevel Card - Featured */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-3xl p-6 shadow-xl relative overflow-hidden bg-primary"
          >
            <div className="absolute top-1 md:top-4 right-4">
              <div
                className="px-3 py-1 rounded-full font-dela text-xs flex items-center gap-1 bg-background text-primary"
              >
                <Trophy className="w-3 h-3" />
                Winner
              </div>
            </div>
            <h3 className="font-dela text-xl text-forest-dark mb-4">
              EyeLevel Growth Studio
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {criteria.map((criterion, i) => (
                <motion.div
                  key={criterion}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: i * 0.05,
                  }}
                  className="bg-background/10 rounded-xl p-3 flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-bricolage text-forest-dark text-xs font-medium">
                    {criterion}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#173229]/20 text-center flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-forest-dark fill-[#173229]" />
              <span className="font-dela text-2xl text-forest-dark">
                8/8 Perfect Score
              </span>
              <Star className="w-5 h-5 text-forest-dark fill-[#173229]" />
            </div>
          </motion.div>

          {/* Competitor Cards */}
          <div className="grid grid-cols-2 gap-4">
            {competitors.map((comp, index) => (
              <motion.div
                key={comp.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="bg-background rounded-2xl p-4 border border-white/10"
              >
                <h4 className="font-bricolage text-sm font-semibold text-white mb-3">
                  {comp.name}
                </h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-dela text-xl text-white/40">
                    {getScore(comp.checks)}/8
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {comp.checks.map((status, i) => (
                    <div key={i} className="w-6 h-6">
                      <StatusIcon status={status} delay={0} small />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mt-16"
        >
          <p className="text-white/60 font-bricolage text-lg mb-2">
            Ready to work with the team that checks every box?
          </p>
          <p
            className="font-dela text-xl uppercase text-primary"
          >
            Let's talk about your growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Status Icon Component
const StatusIcon = ({
  status,
  delay,
  small = false,
}: {
  status: Status;
  delay: number;
  small?: boolean;
}) => {
  const size = small ? "w-6 h-6" : "w-8 h-8";
  const iconSize = small ? "w-3 h-3" : "w-4 h-4";
  if (status === "yes") {
    return (
      <motion.div
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay,
        }}
        className={`${size} rounded-full bg-emerald-500 flex items-center justify-center`}
      >
        <Check className={`${iconSize} text-white stroke-[3]`} />
      </motion.div>
    );
  }
  if (status === "partial") {
    return (
      <motion.div
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay,
        }}
        className={`${size} rounded-full bg-amber-500/80 flex items-center justify-center`}
      >
        <Check className={`${iconSize} text-white stroke-[3]`} />
      </motion.div>
    );
  }

  // 'no' status
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      whileInView={{
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
      }}
      className={`${size} rounded-full bg-red-500/80 flex items-center justify-center`}
    >
      <X className={`${iconSize} text-white stroke-[3]`} />
    </motion.div>
  );
};
export default WhyEyeLevel;




