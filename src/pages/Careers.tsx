import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  ArrowRight,
  Briefcase,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WavyUnderline from "@/components/shared/WavyUnderline";
import mascotWave from "@/assets/mascot/mascot-wave.png";
import GreenButton from "@/components/shared/GreenButton";
import career_mascot from "@/assets/mascot/career_mascot.webp";
import { useEffect, useRef, useState } from "react";
import ClientLottie, { type ClientLottieRef } from "@/components/shared/ClientLottie";
import SEO from "@/components/utils/SEO";
import { openPositions } from "@/data/careers";
import faqs from "@/data/faqs";
import FAQSection from "@/components/sections/shared/FAQSection";
import { faqPageSchema, organizationSchema, websiteSchema } from "@/hooks/schemas";

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Learn from industry experts and grow your career with us.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with a diverse team of creative problem-solvers.",
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote-friendly environment with flexible working hours.",
  },
  {
    icon: Briefcase,
    title: "Impactful Work",
    description: "Work on projects that drive real business results.",
  },
];

const Star18 = ({ className }: { className?: string }) => {
  const points = 18;
  const outerRadius = 100;
  const innerRadius = 75;
  const cx = 100;
  const cy = 100;

  let pathData = "";
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (Math.PI * i) / points - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    pathData += `${i === 0 ? "M" : "L"} ${x} ${y} `;
  }
  pathData += "Z";

  return (
    <svg viewBox="0 0 200 200" className={className}>
      <path d={pathData} fill="currentColor" />
    </svg>
  );
};

