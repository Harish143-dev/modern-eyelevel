import { useRef, useState } from "react";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  Shield,
  FileText,
  Swords,
  Target,
  UserCircle,
  Presentation,
  Cog,
  ChevronDown,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WavyUnderline from "@/components/WavyUnderline";
import b2bGallery1 from "@/assets/b2b-gallery-1.jpg";
import b2bGallery2 from "@/assets/b2b-gallery-2.jpg";
import b2bGallery3 from "@/assets/b2b-gallery-3.jpg";
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
    icon: Mail,
    title: "The Black Hole",
    description: "You send emails; they disappear into the void.",
    color: "#FCFAC2",
  },
  {
    icon: Shield,
    title: "The Gatekeepers",
    description: "You can't reach the C-Suite decision-makers.",
    color: "#B8D4BE",
  },
  {
    icon: FileText,
    title: "The Content Bore",
    description: "Your whitepapers are putting prospects to sleep.",
    color: "#FFB4B4",
  },
  {
    icon: Swords,
    title: "Sales vs. Marketing",
    description:
      "Your teams are fighting each other instead of the competition.",
    color: "#E2FEA5",
  },
];

const solutions = [
  {
    icon: Target,
    title: "Account-Based Sniper Fire",
    description:
      "We don't cast a net; we use a spear. We target specific companies and job titles with personalized messages.",
    stat: "5x",
    statLabel: "Pipeline Growth",
  },
  {
    icon: UserCircle,
    title: "The Authority Play",
    description:
      "We turn your executives into industry thought leaders using LinkedIn strategies that actually get read.",
    stat: "30%",
    statLabel: "Shorter Cycle",
  },
  {
    icon: Cog,
    title: "Pipeline Velocity",
    description:
      "We build automation that warms up leads so your sales team only talks to people who are ready to buy.",
    stat: "100+",
    statLabel: "Enterprise Clients",
  },
  {
    icon: Swords,
    title: "The Enforcer",
    description:
      'We align Sales and Marketing. No more excuses about "bad leads."',
    stat: "40%",
    statLabel: "Higher Win Rate",
  },
];

const services = [
  {
    icon: Target,
    title: "ABM Campaigns",
    description: "Targeting dream accounts directly.",
  },
  {
    icon: UserCircle,
    title: "LinkedIn Growth",
    description: "Personal branding for founders & sales teams.",
  },
  {
    icon: Presentation,
    title: "Sales Enablement",
    description: "Decks and assets that close deals.",
  },
  {
    icon: Cog,
    title: "HubSpot/Marketo",
    description: "Automation that runs 24/7.",
  },
];

const faqs = [
  {
    question: "What is Account-Based Marketing (ABM) and do I need it?",
    answer:
      "ABM is fishing with a spear, not a net. Instead of spending money on 10,000 people, we spend it on the 50 decision-makers at the 10 companies you actually want to close. If your deal size is over $10k, yes, you need it.",
  },
  {
    question: "How do I generate high-quality B2B leads on LinkedIn?",
    answer:
      'Stop sending "Salesy" InMails. We turn your profile into a content hub that solves problems. We run LinkedIn Ads that offer genuine value (whitepapers, calculators, audits) in exchange for contact info, nurturing them until they ask you for a meeting.',
  },
  {
    question: "How do we shorten a long B2B sales cycle?",
    answer:
      "By answering their questions before they ask. We use marketing automation to send case studies and ROI calculators to prospects between meetings. We keep you top-of-mind so they don't get cold feet or distracted by competitors.",
  },
  {
    question: "Cold Calling vs. Inbound Marketing: Which is better?",
    answer:
      "Why choose? We build an Inbound engine that brings leads to you, while simultaneously arming your sales team with the data they need to make warmer, smarter outbound calls. We align both for maximum damage.",
  },
  {
    question: "How do you measure B2B marketing ROI?",
    answer:
      "We don't care about \"impressions.\" We track MQLs (Marketing Qualified Leads), SQLs (Sales Qualified Leads), and Pipeline Value. If our marketing doesn't result in a signed contract, we consider it a failure. We measure money, not noise.",
  },
];

