import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "500+", label: "Campaigns Launched" },
  { value: "10M+", label: "Leads Generated" },
  { value: "98%", label: "Client Retention" },
  { value: "$2B+", label: "Revenue Driven" }
];

const Results = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="results" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-forest-light/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-[0.3em] text-sm mb-4"
          >
            Our track record
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground"
          >
            STRONG RESULTS
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-card rounded-3xl p-8 text-center hover:shadow-glow transition-all duration-500"
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <p className="text-card-foreground/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
