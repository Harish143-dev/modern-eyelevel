import { motion } from "framer-motion";
import { Check, X, Trophy, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WavyUnderline from "@/components/shared/WavyUnderline";

const criteria = [
  "Strategic Approach",
  "Execution Quality",
  "Cost Efficiency",
  "Speed",
  "Industry Expertise",
  "Scalability",
  "ROI Focus",
  "Transparency",
];

// Status: 'yes' = check, 'partial' = minus, 'no' = X
type Status = "yes" | "partial" | "no";
const competitors: {
  name: string;
  checks: Status[];
}[] = [
    {
      name: "In-House Team",
      checks: ["partial", "partial", "no", "no", "partial", "no", "partial", "yes"],
    },
    {
      name: "Marketing Agency",
      checks: ["yes", "partial", "no", "no", "partial", "yes", "no", "no"],
    },
    {
      name: "Ad Agency",
      checks: ["partial", "yes", "no", "partial", "no", "yes", "no", "no"],
    },
    {
      name: "Digital Marketing Agency",
      checks: [
        "no",
        "partial",
        "partial",
        "yes",
        "no",
        "partial",
        "partial",
        "partial",
      ],
    },
  ];

const ComparisonTable = () => {
  const getScore = (checks: Status[]) => {
    return checks.filter((c) => c === "yes" || c === "partial").length;
  };
  return (
    <section className="px-4 bg-secondary relative overflow-hidden py-[100px]">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-10"
        >
          <h2 className="font-dela text-2xl md:text-3xl text-white/90">We're not your agency. We're your extended marketing team.</h2>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight uppercase">
            We're not your agency. We're your extended <WavyUnderline className="text-white"> marketing team</WavyUnderline>
          </h2>
          <p className="font-bricolage text-lg">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wider bg-primary text-secondary"
            >
              Eight things growth needs. Here's who actually delivers all eight.
            </span>
          </p>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block rounded-3xl overflow-hidden border border-white/10"
        >
          {/* Table Header */}
          <div className="grid grid-cols-6 bg-background items-center">
            <div className="p-6 font-bricolage text-white/50 text-sm font-medium">
              Criteria
            </div>
            {competitors.map((comp, i) => (
              <div
                key={i}
                className="font-bricolage text-white/70 text-sm font-medium text-center border-l border-white/10"
              >
                {comp.name}
              </div>
            ))}
            {/* Eyelevel Header - Highlighted */}
            <div
              className="p-6 text-center border-l border-[#d0e999]/30 relative bg-primary"
            >
              <div
                className="absolute -top-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-b-lg bg-background text-primary"
              >
                <Trophy className="w-4 h-8" />
              </div>
              <span className="font-dela text-forest-dark text-sm pt-5 block">
                Eyelevel
              </span>
            </div>
          </div>

          {/* Table Body */}
          {criteria.map((criterion, rowIndex) => (
            <motion.div
              key={criterion}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: rowIndex * 0.05 }}
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
              {/* Eyelevel Column - Always Checked */}
              <div
                className="p-5 flex items-center justify-center border-t border-l"
                style={{
                  borderColor: "rgba(208, 233, 153, 0.2)",
                  backgroundColor: "rgba(208, 233, 153, 0.1)",
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + rowIndex * 0.05, type: "spring", stiffness: 400 }}
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
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2"
              >
                <Star className="w-6 h-6 text-primary fill-primary" />
                <span className="font-dela text-3xl text-primary">8/8</span>
                <Star className="w-6 h-6 text-primary fill-primary" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {/* Eyelevel Card - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-6 shadow-xl relative overflow-hidden bg-primary"
          >
            <div className="absolute top-1 md:top-4 right-4">
              <div className="px-3 py-1 rounded-full font-dela text-xs flex items-center gap-1 bg-background text-primary">
                <Trophy className="w-3 h-3" />
                Winner
              </div>
            </div>
            <h3 className="font-dela text-xl text-forest-dark mb-4">
              Your Extended Marketing Team (Eyelevel)
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {criteria.map((criterion, i) => (
                <motion.div
                  key={criterion}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="group px-5 sm:px-10 py-4 mt-5 text-sm md:text-lg w-full sm:w-auto h-auto whitespace-normal text-center"
          >
            <Link to="/booking" className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
              <span>Ready for the team that checks every box? Let's talk.</span>
              <ArrowRight className="sm:ml-3 w-5 h-5 shrink-0 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </Button>
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
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={`${size} rounded-full bg-emerald-500 flex items-center justify-center`}
      >
        <Check className={`${iconSize} text-white stroke-[3]`} />
      </motion.div>
    );
  }
  if (status === "partial") {
    return (
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={`${size} rounded-full bg-amber-500/80 flex items-center justify-center`}
      >
        <Check className={`${iconSize} text-white stroke-[3]`} />
      </motion.div>
    );
  }

  // 'no' status
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`${size} rounded-full bg-red-500/80 flex items-center justify-center`}
    >
      <X className={`${iconSize} text-white stroke-[3]`} />
    </motion.div>
  );
};

export default ComparisonTable;
