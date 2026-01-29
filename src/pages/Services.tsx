import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceGallery from "@/components/ServiceGallery";
import WavyUnderline from "@/components/WavyUnderline";
import influencerCelebrityImg from "@/assets/influencer-celebrity.jpg";
import eventsVideo1 from "@/assets/events-video-1.mp4";
import eventsVideo2 from "@/assets/events-video-2.mp4";
import photoGallery1 from "@/assets/photo-gallery-1.png";
import photoGallery2 from "@/assets/photo-gallery-2.png";
import photoGallery3 from "@/assets/photo-gallery-3.png";
import martechGallery1 from "@/assets/martech-gallery-1.png";
import martechGallery2 from "@/assets/martech-gallery-2.jpg";
import production_1 from "@/assets/production_1.jpg";
import production_2 from "@/assets/production_2.jpg";
import production_3 from "@/assets/production_3.jpg";
import poster_1 from "@/assets/poster_1.png";
import poster_3 from "@/assets/poster_3.png";
import social_1 from "@/assets/Google.png";
import social_2 from "@/assets/social media .png";
import social_3 from "@/assets/linkedin.png";
import celebrityEvent from "@/assets/celebrity.png";
import meeting from "@/assets/meeting.jpg";
import crm from "@/assets/crm.png";
import web_1 from "@/assets/mockup/web_1.png";
import web_2 from "@/assets/mockup/web_2.png";
import web_3 from "@/assets/mockup/web_3.png";
import web_4 from "@/assets/mockup/web_4.png";

