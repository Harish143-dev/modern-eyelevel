import { useRef } from "react";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Edit3, Users, UserPlus, PieChart } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";

const parallaxItems: iCardItem[] = [
  {
    title: "Real Estate",
    description: "Property reviewers, site visit campaigns, and developer branding.",
    tag: "Real Estate",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#1a2f28",
    textColor: "#F8FFE8"
  },
  {
    title: "Healthcare",
    description: "Patient education, doctor-led content, and trust-building social feeds.",
    tag: "Healthcare",
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#2a4f44",
    textColor: "#F8FFE8"
  },
  {
    title: "Automotive",
    description: "High-octane creative, dealership promotions, and test-drive drives.",
    tag: "Automotive",
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#1a2f28",
    textColor: "#F8FFE8"
  },
  {
    title: "IT / SaaS",
    description: "B2B thought leadership, founder personal branding, and product updates.",
    tag: "IT/SaaS",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#2a4f44",
    textColor: "#F8FFE8"
  }
];

const SocialMediaManagement = () => {
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

  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="Social Media Marketing Agency Chennai | Eyelevel Growth Studio"
        description="Content that builds the audience your sales team actually needs. Strategy, calendars, creative, and posting — fully managed. Communities that convert."
        keywords={[
          "social media marketing agency Chennai",
          "social media management Chennai",
          "Instagram marketing Chennai",
          "Facebook marketing agency",
          "social media agency India"
        ]}
        canonical="https://theeyelevelstudio.com/services/social-media-management"
        url="https://theeyelevelstudio.com/services/social-media-management"
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
            <GreenButton>SERVICES / SOCIAL MEDIA MANAGEMENT</GreenButton>
          </motion.div>

          <AnimatedHeroHeading
            words={[
              "CONTENT", "THAT", "BUILDS", "THE", "AUDIENCE", "YOUR", "SALES", "TEAM",
              <WavyUnderline key="wavy">ACTUALLY NEEDS</WavyUnderline>
            ]}
          />

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="font-bricolage text-lg max-w-3xl mx-auto mb-10 leading-relaxed text-foreground"
          >
            Strategy, calendars, creative, and posting — fully managed. Communities that convert, not just follower counts.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
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
      <section className="px-20 bg-background relative z-10 py-[100px]">
        <div className="w-full flex justify-start text-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
          >
            WHAT IT <WavyUnderline>INCLUDES</WavyUnderline>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 w-full">
          {/* Box 1 (wide) */}
          <motion.div
            {...scrollAnimProps}
            className="md:col-span-2 md:row-span-1 bg-primary/5 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-start min-h-[65vh] lg:min-h-[95vh] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Calendar className="w-10 h-10 text-foreground mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">CONTENT CALENDARS</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl">Monthly content calendars across Instagram, Facebook, LinkedIn, and YouTube Shorts</p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[65vh] lg:min-h-[95vh] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Edit3 className="w-10 h-10 text-foreground mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">CREATION & POSTING</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">Caption writing, creative direction, and scheduling</p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[65vh] lg:min-h-[95vh] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Users className="w-10 h-10 text-foreground mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">COMMUNITY MANAGEMENT</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">Comments, DMs, and reputation monitoring</p>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[65vh] lg:min-h-[95vh] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <UserPlus className="w-10 h-10 text-foreground mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">INFLUENCER COORDINATION</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">Vertical-specific: doctors for healthcare, property reviewers for real estate</p>
          </motion.div>

          {/* Box 5 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 md:row-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[65vh] lg:min-h-[95vh] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <PieChart className="w-10 h-10 text-foreground mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">ANALYTICS REPORT</h3>
            <p className="font-bricolage text-sm md:text-base lg:text-lg text-foreground/80">Monthly analytics report tied to engagement quality, not vanity reach</p>
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
            WHO IT'S <WavyUnderline> FOR </WavyUnderline>
          </motion.h2>

          <motion.p
            {...scrollAnimProps}
            className="text-lg font-bricolage text-foreground max-w-3xl mx-auto text-center leading-relaxed"
          >
            Brands that are posting but not growing. Companies where the social feed looks busy but generates no real business. Teams that need content off their plate so internal people can focus on what they do best.
          </motion.p>
        </div>
      </section>

      {/* Section 4 — The outcome */}
      <section className="px-4 bg-background relative z-10 flex justify-start items-center py-[100px]">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
          >
            THE <WavyUnderline> OUTCOME </WavyUnderline>
          </motion.h2>

          {/* Quote + Line */}
          <div className="flex items-stretch gap-8">
            <div className="w-px bg-primary"></div>

            <motion.h2
              {...scrollAnimProps}
              className="font-dela text-lg md:text-2xl lg:text-3xl uppercase text-primary max-w-3xl leading-[1.2] text-left"
            >
              "A CONSISTENT SOCIAL PRESENCE THAT FUNCTIONS AS A SALES-SUPPORTING CHANNEL, NOT A DISTRACTION FROM ONE."
            </motion.h2>
          </div>
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

          <motion.div
            {...scrollAnimProps}
            className="w-full max-w-3xl mx-auto"
          >
            <CardsParallax items={parallaxItems} />
          </motion.div>
        </div>
      </section >

      {/* Section 6 — CTA band */}
      < section className="px-4 py-20 bg-background relative z-10" >
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-6"
          >
            READY TO <WavyUnderline>TALK?</WavyUnderline>
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
            <a
              href="/booking"
              className="inline-flex items-start justify-start gap-2 group px-5 sm:px-10 py-4 bg-primary text-secondary font-bricolage font-medium text-sm md:text-lg rounded-full hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
              Book a free 30-min diagnostic
            </a>
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

export default SocialMediaManagement;
