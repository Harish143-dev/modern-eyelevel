import { useState, useRef } from "react";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import industry images
import industryEducation from "@/assets/industry-education.jpg";
import industrySports from "@/assets/industry-sports.jpg";
import industryRealestate from "@/assets/industry-realestate.jpg";
import industryB2b from "@/assets/industry-b2b.jpg";
import WavyUnderline from "@/components/WavyUnderline";

const industries = [
  {
    id: "education",
    number: "01",
    title: "Edu-Marketing",
    tagline: "From Enquiries to Admissions",
    shortTagline: "Enroll More.",
    description:
      "We help schools, universities, and EdTech companies build powerful brands and create a predictable pipeline of qualified student applications.",
    longDescription:
      "Partner with us to streamline your admissions funnel and attract students who are the perfect fit for your campus. Our data-driven approach ensures every marketing dollar translates into quality enrollments.",
    href: "/industries/education",
    image: industryEducation,
    accentColor: "#B8D4BE",
    stats: [
      { value: "3x", label: "Enrollment Growth" },
      { value: "45%", label: "Lower CAC" },
      { value: "150+", label: "Institutions Served" },
    ],
    capabilities: [
      "Admission Campaigns",
      "Brand Building",
      "Lead Nurturing",
      "Digital Strategy",
    ],
  },
  {
    id: "sports",
    number: "02",
    title: "Sports Marketing",
    tagline: "From Fans to Superfans",
    shortTagline: "Win Bigger.",
    description:
      "We help sports teams, leagues, and event organizers translate passion into packed stadiums, engaged communities, and lucrative commercial opportunities.",
    longDescription:
      "Go beyond the game with brand strategies that maximize your reach and monetize your global fanbase. We turn every match into a marketing opportunity.",
    href: "/industries/sports",
    image: industrySports,
    accentColor: "#FFB4B4",
    stats: [
      { value: "10M+", label: "Fan Reach" },
      { value: "200%", label: "ROI Increase" },
      { value: "50+", label: "Teams & Leagues" },
    ],
    capabilities: [
      "Fan Engagement",
      "Sponsorship Activation",
      "Event Marketing",
      "Merchandise Strategy",
    ],
  },
  {
    id: "real-estate",
    number: "03",
    title: "Real Estate",
    tagline: "From Blueprints to Buyers",
    shortTagline: "Sell Faster.",
    description:
      "We help developers, brokers, and property management companies build powerful brands and generate a consistent flow of qualified leads.",
    longDescription:
      "Leverage high-performance digital systems built specifically to move real estate inventory in competitive markets. From pre-launch to sold-out.",
    href: "/industries/real-estate",
    image: industryRealestate,
    accentColor: "#E2FEA5",
    stats: [
      { value: "50%", label: "Faster Sales" },
      { value: "8x", label: "Lead Quality" },
      { value: "₹500Cr+", label: "Properties Sold" },
    ],
    capabilities: [
      "Project Launches",
      "Virtual Tours",
      "Lead Generation",
      "Brand Positioning",
    ],
  },
  {
    id: "b2b",
    number: "04",
    title: "B2B Marketing",
    tagline: "From Leads to Loyalty",
    shortTagline: "Close Sooner.",
    description:
      "We help B2B companies build a predictable pipeline of qualified leads and nurture them into long-term, high-value customers.",
    longDescription:
      "Build a sophisticated engine that identifies high-value targets and moves them efficiently through your sales cycle. Strategic marketing meets measurable results.",
    href: "/industries/b2b",
    image: industryB2b,
    accentColor: "#FCFAC2",
    stats: [
      { value: "5x", label: "Pipeline Growth" },
      { value: "30%", label: "Shorter Cycle" },
      { value: "100+", label: "Enterprise Clients" },
    ],
    capabilities: [
      "Account-Based Marketing",
      "Content Strategy",
      "Sales Enablement",
      "Lead Scoring",
    ],
  },
];

