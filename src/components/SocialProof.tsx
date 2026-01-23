import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import mascotThumbsup from "@/assets/mascot-thumbsup.png";

const stats = [
  { value: "50%", label: "Average Increase in Qualified Leads", color: "from-orange to-pink" },
  { value: "4x", label: "Typical Return on Ad Spend", color: "from-primary to-teal" },
  { value: "60%", label: "Average Reduction in Cost Per Acquisition", color: "from-teal to-primary" },
];

const testimonials = [
  {
    quote: "Working with EyeLevel has been a game-changer for our business. Their strategic approach and relentless focus on results have helped us achieve unprecedented growth.",
    author: "CEO",
    company: "Leading EdTech Company"
  },
  {
    quote: "The team at EyeLevel is a true partner. They took the time to understand our business and developed a custom strategy that has exceeded all our expectations.",
    author: "Marketing Director",
    company: "Enterprise B2B Company"
  },
];

const SocialProof = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="py-32 md:py-40 px-4 bg-background relative overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-muted-foreground uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
            <span className="text-foreground">Success Stories That</span>{" "}
            <span className="text-primary block mt-2">Inspire Us</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group text-center bg-card rounded-t-[4rem] rounded-b-3xl p-8 pt-12 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient bar at top */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${stat.color}`} />
                
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <p className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                    {stat.value}
                  </p>
                  <p className="text-card-foreground/70 font-medium text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-[3rem] p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden shadow-xl"
          >
            {/* Star rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            
            {/* Mascot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 hidden lg:block"
            >
              <motion.img
                src={mascotThumbsup}
                alt="Thumbs up mascot"
                className="w-28 h-28 drop-shadow-lg"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-card-foreground leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-card-foreground font-bold text-lg">{testimonial.author}</p>
                <p className="text-card-foreground/60">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
