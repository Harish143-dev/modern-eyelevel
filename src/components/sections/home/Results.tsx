import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";

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
      "Performance marketing across sports categories.",
    company: "Da One Sports",
  },
  {
    id: 3,
    quote:
      "35+ retail stores supported with content and social.",
    company: "Heaven's ELIX",
  },
  {
    id: 4,
    quote:
      "Season 2 social and event marketing.",
    company: "TNPPL",
  },
];

const Results = () => {
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
    <section className="py-12 md:py-16 px-4 bg-forest-deep relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <GreenButton>Results</GreenButton>

          <h2 className="font-dela text-3xl md:text-4xl text-primary lg:text-5xl leading-[1.05] uppercase">
            <span>
              Proof That We <br /> <WavyUnderline>walk</WavyUnderline> the Talk
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/30 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/30 transition-all duration-300"
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
                className="bg-background rounded-3xl p-8 md:p-12 border border-white/5"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1.5 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 fill-[#E2FEA5] text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="text-center mb-8">
                  <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary/20 mx-auto mb-6 -scale-x-100" />
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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-primary w-8"
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

export default Results;



