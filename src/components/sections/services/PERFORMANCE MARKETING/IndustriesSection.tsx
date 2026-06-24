import { motion } from "framer-motion";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { CardsParallax } from "@/components/shared/CardsParallax";

interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

const parallaxItems: iCardItem[] = [
  {
    title: "Real Estate",
    description: "Qualified site visit bookings and developer branding.",
    tag: "Real Estate",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#1a2f28",
    textColor: "#F8FFE8"
  },
  {
    title: "Healthcare",
    description: "Patient calls, doctor-led content, and trust-building feeds.",
    tag: "Healthcare",
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#2a4f44",
    textColor: "#F8FFE8"
  },
  {
    title: "Automotive",
    description: "High-octane creative, dealership promotions, and test-drive campaigns.",
    tag: "Automotive",
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#1a2f28",
    textColor: "#F8FFE8"
  },
  {
    title: "IT / SaaS",
    description: "B2B thought leadership, founder branding, and product updates.",
    tag: "IT/SaaS",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#2a4f44",
    textColor: "#F8FFE8"
  }
];

export const IndustriesSection = () => {
  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    <section className="px-4 py-20 bg-secondary relative z-10">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.h2
          {...scrollAnimProps}
          className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
        >
          Industries <WavyUnderline className="text-white">We work in</WavyUnderline>
        </motion.h2>

        <div className="w-full">
          <CardsParallax items={parallaxItems} />
        </div>
      </div>
    </section>
 
    </>
  );
};
