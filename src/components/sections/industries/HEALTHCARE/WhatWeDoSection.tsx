import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/industries/healthcare_problem_realistic.png";
import { motion } from "framer-motion";
import { healthcareIndustrySchema, breadcrumbSchema } from "@/hooks/schemas";

const services = [
  { title: "AI-Era SEO", description: "appear when patients search symptoms, conditions, and specialist names", slug: "ai-era-seo" },
  { title: "Social Media", description: "doctor-forward content that builds credibility, not just reach", slug: "social-media" },
  { title: "Performance Marketing", description: "paid campaigns targeting specific conditions, geographies, and patient demographics", slug: "performance-marketing" },
  { title: "Content and Creative", description: "patient education content, doctor profiles, and treatment explainers", slug: "content-and-creative" },
  { title: "CRO and Funnel Design", description: "appointment booking flows that reduce friction and increase conversion", slug: "cro-and-funnel-design" }
];

export const WhatWeDoSection = () => {
  return (
    <>
      {/* What We Do */}
        <section className="px-4 bg-secondary min-h-[65vh] lg:min-h-[95vh] flex flex-col justify-center py-[100px]">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-16">
              <GreenButton>What we do for the industry</GreenButton>
              <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl uppercase text-primary">
                What we do for <WavyUnderline>Healthcare</WavyUnderline>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-fr gap-6 justify-items-center md:justify-items-stretch">
              {services.map((service, i) => (
                <Link
                  key={i}
                  to={`/services/${service.slug}`}
                  className={`block group w-full h-full max-w-[350px] md:max-w-none lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] border-2 border-primary/10 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(226,254,165,0.12)] bg-white/5 hover:bg-white/10 flex flex-col"
                  >
                    <h3 className="font-dela text-lg md:text-xl mb-4 uppercase flex justify-between items-start text-white group-hover:text-primary transition-colors duration-500">
                      {service.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-[#E2FEA5] shrink-0 ml-2" />
                    </h3>
                    <p className="font-bricolage text-sm md:text-base leading-relaxed text-foreground/80 mt-auto">
                      {service.description}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
    </>
  );
};
