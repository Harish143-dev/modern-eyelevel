import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";

import realestateImg from "@/assets/industries/h_industry/realestate.webp";
import healthcareImg from "@/assets/industries/h_industry/healthcare.webp";
import b2bImg from "@/assets/industries/h_industry/b2b.webp";

export interface Industry {
  id: string;
  number: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  image: string;
}

const industries: Industry[] = [
  {
    id: "realestate",
    number: "01",
    title: "Real Estate",
    description: "High-trust, slow-burn sales. Built for closed deals and site visits, not cheap leads.",
    link: "/industries/real-estate",
    linkText: "Hook: SPR Highliving",
    image: realestateImg,
  },
  {
    id: "it-saas",
    number: "02",
    title: "IT / SaaS",
    description: "Funded product companies and profitable B2B software. Demand gen, LinkedIn brand, and content that produces pipeline.",
    link: "/industries/it-saas",
    linkText: "Hook: FreshToHome",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "healthcare",
    number: "03",
    title: "Healthcare",
    description: "Specialty clinics and multi-specialty hospitals. Patient acquisition built on trust architecture, not product marketing.",
    link: "/industries/healthcare",
    linkText: "Hook: active healthcare clients",
    image: healthcareImg,
  },
  {
    id: "automotive",
    number: "04",
    title: "Automotive",
    description: "Dealerships and component makers. Showroom footfall, test-drive bookings, OEM mandates.",
    link: "/industries/automotive",
    linkText: "Hook: Hyundai Motors India",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "manufacturing",
    number: "05",
    title: "Manufacturing / B2B",
    description: "Chennai and Coimbatore manufacturers. Your buyers moved online; your marketing needs to catch up.",
    link: "/industries/manufacturing",
    linkText: "Hook: Schwing Stetter",
    image: b2bImg,
  }
];

const HomeIndustriesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Container for the text (centered) */}
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-16 el-reveal">
        <GreenButton>INDUSTRIES</GreenButton>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-dela text-3xl uppercase md:text-4xl lg:text-5xl text-primary text-foreground mb-6 leading-[1.1] tracking-wide mt-6"
        >
                 Industries <WavyUnderline className="text-white">We work in</WavyUnderline>
        </motion.h2>


      </div>

      {/* Accordion Area */}
      <div className="w-full max-w-[1300px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[450px] lg:h-[500px]">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 md:mt-16 flex justify-center px-4"
      >
        <Link 
          to="/industries" 
        >
          <Button
            size="lg"
            className="group px-5 sm:px-10 py-4 mt-5 text-sm md:text-lg w-full sm:w-auto"
          >
            See how we work in your industry
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

const IndustryCard = ({ industry, index }: IndustryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-full md:w-auto h-[340px] sm:h-[320px] md:h-full rounded-[1.5rem] overflow-hidden cursor-pointer flex-none md:flex-1 md:hover:flex-[2.5] lg:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/5 bg-[#111C15]"
    >
      {/* Background Image */}
      <img
        src={industry.image}
        alt={industry.title}
        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-30 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=800&auto=format&fit=crop';
        }}
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

      {/* COLLAPSED STATE CONTENT (Visible on desktop by default, hides on hover) */}
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-end z-20 md:flex md:group-hover:opacity-0 md:group-hover:pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hidden">
        <span className="font-bricolage text-sm text-primary mb-2 md:mb-4 md:[writing-mode:vertical-rl] md:-rotate-180">
          {industry.number}
        </span>
        <h3 className="font-bricolage font-bold text-xl md:text-xl lg:text-[22px] text-primary whitespace-nowrap md:[writing-mode:vertical-rl] md:-rotate-180 tracking-wide">
          {industry.title}
        </h3>
      </div>

      {/* EXPANDED STATE CONTENT (Visible on mobile by default, fades/slides in on hover on desktop) */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-30 opacity-100 pointer-events-auto md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] md:translate-x-4 md:group-hover:translate-x-0 translate-y-0">

        {/* Top row: Number */}
        <div className="flex items-center justify-between text-primary">
          <span className="font-bricolage text-sm">{industry.number}</span>
        </div>

        {/* Middle and Bottom content */}
        <div className="flex flex-col gap-4 mt-auto">
          <h3 className="font-dela text-2xl md:text-3xl text-primary leading-tight">
            {industry.title}
          </h3>
          <p className="font-bricolage text-sm text-foreground/80 leading-relaxed max-w-xl">
            {industry.description}
          </p>

          <Link to={industry.link} className="flex items-center justify-between group/link gap-4 mt-2 border-t border-primary/20 pt-4">
            <span className="font-bricolage text-sm font-medium text-primary group-hover/link:text-white transition-colors">
              {industry.linkText}
            </span>
            <ArrowRight className="w-5 h-5 text-primary group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
};

export default HomeIndustriesSection;



