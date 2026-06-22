import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";

const CROAndFunnelDesign = () => {
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
    transition: { duration: 0.6 },
  };

  const parallaxItems: iCardItem[] = [
    {
      title: "Real Estate",
      description: "Qualified site visit bookings and developer branding.",
      tag: "Real Estate",
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
      link: "#",
      color: "#1a2f28",
      textColor: "#F8FFE8",
    },
    {
      title: "Healthcare",
      description: "Patient calls, doctor-led content, and trust-building feeds.",
      tag: "Healthcare",
      src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
      link: "#",
      color: "#2a4f44",
      textColor: "#F8FFE8",
    },
    {
      title: "IT / SaaS",
      description: "B2B thought leadership, founder branding, and product updates.",
      tag: "IT/SaaS",
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      link: "#",
      color: "#1a2f28",
      textColor: "#F8FFE8",
    },
  ];

  const includes = [
    {
      title: "Landing Page Audits",
      desc: "Heatmaps, session recordings, and form drop-off analysis",
    },
    {
      title: "Landing Page Redesign & Build",
      desc: "Conversion-optimised, not brand exercises",
    },
    {
      title: "Lead Qualification Flows",
      desc: "Structured forms and sequences that separate buyers from browsers",
    },
    {
      title: "Funnel Mapping",
      desc: "From first click through to closed deal — every step designed to reduce friction",
    },
    {
      title: "A/B Testing Infrastructure",
      desc: "Systematic testing of page variants, CTA copy, and form fields",
    },
    {
      title: "Ads & Email Integration",
      desc: "So the funnel works as one connected system, not isolated parts",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="CRO Agency Chennai | Conversion Rate Optimization | EyeLevel Growth Studio"
        description="We fix what happens after the click. Landing pages, conversion flows, and lead qualification systems built to turn visitors into conversations."
        keywords={[
          "CRO agency Chennai",
          "conversion rate optimization India",
          "landing page agency Chennai",
          "funnel design agency",
          "lead conversion agency Chennai",
        ]}
        canonical="https://theeyelevelstudio.com/services/cro-and-funnel-design"
        url="https://theeyelevelstudio.com/services/cro-and-funnel-design"
      />
      <Header />

      {/* Section 1 — Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] lg:min-h-[95vh] flex items-center justify-center pt-40 md:pt-38 pb-4 px-4 overflow-hidden bg-secondary"
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
            <GreenButton>Services / CRO and Funnel Design</GreenButton>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-dela text-3xl md:text-5xl lg:text-6xl uppercase text-primary leading-[1.05] mb-8 tracking-tight"
          >
            MOST MARKETING PROBLEMS ARE ACTUALLY{" "}
            <WavyUnderline>CONVERSION PROBLEMS.</WavyUnderline>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-bricolage text-lg max-w-3xl mx-auto mb-10 leading-relaxed text-foreground"
          >
            We fix what happens after the click. Landing pages, conversion flows, lead qualification systems — built to turn visitors into conversations.
          </motion.p>

          <div className="flex items-center rounded-full relative font-bricolage z-1000 justify-center gap-4">
            <Link to="/booking">
              <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full">
                Book a free 30-min diagnostic
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 — What it includes */}
      <section className="px-4 py-20 bg-background relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div {...scrollAnimProps} className="mb-12">
            <GreenButton>What it includes</GreenButton>
          </motion.div>

          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
          >
            EVERYTHING IN THE RETAINER
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
            {includes.map((card, idx) => (
              <motion.div
                key={idx}
                {...scrollAnimProps}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-secondary/40 rounded-2xl p-6 border border-white/5 flex flex-col gap-2"
              >
                <h3 className="font-dela text-xl text-primary">{card.title}</h3>
                <p className="font-bricolage text-foreground opacity-80">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Who it is for */}
      <section className="px-4 py-20 bg-secondary relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div {...scrollAnimProps} className="mb-12">
            <GreenButton>Who it's for</GreenButton>
          </motion.div>

          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
          >
            BUILT FOR BUSINESSES THAT GET CLICKS BUT NOT{" "}
            <WavyUnderline>ENQUIRIES</WavyUnderline>
          </motion.h2>

          <motion.p
            {...scrollAnimProps}
            className="text-lg font-bricolage text-foreground max-w-3xl mx-auto text-center leading-relaxed"
          >
            Companies running paid ads that are generating clicks but not enquiries. Businesses with good traffic and low conversion rates. Teams that have built a website but treat it as a brochure rather than a sales tool.
          </motion.p>
        </div>
      </section>

      {/* Section 4 — Pull quote */}
      <section className="px-4 py-20 bg-background relative z-10 flex justify-center items-center">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
          <motion.div {...scrollAnimProps} className="mb-12">
            <GreenButton>THE OUTCOME</GreenButton>
          </motion.div>

          <div className="flex items-stretch gap-8">
            <div className="w-px bg-primary" />

            <motion.h2
              {...scrollAnimProps}
              className="font-dela text-2xl md:text-4xl lg:text-5xl uppercase text-primary max-w-4xl leading-[1.1] text-left"
            >
              "MORE OF YOUR EXISTING TRAFFIC CONVERTS. YOUR COST PER LEAD DROPS WITHOUT SPENDING MORE ON ADS."
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Section 5 — Industry verticals */}
      <section className="px-4 py-20 bg-secondary relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div {...scrollAnimProps} className="mb-12">
            <GreenButton>INDUSTRY</GreenButton>
          </motion.div>

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

      {/* Section 6 — CTA band */}
      <section className="px-4 py-20 bg-background relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-6"
          >
            READY TO TALK?
          </motion.h2>

          <motion.p
            {...scrollAnimProps}
            className="font-bricolage text-foreground text-lg mb-10"
          >
            30 minutes. No pitch deck. We will tell you what we see.
          </motion.p>

          <motion.div
            {...scrollAnimProps}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link to="/booking">
              <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full">
                Book a free 30-min diagnostic
              </Button>
            </Link>
            <a
              href="/services"
              className="font-bricolage font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
            >
              See all services <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
    </div>
  );
};

export default CROAndFunnelDesign;
