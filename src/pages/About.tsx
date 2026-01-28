import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "@/components/WavyUnderline";
// Team gallery images - placeholder for now
import teamImage1 from "@/assets/aboutImage1.jpeg";
import teamImage2 from "@/assets/aboutImg2.jpg";
import teamImage3 from "@/assets/aboutImg3.jpeg";
import teamImage4 from "@/assets/aboutImg4.jpg";
import teamImage5 from "@/assets/edu-gallery-2.jpg";
import teamImage6 from "@/assets/sports-gallery-2.jpg";
import mascotWave from "@/assets/mascot-wave.png";
import GreenButton from "@/components/GreenButton";
import video from "@/assets/videogallery.mp4";
import video1 from "@/assets/videogallery2.mp4";
import akmal from "@/assets/akmal.jpeg";
import jameel from "@/assets/jameel.jpeg";
import jahangeer from "@/assets/Jahangeer.jpeg";
import { Linkedin } from "lucide-react";

const values = [
  {
    title: "Strategic Clarity",
    description:
      "Clear strategy is the foundation of all successful marketing. We don't guess—we plan with precision.",
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
      "We use data to make informed decisions and measure success. No vanity metrics—only what moves the needle.",
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
  const authors = [
    {
      name: "Mohammad Jameel",
      role: "Founder",
      image: jameel,
      dec: "A seasoned investment banking professional specializing in wealth management and alternative investment solutions for HNI and celebrity clients.",
      socials: "https://www.linkedin.com/in/muhammad-jameel-1b340836/",
    },
    {
      name: "Akmal Rahman",
      role: "Co-Founder and Chief Growth Architect",
      image: akmal,
      dec: "A senior marketing leader with 15+ years of experience driving scalable growth, building powerful brands, and executing high-impact go-to-market strategies.",
      socials: "https://www.linkedin.com/in/akmalbillekar/",
    },
    {
      name: "Jahangeer Ansari",
      role: "Web3 & Tech Strategy Advisor",
      image: jahangeer,
      dec: "A marketing and technology strategist with 15+ years of experience, specializing in Web3, DeFi, and AI-driven growth initiatives.",
      socials: "https://www.linkedin.com/in/jahangeeransari/",
    },
    // {
    //   name: "",
    //   role: "Brand Marketing Manager",
    //   image:
    //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    // },
  ];
  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: "#253e35" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative md:min-h-screen flex items-center justify-center flex-col overflow-hidden">
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
              className="text-sm font-medium font-bricolage"
              style={{ color: "#E2FEA5" }}
            >
              About Us
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-dela uppercase"
              style={{ color: "#E2FEA5" }}
            >
              THE TEAM BEHIND <WavyUnderline>THE GROWTH</WavyUnderline>
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
            Strategists, creatives, and performance marketers united by a single
            obsession: driving measurable growth for our clients.
          </motion.p>
        </div>
      </section>

      {/* Our Story - Simplified */}
      <section
        className="py-20 px-4 relative"
        style={{ backgroundColor: "#173229" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                style={{
                  backgroundColor: "rgba(226, 254, 165, 0.1)",
                  border: "1px solid rgba(226, 254, 165, 0.2)",
                }}
              >
                <span
                  className="text-sm font-medium font-bricolage"
                  style={{ color: "#E2FEA5" }}
                >
                  Our Story
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-dela mb-6 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                FROM FRUSTRATION
                <br />
                TO <WavyUnderline>FOCUS</WavyUnderline>
              </h2>
              <p
                className="text-lg leading-relaxed mb-6 font-bricolage"
                style={{ color: "rgba(248, 255, 232, 0.7)" }}
              >
                EyeLevel was founded on a simple idea: marketing should be a
                growth engine, not a cost center. We were tired of seeing
                businesses waste money on marketing that didn't deliver.
              </p>
              <p
                className="text-lg leading-relaxed font-bricolage"
                style={{ color: "rgba(248, 255, 232, 0.7)" }}
              >
                So we built a new kind of agency—a growth studio that combines
                strategic clarity with precision execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="rounded-3xl p-8 text-center"
                  style={{ backgroundColor: "rgba(226, 254, 165, 0.1)" }}
                >
                  <span
                    className="text-5xl font-dela"
                    style={{ color: "#E2FEA5" }}
                  >
                    50+
                  </span>
                  <p
                    className="text-sm mt-2 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.7)" }}
                  >
                    Clients Served
                  </p>
                </div>
                <div
                  className="rounded-3xl p-8 text-center mt-8"
                  style={{ backgroundColor: "rgba(226, 254, 165, 0.1)" }}
                >
                  <span
                    className="text-5xl font-dela"
                    style={{ color: "#E2FEA5" }}
                  >
                    3x
                  </span>
                  <p
                    className="text-sm mt-2 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.7)" }}
                  >
                    Avg. Growth
                  </p>
                </div>
                <div
                  className="rounded-3xl p-8 text-center"
                  style={{ backgroundColor: "rgba(226, 254, 165, 0.1)" }}
                >
                  <span
                    className="text-5xl font-dela"
                    style={{ color: "#E2FEA5" }}
                  >
                    15+
                  </span>
                  <p
                    className="text-sm mt-2 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.7)" }}
                  >
                    Years Experience
                  </p>
                </div>
                <div
                  className="rounded-3xl p-8 text-center mt-8"
                  style={{ backgroundColor: "rgba(226, 254, 165, 0.1)" }}
                >
                  <span
                    className="text-5xl font-dela"
                    style={{ color: "#E2FEA5" }}
                  >
                    100%
                  </span>
                  <p
                    className="text-sm mt-2 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.7)" }}
                  >
                    Commitment
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Dynamic Bento Grid */}
      <section
        className="py-20 px-4 relative border-t border-b overflow-hidden"
        style={{
          backgroundColor: "#253e35",
          borderColor: "rgba(248, 255, 232, 0.15)",
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E2FEA5]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#667eea]/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
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
                className="text-sm font-medium font-bricolage"
                style={{ color: "#E2FEA5" }}
              >
                Our Values
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-dela uppercase"
              style={{ color: "#E2FEA5" }}
            >
              WHY WE STAND FOR <WavyUnderline>EXCELLENCE</WavyUnderline>
            </h2>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
            {/* Large card - spans 4 cols */}
            <motion.div
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
                    className="text-6xl md:text-8xl font-dela opacity-20"
                    style={{ color: "#253e35" }}
                  >
                    01
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-dela mt-4 mb-4 uppercase"
                    style={{ color: "#253e35" }}
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
            </motion.div>

            {/* Medium card - spans 2 cols */}
            <motion.div
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
                    className="text-5xl md:text-6xl font-dela opacity-20"
                    style={{ color: "#253e35" }}
                  >
                    02
                  </span>
                  <h3
                    className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase"
                    style={{ color: "#253e35" }}
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
            </motion.div>

            {/* Medium card - spans 2 cols */}
            <motion.div
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
                    className="text-5xl md:text-6xl font-dela opacity-20"
                    style={{ color: "#253e35" }}
                  >
                    03
                  </span>
                  <h3
                    className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase"
                    style={{ color: "#253e35" }}
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
            </motion.div>

            {/* Medium card - spans 2 cols */}
            <motion.div
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
                    className="text-5xl md:text-6xl font-dela opacity-20"
                    style={{ color: "#253e35" }}
                  >
                    04
                  </span>
                  <h3
                    className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase"
                    style={{ color: "#253e35" }}
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
            </motion.div>

            {/* Wide card - spans 2 cols */}
            <motion.div
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
                    className="text-5xl md:text-6xl font-dela opacity-20"
                    style={{ color: "#253e35" }}
                  >
                    05
                  </span>
                  <h3
                    className="text-xl md:text-2xl font-dela mt-3 mb-3 uppercase"
                    style={{ color: "#253e35" }}
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
      </section>

      {/* Author Profiles - Light Background */}
      <section
        className="py-20 px-4 relative overflow-hidden border-t border-b"
        style={{
          backgroundColor: "#253e35",
          borderColor: "rgba(248, 255, 232, 0.15)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-dela uppercase">
              <span style={{ color: "#E2FEA5" }}>The Leadership</span>{" "}
              <WavyUnderline>Team</WavyUnderline>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {authors.map((author, index) => (
              <motion.div
                key={author.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center group flex flex-col justify-evenly items-center rounded-2xl p-4 md:p-6 cursor-pointer"
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
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3
                  className="font-dela text-lg uppercase"
                  style={{ color: "#253E35" }}
                >
                  {author.name}
                </h3>
                <p className="text-sm font-bricolage text-[#E2FEA5] mt-1 px-3 py-0.5 rounded-full bg-[#253E35]">
                  {author.role}
                </p>
                <p className="text-sm font-bricolage mt-3 mx-4 text-[#253E35]/70">
                  {author?.dec}
                </p>
                <a
                  className="text-sm flex justify-center gap-2 font-bricolage mt-2 mx-4 text-[#E2FEA5] bg-[#253E35] px-4 py-2 rounded-full border-2 border-[#E2FEA5] hover:bg-[#253E35]/90 transition-colors"
                  href={author.socials}
                  target="_blank"
                >
                  <span>
                    <Linkedin className="size-5 pb-1" />
                  </span>
                  Connect
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        className="py-20 px-4 relative"
        style={{ backgroundColor: "#1e3c30" }}
      >
        <div className="max-w-7xl mx-auto">
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
                className="text-sm font-medium font-bricolage"
                style={{ color: "#E2FEA5" }}
              >
                Gallery
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-dela uppercase"
              style={{ color: "#E2FEA5" }}
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
                  className={`relative overflow-hidden rounded-2xl group ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  {/* 🎥 VIDEO OR IMAGE */}
                  {videoSrc ? (
                    <video
                      src={videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
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
                      className="text-sm font-medium font-bricolage"
                      style={{ color: "#F8FFE8" }}
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

      {/* Join Us Section */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#253e35" }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <GreenButton>We're Hiring</GreenButton>

            <h2
              className="text-3xl md:text-5xl font-dela mb-6 uppercase"
              style={{ color: "#E2FEA5" }}
            >
              Join the <WavyUnderline>Growth Squad</WavyUnderline>
            </h2>

            <p
              className="text-lg max-w-2xl mx-auto mb-8 font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              We're always looking for talented individuals who are passionate
              about growth, collaborative and creative problem-solvers. Ready to
              make an impact?
            </p>

            <Link to="/careers">
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
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter showCTA={false} />
    </div>
  );
};

export default About;
