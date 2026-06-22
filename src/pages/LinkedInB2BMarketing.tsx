import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, UserCheck, Building2, FileText, UserPlus, Megaphone, LineChart } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";

const LinkedInB2BMarketing = () => {
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
      title: "IT / SaaS",
      description: "B2B thought leadership, founder branding, and product updates.",
      tag: "IT/SaaS",
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      link: "#",
      color: "#1a2f28",
      textColor: "#F8FFE8",
    },
    {
      title: "Manufacturing / B2B",
      description: "Digital pipeline built for businesses that still rely on trade shows and referrals.",
      tag: "Manufacturing/B2B",
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      link: "#",
      color: "#2a4f44",
      textColor: "#F8FFE8",
    },
    {
      title: "Automotive",
      description: "High-octane creative, dealership promotions, and test-drive campaigns.",
      tag: "Automotive",
      src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
      link: "#",
      color: "#1a2f28",
      textColor: "#F8FFE8",
    },
  ];

  const includes = [
    {
      title: "Profile Optimisation",
      desc: "Founder and leadership profile — headline, About, Featured section, and banner",
    },
    {
      title: "Company Page",
      desc: "Full page build and an always-on content calendar",
    },
    {
      title: "LinkedIn Content Strategy",
      desc: "Posts, carousels, and newsletters built around your positioning",
    },
    {
      title: "Prospecting & Outreach",
      desc: "Sales Navigator-assisted connection strategy and sequenced outreach",
    },
    {
      title: "LinkedIn Ads",
      desc: "Sponsored content, message ads, and lead gen forms",
    },
    {
      title: "Pipeline Attribution",
      desc: "Monthly reporting that ties LinkedIn activity to real pipeline",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-clip">
      <SEO
        title="LinkedIn B2B Marketing Agency India | EyeLevel Growth Studio"
        description="Profile optimisation, content strategy, and targeted outreach that builds real pipeline. For founders and companies that sell to other businesses."
        keywords={[
          "LinkedIn marketing agency India",
          "LinkedIn B2B marketing Chennai",
          "LinkedIn content strategy India",
          "LinkedIn ads agency",
          "B2B marketing agency Chennai",
        ]}
        canonical="https://theeyelevelstudio.com/services/linkedin-b2b-marketing"
        url="https://theeyelevelstudio.com/services/linkedin-b2b-marketing"
      />
      <Header />

      {/* Section 1 — Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] lg:min-h-[95vh] flex items-center pt-40 md:pt-38 pb-24 px-4 overflow-hidden bg-secondary">
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
            <GreenButton>SERVICES / LINKEDIN B2B MARKETING</GreenButton>
          </motion.div>

          <AnimatedHeroHeading
            words={[
              "LINKEDIN", "IS", "WHERE", "B2B", "DECISIONS", "START.", "WE", "MAKE", "SURE", "YOU",
              <WavyUnderline key="wavy">SHOW UP</WavyUnderline>
            ]}
          />

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="font-bricolage text-lg max-w-3xl mx-auto mb-10 leading-relaxed text-foreground"
          >
            Profile optimisation, content strategy, and targeted outreach that builds real pipeline — not just followers.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
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
      <section className="px-20 py-20 bg-background relative z-10">
        <div className="w-full flex justify-center text-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
          >
            WHAT IT <WavyUnderline>INCLUDES</WavyUnderline>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 w-full">
          {/* Box 1 (wide) */}
          <motion.div
            {...scrollAnimProps}
            className="md:col-span-2 md:row-span-1 bg-primary/5 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-center min-h-[280px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <UserCheck className="w-10 h-10 text-primary mb-6" />
            <h3 className="font-dela text-2xl lg:text-3xl text-primary mb-3">PROFILE OPTIMISATION</h3>
            <p className="font-bricolage text-lg text-foreground/80 max-w-xl">Founder and leadership profile — headline, About, Featured section, and banner</p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-center min-h-[280px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Building2 className="w-10 h-10 text-primary mb-6" />
            <h3 className="font-dela text-2xl text-primary mb-3">COMPANY PAGE</h3>
            <p className="font-bricolage text-lg text-foreground/80">Full page build and an always-on content calendar</p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-center min-h-[280px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <FileText className="w-10 h-10 text-primary mb-6" />
            <h3 className="font-dela text-2xl text-primary mb-3">LINKEDIN CONTENT STRATEGY</h3>
            <p className="font-bricolage text-lg text-foreground/80">Posts, carousels, and newsletters built around your positioning</p>
          </motion.div>

          {/* Box 4 (wide) */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 bg-primary/5 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-center min-h-[280px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <UserPlus className="w-10 h-10 text-primary mb-6" />
            <h3 className="font-dela text-2xl lg:text-3xl text-primary mb-3">PROSPECTING & OUTREACH</h3>
            <p className="font-bricolage text-lg text-foreground/80 max-w-xl">Sales Navigator-assisted connection strategy and sequenced outreach</p>
          </motion.div>

          {/* Box 5 (wide) */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 bg-primary/5 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-center min-h-[280px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Megaphone className="w-10 h-10 text-primary mb-6" />
            <h3 className="font-dela text-2xl lg:text-3xl text-primary mb-3">LINKEDIN ADS</h3>
            <p className="font-bricolage text-lg text-foreground/80 max-w-xl">Sponsored content, message ads, and lead gen forms</p>
          </motion.div>

          {/* Box 6 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.5 }}
            className="md:col-span-1 md:row-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-center min-h-[280px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <LineChart className="w-10 h-10 text-primary mb-6" />
            <h3 className="font-dela text-2xl text-primary mb-3">PIPELINE ATTRIBUTION</h3>
            <p className="font-bricolage text-lg text-foreground/80">Monthly reporting that ties LinkedIn activity to real pipeline</p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Who it is for */}
      <section className="px-4 py-24 bg-secondary relative z-10 overflow-hidden">
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
            IT and SaaS founders invisible on LinkedIn while competitors build brand there. Manufacturing and B2B businesses that rely on trade shows and referrals and need a digital channel that works between events. Any B2B company where the decision maker is on LinkedIn and not aware the seller exists.
          </motion.p>
        </div>
      </section>

      {/* Section 4 — The outcome */}
      <section className="px-4 py-20 bg-background relative z-10 flex justify-center items-center">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
          {/* Green Button */}
          <motion.div {...scrollAnimProps} className="mb-12">
            <GreenButton>THE OUTCOME</GreenButton>
          </motion.div>

          {/* Quote + Line */}
          <div className="flex items-stretch gap-8">
            <div className="w-px bg-primary"></div>

            <motion.h2
              {...scrollAnimProps}
              className="font-dela text-2xl md:text-4xl lg:text-5xl uppercase text-primary max-w-4xl leading-[1.1] text-left"
            >
              "YOUR LEADERSHIP IS VISIBLE TO THE BUYERS WHO MATTER. INBOUND DMS FROM PEOPLE WHO ALREADY UNDERSTAND WHAT YOU DO — BECAUSE THEY HAVE BEEN READING YOUR CONTENT."
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
      </section>

      <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
    </div>
  );
};

export default LinkedInB2BMarketing;