// 18-pointed star SVG component (reused from Hero)
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

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Matching home page style */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center pt-32 md:pt-40 pb-20 px-4 overflow-hidden"
        style={{ backgroundColor: "#253e35" }}
      >
        {/* Rotating star background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-[600px] md:w-[800px] lg:w-[1000px] h-[600px] md:h-[800px] lg:h-[1000px] text-[#1e3329] pointer-events-none"
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

        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-[#E2FEA5]/30 bg-[#E2FEA5]/5"
          >
            <span
              className="text-sm font-medium font-bricolage"
              style={{ color: "#E2FEA5" }}
            >
              Our Verticals
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dela text-4xl md:text-6xl lg:text-7xl uppercase mb-8 leading-[1.05]"
            style={{ color: "#E2FEA5" }}
          >
            Specialized
            <br />
            <WavyUnderline>Expertise</WavyUnderline>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bricolage text-base md:text-lg lg:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: "#F8FFE8" }}
          >
            We believe that true proficiency comes from deep focus. Four key
            verticals. Years of immersion. Strategies that are not just creative
            but contextually brilliant.
          </motion.p>

          {/* Industry quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {industries.map((industry, index) => (
              <Link key={industry.id} to={industry.href}>
                <motion.div
                  className="group flex items-center gap-2 px-5 py-3 rounded-full border-2 font-bricolage font-medium transition-all duration-300 hover:bg-[rgba(248,255,232,0.05)]"
                  style={{
                    borderColor: "rgba(248, 255, 232, 0.3)",
                    color: "#F8FFE8",
                  }}
                  whileHover={{
                    borderColor: industry.accentColor,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-xs opacity-50">{industry.number}</span>
                  <span>{industry.title}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </motion.div>
              </Link>
            ))}
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

      {/* Industries Showcase */}
      {industries.map((industry, index) => (
        <IndustryShowcase
          key={industry.id}
          industry={industry}
          index={index}
          isActive={activeIndustry === index}
          onHover={() => setActiveIndustry(index)}
          onLeave={() => setActiveIndustry(null)}
        />
      ))}

      <EnhancedFooter />
    </div>
  );
};

interface IndustryShowcaseProps {
  industry: (typeof industries)[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const IndustryShowcase = ({ industry, index }: IndustryShowcaseProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const isEven = index % 2 === 0;

  return (
    <section
      id={industry.id}
      ref={ref}
      className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden"
      style={{
        backgroundColor: isEven ? "#173229" : "#1e3c30",
      }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${isEven ? "right" : "left"} center, ${industry.accentColor}, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 w-full">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
        >
          {/* Image Section */}
          <motion.div
            className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              {/* Image with parallax */}
              <motion.div
                style={{ scale: imageScale }}
                className="absolute inset-0"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Overlay gradient */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: `linear-gradient(135deg, ${industry.accentColor}20, transparent 60%)`,
                }}
              />

              {/* Number badge */}
              <div
                className="absolute top-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                style={{
                  backgroundColor: `${industry.accentColor}20`,
                  border: `2px solid ${industry.accentColor}40`,
                }}
              >
                <span
                  className="font-dela text-2xl"
                  style={{ color: industry.accentColor }}
                >
                  {industry.number}
                </span>
              </div>

              {/* Stats overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300"
              >
                <div className="grid grid-cols-3 gap-4 p-8">
                  {industry.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <span
                        className="font-dela text-2xl md:text-3xl block mb-2"
                        style={{ color: industry.accentColor }}
                      >
                        {stat.value}
                      </span>
                      <span className="font-bricolage text-sm text-white/70">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
            style={{ y: contentY, opacity: contentOpacity }}
          >
            {/* Title & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-[#E2FEA5]/30 bg-[#E2FEA5]/5"
              >
                <span
                  className="text-sm font-medium font-bricolage"
                  style={{ color: "#E2FEA5" }}
                >
                  {industry.tagline}
                </span>
              </motion.div>
              <h2
                className="font-dela text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1] uppercase"
                style={{ color: industry.accentColor }}
              >
                {industry.title}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-bricolage text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: "rgba(248, 255, 232, 0.85)" }}
            >
              {industry.description}
            </motion.p>

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {industry.capabilities.map((capability, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full font-bricolage text-sm border"
                  style={{
                    borderColor: "rgba(248, 255, 232, 0.2)",
                    color: "rgba(248, 255, 232, 0.7)",
                  }}
                >
                  {capability}
                </span>
              ))}
            </motion.div>

            {/* Stats - Mobile visible */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mb-10 lg:hidden"
            >
              {industry.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <span
                    className="font-dela text-2xl block mb-1"
                    style={{ color: industry.accentColor }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-bricolage text-xs"
                    style={{ color: "rgba(248, 255, 232, 0.6)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="z-20"
            >
              <Button
                asChild
                size="lg"
                className="group rounded-full px-8 py-6 text-base font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: industry.accentColor,
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
              >
                <Link to={industry.href}>
                  Explore {industry.title}
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "rgba(248, 255, 232, 0.1)" }}
      />
    </section>
  );
};

export default Industries;
