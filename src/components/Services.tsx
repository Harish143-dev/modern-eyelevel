import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Megaphone, TrendingUp, Palette, Target, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Brand Strategy",
    description: "We build brands that resonate. From positioning to personality, we craft identities that stick."
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Data-driven campaigns that scale. We optimize every touchpoint for maximum impact."
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Stunning visuals that stop scrolls. Our designs convert attention into action."
  },
  {
    icon: Target,
    title: "Media Buying",
    description: "Strategic ad placement across all platforms. Maximum reach, minimum waste."
  },
  {
    icon: Zap,
    title: "Content Creation",
    description: "Stories that sell. We produce content that entertains, educates, and converts."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Deep data analysis that drives decisions. Know your audience inside out."
  }
];

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section id="services" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-forest-light/30 rounded-full blur-2xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-[0.3em] text-sm mb-4"
          >
            What we do
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground"
          >
            SERVICES
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-3xl p-8 hover:shadow-glow transition-all duration-500"
            >
              <motion.div 
                className="w-14 h-14 bg-forest rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <service.icon className="w-7 h-7 text-cream group-hover:text-forest transition-colors duration-300" />
              </motion.div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-card-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
