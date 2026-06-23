import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";

const ServicesCTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-[#1a2f28]">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-dela mb-6 uppercase text-primary">
            Which service does your marketing{" "}
            <WavyUnderline>need most?</WavyUnderline>
          </h2>

          <p
            className="text-base md:text-lg max-w-xl mx-auto mb-10 font-bricolage"
            style={{ color: "rgba(248, 255, 232, 0.7)" }}
          >
            30 minutes. No pitch deck. We will tell you exactly where to start.
          </p>

          <Link to="/booking">
            <Button className="group h-12 md:h-14 px-5 md:px-8 text-sm md:text-base font-semibold w-full sm:w-auto">
              <span>Book a free 30-min diagnostic</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