const B2BMarketing = () => {
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dela text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-[0.95] uppercase"
            style={{ color: "#FCFAC2" }}
          >
            STOP COLD CALLING.
            <br />
            <WavyUnderline>START CLOSING.</WavyUnderline>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-bricolage text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ color: "#F8FFE8" }}
          >
            B2B doesn't have to be boring (or slow). We fuse Account-Based
            Marketing (ABM) with aggressive creative to shorten your sales cycle
            and land the whales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/booking">
              <Button
                size="lg"
                className="group rounded-full px-10 py-7 text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: "#FCFAC2",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
              >
                Land Your Whales
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
              style={{ backgroundColor: "#FCFAC2" }}
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
              style={{ color: "#FCFAC2" }}
            >
              WHY DEALS <WavyUnderline>STALL</WavyUnderline>
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
              style={{ color: "#FCFAC2" }}
            >
              HOW WE CLOSE <WavyUnderline>DEALS</WavyUnderline>
            </h2>
            <p
              className="font-bricolage text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              Four battle-tested systems that turn prospects into long-term
              enterprise clients.
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
                    border: "2px solid rgba(252, 250, 194, 0.2)",
                  }}
                >
                  <div
                    className="absolute -top-5 right-6 px-5 py-2 rounded-xl"
                    style={{
                      backgroundColor: "#FCFAC2",
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
                        backgroundColor: "rgba(252, 250, 194, 0.15)",
                        border: "1px solid rgba(252, 250, 194, 0.3)",
                      }}
                    >
                      <solution.icon
                        className="w-7 h-7"
                        style={{ color: "#FCFAC2" }}
                      />
                    </div>

                    <h3
                      className="font-dela text-xl md:text-2xl mb-4 uppercase"
                      style={{ color: "#FCFAC2" }}
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
                style={{ color: "#FCFAC2" }}
              >
                Services
              </h2>
            </div>
            <p
              className="font-bricolage text-lg max-w-md"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              Every tool you need to dominate your market and close enterprise
              deals faster.
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
                    border: "2px solid rgba(252, 250, 194, 0.2)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "rgba(252, 250, 194, 0.15)",
                    }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: "#FCFAC2" }}
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
                    style={{ color: "#FCFAC2" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Stats Section */}
      <BigStatsSection
        accentColor="#FCFAC2"
        stats={[
          { value: "100", suffix: "+", label: "Enterprise Clients" },
          { value: "5", suffix: "x", label: "Pipeline Growth" },
          { value: "30", suffix: "%", label: "Shorter Sales Cycle" },
          { value: "40", suffix: "%", label: "Higher Win Rate" },
        ]}
      />

      {/* Image Gallery */}
      <ImageGallerySection
        accentColor="#FCFAC2"
        colorTitle="Deals"
        underlineTitle="Closed"
        subtitle="Enterprise wins powered by strategic marketing."
        images={[
          { src: b2bGallery1, alt: "Business handshake" },
          { src: b2bGallery2, alt: "Board meeting" },
          { src: b2bGallery3, alt: "LinkedIn strategy" },
        ]}
      />

      {/* Client Logos */}
      <ClientLogosMarquee accentColor="#FCFAC2" />

      {/* Testimonials */}
      <TestimonialsSection
        accentColor="#FCFAC2"
        testimonials={[
          {
            quote:
              "Their ABM approach landed us three Fortune 500 clients in the first quarter. ROI was immediate and measurable.",
            author: "Sanjay Gupta",
            role: "VP Sales",
            company: "TechSolutions Inc",
          },
          {
            quote:
              "EyeLevel aligned our sales and marketing teams for the first time. Pipeline velocity increased 40%.",
            author: "Meera Krishnan",
            role: "CMO",
            company: "Enterprise Systems",
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
            <GreenButton>The Boardroom Brief</GreenButton>
            <h2
              className="font-dela text-4xl md:text-5xl lg:text-6xl"
              style={{ color: "#FCFAC2" }}
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

      {/* Final CTA Section */}
      <section
        className="py-24 md:py-32 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#253e35" }}
      >
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
            <GreenButton>Ready to Close?</GreenButton>
            <h2
              className="font-dela text-4xl md:text-5xl lg:text-6xl mb-6 uppercase"
              style={{ color: "#FCFAC2" }}
            >
              Let's Land Your
              <br />
              <span>Biggest <WavyUnderline>Deals.</WavyUnderline></span>
            </h2>
            <p
              className="font-bricolage text-lg md:text-xl max-w-2xl mx-auto mb-10"
              style={{ color: "rgba(248, 255, 232, 0.8)" }}
            >
              Book a free consultation and discover how much pipeline you're
              leaving on the table.
            </p>

            <Link to="/booking">
              <Button
                size="lg"
                className="group rounded-full px-10 py-7 text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: "#FCFAC2",
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

      <EnhancedFooter accentColor="#FCFAC2" />
    </div>
  );
};

export default B2BMarketing;
