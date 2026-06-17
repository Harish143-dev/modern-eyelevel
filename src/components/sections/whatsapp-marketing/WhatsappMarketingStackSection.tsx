import { ArrowRight } from "lucide-react";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhatsappMarketingStackSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="final-cta" className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 relative z-[1]" aria-labelledby="tools-h">
      {/* Soft background glow behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Dark Glassmorphic Card Container */}
      <div className="relative z-10 bg-background/30 backdrop-blur-md border border-white/5 rounded-[32px] p-8 md:p-16 shadow-2xl flex flex-col items-center text-center max-w-[960px] mx-auto el-reveal overflow-hidden">
        {/* Subtle dot pattern background inside the card */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        {/* A tiny glowing badge at the top */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest font-bricolage mb-6 relative z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          End-to-End Execution
        </div>

        <h2 id="tools-h" className="font-dela uppercase text-3xl md:text-5xl leading-[1.1] text-foreground max-w-[800px] m-0 mb-5 relative z-10">
          Skip the API Headaches.<br className="hidden md:block" />
          <span className="text-primary">We Handle the Tech.</span>
        </h2>

        <p className="font-bricolage text-[16px] md:text-[18px] text-foreground/70 max-w-[600px] mx-auto mb-10 relative z-10">
          Don't stress over which WhatsApp provider to use. Whether it's Gupshup, WATI, or Twixor, we select, configure, and manage the perfect tech stack for your brand's volume.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full relative z-10 font-bricolage">
          <Link to="/booking">
            <Button
              size="lg"
              className="group px-10 py-7 mt-5 text-base md:text-lg"
            >
              Book a Discovery Call
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
});

WhatsappMarketingStackSection.displayName = "WhatsappMarketingStackSection";

export default WhatsappMarketingStackSection;




