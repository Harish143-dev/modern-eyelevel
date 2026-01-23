import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
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
import WavyUnderline from "@/components/WavyUnderline";
import mascotWave from "@/assets/mascot-wave.png";
import GreenButton from "@/components/GreenButton";
import career_mascot from "@/assets/career_mascot.png";
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

const openPositions = [
  {
    title: "Performance Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "On-site",
    description:
      "Drive paid media campaigns and optimize for maximum ROI across multiple platforms.",
  },
  {
    title: "Content Strategist",
    department: "Creative",
    type: "Full-time",
    location: "On-site",
    description:
      "Develop compelling content strategies that engage audiences and drive conversions.",
  },
  {
    title: "Growth Analyst",
    department: "Analytics",
    type: "Full-time",
    location: "On-site",
    description:
      "Analyze data to uncover growth opportunities and optimize marketing performance.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "On-site",
    description:
      "Create beautiful, user-centered designs that convert visitors into customers.",
  },
  {
    title: "Business Development Executive",
    department: "Sales",
    type: "Full-time",
    location: "On-site",
    description:
      "Build relationships and drive new business opportunities for the agency.",
  },
];

// Convert position title to URL slug
const titleToSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

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
  const navigate = useNavigate();

  const handleInterested = (positionTitle: string) => {
    const slug = titleToSlug(positionTitle);
    navigate(`/careers/${slug}`);
  };

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: "#253e35" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative md:min-h-screen">
        {/* Rotating 32-pointed star - centered upper area */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-[800px] md:w-[1000px] lg:w-[1200px] h-[800px] md:h-[1000px] lg:h-[1200px] text-[#1e3329] pointer-events-none"
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
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <GreenButton>Careers</GreenButton>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-dela mb-6 uppercase"
            style={{ color: "#E2FEA5" }}
          >
            BUILD YOUR CAREER <WavyUnderline>WITH US</WavyUnderline>
          </motion.h1>

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
        className="py-20 px-4 relative"
        style={{ backgroundColor: "#173229" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <GreenButton>Why Jion Us</GreenButton>
            <h2
              className="text-3xl md:text-5xl font-dela uppercase"
              style={{ color: "#E2FEA5" }}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                    style={{
                      backgroundColor: "#e8f0d8",
                      border: "2px solid #0a0a0a",
                    }}
                  >
                    <benefit.icon
                      className="w-7 h-7"
                      style={{ color: "#173229" }}
                    />
                  </div>
                  <h3
                    className="text-lg font-dela mb-2"
                    style={{ color: "#0a0a0a" }}
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
              className="text-3xl md:text-5xl font-dela uppercase"
              style={{ color: "#E2FEA5" }}
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
                        <h3
                          className="text-xl font-dela mb-2 transition-colors"
                          style={{ color: "#0a0a0a" }}
                        >
                          {position.title}
                        </h3>
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
                        className="rounded-full group/btn shrink-0 font-bricolage hover:translate-y-0.5 hover:shadow-none transition-all duration-150"
                        style={{
                          backgroundColor: "#173229",
                          color: "#F8FFE8",
                          border: "2px solid #0a0a0a",
                          boxShadow: "0 3px 0 #0a0a0a",
                        }}
                        onClick={() => handleInterested(position.title)}
                      >
                        I'm Interested
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Can't Find Role - with mascot */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#1e3c30" }}
      >
        {/* Mascot */}
        <motion.img
          src={career_mascot}
          alt="EyeLevel Mascot"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute -bottom-8 right-0 md:right-12 w-40 h-40 md:w-56 md:h-56 object-contain pointer-events-none opacity-90"
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-dela mb-6 uppercase"
              style={{ color: "#E2FEA5" }}
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
              size="lg"
              className="group rounded-full px-10 py-7 text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
              style={{
                backgroundColor: "#FCFAC2",
                color: "#0a0a0a",
                border: "3px solid #0a0a0a",
                boxShadow: "0 4px 0 #0a0a0a",
              }}
              onClick={() => handleInterested("General Application")}
            >
              Send Your Resume
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter showCTA={false} />
    </div>
  );
};

export default Careers;
