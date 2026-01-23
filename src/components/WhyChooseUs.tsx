import { motion } from "framer-motion";
import { Target, Crosshair, Users, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const principles = [
  {
    icon: Target,
    title: "Strategy First",
    description: "We never start with tactics. We start with a clear, data-driven strategy that aligns with your business goals.",
    bgColor: "#FFB4B4",
  },
  {
    icon: Crosshair,
    title: "Precision Execution",
    description: "We execute with discipline, attention to detail, and accountability. Every action is measured and optimized.",
    bgColor: "#E2FEA5",
  },
  {
    icon: Users,
    title: "Transparent Partnership",
    description: "We believe in open communication and showing you exactly what's working and why. No black boxes.",
    bgColor: "#FCFAC2",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: '#253e35' }}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-lime/30 bg-lime/5"
          >
            <span className="text-sm font-medium font-bricolage text-lime">
              Why Choose Us
            </span>
          </motion.div>
          <h2 className="font-dela text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            <span className="text-white">Why EyeLevel is</span>
            <br />
            <span className="relative inline-block">
              <span style={{ color: '#d0e999' }}>Different</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.path
                  d="M0 4 Q50 0, 100 4 T200 4"
                  fill="none"
                  stroke="currentColor"
                  style={{ color: '#d0e999' }}
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.svg>
            </span>
          </h2>
          <p className="font-bricolage text-lg max-w-2xl mx-auto text-cream">
            Strategic approach, execution quality, and full transparency.
          </p>
        </motion.div>

        {/* Principles Carousel - matching The Skeptic's Proof style */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {principles.map((principle, index) => (
              <CarouselItem key={principle.title} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="bg-[#1A2F28] rounded-3xl overflow-hidden h-full flex flex-col border border-white/5 hover:border-lime/20 transition-all duration-500 group">
                    {/* Icon Header */}
                    <div 
                      className="relative p-8 flex items-center justify-center"
                      style={{ backgroundColor: principle.bgColor }}
                    >
                      <div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: 'rgba(23, 50, 41, 0.15)' }}
                      >
                        <principle.icon className="w-10 h-10" style={{ color: '#173229' }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <Quote className="w-8 h-8 text-lime/30 mb-3 -scale-x-100" />
                      
                      <h3 className="text-white font-dela text-xl mb-4">
                        {principle.title}
                      </h3>
                      
                      <p className="text-white/80 font-bricolage text-sm md:text-base leading-relaxed flex-1 mb-4">
                        {principle.description}
                      </p>

                      <div className="pt-4 border-t border-white/10">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: principle.bgColor, color: '#173229' }}
                        >
                          Core Principle
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <CarouselPrevious 
              className="static translate-y-0 bg-transparent border-2 border-lime/30 text-lime hover:bg-lime hover:text-[#0D1F1A] hover:border-lime w-12 h-12 rounded-full transition-all duration-300" 
            />
            <CarouselNext 
              className="static translate-y-0 bg-transparent border-2 border-lime/30 text-lime hover:bg-lime hover:text-[#0D1F1A] hover:border-lime w-12 h-12 rounded-full transition-all duration-300" 
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default WhyChooseUs;
