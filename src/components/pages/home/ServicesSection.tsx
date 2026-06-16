import { motion } from "framer-motion";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  link: string;
}

const services: ServiceItem[] = [
  {
    id: "performance",
    number: "01",
    title: "Performance Marketing",
    description: "We orchestrate paid acquisition that doesn't just buy clicks, but acquires actual market share. (Note: Please provide exact copy from homepage_v1.html)",
    link: "/services/performance-marketing"
  },
  {
    id: "seo",
    number: "02",
    title: "AI-Era SEO (AEO + GEO)",
    description: "Future-proof your organic visibility for the era of AI search engines and generative answers. (Note: Please provide exact copy from homepage_v1.html)",
    link: "/services/seo"
  },
  {
    id: "social",
    number: "03",
    title: "Social Media Management",
    description: "Build an active, engaging community around your brand with data-backed social strategies. (Note: Please provide exact copy from homepage_v1.html)",
    link: "/services/social-media"
  },
  {
    id: "content",
    number: "04",
    title: "Content & Creative",
    description: "Compelling narratives and thumb-stopping visuals that convert attention into intent. (Note: Please provide exact copy from homepage_v1.html)",
    link: "/services/content-creative"
  },
  {
    id: "linkedin",
    number: "05",
    title: "LinkedIn B2B Marketing",
    description: "Turn your LinkedIn presence into a predictable pipeline generation engine. (Note: Please provide exact copy from homepage_v1.html)",
    link: "/services/linkedin-b2b"
  },
  {
    id: "cro",
    number: "06",
    title: "CRO and Funnel Design",
    description: "Maximize your existing traffic by engineering high-converting landing pages and user flows. (Note: Please provide exact copy from homepage_v1.html)",
    link: "/services/cro-funnel"
  },
  {
    id: "revenue",
    number: "07",
    title: "Revenue Attribution Dashboard",
    description: "See exactly which marketing activities are driving closed-won revenue, down to the dollar. (Note: Please provide exact copy from homepage_v1.html)",
    link: "/services/revenue-attribution"
  },
  {
    id: "brand",
    number: "08",
    title: "Brand & Identity",
    description: "Establish a category-defining brand presence that sets you apart from the noise. (Note: Please provide exact copy from homepage_v1.html)",
    link: "/services/brand-identity"
  },
  {
    id: "web",
    number: "09",
    title: "Website Design and Development",
    description: "High-performance digital experiences engineered for speed, SEO, and conversion. (Note: Please provide exact copy from homepage_v1.html)",
    link: "/services/website-design"
  },
];

const ServicesSection = () => {
  return (
    <section className="mb-20 bg-background relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <GreenButton>What We Do</GreenButton>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dela text-3xl md:text-5xl lg:text-5xl text-foreground  leading-[1.1] tracking-wide mt-6 uppercase"
          >
            <span className="text-primary">One studio</span><br /> 
            <span className="text-primary">Every service built to </span> <WavyUnderline>work </WavyUnderline> <WavyUnderline >together</WavyUnderline>
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
              <h3 className="font-dela text-2xl text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                {service.title}
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
      </div>
    </section>
  );
};

export default ServicesSection;
