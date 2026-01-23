import { useRef, useState } from "react";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  Copy,
  Ghost,
  Wifi,
  Target,
  Video,
  Cog,
  Award,
  Plane,
  ChevronDown,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WavyUnderline from "@/components/WavyUnderline";
import realestateGallery1 from "@/assets/realestate-gallery-1.jpg";
import realestateGallery2 from "@/assets/realestate-gallery-2.jpg";
import realestateGallery3 from "@/assets/realestate-gallery-3.jpg";
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
    title: "The Tire Kickers",
    description:
      "Your sales team is wasting 80% of their time on people with no budget.",
    color: "#E2FEA5",
  },
  {
    icon: Copy,
    title: "The Sea of Sameness",
    description: "Your project looks exactly like the one across the street.",
    color: "#B8D4BE",
  },
  {
    icon: Ghost,
    title: "The Ghosting",
    description:
      "Leads inquire, then vanish because your follow-up is too slow.",
    color: "#FFB4B4",
  },
  {
    icon: Wifi,
    title: "The Digital Lag",
    description:
      "Your brochure is beautiful, but your digital footprint is nonexistent.",
    color: "#FCFAC2",
  },
];

const solutions = [
  {
    icon: Target,
    title: "The Sniper Strategy",
    description:
      'We target by intent and wallet depth. We bring you buyers, not just "inquiries."',
    stat: "50%",
    statLabel: "Faster Sales",
  },
  {
    icon: Video,
    title: "Virtual Capture",
    description:
      "We use 3D tours and drone footage as lead magnets, capturing data before they even visit the site.",
    stat: "8x",
    statLabel: "Lead Quality",
  },
  {
    icon: Cog,
    title: "The Follow-Up Machine",
    description:
      "We automate the nurture process. If a lead doesn't buy today, our system ensures they remember you.",
    stat: "₹500Cr+",
    statLabel: "Properties Sold",
  },
  {
    icon: Award,
    title: "Brand Authority",
    description:
      "We position your development as the only logical choice in the market.",
    stat: "150+",
    statLabel: "Projects",
  },
];

const services = [
  {
    icon: Target,
    title: "Lead Gen",
    description: "Google & Meta Ads targeting high-net-worth individuals.",
  },
  {
    icon: Award,
    title: "Project Branding",
    description: "Identities that command a premium.",
  },
  {
    icon: Plane,
    title: "Virtual Immersion",
    description: "3D Walkthroughs & Drone Video.",
  },
  {
    icon: Cog,
    title: "CRM Setup",
    description: "Automation that ensures no lead is left behind.",
  },
];

const faqs = [
  {
    question: "Why are my real estate leads low quality?",
    answer:
      "Because your lead form is too easy. If you ask for nothing, you get everyone (including broke people). We use the Single Big Eye to add friction—asking qualifying questions about budget and timeline upfront—so your sales team only talks to serious buyers.",
  },
  {
    question: "How do I market luxury properties differently?",
    answer:
      "Luxury isn't sold; it's seduced. We stop shouting features (square footage) and start selling lifestyle (status). We use high-end video production and target specific high-net-worth zip codes and interests (golf, yachting, investment banking) on Meta and Google.",
  },
  {
    question: "Is SEO important for real estate developers?",
    answer:
      'Critical. When someone types "luxury condos in [City]," you need to be first. If you aren\'t, Zillow is stealing your traffic and selling it back to you. We build local SEO moats that make you the authority in your neighborhood.',
  },
  {
    question: "How fast can you sell out a new development project?",
    answer:
      'Speed depends on budget and aggression. We typically launch a "Pre-Launch Hype" phase to build a waiting list before you even break ground. By the time you launch, you should have buyers fighting for units, not you fighting for buyers.',
  },
  {
    question: "Do you handle real estate video marketing?",
    answer:
      "Yes. Photos lie; video sells. We produce drone flyovers, 3D walkthroughs, and lifestyle edits that allow an international investor to fall in love with a property without ever stepping foot in the country.",
  },
];

