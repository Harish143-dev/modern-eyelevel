import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, Target, Search, MousePointerClick, LineChart } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";

interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

const AccordionGallery = ({ items }: { items: iCardItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col md:flex-row w-full h-[80vh] md:h-[60vh] gap-4 mt-12">
      {items.map((item, index) => {
        const isActive = hoveredIndex === index;
        return (
          <motion.div
            key={index}
            className="relative rounded-3xl overflow-hidden cursor-pointer bg-black/20"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(0)}
            animate={{
              flexGrow: isActive ? 5 : 1,
            }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            style={{ flexGrow: index === 0 ? 5 : 1 }}
          >
            <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col justify-end h-full w-full">

              <AnimatePresence mode="wait">
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="font-dela text-xl md:text-2xl text-white mb-2">{item.title}</h3>
                    <p className="font-bricolage text-sm md:text-base text-white/80 max-w-sm line-clamp-2 md:line-clamp-none">{item.description}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    className="hidden md:block absolute bottom-8 left-8 origin-left -rotate-90 whitespace-nowrap translate-y-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-dela text-xl text-white tracking-widest">{item.title}</h3>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const PerformanceMarketing = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Performance Marketing Agency Chennai | Eyelevel Growth Studio"
        description="Meta and Google Ads built for revenue, not reach. Full-funnel campaigns with complete attribution from ad to close. No black-box reporting."
        keywords={[
          "performance marketing agency Chennai",
          "Meta Ads agency Chennai",
          "Google Ads agency Chennai",
          "digital advertising Chennai",
          "performance marketing India"
        ]}
        canonical="https://theeyelevelstudio.com/services/performance-marketing"
        url="https://theeyelevelstudio.com/services/performance-marketing"
      />
      <Header />

      {/* Section 1 — Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] lg:min-h-[95vh] flex items-center pt-40 md:pt-38 pb-12 px-4 overflow-hidden bg-secondary"
      >
        {/* Rotating star background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-[350px] md:w-[600px] lg:w-[750px] h-[350px] md:h-[600px] lg:h-[750px] text-forest-dark/60 pointer-events-none"
        >
          <Star18 className="w-full h-full" />
        </motion.div>

        {/* Parallax background elements */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-2xl" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <GreenButton>Services / Performance Marketing</GreenButton>
          </motion.div>

          <div className="font-dela text-4xl md:text-5xl lg:text-7xl uppercase text-primary leading-[1.05] mb-8 tracking-tight flex flex-wrap justify-center gap-x-4 gap-y-2">
            {/* Staggered word reveal */}
            {["META", "AND", "GOOGLE", "ADS", "BUILT", "FOR"].map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                >
                  {word}
                </motion.div>
              </div>
            ))}
            <div className="overflow-hidden w-full mt-2">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              >
                <WavyUnderline>REVENUE, NOT REACH.</WavyUnderline>
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-bricolage text-lg max-w-3xl mx-auto mb-10 leading-relaxed text-foreground"
          >
            Full-funnel campaigns. Flat fees. Complete attribution from ad to close. No black-box reporting, no padded spend.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center rounded-full relative font-bricolage z-1000 justify-center gap-4"
          >
            <Link to="/booking">
              <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full group overflow-hidden relative">
                <span className="relative z-10">Book a free 30-min diagnostic</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — What it includes (Bento Box) */}
      <section className="px-4 py-24 bg-background relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col">
          <motion.div {...scrollAnimProps} className="mb-6 flex justify-start">
            <GreenButton>What it includes</GreenButton>
          </motion.div>

          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-3xl md:text-5xl lg:text-6xl mb-16 max-w-3xl leading-[1.1]"
          >
            EVERYTHING IN THE <WavyUnderline>RETAINER</WavyUnderline>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 w-full">
            {/* Box 1 - Spans 2 cols */}
            <motion.div
              {...scrollAnimProps}
              className="md:col-span-2 md:row-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-end min-h-[280px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
              <Search className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-dela text-2xl lg:text-3xl text-primary mb-3">Meta & Google Ads</h3>
              <p className="font-bricolage text-lg text-foreground/80 max-w-md">Full campaign build, audience architecture, creative iteration across Search, Display, YouTube, and Performance Max.</p>
            </motion.div>

            {/* Box 2 - Spans 1 col */}
            <motion.div
              {...scrollAnimProps}
              transition={{ delay: 0.1 }}
              className="md:col-span-1 md:row-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/5 group relative overflow-hidden min-h-[280px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Target className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-dela text-2xl text-primary mb-3">Conversion Tracking</h3>
              <p className="font-bricolage text-lg text-foreground/80">GA4, Meta Pixel, and offline conversion integration.</p>
            </motion.div>

            {/* Box 3 - Spans 1 col */}
            <motion.div
              {...scrollAnimProps}
              transition={{ delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/5 group relative overflow-hidden min-h-[280px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <MousePointerClick className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-dela text-2xl text-primary mb-3">A/B Testing</h3>
              <p className="font-bricolage text-lg text-foreground/80">Creative, copy, landing page, and audience simultaneously.</p>
            </motion.div>

            {/* Box 4 - Spans 2 cols */}
            <motion.div
              {...scrollAnimProps}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 md:row-span-1 bg-primary/5 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-end min-h-[280px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <LineChart className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-dela text-2xl lg:text-3xl text-primary mb-3">Revenue Attribution Dashboard</h3>
              <p className="font-bricolage text-lg text-foreground/80 max-w-xl">Bundled into every retainer. Plus monthly P&L reviews for a single performance view per month.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — Who it is for */}
      <section className="px-4 py-24 bg-secondary relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div {...scrollAnimProps} className="mb-12">
            <GreenButton>Who it's for</GreenButton>
          </motion.div>

          <motion.p
            {...scrollAnimProps}
            className="text-lg font-bricolage text-foreground max-w-3xl mx-auto text-center leading-relaxed"
          >
            Real estate developers who need qualified site visit bookings. Healthcare clinics that need patient calls, not vanity impressions. D2C and retail brands who need ROAS they can defend to a board.
          </motion.p>
        </div>
      </section>

      {/* Section 4 — Pull quote */}
      <section className="px-4 py-32 bg-background relative z-10 flex justify-center items-center overflow-hidden">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
          <motion.div {...scrollAnimProps} className="mb-16">
            <GreenButton>THE OUTCOME</GreenButton>
          </motion.div>

          {/* Word by word text reveal */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-dela text-3xl md:text-5xl lg:text-7xl uppercase text-primary max-w-5xl leading-[1.1] flex flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-x-6 lg:gap-y-4">
              {`"YOU KNOW EXACTLY WHAT EACH RUPEE SPENT PRODUCED."`.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.1, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>
        </div>
      </section>

      {/* Section 5 — Industry verticals (Accordion) */}
      < section className="px-4 py-24 bg-secondary relative z-10" >
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.div {...scrollAnimProps} className="mb-8 text-center">
            <GreenButton>INDUSTRY</GreenButton>
          </motion.div>

          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-3xl md:text-5xl lg:text-6xl mb-8 text-center"
          >
            Industries <WavyUnderline className="text-white">We work in</WavyUnderline>
          </motion.h2>

          <div className="w-full">
            <AccordionGallery items={parallaxItems} />
          </div>
        </div>
      </section>

      {/* Section 6 — CTA band (Floating Island) */}
      <section className="px-4 py-24 bg-background relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...scrollAnimProps}
            className="bg-secondary rounded-[3rem] p-12 md:p-20 text-center flex flex-col items-center relative overflow-hidden shadow-2xl border border-white/5"
          >
            {/* Decorative blurs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-[3rem]">
              <div className="absolute -top-1/2 -left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-1/2 -right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="font-dela uppercase text-primary text-3xl md:text-5xl lg:text-6xl mb-6">
                READY TO TALK?
              </h2>

              <p className="font-bricolage text-foreground/80 text-lg md:text-xl mb-12 max-w-lg">
                30 minutes. No pitch deck. We'll tell you what we see.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link to="/booking">
                  <Button className="h-14 px-8 text-base font-semibold rounded-full group relative overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(var(--primary),0.3)] bg-primary text-background hover:bg-primary/90 border-0">
                    <span className="relative z-10">Book a free 30-min diagnostic</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  </Button>
                </Link>
                <a
                  href="/services"
                  className="font-bricolage font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group"
                >
                  See all services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
    </div >
  );
};

export default PerformanceMarketing;
