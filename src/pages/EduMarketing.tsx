import { useRef } from "react";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Eye,
  MousePointerClick,
  TrendingDown,
  HelpCircle,
  Target,
  Zap,
  Users,
  Search,
  Video,
  Mail,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import WavyUnderline from "@/components/WavyUnderline";
import eduGallery1 from "@/assets/edu-gallery-1.jpg";
import eduGallery2 from "@/assets/edu-gallery-2.jpg";
import eduGallery3 from "@/assets/edu-gallery-3.jpg";
import mascotTrophy from "@/assets/mascot-trophy-new.png";
import {
  ImageGallerySection,
  TestimonialsSection,
  BigStatsSection,
  ClientLogosMarquee,
} from "@/components/IndustryPageEnhancements";
import GreenButton from "@/components/GreenButton";

// 18-pointed star SVG component
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

const challenges = [
  {
    icon: Eye,
    title: "The Invisible School",
    description: "You aren't the best-kept secret; you need more visibility.",
    color: "#FFB4B4",
  },
  {
    icon: MousePointerClick,
    title: "The Application Abyss",
    description:
      "Every extra click on your page is a chance for students to choose a competitor instead.",
    color: "#B8D4BE",
  },
  {
    icon: TrendingDown,
    title: "The Leak",
    description:
      "You pay for clicks, but your website confuses visitors and chases them away.",
    color: "#FCFAC2",
  },
  {
    icon: HelpCircle,
    title: "The Blind Spot",
    description:
      "Visibility is missing—and the path to enrollment isn’t clear.",
    color: "#E2FEA5",
  },
];

const solutions = [
  {
    icon: Target,
    title: "The Recruitment Engine",
    description:
      "We move beyond “vibes” and focus on futures—building campaigns that mathematically increase enrollment.",
    stat: "3x",
    statLabel: "Enrollment Growth",
  },
  {
    icon: Zap,
    title: "Friction Removal",
    description:
      "We act as the Streamliner, stripping away outdated admin roadblocks to create a seamless path to payment.",
    stat: "45%",
    statLabel: "Lower CAC",
  },
  {
    icon: Users,
    title: "The Alumni Loop",
    description:
      "We engineer a system that keeps your community paying dividends (and referring students) long after graduation.",
    stat: "150+",
    statLabel: "Institutions",
  },
];

const services = [
  {
    icon: Target,
    title: "Lead Gen",
    description: "PPC & Social Ads that actually fill seats.",
  },
  {
    icon: Video,
    title: "Campus VR",
    description: "Virtual tours that close deals remotely.",
  },
  {
    icon: Search,
    title: "SEO",
    description: 'Dominate the search results for "Best [Course] in [City]."',
  },
  {
    icon: Mail,
    title: "Automation",
    description: "Smart nurture sequences designed to stay on parents’ radar.",
  },
];

const faqs = [
  {
    question: "How do we increase student enrollment numbers quickly?",
    answer:
      "You stop relying on open houses and start running precision-targeted paid campaigns. We use high-intent data to find parents and students actively searching for your courses right now, directing them to a high-conversion landing page, not your slow-loading homepage.",
  },
  {
    question:
      "Is digital marketing effective for higher education and universities?",
    answer:
      "It's the only thing that is effective. Your target audience (Gen Z) lives on their phones. If you aren't disrupting their scroll on TikTok, Instagram, or Google, you don't exist to them. Billboards don't click back; we do.",
  },
  {
    question: "Why is my Cost Per Lead (CPL) for student recruitment so high?",
    answer:
      'Because your targeting is broad and your creative is boring. You are bidding against every other school for the same keywords. We lower CPL by using "Blue Ocean" keywords and creative that speaks to specific pain points (career outcomes, campus life) rather than generic academic jargon.',
  },
  {
    question: "Can you help with student retention, not just recruitment?",
    answer:
      "Yes. Getting them in the door is half the battle. We build automated email and SMS nurture loops that keep students engaged, informed, and proud of their institution, drastically reducing drop-out rates.",
  },
  {
    question:
      "What makes EyeLevel different from other education marketing agencies?",
    answer:
      'Most agencies treat schools like charities. We treat you like a business. We don\'t report on "brand awareness"; we report on "cost per enrolled student." We use the Growth Monster methodology to track every dollar from the first click to the tuition payment.',
  },
];

