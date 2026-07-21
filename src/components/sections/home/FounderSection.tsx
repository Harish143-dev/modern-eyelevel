import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderImg from "@/assets/content/people/akmal.webp";
import founder_home_img from "@/assets/content/people/akmal_home_img.png";

const FounderSection = () => {
  return (
    <section className="px-4 bg-secondary relative overflow-hidden py-[100px]">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-10 text-center ">
          <GreenButton>The Co-Founder</GreenButton>
          <h2 className="font-dela text-3xl  md:text-4xl lg:text-5xl text-primary leading-[1.1] uppercase break-words">
            I sat where you're sitting.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4 ">
              <h3 className="font-dela text-2xl text-primary">Akmal Rahman</h3>
              <p className="font-bricolage text-xl text-foreground/80 font-medium">
                Co- Founder
              </p>

              <p className="font-bricolage text-lg text-foreground/70 leading-relaxed">
                Eyelevel was built by a marketing head who spent 15 years on the
                client side. The full story, and the brands, live on{" "}
                <a
                  href="https://akmalrahman.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  akmalrahman.com
                </a>
              </p>
            </div>

            {/* Quote */}
            <div className="relative pt-6">
              <Quote className="absolute top-0 left-0 w-8 h-8 text-primary/20 -scale-x-100" />
              <p className="font-dela text-lg md:text-xl text-foreground/90 italic leading-relaxed pl-10">
                I have been the person deciding which agency gets the budget and
                which one gets fired. I built Eyelevel because I knew exactly
                what was always missing.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="group px-6 sm:px-10 py-6 text-sm md:text-lg w-full sm:w-auto"
              >
                <a
                  href="https://akmalrahman.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the founder's story
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Headshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-4/5 lg:w-[80%] mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden group border-2 border-primary/10 flex items-end justify-center px-6 pt-6 md:px-0 md:pt-8">
              {/* Background styling for image container */}
              <div className="absolute inset-0 transition-opacity duration-500 z-10 pointer-events-none" />

              <img
                src={founder_home_img}
                alt="Akmal Rahman - Chief Growth Architect"
                className="w-full md:w-3/4 lg:w-4/5 h-auto object-contain object-bottom transition-all duration-700"
              />
            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
