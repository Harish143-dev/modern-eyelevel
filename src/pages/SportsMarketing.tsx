import { useRef, useState } from "react";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  Package,
  Handshake,
  Film,
  Target,
  ShoppingCart,
  UserCircle,
  Database,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WavyUnderline from "@/components/WavyUnderline";
import sportsGallery1 from "@/assets/sports-gallery-1.jpg";
import sportsGallery2 from "@/assets/sports-gallery-2.jpg";
import sportsGallery3 from "@/assets/sports-gallery-3.jpg";
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
    icon: Users,
    title: "Empty Seats",
    description:
      "The quietest place on earth shouldn't be your stadium on game day.",
    color: "#FFB4B4",
  },
  {
    icon: Package,
    title: "Inventory Dust",
    description:
      "Your merchandise is sitting in a warehouse, not on fans' backs.",
    color: "#B8D4BE",
  },
  {
    icon: Handshake,
    title: "Sponsor Fatigue",
    description: "Logos on jerseys aren't enough anymore. Sponsors want ROI.",
    color: "#FCFAC2",
  },
  {
    icon: Film,
    title: "Content Chaos",
    description:
      "You post random highlights while your rivals build narratives.",
    color: "#E2FEA5",
  },
];

const solutions = [
  {
    icon: Target,
    title: "Ticket Velocity",
    description:
      "We use dynamic ad targeting to move tickets fast, turning casual watchers into season pass holders.",
    stat: "10M+",
    statLabel: "Fan Reach",
  },
  {
    icon: ShoppingCart,
    title: "Merch Movement",
    description:
      "We treat your team shop like an E-commerce giant. Optimized funnels, retargeting, and aggressive sales.",
    stat: "200%",
    statLabel: "ROI Increase",
  },
  {
    icon: Handshake,
    title: "Sponsorship Activation",
    description:
      "We don't just slap a logo on a wall. We build digital activations that collect data for your sponsors.",
    stat: "50+",
    statLabel: "Teams Served",
  },
  {
    icon: Users,
    title: "Fan Tribalism",
    description:
      "We use the Rod of Growth to point fans toward a shared narrative, driving engagement through the roof.",
    stat: "5x",
    statLabel: "Engagement",
  },
];

const services = [
  {
    icon: Users,
    title: "Fan Acquisition",
    description: "Paid social campaigns to grow the tribe.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Shopify/Webstore optimization for merch.",
  },
  {
    icon: UserCircle,
    title: "Athlete Influencers",
    description: "Monetizing player likeness effectively.",
  },
  {
    icon: Database,
    title: "Data Capture",
    description: "Turning stadium attendees into email leads.",
  },
];

const faqs = [
  {
    question: "How do I increase ticket sales for my sports team?",
    answer:
      'Stop posting score updates and start posting narratives. We use "FOMO" (Fear Of Missing Out) marketing and retargeting ads to follow fans who visited your ticket page but didn\'t buy, reminding them that seats are running out.',
  },
  {
    question: "How can we attract more corporate sponsorships?",
    answer:
      "Sponsors don't want to see your logo; they want to see your audience data. We build digital activations that capture fan emails and demographics. We hand you a dossier proving your fans have the spending power sponsors crave.",
  },
  {
    question: "Does social media marketing actually drive revenue for sports?",
    answer:
      'Only if you do it right. "Likes" don\'t pay player salaries. We set up "Shoppable Social" ecosystems where a fan seeing a highlight reel can buy the jersey or ticket in two clicks. We turn engagement into commerce.',
  },
  {
    question: "What is the best strategy for sports merchandise sales?",
    answer:
      'Treating your team shop like a serious fashion brand. We optimize your E-commerce store for speed, use scarce "drops" to create hype, and run aggressive abandoned cart recovery emails to capture lost revenue.',
  },
  {
    question: "How do you engage fans during the off-season?",
    answer:
      "The off-season is where loyalty is built. We create documentary-style content, behind-the-scenes access, and interactive trivia leagues that keep your brand top-of-mind even when there is no game on TV.",
  },
];