const RealEstateMarketing = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
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
            className="font-dela text-5xl md:text-6xl lg:text-7xl mb-8 leading-[0.95] uppercase"
            style={{ color: "#E2FEA5" }}
          >
            DON'T LIST IT.
            <br />
            <WavyUnderline>LAUNCH IT.</WavyUnderline>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-bricolage text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ color: "#F8FFE8" }}
          >
            "Post and pray" is not a strategy. We engineer high-performance lead
            engines that screen out unqualified leads and deliver buyers
            prepared to commit
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
                  backgroundColor: "#E2FEA5",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
              >
                Sell Faster
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
              style={{ color: "#E2FEA5" }}
            >
              WHY PROPERTIES SIT <WavyUnderline>UNSOLD</WavyUnderline>
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
              style={{ color: "#E2FEA5" }}
            >
              HOW WE SELL <WavyUnderline>PROPERTIES</WavyUnderline>
            </h2>
            <p
              className="font-bricolage text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              Four battle-tested systems that turn listings into sold-out
              launches.
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
                    border: "2px solid rgba(226, 254, 165, 0.2)",
                  }}
                >
                  <div
                    className="absolute -top-5 right-6 px-5 py-2 rounded-xl"
                    style={{
                      backgroundColor: "#E2FEA5",
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
                        backgroundColor: "rgba(226, 254, 165, 0.15)",
                        border: "1px solid rgba(226, 254, 165, 0.3)",
                      }}
                    >
                      <solution.icon
                        className="w-7 h-7"
                        style={{ color: "#E2FEA5" }}
                      />
                    </div>

                    <h3
                      className="font-dela text-xl md:text-2xl mb-4 uppercase"
                      style={{ color: "#E2FEA5" }}
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
                style={{ color: "#E2FEA5" }}
              >
                Services
              </h2>
            </div>
            <p
              className="font-bricolage text-lg max-w-md"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              Every tool you need to dominate your market and sell faster than
              your competition.
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
                    border: "2px solid rgba(226, 254, 165, 0.2)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "rgba(226, 254, 165, 0.15)",
                    }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: "#E2FEA5" }}
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
                    style={{ color: "#E2FEA5" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Stats Section */}
      <BigStatsSection
        accentColor="#E2FEA5"
        stats={[
          {
            value: "500",
            suffix: "Cr+",
            prefix: "₹",
            label: "Properties Sold",
          },
          { value: "50", suffix: "%", label: "Faster Sales" },
          { value: "8", suffix: "x", label: "Lead Quality" },
          { value: "150", suffix: "+", label: "Projects" },
        ]}
      />

      {/* Image Gallery */}
      <ImageGallerySection
        accentColor="#E2FEA5"
        colorTitle="Properties"
        underlineTitle="Sold"
        subtitle="From listing to sold-out in record time."
        images={[
          { src: realestateGallery1, alt: "Luxury interior" },
          { src: realestateGallery2, alt: "Aerial view" },
          { src: realestateGallery3, alt: "Happy buyers" },
        ]}
      />

      {/* Client Logos */}
      <ClientLogosMarquee accentColor="#E2FEA5" />

      {/* Testimonials */}
      <TestimonialsSection
        accentColor="#E2FEA5"
        testimonials={[
          {
            quote:
              "EyeLevel's pre-launch strategy had us 80% sold before we even broke ground. Their lead quality is unmatched.",
            author: "Arun Mehta",
            role: "Director",
            company: "Premium Developers",
          },
          {
            quote:
              "The virtual tour campaigns brought in international buyers we never could have reached before.",
            author: "Neha Kapoor",
            role: "Sales Head",
            company: "Skyline Properties",
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
            <GreenButton>The Buyer's Perspective</GreenButton>
            <h2
              className="font-dela text-4xl md:text-5xl lg:text-6xl"
              style={{ color: "#E2FEA5" }}
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
                          ? "rgba(226, 254, 165, 0.1)"
                          : "rgba(248, 255, 232, 0.03)",
                      border: `2px solid ${openFaq === index ? "rgba(226, 254, 165, 0.3)" : "rgba(248, 255, 232, 0.1)"}`,
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className="font-dela text-lg md:text-xl"
                        style={{
                          color: openFaq === index ? "#E2FEA5" : "#F8FFE8",
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
                                ? "#E2FEA5"
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
            <GreenButton>Ready to Launch?</GreenButton>
            <h2
              className="font-dela text-4xl md:text-5xl lg:text-6xl mb-6 uppercase"
              style={{ color: "#E2FEA5" }}
            >
              Let's Sell Your
              <br />
              <span>
                Properties <WavyUnderline>Faster.</WavyUnderline>
              </span>
            </h2>
            <p
              className="font-bricolage text-lg md:text-xl max-w-2xl mx-auto mb-10"
              style={{ color: "rgba(248, 255, 232, 0.8)" }}
            >
              Book a free consultation and discover how much revenue you're
              leaving on the table.
            </p>

            <Link to="/booking">
              <Button
                size="lg"
                className="group rounded-full px-10 py-7 text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: "#E2FEA5",
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

      <EnhancedFooter accentColor="#E2FEA5" />
    </div>
  );
};

export default RealEstateMarketing;