const services = [
  {
    id: 1,
    title: "Events Management",
    tagline: "Experiences designed with purpose and precision.",
    description:
      "We plan and deliver events that strengthen brand presence and engage audiences. From concept to execution, every experience is built to be seamless and impactful.",
    includes: [
      "Concept and theme development",
      "Venue selection and setup",
      "Stage design, lighting, and AV production",
      "Influencer and celebrity coordination",
      "Branding and event collaterals",
      "Guest management and on-ground execution",
    ],
    media: [
      { src: eventsVideo1, type: "video" as const },
      { src: eventsVideo2, type: "video" as const },
    ],
    bgColor: "#0D1F1A",
  },
  {
    id: 2,
    title: "Influencer & Celebrity Partnerships",
    tagline: "Turning influence into measurable outcomes.",
    description:
      "We connect brands with the right voices to amplify credibility and reach. Campaigns are managed end-to-end, with clarity on content, contracts, and amplification.",
    includes: [
      "Celebrity endorsements",
      "Influencer partnerships",
      "Campaign and content planning",
      "Brief development",
      "Contracting and usage rights",
      "360° amplification",
    ],
    media: [
      { src: influencerCelebrityImg, type: "image" as const },
      {
        src: celebrityEvent,
        type: "image" as const,
      },
    ],
    bgColor: "#253e35",
  },
  {
    id: 3,
    title: "Photo & Video Production",
    tagline: "High-impact visuals built for performance.",
    description:
      "We create content that blends storytelling with results. From short-form content to full-scale productions, visuals are crafted to support campaigns and strengthen brand presence.",
    includes: [
      "Brand films and commercial production",
      "Product, lifestyle, and campaign photography",
      "Social and short-form video content",
      "Post-production and finishing",
    ],
    media: [
      { src: production_1, type: "image" as const },
      { src: production_2, type: "image" as const },
      { src: production_3, type: "image" as const },
      { src: photoGallery1, type: "image" as const },
      { src: photoGallery2, type: "image" as const },
      { src: photoGallery3, type: "image" as const },
    ],
    bgColor: "#1a2f28",
  },
  {
    id: 4,
    title: "Growth Strategy",
    tagline: "Clear direction before execution.",
    description:
      "We build growth strategies that align customers, value propositions, and funnels. From research to measurement, every decision is designed to drive predictable, long-term growth.",
    includes: [
      "Go-To-Market (GTM) roadmaps",
      "Audience and market research",
      "Messaging architecture",
      "Funnel design",
      "Measurement frameworks",
      "OKR and execution backlogs",
    ],
    media: [
      {
        src: meeting,
        type: "image" as const,
      },

      {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        type: "image" as const,
      },
    ],
    bgColor: "#253e35",
  },
  {
    id: 5,
    title: "Brand & Creative Design",
    tagline: "Design systems that communicate and convert.",
    description:
      "We craft brand identities and creative assets that build trust and drive action. Every visual system is designed to scale across platforms while staying consistent and clear.",
    includes: [
      "Brand identity systems",
      "Campaign concepts",
      "Marketing collateral and sales kits",
      "Decks and presentations",
      "Motion design",
      "UI and UX design",
      "Packaging and print design",
    ],
    media: [
      {
        src: poster_1,
        type: "image" as const,
      },
      {
        src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
        type: "image" as const,
      },
      {
        src: poster_3,
        type: "image" as const,
      },
    ],
    bgColor: "#0D1F1A",
  },
  {
    id: 6,
    title: "Web & App Development",
    tagline: "Digital products built for performance.",
    description:
      "We design and develop websites and applications that look strong, function seamlessly, and convert users. Each platform is built to scale as the business grows.",
    includes: [
      "Website design and development",
      "Web and mobile applications",
      "E-commerce solutions",
      "UI/UX systems",
      "Conversion-focused landing pages",
    ],
    media: [
      {
        src: web_1,
        type: "image" as const,
      },
      {
        src: web_2,
        type: "image" as const,
      },
      {
        src: web_3,
        type: "image" as const,
      },
      {
        src: web_4,
        type: "image" as const,
      },
    ],
    bgColor: "#253e35",
  },
  {
    id: 7,
    title: "Performance Marketing",
    tagline: "Managing the full funnel—from acquisition to retention.",
    description:
      "We combine performance media with lifecycle messaging to optimize every touchpoint. The focus is always on ROI, efficiency, and sustainable growth.",
    includes: [
      "Full-funnel ad strategy",
      "Google, Meta, and LinkedIn campaigns",
      "Shopping and retargeting ads",
      "Automated journeys",
      "Lead nurture flows",
      "Retention and win-back programs",
    ],
    media: [
      {
        src: social_1,
        type: "image" as const,
      },
      {
        src: social_2,
        type: "image" as const,
      },
      {
        src: social_3,
        type: "image" as const,
      },
    ],
    bgColor: "#1a2f28",
  },
  {
    id: 8,
    title: "Marketing Technology",
    tagline: "Systems that automate and scale growth.",
    description:
      "We set up, integrate, and manage the marketing technology stack required for modern growth. The goal is operational efficiency, clear insights, and smarter decision-making.",
    includes: [
      "CRM setup and integration",
      "WhatsApp Business and email platforms",
      "Cloud communication tools",
      "Workflow automation",
      "Ongoing optimization and support",
    ],
    media: [
      { src: martechGallery1, type: "image" as const },
      { src: martechGallery2, type: "image" as const },
      { src: crm, type: "image" as const },
    ],
    bgColor: "#253e35",
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
const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#0D1F1A]">
      <Header />

      {/* Hero Section - Minimal */}
      <section
        className="relative pt-32 pb-20 px-4 overflow-hidden md:min-h-screen"
        style={{ backgroundColor: "#0D1F1A" }}
      >
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
        {/* Background Elements */}
        {/* <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#E2FEA5]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E2FEA5]/10 rounded-full blur-[100px]" />
        </div> */}

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            <span
              className="text-sm font-medium font-bricolage"
              style={{ color: "#E2FEA5" }}
            >
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-dela mb-6 leading-[1.1] uppercase"
            style={{ color: "#E2FEA5" }}
          >
            GROWTH WITHOUT <WavyUnderline>GUESSWORK</WavyUnderline>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-bricolage leading-relaxed"
            style={{ color: "rgba(248, 255, 232, 0.7)" }}
          >
            Connected systems that turn strategy into measurable scale.
          </motion.p>
        </div>
      </section>

      {/* Services Sections - Alternating Backgrounds */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={`service-${service.id}`}
          className="py-20 md:py-28 px-4 relative overflow-hidden"
          style={{ backgroundColor: service.bgColor }}
        >
          {/* Subtle Background Accent */}
          <div className="absolute inset-0 pointer-events-none">
            {index % 2 === 0 ? (
              <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E2FEA5]/5 rounded-full blur-[120px]" />
            ) : (
              <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E2FEA5]/5 rounded-full blur-[120px]" />
            )}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              {/* Image Gallery Section */}
              <div className="w-full lg:w-3/5">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                >
                  <ServiceGallery
                    media={service.media}
                    title={service.title}
                    autoScrollInterval={4000}
                  />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/5">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-dela leading-tight uppercase"
                    style={{ color: "#F8FFE8" }}
                  >
                    {service.title}
                  </h2>

                  <p
                    className="text-xl md:text-2xl font-semibold font-bricolage"
                    style={{ color: "#E2FEA5" }}
                  >
                    {service.tagline}
                  </p>

                  <p
                    className="text-base md:text-lg leading-relaxed font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.75)" }}
                  >
                    {service.description}
                  </p>

                  {/* Includes List - No heading */}
                  <div className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.includes.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          className="flex items-start gap-3 group"
                        >
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: "rgba(226, 254, 165, 0.15)",
                            }}
                          >
                            <Check
                              className="w-3.5 h-3.5"
                              style={{ color: "#E2FEA5" }}
                            />
                          </div>
                          <span
                            className="font-bricolage text-sm md:text-base transition-colors duration-300 group-hover:text-[#E2FEA5]"
                            style={{ color: "rgba(248, 255, 232, 0.85)" }}
                          >
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section
        className="py-24 md:py-32 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#0D1F1A" }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#E2FEA5]/5 rounded-full blur-[180px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-dela mb-6 leading-tight uppercase"
              style={{ color: "#E2FEA5" }}
            >
              READY TO BUILD SOMETHING <WavyUnderline>GREAT?</WavyUnderline>
            </h2>

            <p
              className="text-lg md:text-xl mb-10 font-bricolage max-w-2xl mx-auto"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              Let's discuss how our connected services can drive predictable,
              long-term growth for your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Book a Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 py-7 text-base md:text-lg font-semibold font-bricolage hover:bg-[#E2FEA5]/10 transition-all duration-150"
                  style={{
                    backgroundColor: "transparent",
                    color: "#F8FFE8",
                    border: "2px solid rgba(248, 255, 232, 0.3)",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
};

export default ServicesPage;
