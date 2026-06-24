import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Search, Bot, Cpu, Code, MapPin, BarChart } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { aiEraSeoSchema, breadcrumbSchema } from "@/hooks/schemas";

const AiEraSeo = () => {
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
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="AI-Era SEO Agency Chennai | AEO & GEO | Eyelevel Growth Studio"
        description="Traditional SEO plus AEO (AI Overviews, featured snippets) and GEO (ChatGPT, Gemini, Perplexity). We optimise for where buyers find answers now."
        keywords={[
          "SEO agency Chennai",
          "AI SEO agency India",
          "AEO agency",
          "GEO optimization India",
          "Google AI Overview optimization",
          "local SEO Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          aiEraSeoSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "AI-Era SEO", url: "https://theeyelevelstudio.com/services/ai-era-seo" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/ai-era-seo"
        url="https://theeyelevelstudio.com/services/ai-era-seo"
      />
      <Header />

      {/* Section 1 — Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] lg:min-h-[95vh]  flex items-center px-4 overflow-hidden bg-secondary pt-40 pb-[100px]">
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
            className="mb-0"
          >
            <GreenButton>SERVICES / AI-ERA SEO</GreenButton>
          </motion.div>

          <AnimatedHeroHeading
            words={[
              "WE", "OPTIMISE", "FOR", "WHERE", "BUYERS",
              <WavyUnderline key="wavy">FIND ANSWERS NOW</WavyUnderline>
            ]}
          />
          <div className="w-20 h-1 opacity-50 bg-primary my-8 rounded-full mx-auto"></div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-bricolage text-lg max-w-3xl mx-auto mb-10 leading-relaxed text-foreground"
          >
            Google. AI Overviews. ChatGPT. Gemini. Perplexity. Buyers get answers before they click. We make sure yours is the answer they get.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center rounded-full relative font-bricolage z-1000 justify-start gap-4"
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
      <section className="px-4 sm:px-10 md:px-20 bg-background relative z-10 py-20 md:py-[100px]">
        <div className="w-full flex justify-start text-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
          >
            WHAT IT <WavyUnderline>INCLUDES</WavyUnderline>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Box 1 (wide) */}
          <motion.div
            {...scrollAnimProps}
            className="md:col-span-2 bg-primary/5 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Search className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">TRADITIONAL SEO</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl">On-page, technical, backlink architecture</p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Bot className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">AEO</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">Answer Engine Optimization — structured for AI Overviews and Featured Snippets</p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Cpu className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">GEO</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">Generative Engine Optimization — getting clients cited in ChatGPT, Gemini, and Perplexity</p>
          </motion.div>

          {/* Box 4 (wide) */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-primary/5 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Code className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">SCHEMA MARKUP</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl">Across all pages (Service, FAQ, HowTo, LocalBusiness, Organization)</p>
          </motion.div>

          {/* Box 5 (wide) */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-primary/5 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <MapPin className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">LOCAL SEO</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl">And Google Business Profile management</p>
          </motion.div>

          {/* Box 6 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.5 }}
            className="md:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <BarChart className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">REPORTING</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">Monthly keyword ranking, AI citation tracking, and content gap reports</p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Who it is for */}
      <section className="px-4 bg-secondary relative z-10 overflow-hidden py-[100px]">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-8"
          >
            WHO IT IS <WavyUnderline> FOR </WavyUnderline>
          </motion.h2>

          <motion.p
            {...scrollAnimProps}
            className="text-lg font-bricolage text-foreground max-w-3xl mx-auto text-center leading-relaxed"
          >
            IT and SaaS companies whose competitors are taking Google AI Overview real estate. Healthcare providers who need to appear when patients search symptoms, not just clinic names. Any business where the buyer's first move is a search.
          </motion.p>
        </div>
      </section>

      {/* Section 4 — Pull quote */}
      <section className="px-4 bg-background relative z-10 flex justify-start items-center py-[100px]">
        <div className="max-w-[1200px] mx-auto w-full">
          <motion.div
            {...scrollAnimProps}
            className="border border-white/5 rounded-2xl md:rounded-[2rem] p-8 md:p-12 lg:p-16 bg-forest-deep relative overflow-hidden flex flex-col md:flex-row gap-8 md:gap-16 items-start shadow-xl"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-[2rem] z-0">
              <div className="absolute top-[-30%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full"></div>
              {/* Subtle concentric rings like the image */}
              <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[150%] rounded-full border border-primary/5 opacity-50"></div>
              <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[120%] rounded-full border border-primary/5 opacity-50"></div>
            </div>

            {/* Left Side: Eyebrow */}
            <div className="md:w-1/4 shrink-0 flex flex-col items-start relative z-10 pt-2">
              <h3 className="text-primary font-bricolage text-sm md:text-2xl tracking-[0.25em] uppercase font-semibold mb-4">
                THE <WavyUnderline> OUTCOME </WavyUnderline>
              </h3>
            </div>

            {/* Vertical Divider (Desktop only) */}
            <div className="hidden md:block w-px h-auto self-stretch bg-white/10 relative z-10"></div>

            {/* Right Side: Quote */}
            <div className="md:w-3/4 relative z-10">
              <span className="text-4xl md:text-5xl text-primary/40 font-dela leading-none block mb-4">“</span>
              <p className="font-bricolage text-xl md:text-2xl lg:text-[28px] text-white/90 leading-relaxed font-light">
                "YOU APPEAR AT EVERY POINT WHERE A POTENTIAL BUYER IS LOOKING FOR WHAT YOU DO ON GOOGLE, IN AI OVERVIEWS, AND INSIDE AI CHAT TOOLS"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 — Industry verticals */}
      < section className="px-4 py-20 bg-secondary relative z-10" >
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">


          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
          >
            Industries <WavyUnderline className="text-white">We work in</WavyUnderline>
          </motion.h2>

          <motion.div {...scrollAnimProps} className="w-full max-w-3xl mx-auto">
            <CardsParallax items={parallaxItems} />
          </motion.div>
        </div>
      </section>

      {/* Section 6 — CTA band */}
      <section className="px-4 bg-background relative z-10 py-[100px]">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-6"
          >
            READY TO <WavyUnderline> TALK? </WavyUnderline>
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
      </section >

      <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
    </div >
  );
};

export default AiEraSeo;
