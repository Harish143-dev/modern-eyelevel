import { useState, useRef, useEffect } from "react";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import ClientLottie, { type ClientLottieRef } from "@/components/shared/ClientLottie";
import SEO from "@/components/utils/SEO";
import {
  faqPageSchema,
  industriesSchema,
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
} from "@/hooks/schemas";
import FAQSection from "@/components/sections/shared/FAQSection";
import faqs from "@/data/faqs";
import { industriesPageData, IndustryShowcase } from "@/components/sections/industries/IndustryShowcase";
import { Star18 } from "@/components/shared/Star18";
import GreenButton from "@/components/shared/GreenButton";

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const ref = useRef(null);
  const lottieRef = useRef<ClientLottieRef>(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/expert.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  const hasPlayedInitial = useRef(false);
  const hasLeftHero = useRef(false);

  const playAnimation = () => {
    if (!lottieRef.current) return;
    lottieRef.current.setSpeed(1.5);
    lottieRef.current.goToAndPlay(0, true);
  };

  useEffect(() => {
    if (animationData && !hasPlayedInitial.current) {
      playAnimation();
      hasPlayedInitial.current = true;
    }
  }, [animationData]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // User came BACK into hero
          if (hasLeftHero.current) {
            playAnimation();
            hasLeftHero.current = false;
          }
        } else {
          // User left hero
          hasLeftHero.current = true;
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Industries � EyeLevel Growth Studio | SaaS, D2C, Sports, Healthcare, Offshore"
        description="EyeLevel serves SaaS companies, D2C brands, sports leagues, healthcare brands, and offshore clients. Specialised marketing for each vertical."
        keywords={[
          "marketing agency for SaaS India",
          "D2C marketing agency India",
          "healthcare digital marketing India",
          "offshore marketing agency India",
          "pickleball marketing agency India",
        ]}
        schema={[
          organizationSchema,
          websiteSchema,
          industriesSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            {
              name: "Industries",
              url: "https://theeyelevelstudio.com/industries",
            },
          ]),
          faqPageSchema(faqs["Industries"], {
            url: "https://theeyelevelstudio.com/industries",
          }),
        ]}
        canonical="https://theeyelevelstudio.com/industries"
        url="https://theeyelevelstudio.com/industries"
      />
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center pt-32 md:pt-40 pb-20 px-4 overflow-hidden bg-secondary"
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

        <motion.div className="relative z-10 max-w-5xl mx-auto text-center">
          <GreenButton>Our Verticals</GreenButton>
          {animationData && (
            <ClientLottie
              lottieRef={lottieRef}
              animationData={animationData}
              autoPlay={false}
              loop
              className="absolute right-0 md:right-[100px] lg:right-[160px] -top-[13px] w-[130px] md:-top-[42px] md:w-[180px] lg:-top-[66px] lg:w-[220px] pointer-events-none"
            />
          )}
          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dela text-4xl md:text-6xl lg:text-7xl uppercase mb-8 leading-[1.05] text-primary"
          >
            INDUSTRIES <WavyUnderline>WE GROW</WavyUnderline>
          </motion.h1>

          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bricolage text-base md:text-lg lg:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed text-foreground"
          >
            Specialised marketing for SaaS, D2C, Sports & Pickleball, Healthcare, and Offshore clients.
          </motion.p>

          {/* Industry quick links */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4xl"
          >
            {industriesPageData.map((industry, index) => (
              <a key={industry.id} href={industry.href}>
                <motion.div
                  className="group flex items-center gap-2 px-5 py-3 rounded-full border-2 font-bricolage font-medium transition-all duration-300 hover:bg-[rgba(248,255,232,0.05)]"
                  style={{
                    borderColor: "rgba(248, 255, 232, 0.3)",
                    color: "#F8FFE8",
                  }}
                  whileHover={{
                    borderColor: industry.accentColor,
                  }}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-xs opacity-50">{industry.number}</span>
                  <span>{industry.title}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </motion.div>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={false}
          animate={{}}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
            style={{ borderColor: "rgba(248, 255, 232, 0.3)" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Industries Showcase */}
      {industriesPageData.map((industry, index) => (
        <IndustryShowcase
          key={industry.id}
          industry={industry}
          index={index}
          isActive={activeIndustry === index}
          onHover={() => setActiveIndustry(index)}
          onLeave={() => setActiveIndustry(null)}
        />
      ))}

      {/* faqs */}
      <FAQSection faqs={faqs["Industries"]} />
      <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
    </div>
  );
};

export default Industries;




