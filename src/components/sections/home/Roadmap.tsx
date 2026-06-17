import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stages = [
  {
    number: "01",
    title: "DISCOVERY",
    items: [
      "Brand Audit",
      "Market Research",
      "Competitor Analysis",
      "Goal Setting"
    ]
  },
  {
    number: "02",
    title: "STRATEGY",
    items: [
      "Channel Selection",
      "Budget Allocation",
      "Content Planning",
      "KPI Definition"
    ]
  },
  {
    number: "03",
    title: "EXECUTION",
    items: [
      "Campaign Launch",
      "Content Creation",
      "Community Management",
      "Paid Media"
    ]
  },
  {
    number: "04",
    title: "OPTIMIZE",
    items: [
      "Performance Tracking",
      "A/B Testing",
      "ROI Analysis",
      "Scale Winners"
    ]
  }
];

const Roadmap = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-[0.3em] text-sm mb-4"
          >
            Our approach
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              ROAD
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              MAP
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`rounded-3xl p-6 ${
                index === stages.length - 1 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-card-foreground'
              } shadow-lg hover:shadow-glow transition-all duration-300`}
            >
              <div className={`text-xs font-bold mb-4 ${
                index === stages.length - 1 
                  ? 'text-primary-foreground/70' 
                  : 'text-primary'
              }`}>
                STAGE {stage.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{stage.title}</h3>
              <ul className="space-y-2">
                {stage.items.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                    className={`text-sm flex items-center gap-2 ${
                      index === stages.length - 1 
                        ? 'text-primary-foreground/80' 
                        : 'text-card-foreground/70'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
