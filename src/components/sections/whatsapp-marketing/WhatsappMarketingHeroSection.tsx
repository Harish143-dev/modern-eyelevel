import { MouseEvent } from "react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";

const Star18 = ({ className }: { className?: string }) => {
  const points = 18;
  const outerRadius = 100;
  const innerRadius = 75;
  const cx = 100;
  const cy = 100;

  let pathData = "";
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (Math.PI * i) / points - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    pathData += `${i === 0 ? "M" : "L"} ${x} ${y} `;
  }
  pathData += "Z";

  return (
    <svg viewBox="0 0 200 200" className={className}>
      <path d={pathData} fill="currentColor" />
    </svg>
  );
};

interface WhatsappMarketingHeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function WhatsappMarketingHeroSection({ scrollTo }: WhatsappMarketingHeroSectionProps) {
  return (
    <section className="relative pt-[110px] px-4 pb-[100px] md:px-12 flex justify-center items-center bg-secondary overflow-hidden min-h-[90vh] z-[1]" aria-labelledby="hero-h1">
      {/* Rotating 32-pointed star - centered upper area */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 m-auto w-[350px] md:w-[600px] lg:w-[750px] h-[350px] md:h-[600px] lg:h-[750px] text-background/60 pointer-events-none"
      >
        <Star18 className="w-full h-full" />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative mt-5  z-10 flex flex-col items-center el-reveal">
        <GreenButton>WhatsApp Marketing Agency · India</GreenButton>

        <motion.h1
          id="hero-h1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-dela uppercase text-center mb-5 text-primary text-2xl md:text-3xl lg:text-5xl tracking-wide"
          style={{ lineHeight: "1.2" }}
        >
          WHERE YOUR CUSTOMERS<br className="hidden md:inline" />
          ACTUALLY <WavyUnderline>READ</WavyUnderline> YOUR MESSAGES
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base font-bricolage leading-relaxed max-w-3xl space-y-4 text-foreground/70"
        >
          <p>
            Email open rates average 20%. WhatsApp open rates average 95%. If your competitors are still relying on email nurture and you haven't set up WhatsApp — this is the gap.
          </p>
          <p>
            EyeLevel manages end-to-end WhatsApp marketing for D2C brands, healthcare providers, schools, and SaaS companies across India. We handle everything from API setup to campaign execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 w-full"
        >
          <Button
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              scrollTo("final-cta");
            }}
            className="group px-10 py-7 text-base w-full sm:w-auto"
          >
            Book a Discovery Call
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              scrollTo("use-cases");
            }}
            className="px-10 py-7 text-base w-full sm:w-auto border-foreground/30 text-foreground"
          >
            See Use Cases ↓
          </Button>
        </motion.div>


      </div>
    </section>
  );
}



