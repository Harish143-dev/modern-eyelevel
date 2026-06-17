import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
// Team gallery images - placeholder for now
import teamImage1 from "@/assets/galleries/about/aboutImage1.jpeg";
import teamImage2 from "@/assets/galleries/about/aboutImg2.jpg";
import teamImage3 from "@/assets/galleries/about/aboutImg3.jpeg";
import teamImage4 from "@/assets/galleries/about/aboutImg4.jpg";
import GreenButton from "@/components/shared/GreenButton";
import video from "@/assets/videos/videogallery.mp4";
import video1 from "@/assets/videos/videogallery2.mp4";
import akmal from "@/assets/people/akmal.webp";
import jameel from "@/assets/people/jameel.webp";
import jahangeer from "@/assets/people/jahangeer.webp";
import { Linkedin, Link as LinkIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ClientLottie, { type ClientLottieRef } from "@/components/shared/ClientLottie";
import SEO from "@/components/utils/SEO";
import FAQSection from "@/components/sections/shared/FAQSection";
import faqs from "@/data/faqs";
import { Card } from "@/components/ui/card";
import {
  aboutPageSchema,
  faqPageSchema,
  organizationSchema,
} from "@/hooks/schemas";

const values = [
  {
    title: "Strategic Clarity",
    description:
      "Clear strategy is the foundation of all successful marketing. We don't guess - we plan with precision.",
    gradient: "from-[#E2FEA5] to-[#a8e063]",
  },
  {
    title: "Precision Execution",
    description:
      "We execute with discipline and attention to detail. Every campaign, every asset, every touchpoint matters.",
    gradient: "from-[#FFB347] to-[#FF6B6B]",
  },
  {
    title: "Data-Driven",
    description:
      "We use data to make informed decisions and measure success. No vanity metrics - only what moves the needle.",
    gradient: "from-[#667eea] to-[#764ba2]",
  },
  {
    title: "Transparent Partnership",
    description:
      "Open communication showing exactly what's working. You'll always know where your money goes.",
    gradient: "from-[#f093fb] to-[#f5576c]",
  },
  {
    title: "Continuous Growth",
    description:
      "Always learning, always improving, always growing. Stagnation is the enemy of success.",
    gradient: "from-[#4facfe] to-[#00f2fe]",
  },
];

const galleryImages = [
  { src: teamImage1, alt: "Team collaboration" },
  { src: teamImage2, alt: "Team in action" },
  { src: teamImage3, alt: "Strategy session" },
  { src: teamImage2, alt: "Team meeting" },
  { src: teamImage3, alt: "Creative work" },
  { src: teamImage4, alt: "Team building" },
];

// 14-pointed star SVG component
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
const videoMap: Record<number, string> = {
  1: video1, // 2nd item
  2: video, // 3rd item
};
const About = () => {
  const ref = useRef(null);
  const lottieRef = useRef<ClientLottieRef>(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/teamwork.json")
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
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const authors = [
    {
      name: "Akmal Rahman",
      role: "Founder",
      image: akmal,
      dec: "He runs the craft: 15 years as a client-side marketing head across automotive, real estate, D2C, and manufacturing. He owns strategy, positioning, and growth for every EyeLevel client. The full career, and the brands, live on akmalrahman.com.",
      socials: "https:www.linkedin.com/in/akmalbillekar",
      website: "https://akmalrahman.com/"
    },
    {
      name: "Mohammad Jameel",
      role: "Co-Founder",
      image: jameel,
      dec: "A seasoned investment banking professional specializing in wealth management and alternative investment solutions for high-net-worth and celebrity clients. At EyeLevel, he leads the business, finance, and partnership side of the studio.",
      socials: "https://www.linkedin.com/in/muhammad-jameel-1b340836/",
      website: "",
    },
  ];
  const pillars = [
    {
      number: "01",
      title: "The Insider Advantage",
      body: "Built from the client side. The person who builds your strategy has sat in your chair.",
    },
    {
      number: "02",
      title: "One Team, Full Stack",
      body: "Strategy and campaigns built by the same people. Nothing subcontracted.",
    },
    {
      number: "03",
      title: "Outcomes, Not Activities",
      body: "We measure what your board measures. Not reach. Not impressions. Revenue.",
    },
  ];
  return (
    <div
      className="min-h-screen overflow-hidden bg-secondary"
    >
      <SEO
        title="About EyeLevel Growth Studio — AI Marketing Agency, Chennai"
        description="Meet the team behind EyeLevel Growth Studio. 50+ clients, 2 national pickleball leagues produced, and AI-powered marketing from Chennai."
        keywords={[
          "marketing agency Chennai",
          "digital marketing agency India",
          "AI marketing agency India",
        ]}
        schema={[
          organizationSchema,
          aboutPageSchema,
          faqPageSchema(faqs["About Us"], {
            url: "https://theeyelevelstudio.com/about-us",
          }),
        ]}
        canonical="https://theeyelevelstudio.com/about-us"
        url="https://theeyelevelstudio.com/about-us"
      />
      <Header />

      {/* Hero Section */}
      <section
        ref={ref}
        className="pt-32 pb-20 px-4 relative md:min-h-screen flex items-center justify-center flex-col overflow-hidden"
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
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            <span
              className="text-sm font-medium font-bricolage text-primary"
            >
              About Eyelevel
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-10 relative"
          >
            {animationData && (
              <ClientLottie
                lottieRef={lottieRef}
                animationData={animationData}
                autoPlay={false}
                loop
                className="absolute -top-[46px] md:-top-[92px] lg:-top-[125px] w-[280px] sm:w-[450px] md:w-[520px] lg:w-[700px] pointer-events-none"
              />
            )}

            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-dela uppercase text-primary"
            >
              BUILT FROM <WavyUnderline>THE CLIENT</WavyUnderline>
            </h1>
            {/* <motion.img
              src={mascotWave}
              alt="EyeLevel Mascot"
              className="h-16 md:h-24 lg:h-28 w-auto object-contain"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            /> */}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl mx-auto font-bricolage"
            style={{ color: "rgba(248, 255, 232, 0.7)" }}
          >
            Eyelevel was not built by an agency chasing clients. It was built by a marketing head who spent 15 years hiring agencies, and knowing exactly what they failed to deliver.
          </motion.p>
          <div className="flex items-center rounded-full relative font-bricolage z-1000 mt-8 justify-center gap-4">
            <Link to="/booking">
              <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full">
                Book a free 30-min diagnostic
              </Button>
            </Link>
          </div>
        </div>
      </section >

      {/* Why EyeLevel Exists */}
      < section className="py-20 px-4 relative bg-background" >
        <div className="max-w-5xl mx-auto">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{
                backgroundColor: "rgba(226, 254, 165, 0.1)",
                border: "1px solid rgba(226, 254, 165, 0.2)",
              }}
            >
              <span className="text-sm font-medium font-bricolage text-primary">
                Our Story
              </span>
            </div>

            <h2 className="text-2xl  md:text-4xl lg:text-5xl font-dela uppercase text-primary">
              Why <WavyUnderline>EyeLevel</WavyUnderline> exists
            </h2>
          </motion.div>

          {/* Body + Pull-quote grid */}
          <div className="grid md:grid-cols-[1fr_1px_360px] gap-10 md:gap-14 items-start">

            {/* Left — paragraphs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p
                className="text-lg leading-relaxed font-bricolage"
                style={{ color: "rgba(248, 255, 232, 0.7)" }}
              >
                For 15 years, our founder sat on the other side of the table. He was
                the marketing head agencies pitched to. The person deciding which
                agency got the budget, which strategy got approved, and which agency
                got fired.
              </p>
              <p
                className="text-lg leading-relaxed font-bricolage"
                style={{ color: "rgba(248, 255, 232, 0.7)" }}
              >
                He saw the same pattern everywhere. Agencies built to bill, not to
                grow. Retainers that padded. Reports that obscured. That is not a few
                bad agencies. That is how the industry is structured.
              </p>
              <p
                className="text-lg leading-relaxed font-bricolage"
                style={{ color: "rgba(248, 255, 232, 0.7)" }}
              >
                EyeLevel answers one question. What would the agency look like if it
                were built by the client, for the client? Marketing as a growth
                engine, not a cost center.
              </p>
            </motion.div>

            {/* Vertical divider — hidden on mobile */}
            <div
              className="hidden md:block w-px self-stretch"
              style={{ backgroundColor: "rgba(226, 254, 165, 0.15)" }}
            />

            {/* Right — pull-quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              {/* Horizontal rule above on mobile */}
              <div
                className="block md:hidden h-px w-full mb-8"
                style={{ backgroundColor: "rgba(226, 254, 165, 0.15)" }}
              />

              <div
                className="rounded-2xl p-7 md:p-8"
                style={{
                  backgroundColor: "rgba(226, 254, 165, 0.07)",
                  border: "1px solid rgba(226, 254, 165, 0.12)",
                }}
              >
                <span
                  className="block text-5xl font-dela leading-none mb-4 text-primary"
                  aria-hidden="true"
                >
                  "
                </span>

                <p className="text-xl md:text-2xl font-dela leading-snug text-primary">
                  We're not your agency. We're your extended marketing team.
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <div
                    className="w-8 h-px"
                    style={{ backgroundColor: "rgba(226, 254, 165, 0.4)" }}
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section >

      {/* Values Section - Dynamic Bento Grid */}
      {/* <section
        className="py-20 px-4 relative border-t border-b overflow-hidden"
        style={{
          backgroundColor: "#253e35",
          borderColor: "rgba(248, 255, 232, 0.15)",
        }}
      >
        {/* Background decoration */}
      {/*<div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#667eea]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            <span
              className="text-sm font-medium font-bricolage text-primary"
            >
              Our Values
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-dela uppercase text-primary"
          >
            WHY WE STAND FOR
            <br />
            <WavyUnderline>EXCELLENCE</WavyUnderline>
          </h2>
        </motion.div> */}

      {/* Bento Grid Layout */}
      {/* <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {/* Large card - spans 4 cols */}
      {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 relative group"
          >
            <div
              className="h-full min-h-[280px] rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
              style={{
                backgroundColor: "#F8FFE8",
                border: "1px solid rgba(37, 62, 53, 0.2)",
              }}
            >
              <div className="relative z-10">
                <span
                  className="text-6xl md:text-8xl font-dela opacity-20 text-forest-muted"
                >
                  01
                </span>
                <h3
                  className="text-2xl md:text-3xl font-dela mt-4 mb-4 uppercase text-forest-muted"
                >
                  {values[0].title}
                </h3>
                <p
                  className="text-base md:text-lg font-bricolage max-w-md"
                  style={{ color: "rgba(37, 62, 53, 0.7)" }}
                >
                  {values[0].description}
                </p>
              </div>
            </div>
          </motion.div> */}

      {/* Medium card - spans 2 cols */}
      {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 relative group"
          >
            <div
              className="h-full min-h-[280px] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
              style={{
                backgroundColor: "#F8FFE8",
                border: "1px solid rgba(37, 62, 53, 0.2)",
              }}
            >
              <div className="relative z-10">
                <span
                  className="text-5xl md:text-6xl font-dela opacity-20 text-forest-muted"
                >
                  02
                </span>
                <h3
                  className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase text-forest-muted"
                >
                  {values[1].title}
                </h3>
                <p
                  className="text-sm md:text-base font-bricolage"
                  style={{ color: "rgba(37, 62, 53, 0.7)" }}
                >
                  {values[1].description}
                </p>
              </div>
            </div>
          </motion.div> */}

      {/* Medium card - spans 2 cols */}
      {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 relative group"
          >
            <div
              className="h-full min-h-[260px] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
              style={{
                backgroundColor: "#F8FFE8",
                border: "1px solid rgba(37, 62, 53, 0.2)",
              }}
            >
              <div className="relative z-10">
                <span
                  className="text-5xl md:text-6xl font-dela opacity-20 text-forest-muted"
                >
                  03
                </span>
                <h3
                  className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase text-forest-muted"
                >
                  {values[2].title}
                </h3>
                <p
                  className="text-sm md:text-base font-bricolage"
                  style={{ color: "rgba(37, 62, 53, 0.7)" }}
                >
                  {values[2].description}
                </p>
              </div>
            </div>
          </motion.div> */}

      {/* Medium card - spans 2 cols */}
      {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 relative group"
          >
            <div
              className="h-full min-h-[260px] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
              style={{
                backgroundColor: "#F8FFE8",
                border: "1px solid rgba(37, 62, 53, 0.2)",
              }}
            >
              <div className="relative z-10">
                <span
                  className="text-5xl md:text-6xl font-dela opacity-20 text-forest-muted"
                >
                  04
                </span>
                <h3
                  className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase text-forest-muted"
                >
                  {values[3].title}
                </h3>
                <p
                  className="text-sm md:text-base font-bricolage"
                  style={{ color: "rgba(37, 62, 53, 0.7)" }}
                >
                  {values[3].description}
                </p>
              </div>
            </div>
          </motion.div> */}

      {/* Wide card - spans 2 cols */}
      {/*<motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 relative group"
          >
            <div
              className="h-full min-h-[260px] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
              style={{
                backgroundColor: "#F8FFE8",
                border: "1px solid rgba(37, 62, 53, 0.2)",
              }}
            >
              <div className="relative z-10">
                <span
                  className="text-5xl md:text-6xl font-dela opacity-20 text-forest-muted"
                >
                  05
                </span>
                <h3
                  className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase text-forest-muted"
                >
                  {values[4].title}
                </h3>
                <p
                  className="text-sm md:text-base font-bricolage"
                  style={{ color: "rgba(37, 62, 53, 0.7)" }}
                >
                  {values[4].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section> */}

      {/* Author Profiles - Light Background */}
      <section
        className="py-20 max-w-5xl px-4 mx-auto relative overflow-hidden border-t border-b"
        style={{
          backgroundColor: "#253e35",
          borderColor: "rgba(248, 255, 232, 0.15)",
        }}
      >
        <div className="flex justify-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            <span className="text-sm font-medium font-bricolage text-primary">
              Leadership
            </span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase">
              <span className="text-primary">Two founders.</span>{" "}
              <WavyUnderline>One Studio.</WavyUnderline>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {authors.map((author, index) => (
              <motion.div
                key={author.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group flex flex-col justify-evenly items-center rounded-2xl p-4 md:p-6"
                style={{
                  backgroundColor: "#F8FFE8",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 6px 0 #0a0a0a",
                }}
              >
                <div
                  className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 transition-colors"
                  style={{ borderColor: "rgb(37, 62, 53)" }}
                >
                  <img
                    src={author.image}
                    alt={author.name}
                    title={author.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3
                    className="font-dela text-lg uppercase text-forest-muted"
                  >
                    {author.name}
                  </h3>
                  <p className="text-sm font-bricolage text-primary mt-1 px-3 py-0.5 rounded-full bg-secondary">
                    {author.role}
                  </p>
                </div>
                <p className="text-sm font-bricolage mt-3 mx-4 text-forest-muted/70">
                  {author?.dec}
                </p>
                <div className="flex items-center gap-3 py-4">
                  <a
                    className="text-sm flex justify-center gap-2 font-bricolage text-primary px-4 py-2 rounded-full border-2 border-background hover:bg-primary/90 transition-colors"
                    href={author.socials}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="size-5 text-background" />
                  </a>

                  {author.website && (<a
                    className="text-sm flex justify-center gap-2 font-bricolage text-primary px-4 py-2 rounded-full border-2 border-background hover:bg-primary/90 transition-colors"
                    href={author.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="size-5 text-background" />
                  </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{
                backgroundColor: "rgba(226, 254, 165, 0.1)",
                border: "1px solid rgba(226, 254, 165, 0.2)",
              }}
            >
              <span
                className="text-sm font-medium font-bricolage text-primary"
              >
                Gallery
              </span>
            </div>
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase text-primary"
            >
              LIFE AT <WavyUnderline>EYELEVEL</WavyUnderline>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => {
              const videoSrc = videoMap[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl group ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                >
                  {/* VIDEO OR IMAGE */}
                  {videoSrc ? (
                    <video
                      src={videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                      onLoadedMetadata={(e) => {
                        e.currentTarget.muted = true;
                        e.currentTarget.defaultMuted = true;
                        e.currentTarget.volume = 0;
                      }}
                      onPlay={(e) => {
                        e.currentTarget.muted = true;
                        e.currentTarget.volume = 0;
                      }}
                      className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      title={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(23, 50, 41, 0.8), transparent)",
                    }}
                  />

                  {/* Caption */}
                  {/* <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p
                      className="text-sm font-medium font-bricolage text-foreground"
                    >
                      {image.alt}
                    </p>
                  </div> */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 px-4 relative bg-secondary">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex justify-center">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                style={{
                  backgroundColor: "rgba(226, 254, 165, 0.1)",
                  border: "1px solid rgba(226, 254, 165, 0.2)",
                }}
              >
                <span className="text-sm font-medium font-bricolage text-primary">
                  Our Beliefs
                </span>
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase text-primary text-center">
              What we <WavyUnderline>believe</WavyUnderline>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-4 rounded-2xl p-6 md:p-8"
                style={{
                  backgroundColor: "rgba(226, 254, 165, 0.2)",
                  border: "1px solid rgba(226, 254, 165, 0.1)",
                }}
              >
                <span
                  className="text-4xl font-dela text-primary opacity-30 leading-none"
                >
                  {pillar.number}
                </span>
                <h3 className="text-lg font-dela uppercase text-primary leading-snug">
                  {pillar.title}
                </h3>
                <p
                  className="text-sm font-bricolage leading-relaxed"
                  style={{ color: "rgba(248, 255, 232, 0.7)" }}
                >
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* The Numbers */}
      <section className="py-20 px-4 relative bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="flex justify-center">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                style={{
                  backgroundColor: "rgba(226, 254, 165, 0.1)",
                  border: "1px solid rgba(226, 254, 165, 0.2)",
                }}
              >
                <span className="text-sm font-medium font-bricolage text-primary">
                  The Numbers
                </span>
              </div>
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase text-primary text-center">
              Built on experience, <WavyUnderline>not layers.</WavyUnderline>
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rounded-2xl overflow-hidden"
            style={{
              border: "2px solid rgba(226, 254, 165, 0.15)",
            }}
          >
            {[
              { stat: "15+", label: "Years client-side" },
              { stat: "5", label: "Industries, hands-on" },
              { stat: "0", label: "Account Managers between you and the person accountable" },
            ].map((item, index) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center px-4 md:px-8 py-10 md:py-12 gap-2"
              >
                <span className="text-4xl md:text-6xl lg:text-7xl font-dela text-primary leading-none">
                  {item.stat}
                </span>

                <span
                  className="text-xs md:text-sm font-bricolage leading-relaxed max-w-[120px] md:max-w-[160px]"
                  style={{ color: "rgba(248, 255, 232, 0.6)" }}
                >
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <FAQSection faqs={faqs["About Us"]} />

      {/* Join Us Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-background">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela mb-6 uppercase text-primary">
              Want the marketing team you always wished you could{" "}
              <WavyUnderline>plug in?</WavyUnderline>
            </h2>

            <p
              className="text-lg max-w-xl mx-auto mb-10 font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              30 minutes. No pitch deck. We will tell you what we see.
            </p>

            <Link to="/booking">
              <Button
                className="group h-12 md:h-14 px-5 md:px-8 text-sm md:text-base font-semibold w-full sm:w-auto"
              >
                <span>Book a free 30-min diagnostic</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter showCTA={false} mascotBgClass="bg-background" />
    </div >
  );
};

export default About;



