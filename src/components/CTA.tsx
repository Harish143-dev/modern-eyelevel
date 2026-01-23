import { motion } from "framer-motion";
import mascotThumbsup from "@/assets/mascot-thumbsup.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AppointmentDialog from "./AppointmentDialog";

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-t-[5rem] rounded-b-4xl p-8 md:p-16 text-center card-cream relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-forest/10 rounded-full blur-3xl" />
          
          {/* Mascot */}
          <img 
            src={mascotThumbsup} 
            alt="Mascot giving thumbs up" 
            className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 animate-float hidden sm:block"
          />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-card-foreground mb-6">
              Claim Your Free{" "}
              <span className="relative inline-block">
                <span className="text-gradient">$500 Growth Audit</span>
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
                    stroke="#1a3a2f"
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
            <p className="text-card-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Let us diagnose your marketing and build a plan for predictable growth. No cost, no obligation. Expect a response within 24 hours.
            </p>
            <AppointmentDialog>
              <Button size="lg" className="group rounded-full px-8 bg-forest text-primary hover:bg-forest-light relative">
                <span className="relative inline-block">
                  Get My Free Audit
                  <motion.svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="6"
                    viewBox="0 0 200 6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <motion.path
                      d="M0 3 Q50 0, 100 3 T200 3"
                      fill="none"
                      stroke="#E2FEA5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </motion.svg>
                </span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AppointmentDialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
