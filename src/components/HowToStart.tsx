import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText, Rocket } from "lucide-react";
import mascotWave from "@/assets/mascot-wave.png";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Book a Call",
    description: "Schedule a free 30-minute strategy call with our team. We'll discuss your goals, challenges, and how we can help."
  },
  {
    icon: FileText,
    step: "02",
    title: "Get Your Plan",
    description: "Receive a custom marketing proposal tailored to your business needs, timeline, and budget within 48 hours."
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Grow",
    description: "We execute the strategy while you focus on your business. Watch your metrics climb as we optimize in real-time."
  }
];

const HowToStart = () => {
  return (
    <section className="py-24 px-4 bg-card text-card-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-card-foreground/60 uppercase tracking-[0.3em] text-sm mb-4">
              Getting started
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-card-foreground mb-8">
              HOW TO<br />START?
            </h2>
            <p className="text-card-foreground/70 text-lg mb-8">
              Starting with LOUD is simple. Our streamlined onboarding process gets 
              you from inquiry to active campaign in as little as one week.
            </p>
            <Button variant="dark" size="lg" className="group">
              Book Your Free Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <img 
              src={mascotWave} 
              alt="Friendly mascot waving"
              className="mt-8 w-24 h-24 animate-float hidden md:block"
            />
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-background/50 rounded-2xl p-6 flex gap-4 hover:bg-background transition-colors"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-primary font-bold mb-1">STEP {step.step}</div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2">{step.title}</h3>
                  <p className="text-card-foreground/70 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