const SportsMarketing = () => {
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
          className="absolute inset-0 m-auto w-[800px] md:w-[1000px] lg:w-[1200px] h-[800px] md:h-[1000px] lg:h-[1200px] text-[#1e3329] pointer-events-none opacity-50"
        >
          <Star18 className="w-full h-full" />
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
            className="font-dela text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-[0.95] uppercase"
            style={{ color: "#FFB4B4" }}
          >
            FANS ARE METRICS.
            <br />
            <WavyUnderline>WINNING</WavyUnderline> IS MATH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bricolage text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ color: "#F8FFE8" }}
          >
            Passion doesn't pay the bills; ticket sales do. We treat your team
            like a brand.
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
                  backgroundColor: "#FFB4B4",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
              >
                Fill Your Stadium
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
              style={{ backgroundColor: "#FFB4B4" }}
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
              style={{ color: "#FFB4B4" }}
            >
              WHY YOUR FANS AREN'T <WavyUnderline>BUYING</WavyUnderline>
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
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${challenge.color}15, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
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

                    <span
                      className="font-dela text-6xl absolute top-0 right-6 opacity-10"
                      style={{ color: challenge.color }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="font-dela text-xl md:text-2xl mb-4 uppercase"
                      style={{ color: "#F8FFE8" }}
                    >
                      {challenge.title}
                    </h3>
                    <p
                      className="font-bricolage text-base leading-relaxed"
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
              style={{ color: "#FFB4B4" }}
            >
              HOW WE FILL <WavyUnderline>STADIUMS</WavyUnderline>
            </h2>
            <p
              className="font-bricolage text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              Four battle-tested systems that turn casual fans into
              revenue-generating superfans.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="relative h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
                  style={{
                    backgroundColor: "rgba(248, 255, 232, 0.05)",
                    border: "2px solid rgba(255, 180, 180, 0.2)",
                  }}
                >
                  <div
                    className="absolute -top-5 right-6 px-5 py-2 rounded-xl"
                    style={{
                      backgroundColor: "#FFB4B4",
                      boxShadow: "0 3px 0 #0a0a0a",
                      border: "2px solid #0a0a0a",
                    }}
                  >
                    <span className="font-dela text-lg text-black">
                      {solution.stat}
                    </span>
                    <span className="font-bricolage text-xs text-black/70 block">
                      {solution.statLabel}
                    </span>
                  </div>

                  <div className="pt-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        backgroundColor: "rgba(255, 180, 180, 0.15)",
                        border: "1px solid rgba(255, 180, 180, 0.3)",
                      }}
                    >
                      <solution.icon
                        className="w-7 h-7"
                        style={{ color: "#FFB4B4" }}
                      />
                    </div>

                    <h3
                      className="font-dela text-xl md:text-2xl mb-4 uppercase"
                      style={{ color: "#FFB4B4" }}
                    >
                      {solution.title}
                    </h3>
                    <p
                      className="font-bricolage text-sm md:text-base leading-relaxed"
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
                style={{ color: "#FFB4B4" }}
              >
                Services
              </h2>
            </div>
            <p
              className="font-bricolage text-lg max-w-md"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              Every tool you need to dominate your league and monetize your
              fanbase.
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
                    border: "2px solid rgba(255, 180, 180, 0.2)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "rgba(255, 180, 180, 0.15)",
                    }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: "#FFB4B4" }}
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
                    style={{ color: "#FFB4B4" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Stats Section */}
      <BigStatsSection
        accentColor="#FFB4B4"
        stats={[
          { value: "50", suffix: "+", label: "Teams & Leagues" },
          { value: "10", suffix: "M+", label: "Fan Reach" },
          { value: "200", suffix: "%", label: "Avg ROI Increase" },
          { value: "500", suffix: "K+", label: "Tickets Sold" },
        ]}
      />

      {/* Image Gallery */}
      <ImageGallerySection
        accentColor="#FFB4B4"
        colorTitle="Game Day"
        underlineTitle="Wins"
        subtitle="From empty seats to sold-out stadiums."
        images={[
          { src: sportsGallery1, alt: "Fans celebrating" },
          { src: sportsGallery2, alt: "Merchandise store" },
          { src: sportsGallery3, alt: "Athletes training" },
        ]}
      />

      {/* Client Logos */}
      <ClientLogosMarquee accentColor="#FFB4B4" />

      {/* Testimonials */}
      <TestimonialsSection
        accentColor="#FFB4B4"
        testimonials={[
          {
            quote:
              "EyeLevel turned our social media into a revenue machine. Merchandise sales are up 300% and ticket sales have never been better.",
            author: "Vikram Singh",
            role: "Commercial Director",
            company: "Premier Cricket League",
          },
          {
            quote:
              "They understand the sports business like no other agency. Our sponsor value increased significantly after their digital activation campaigns.",
            author: "Ananya Rao",
            role: "Marketing Head",
            company: "Metro Football Club",
          },
          {
            quote:
              "The off-season content strategy kept our fans engaged year-round. Season ticket renewals hit an all-time high.",
            author: "Rohit Menon",
            role: "Fan Engagement Manager",
            company: "Sports Arena",
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
            <GreenButton>The Locker Room Talk</GreenButton>
            <h2
              className="font-dela text-4xl md:text-5xl lg:text-6xl"
              style={{ color: "#FFB4B4" }}
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
                          ? "rgba(255, 180, 180, 0.1)"
                          : "rgba(248, 255, 232, 0.03)",
                      border: `2px solid ${openFaq === index ? "rgba(255, 180, 180, 0.3)" : "rgba(248, 255, 232, 0.1)"}`,
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className="font-dela text-lg md:text-xl"
                        style={{
                          color: openFaq === index ? "#FFB4B4" : "#F8FFE8",
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
                                ? "#FFB4B4"
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
            <GreenButton>Ready to Win?</GreenButton>
            <h2
              className="font-dela text-4xl md:text-5xl lg:text-6xl mb-6 uppercase"
              style={{ color: "#FFB4B4" }}
            >
              Let's Pack Your
              <br />
              <WavyUnderline>Stadium.</WavyUnderline>
            </h2>
            <p
              className="font-bricolage text-lg md:text-xl max-w-2xl mx-auto mb-10"
              style={{ color: "rgba(248, 255, 232, 0.8)" }}
            >
              Book a free consultation and discover how much revenue you're
              leaving on the field.
            </p>

            <Link to="/booking">
              <Button
                size="lg"
                className="group rounded-full px-10 py-7 text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: "#FFB4B4",
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

      <EnhancedFooter accentColor="#FFB4B4" />
    </div>
  );
};

export default SportsMarketing;
