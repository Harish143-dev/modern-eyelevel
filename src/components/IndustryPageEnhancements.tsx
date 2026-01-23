import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";
import GreenButton from "./GreenButton";
import WavyUnderline from "./WavyUnderline";

// Gallery images type
interface GalleryImage {
  src: string;
  alt: string;
}

// Testimonial type
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

// Animated Counter Component
export const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  accentColor = "#E2FEA5",
}: {
  value: string;
  suffix?: string;
  prefix?: string;
  accentColor?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(numericValue * easeOut);
        setDisplayValue(current.toString());

        if (currentStep >= steps) {
          clearInterval(timer);
          setDisplayValue(value.replace(/[^0-9]/g, ""));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} style={{ color: accentColor }}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

// Big Stats Section
export const BigStatsSection = ({
  stats,
  accentColor = "#E2FEA5",
}: {
  stats: { value: string; label: string; prefix?: string; suffix?: string }[];
  accentColor?: string;
}) => {
  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#0f2620" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-dela text-4xl md:text-5xl lg:text-6xl mb-3">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  accentColor={accentColor}
                />
              </div>
              <p
                className="font-bricolage text-sm md:text-base uppercase tracking-wider"
                style={{ color: "rgba(248, 255, 232, 0.6)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Image Gallery Section with Creative Grid
export const ImageGallerySection = ({
  images,
  title = "Our Work in Action",
  subtitle = "Real results from real clients",
  accentColor = "#E2FEA5",
  colorTitle = "Our Work in ",
  underlineTitle = "Action",
}: {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  accentColor?: string;
  colorTitle?: string;
  underlineTitle?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#1a3a2f" }}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GreenButton>Portfolio</GreenButton>
          <h2
            className="font-dela text-4xl md:text-5xl lg:text-6xl mb-4 uppercase"
            style={{ color: accentColor }}
          >
            {colorTitle} <span> </span>
            <WavyUnderline>{underlineTitle}</WavyUnderline>
          </h2>
          <p
            className="font-bricolage text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(248, 255, 232, 0.7)" }}
          >
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Creative Image Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 md:grid-rows-2 gap-4 md:gap-6 items-stretch">
          {/* Large Featured Image */}
          <motion.div
            style={{ y: y1 }}
            className="col-span-12 md:col-span-7 row-span-2 h-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] md:aspect-[9/14] rounded-3xl overflow-hidden group"
            >
              <img
                src={images[0]?.src}
                alt={images[0]?.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${accentColor}40, transparent 50%)`,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Smaller Images */}
          <motion.div
            style={{ y: y2 }}
            className="col-span-6 md:col-span-5 h-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative h-full rounded-3xl overflow-hidden group"
            >
              <img
                src={images[1]?.src}
                alt={images[1]?.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${accentColor}40, transparent 50%)`,
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="col-span-6 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-3xl overflow-hidden group"
            >
              <img
                src={images[2]?.src}
                alt={images[2]?.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${accentColor}40, transparent 50%)`,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-40 h-40 opacity-10"
        style={{ color: accentColor }}
      >
        <Star className="w-full h-full" />
      </motion.div>
    </section>
  );
};

// Testimonials Section
export const TestimonialsSection = ({
  testimonials,
  accentColor = "#E2FEA5",
}: {
  testimonials: Testimonial[];
  accentColor?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section
      className="py-24 md:py-32 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#253e35" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GreenButton>Client Success</GreenButton>
          <h2
            className="font-dela text-4xl md:text-5xl lg:text-6xl uppercase"
            style={{ color: accentColor }}
          >
            What They <WavyUnderline>Say</WavyUnderline>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                y: activeIndex === index ? 0 : 20,
                scale: activeIndex === index ? 1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${activeIndex === index ? "pointer-events-auto" : "pointer-events-none"}`}
            >
              <div
                className="h-full rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center"
                style={{
                  backgroundColor: "rgba(248, 255, 232, 0.05)",
                  border: `2px solid ${accentColor}30`,
                }}
              >
                {/* Quote Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                  style={{ backgroundColor: `${accentColor}20` }}
                >
                  <Quote className="w-8 h-8" style={{ color: accentColor }} />
                </div>

                {/* Quote Text */}
                <p
                  className="font-bricolage text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 max-w-3xl"
                  style={{ color: "#F8FFE8" }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div>
                  <p
                    className="font-dela text-lg md:text-xl mb-1"
                    style={{ color: accentColor }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className="font-bricolage text-sm md:text-base"
                    style={{ color: "rgba(248, 255, 232, 0.6)" }}
                  >
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  activeIndex === index
                    ? accentColor
                    : "rgba(248, 255, 232, 0.2)",
                transform: activeIndex === index ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Trusted By / Client Logos Marquee
export const ClientLogosMarquee = ({
  accentColor = "#E2FEA5",
}: {
  accentColor?: string;
}) => {
  const logos = [
    "University of Excellence",
    "Premier Academy",
    "Global Institute",
    "Tech University",
    "Business School",
    "Medical College",
    "Engineering Hub",
    "Creative Arts Academy",
  ];

  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{ backgroundColor: "#0f2620" }}
    >
      <div className="flex items-center">
        {/* Trusted By Label */}
        <div
          className="shrink-0 px-8 py-4 font-bricolage text-sm uppercase tracking-wider"
          style={{ color: "rgba(248, 255, 232, 0.5)" }}
        >
          Trusted By
        </div>

        {/* Scrolling Logos */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={index}
                className="font-dela text-xl md:text-2xl opacity-30 hover:opacity-70 transition-opacity cursor-default"
                style={{ color: "#F8FFE8" }}
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #0f2620, transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0f2620, transparent)" }}
      />
    </section>
  );
};

// Process Steps with Timeline
export const ProcessTimeline = ({
  steps,
  accentColor = "#E2FEA5",
}: {
  steps: { number: string; title: string; description: string }[];
  accentColor?: string;
}) => {
  return (
    <section
      className="py-24 md:py-32 px-4"
      style={{ backgroundColor: "#173229" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block font-bricolage text-sm md:text-base mb-4 tracking-[0.2em] uppercase"
            style={{ color: accentColor }}
          >
            How It Works
          </span>
          <h2
            className="font-dela text-4xl md:text-5xl lg:text-6xl"
            style={{ color: "#F8FFE8" }}
          >
            Our Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ backgroundColor: `${accentColor}30` }}
          />

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Number Circle */}
              <div
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10"
                style={{
                  backgroundColor: "#173229",
                  border: `3px solid ${accentColor}`,
                }}
              >
                <span
                  className="font-dela text-xl"
                  style={{ color: accentColor }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div
                className={`flex-1 pl-28 md:pl-0 ${index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"}`}
              >
                <h3
                  className="font-dela text-2xl md:text-3xl mb-3"
                  style={{ color: "#F8FFE8" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-bricolage text-base md:text-lg leading-relaxed"
                  style={{ color: "rgba(248, 255, 232, 0.7)" }}
                >
                  {step.description}
                </p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
