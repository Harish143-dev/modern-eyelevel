import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import partnershipImage from "@/assets/partnership.png";
import communityImage from "@/assets/community.png";
import growthImage from "@/assets/growth.png";

const foundations = [
  {
    image: partnershipImage,
    title: "Strategic Partnerships",
    description: "We forge partnerships with industry leaders to amplify your brand's reach and create synergies that drive exponential growth."
  },
  {
    image: communityImage,
    title: "Community Building",
    description: "Through active engagement and collaborative initiatives, we foster loyal communities around your brand that advocate for you."
  },
  {
    image: growthImage,
    title: "Scalable Growth",
    description: "With data-driven strategies and proven frameworks, we deliver sustainable growth that compounds over time."
  }
];

const Foundation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="about" ref={ref} className="py-24 px-4 bg-card relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-card-foreground/60 uppercase tracking-[0.3em] text-sm mb-4"
          >
            Why choose us
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-card-foreground flex items-center justify-center gap-4">
              STRONG <span className="text-forest">✦</span>
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold text-card-foreground">
              FOUNDATION
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {foundations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-forest rounded-3xl p-6 text-center shadow-lg hover:shadow-glow transition-shadow duration-500"
            >
              <div className="mb-6 rounded-2xl overflow-hidden">
                <motion.img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foundation;