const EduMarketing = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden"
        style={{ backgroundColor: "#253e35" }}
      >
        {/* Rotating star background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-[800px] md:w-[1000px] lg:w-[1200px] h-[800px] md:h-[1000px] lg:h-[1200px] text-[#1e3329] pointer-events-none"
        >
          <Star18 className="w-full h-full" />
        </motion.div>

        {/* Parallax background */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#B8D4BE]/10 rounded-full blur-2xl" />
        </motion.div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 font-bricolage text-sm px-4 py-2 rounded-full transition-all"
              style={{
                color: "rgba(248, 255, 232, 0.7)",
                backgroundColor: "rgba(248, 255, 232, 0.05)",
                border: "1px solid rgba(248, 255, 232, 0.1)",
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              All Industries
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dela text-4xl md:text-6xl lg:text-7xl mb-8 leading-[0.95] uppercase"
            style={{ color: "#B8D4BE" }}
          >
            FILL EVERY SEAT.
            <br />
            <WavyUnderline>GROW EVERY YEAR.</WavyUnderline>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bricolage text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ color: "#F8FFE8" }}
          >
            Stop hoping for "word of mouth." We turn admissions into a
            predictable revenue engine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/booking">
              <Button
                size="lg"
                className="group rounded-full px-10 py-7 text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: "#B8D4BE",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
              >
                Fill Your Classrooms
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#E2FEA5" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Reality Check - Challenges Section */}
      <section
        className="py-24 md:py-32 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#173229" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <GreenButton>The Reality Check</GreenButton>
            <h2
              className="font-dela text-4xl md:text-5xl lg:text-6xl uppercase"
              style={{ color: "#B8D4BE" }}
            >
              WHY YOUR SEATS ARE <WavyUnderline>EMPTY</WavyUnderline>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className="relative h-full rounded-3xl p-8 transition-all duration-500 overflow-hidden"
                  style={{
                    backgroundColor: "rgba(248, 255, 232, 0.03)",
                    border: "1px solid rgba(248, 255, 232, 0.1)",
                  }}
                >
                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${challenge.color}15, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${challenge.color}20`,
                        border: `1px solid ${challenge.color}40`,
                      }}
                    >
                      <challenge.icon
                        className="w-7 h-7"
                        style={{ color: challenge.color }}
                      />
                    </div>

                    {/* Number */}
                    <span
                      className="font-dela text-6xl absolute top-0 right-6 opacity-10"
                      style={{ color: challenge.color }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="font-dela text-base md:text-lg mb-4 line-clamp-2 uppercase"
                      style={{ color: "#F8FFE8" }}
                    >
                      {challenge.title}
                    </h3>
                    <p
                      className="font-bricolage text-sm md:text-base leading-relaxed"
                      style={{ color: "rgba(248, 255, 232, 0.7)" }}
                    >
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Fix - Solutions Section */}
      <section
        className="py-24 md:py-32 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#1e3c30" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <GreenButton>The Fix</GreenButton>
            <h2
              className="font-dela text-4xl md:text-5xl lg:text-6xl mb-6 uppercase"
              style={{ color: "#B8D4BE" }}
            >
              HOW WE FILL <WavyUnderline>SEATS</WavyUnderline>
            </h2>
            <p
              className="font-bricolage text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              Three battle-tested systems that turn your admissions department
              into a revenue engine.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div
                  className="relative h-full rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2"
                  style={{
                    backgroundColor: "rgba(248, 255, 232, 0.05)",
                    border: "2px solid rgba(226, 254, 165, 0.2)",
                  }}
                >
                  {/* Stat badge */}
                  <div
                    className="absolute -top-6 right-8 px-6 py-3 rounded-2xl"
                    style={{
                      backgroundColor: "#B8D4BE",
                      boxShadow: "0 4px 0 #0a0a0a",
                      border: "2px solid #0a0a0a",
                    }}
                  >
                    <span className="font-dela text-2xl text-black">
                      {solution.stat}
                    </span>
                    <span className="font-bricolage text-xs text-black/70 block">
                      {solution.statLabel}
                    </span>
                  </div>

                  <div className="pt-4">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        backgroundColor: "rgba(226, 254, 165, 0.15)",
                        border: "1px solid rgba(226, 254, 165, 0.3)",
                      }}
                    >
                      <solution.icon
                        className="w-8 h-8"
                        style={{ color: "#B8D4BE" }}
                      />
                    </div>

                    <h3
                      className="font-dela text-xl md:text-2xl mb-4 uppercase"
                      style={{ color: "#F8FFE8" }}
                    >
                      {solution.title}
                    </h3>
                    <p
                      className="font-bricolage text-base md:text-lg leading-relaxed"
                      style={{ color: "rgba(248, 255, 232, 0.85)" }}
                    >
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-24 md:py-32 px-4"
        style={{ backgroundColor: "#253e35" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 md:mb-20 gap-6"
          >
            <div>
              <GreenButton>Our Arsenal</GreenButton>
              <h2
                className="font-dela text-4xl md:text-5xl lg:text-6xl uppercase"
                style={{ color: "#B8D4BE" }}
              >
                Services
              </h2>
            </div>
            <p
              className="font-bricolage text-lg max-w-md"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              Every tool you need to dominate your market and outpace the
              competition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div
                  className="relative h-full rounded-3xl p-8 transition-all duration-300"
                  style={{
                    backgroundColor: "#173229",
                    border: "2px solid rgba(184, 212, 190, 0.2)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "rgba(184, 212, 190, 0.15)",
                    }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: "#B8D4BE" }}
                    />
                  </div>

                  <h3
                    className="font-dela text-xl mb-3 transition-colors duration-300 uppercase"
                    style={{ color: "#F8FFE8" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-bricolage text-sm leading-relaxed"
                    style={{ color: "rgba(248, 255, 232, 0.7)" }}
                  >
                    {service.description}
                  </p>

                  <ArrowRight
                    className="absolute bottom-8 right-8 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    style={{ color: "#B8D4BE" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Stats Section */}
      <BigStatsSection
        accentColor="#B8D4BE"
        stats={[
          { value: "150", suffix: "+", label: "Institutions Served" },
          { value: "3", suffix: "x", label: "Avg Enrollment Growth" },
          { value: "45", suffix: "%", label: "Lower Cost Per Lead" },
          { value: "10", suffix: "M+", label: "Students Reached" },
        ]}
      />

      {/* Image Gallery */}
      <ImageGallerySection
        accentColor="#B8D4BE"
        title="Success Stories"
        colorTitle="Success"
        underlineTitle="Stories"
        subtitle="Real campaigns. Real results. Real students enrolled."
        images={[
          { src: eduGallery1, alt: "Campus life" },
          { src: eduGallery2, alt: "Analytics dashboard" },
          { src: eduGallery3, alt: "Graduation celebration" },
        ]}
      />

      {/* Client Logos */}
      <ClientLogosMarquee accentColor="#B8D4BE" />

      {/* Testimonials */}
      <TestimonialsSection
        accentColor="#B8D4BE"
        testimonials={[
          {
            quote:
              "EyeLevel transformed our admissions process. We went from struggling to fill seats to having a waitlist within one academic year.",
            author: "Dr. Priya Sharma",
            role: "Director of Admissions",
            company: "Global Institute of Technology",
          },
          {
            quote:
              "Their data-driven approach cut our cost per enrollment in half while doubling the quality of applicants. Game-changing.",
            author: "Rajesh Kumar",
            role: "Marketing Head",
            company: "Premier Business School",
          },
          {
            quote:
              "Finally, an agency that understands education marketing. They speak our language and deliver real results.",
            author: "Sunita Patel",
            role: "CEO",
            company: "EdTech Academy",
          },
        ]}
      />

      {/* FAQ Section */}
      <section
        className="py-24 md:py-32 px-4"
        style={{ backgroundColor: "#173229" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <GreenButton>The Interrogation Room</GreenButton>
            <h2
              className="font-dela text-4xl md:text-5xl lg:text-6xl"
              style={{ color: "#B8D4BE" }}
            >
              FAQs
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left"
                >
                  <div
                    className="rounded-2xl p-6 md:p-8 transition-all duration-300"
                    style={{
                      backgroundColor:
                        openFaq === index
                          ? "rgba(252, 250, 194, 0.1)"
                          : "rgba(248, 255, 232, 0.03)",
                      border: `2px solid ${openFaq === index ? "rgba(252, 250, 194, 0.3)" : "rgba(248, 255, 232, 0.1)"}`,
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className="font-dela text-lg md:text-xl"
                        style={{
                          color: openFaq === index ? "#FCFAC2" : "#F8FFE8",
                        }}
                      >
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0"
                      >
                        <ChevronDown
                          className="w-6 h-6"
                          style={{
                            color:
                              openFaq === index
                                ? "#FCFAC2"
                                : "rgba(248, 255, 232, 0.5)",
                          }}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                        marginTop: openFaq === index ? 16 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="font-bricolage text-base md:text-lg leading-relaxed"
                        style={{ color: "rgba(248, 255, 232, 0.8)" }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with Mascot */}
      <section
        className="py-24 md:py-32 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#253e35" }}
      >
        {/* Mascot */}
        {/* <motion.img
          src={mascotTrophy}
          alt="EyeLevel Mascot"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute -bottom-4 right-4 md:right-16 w-44 h-44 md:w-64 md:h-64 object-contain pointer-events-none"
        /> */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] text-[#1e3329]"
          >
            <Star18 className="w-full h-full" />
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GreenButton>Ready to Start?</GreenButton>
            <h2
              className="font-dela text-4xl md:text-5xl lg:text-6xl mb-6 uppercase"
              style={{ color: "#B8D4BE" }}
            >
              Let's Fill Those
              <br />
              <WavyUnderline>Empty Desks.</WavyUnderline>
            </h2>
            <p
              className="font-bricolage text-lg md:text-xl max-w-2xl mx-auto mb-10"
              style={{ color: "rgba(248, 255, 232, 0.8)" }}
            >
              Book a free consultation and discover exactly what you're leaving
              on the table.
            </p>

            <Link to="/booking">
              <Button
                size="lg"
                className="group rounded-full px-10 py-7 text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: "#B8D4BE",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
              >
                Book a Free Consultation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter accentColor="#B8D4BE" />
    </div>
  );
};

export default EduMarketing;