const Careers = () => {
  const lottieRef1 = useRef<ClientLottieRef>(null);
  const lottieRef2 = useRef<ClientLottieRef>(null);

  const [anim1, setAnim1] = useState<unknown>(null);
  const [anim2, setAnim2] = useState<unknown>(null);

  useEffect(() => {
    Promise.all([
      fetch("/animations/walk 01.json").then((r) => r.json()),
      fetch("/animations/walk 02.json").then((r) => r.json()),
    ])
      .then(([a1, a2]) => {
        setAnim1(a1);
        setAnim2(a2);
      })
      .catch((err) => console.error("Failed to load animations:", err));
  }, []);

  const playSequence = () => {
    // reset both
    lottieRef1.current?.stop();
    lottieRef2.current?.stop();
    lottieRef1.current?.goToAndStop(0, true);
    lottieRef2.current?.goToAndStop(0, true);

    // play first
    lottieRef1.current?.setSpeed(1.5);
    lottieRef1.current?.goToAndPlay(0, true);
  };

  const heroRef = useRef<HTMLElement | null>(null);
  const hasPlayedInitial = useRef(false);
  const hasLeftHero = useRef(false);

  useEffect(() => {
    if (anim1 && anim2 && !hasPlayedInitial.current) {
      playSequence();
      hasPlayedInitial.current = true;
    }
  }, [anim1, anim2]);

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasLeftHero.current && anim1 && anim2) {
            playSequence(); // restart A then B
            hasLeftHero.current = false;
          }
        } else {
          hasLeftHero.current = true;
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [anim1, anim2]);

  return (
    <div
      className="min-h-screen overflow-hidden bg-secondary"
    >
      <SEO
        title="Digital Marketing Jobs in Chennai | Eyelevel Careers"
        description="Eyelevel is hiring digital marketing specialists, videographers & designers in Chennai. Work with Sports, Healthcare & Education sectors. Apply now."
        keywords={[
          "marketing agency jobs Chennai",
          "creative agency hiring Chennai",
          "digital marketing careers India",
          "performance marketing jobs",
          "social media marketing jobs Chennai",
        ]}
        schema={[
          organizationSchema,
          websiteSchema,
          faqPageSchema(faqs["Careers"], {
            url: "https://theeyelevelstudio.com/careers",
          }),
        ]}
        canonical="https://theeyelevelstudio.com/careers"
        url="https://theeyelevelstudio.com/careers"
      />
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="px-4 relative py-28 lg:min-h-screen flex flex-col items-center justify-center"
      >
        {/* Rotating 32-pointed star - centered upper area */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-[350px] md:w-[600px] lg:w-[750px] h-[350px] md:h-[600px] lg:h-[750px] text-forest-dark/60 pointer-events-none"
        >
          <Star18 className="w-full h-full" />
        </motion.div>

        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradi ent orbs */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <GreenButton>Careers</GreenButton>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-dela mb-6 uppercase text-primary"
          >
            <span className="relative inline-block">
              {/* BUILD */}
              BUIL
              <span className="relative inline-block">
                D{/* Animation 1 pinned to D */}
                {anim1 && (
                  <ClientLottie
                    lottieRef={lottieRef1}
                    animationData={anim1}
                    autoplay={false}
                    loop={false}
                    onComplete={() => {
                      lottieRef2.current?.setSpeed(1);
                      lottieRef2.current?.goToAndPlay(0, true);
                    }}
                    className="pointer-events-none absolute top-[8%] right-[30px] w-[75px] md:top-[8%] md:right-[51px] md:w-[120px] lg:top-[8%] lg:right-20 lg:w-[190px]"
                  />
                )}
              </span>
            </span>

            {/* YOUR */}
            <span className="relative inline-block">
              YOU
              <span className="relative inline-block">
                R{/* Animation 2 pinned to last R */}
                {anim2 && (
                  <ClientLottie
                    lottieRef={lottieRef2}
                    animationData={anim2}
                    autoplay={false}
                    loop={false}
                    className="pointer-events-none absolute top-[5%] left-0 w-[55px] md:top-[5%] md:left-0 md:w-[85px] lg:top-[5%] lg:left-0 lg:w-[135px]"
                  />
                )}
              </span>
            </span>
            <span className="text-4xl md:text-6xl lg:text-7xl">
              CAREER <WavyUnderline>WITH US</WavyUnderline>
            </span>
          </motion.h1>
          {/* animation
          {anim1 && (
            <ClientLottie
              lottieRef={lottieRef1}
              animationData={anim1}
              autoplay={false}
              loop={false}
              onComplete={() => {
                // when first ends, start second
                lottieRef2.current?.setSpeed(1);
                lottieRef2.current?.goToAndPlay(0, true);
              }}
              className="absolute top-[68px] left-[96px] w-[70px] md:top-[67px] md:left-[246px] md:w-[120px] lg:left-[97px] lg:w-[240px] lg:top-[47px] pointer-events-none"
            />
          )}

          {anim2 && (
            <ClientLottie
              lottieRef={lottieRef2}
              animationData={anim2}
              autoplay={false}
              loop={false}
              className="absolute top-[65px] right-[30px] w-[55px] md:top-[64px] md:right-[100px] md:w-[90px] lg:-right-[60px] lg:w-[170px] lg:top-[48px] pointer-events-none"
            />
          )} */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto font-bricolage"
            style={{ color: "rgba(248, 255, 232, 0.7)" }}
          >
            Join a team of passionate marketers, strategists, and creatives who
            are reshaping how businesses grow in the digital age.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us - Join the League style */}
      <section
        className="py-20 px-4 relative bg-background"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <GreenButton>Why Join Us</GreenButton>
            <h2
              className="text-3xl md:text-5xl font-dela uppercase text-primary"
            >
              PERKS & <WavyUnderline>BENEFITS</WavyUnderline>
            </h2>
          </motion.div>

          {/* Join the League style pill box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[40px] md:rounded-[60px] p-8 md:p-12"
            style={{
              backgroundColor: "#F8FFE8",
              border: "3px solid #0a0a0a",
              boxShadow: "0 6px 0 #0a0a0a",
            }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center flex flex-col items-center justify-between"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                    style={{
                      backgroundColor: "#e8f0d8",
                      border: "2px solid #0a0a0a",
                    }}
                  >
                    <benefit.icon
                      className="w-7 h-7 text-forest-dark"
                    />
                  </div>
                  <h3
                    className="text-lg font-dela mb-2 uppercase text-primary-foreground"
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-sm font-bricolage"
                    style={{ color: "rgba(10, 10, 10, 0.7)" }}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions - Restyled with Join the League box style */}
      <section
        className="py-20 px-4 relative border-t border-b"
        style={{
          backgroundColor: "#253e35",
          borderColor: "rgba(248, 255, 232, 0.15)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <GreenButton>Open Positions</GreenButton>
            <h2
              className="text-3xl md:text-5xl font-dela uppercase text-primary"
            >
              JOIN THE <WavyUnderline>TEAM</WavyUnderline>
            </h2>
          </motion.div>

          {/* Join the League style container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[40px] p-8 md:p-10"
            style={{
              backgroundColor: "#F8FFE8",
              border: "3px solid #0a0a0a",
              boxShadow: "0 6px 0 #0a0a0a",
            }}
          >
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div
                    className="rounded-2xl p-6 transition-all duration-300 hover:bg-[#e8f0d8]"
                    style={{
                      backgroundColor: "rgba(23, 50, 41, 0.05)",
                      border: "2px solid #0a0a0a",
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="text-xs px-3 py-1 rounded-full font-medium font-bricolage"
                            style={{
                              backgroundColor: "#173229",
                              color: "#F8FFE8",
                            }}
                          >
                            {position.department}
                          </span>
                        </div>
                        <Link
                          to={`/careers/${position.slug}`}
                          className="inline-block"
                        >
                          <h3
                            className="text-xl font-dela mb-2 transition-colors uppercase hover:text-forest-dark text-primary-foreground"
                          >
                            {position.title}
                          </h3>
                        </Link>
                        <p
                          className="text-sm mb-3 font-bricolage"
                          style={{ color: "rgba(10, 10, 10, 0.7)" }}
                        >
                          {position.description}
                        </p>
                        <div
                          className="flex items-center gap-4 text-sm font-bricolage"
                          style={{ color: "rgba(10, 10, 10, 0.5)" }}
                        >
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </span>
                        </div>
                      </div>

                      <Button
                        asChild
                        className="rounded-full shrink-0"
                      >
                        <Link to={`/careers/${position.slug}`}>
                          I'm Interested
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* faqs */}
      <FAQSection faqs={faqs["Careers"]} />

      <section
        className="py-20 px-4 relative overflow-hidden bg-secondary"
      >
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-dela mb-6 uppercase text-primary"
            >
              DON'T SEE YOUR <WavyUnderline>ROLE?</WavyUnderline>
            </h2>

            <p
              className="text-lg mb-8 font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              We're always looking for exceptional talent. Send us your resume
              and tell us how you can contribute to our growth story.
            </p>

            <Button
              asChild
              size="lg"
              className="group px-10 py-7 text-base md:text-lg font-semibold"
            >
              <Link to="/careers/general-application">
                Send Your Resume
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter showCTA={false} mascotBgClass="bg-background" />
    </div>
  );
};

export default Careers;





