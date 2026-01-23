import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import WavyUnderline from "./WavyUnderline";

const testimonials = [
  {
    id: 1,
    quote:
      "Professional, proactive, and perfectly aligned with our brand. EyeLevel's celebrity connect delivered measurable buzz and real results.",
    company: "Joyalukkas",
  },
  {
    id: 2,
    quote:
      "Thank you for all your effort & support. Appreciate what your team has done for the Chennai Open. Look forward to more partnership between CSC & yourselves.",
    company: "Chennai Super Champs",
  },
  {
    id: 3,
    quote:
      "Super experience! Akmal and team executed our stall quickly and without any surprises. Highly recommend.",
    company: "Gataca",
  },
  {
    id: 4,
    quote:
      "This partnership with Eye Level Growth Studio for Bengaluru Open 2025 meant a lot. They aren't just an agency but turned out to be part of our team. Their passion and creativity brought our vision to life. Grateful for this collaboration, excited for what's next.",
    company: "Bengaluru Jawans",
  },
];

const TextTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-[#0D1F1A] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-[#E2FEA5]/30 bg-[#E2FEA5]/5"
          >
            <span
              className="text-sm font-medium font-bricolage"
              style={{ color: "#E2FEA5" }}
            >
              The Skeptic's Proof
            </span>
          </motion.div>
          {/* <h2 className="font-dela text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6 uppercase">
            <span style={{ color: '#FFFFFF' }}>Proof That We</span>
            <br />
            <span className="relative inline-block">
              <span style={{ color: '#E2FEA5' }}>Don't Just Talk</span>
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
                  stroke="#E2FEA5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.svg>
            </span>
          </h2> */}
          <h2 className="font-dela text-4xl md:text-5xl lg:text-6xl leading-[1.05] uppercase">
            <span
              style={{
                color: "#E2FEA5",
              }}
            >
              Proof That We <br /> <WavyUnderline>walk</WavyUnderline> the Talk
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 rounded-full bg-[#1A2F28] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-lime/30 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 rounded-full bg-[#1A2F28] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-lime/30 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-[#1A2F28] rounded-3xl p-8 md:p-12 border border-white/5"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1.5 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 fill-[#E2FEA5] text-[#E2FEA5]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="text-center mb-8">
                  <Quote className="w-10 h-10 md:w-12 md:h-12 text-lime/20 mx-auto mb-6 -scale-x-100" />
                  <p className="text-white/90 font-bricolage text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
                    "{currentTestimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex flex-col items-center gap-4">
                  {/* Company Name */}
                  <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-dela text-base md:text-lg text-white/60">
                      – {currentTestimonial.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#E2FEA5] w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextTestimonials;
