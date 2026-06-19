import { motion } from "framer-motion";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  link: string;
  subtitle?: string;
}

const services: ServiceItem[] = [
  {
    id: "performance",
    number: "01",
    title: "PERFORMANCE MARKETING",
    description: "Meta and Google Ads built for revenue, not clicks. Flat fees, full attribution from ad to close.",
    link: "/services/performance-marketing"
  },
  {
    id: "seo",
    number: "02",
    title: "AI-ERA SEO",
    subtitle: "( AEO + GEO ) ",
    description: "Traditional SEO plus AEO (AI Overviews, Featured Snippets) and GEO (ChatGPT, Gemini, Perplexity citations).",
    link: "/services/seo"
  },
  {
    id: "social",
    number: "03",
    title: "SOCIAL MEDIA MANAGEMENT",
    description: "Content that builds the audience your sales team needs.",
    link: "/services/social-media"
  },
  {
    id: "content",
    number: "04",
    title: "CONTENT & CREATIVE",
    description: "AI handles production speed, humans handle strategy and voice. Video, design, copy, brand assets.",
    link: "/services/content-creative"
  },
  {
    id: "linkedin",
    number: "05",
    title: "LINKEDIN B2B MARKETING",
    description: "Profile optimisation, content strategy, and targeted outreach that builds real pipeline.",
    link: "/services/linkedin-b2b"
  },
  {
    id: "cro",
    number: "06",
    title: "CRO AND FUNNEL DESIGN",
    description: "We fix what happens after the click. Landing pages, conversion flows, lead qualification.",
    link: "/services/cro-funnel"
  },
  {
    id: "revenue",
    number: "07",
    title: "REVENUE ATTRIBUTION DASHBOARD",
    description: "Bundled into growth retainers. Every campaign tied to a business outcome.",
    link: "/services/revenue-attribution"
  },
  {
    id: "brand",
    number: "08",
    title: "BRAND & IDENTITY",
    description: "Visual identity, positioning, and brand architecture.",
    link: "/services/brand-identity"
  },
  {
    id: "web",
    number: "09",
    title: "WEBSITE DESIGN & DEVELOPMENT",
    description: "Fast, conversion-optimised sites. A sales tool, not a brochure.",
    link: "/services/website-design"
  },
];

const ServicesSection = () => {
  return (
    <section className="mb-20 bg-background relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <GreenButton>Services</GreenButton>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dela text-3xl md:text-4xl lg:text-5xl text-foreground  leading-[1.1] tracking-wide mt-6 uppercase"
          >
            <span className="text-primary">What <WavyUnderline className="text-white">we do</WavyUnderline> </span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary border border-white/5 rounded-[2rem] p-8 hover:border-primary/30 transition-all duration-300 group flex flex-col h-full shadow-sm hover:shadow-md"
            >
              <div className="mb-6 flex justify-between items-start">
                <span className="font-bricolage text-primary text-xl font-bold opacity-80 group-hover:opacity-100 transition-opacity">{service.number}</span>
              </div>
              <h3 className="font-dela text-xl md:text-2xl text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                {service.title}<br />
                <span className="font-dela text-xl md:text-2xl text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">{service.subtitle}</span>
              </h3>
              <p className="font-bricolage text-foreground/70 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>

              <Link to={service.link} className="inline-flex items-center text-foreground font-bricolage font-medium tracking-wider text-sm mt-auto hover:text-primary transition-colors group/link">
                LEARN MORE <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform text-primary" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <Link to="/services">
            <Button
              size="lg"
              className="group px-5 sm:px-10 py-4 mt-5 text-sm md:text-lg w-full sm:w-auto mb-5"
            >
              Explore all services
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
