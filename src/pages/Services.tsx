import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceGallery from "@/components/sections/services/ServiceGallery";
import WavyUnderline from "@/components/shared/WavyUnderline";
import influencerCelebrityImg from "@/assets/services/content/influencer-celebrity.webp";
import eventsVideo1 from "@/assets/videos/events-video-1.mp4";
import eventsVideo2 from "@/assets/videos/events-video-2.mp4";
import photoGallery1 from "@/assets/services/content/photo-gallery-1.webp";
import photoGallery2 from "@/assets/services/content/photo-gallery-2.webp";
import photoGallery3 from "@/assets/services/content/photo-gallery-3.webp";
import martechGallery1 from "@/assets/services/content/martech-gallery-1.webp";
import martechGallery2 from "@/assets/services/content/martech-gallery-2.webp";
import production_1 from "@/assets/services/content/production_1.webp";
import production_2 from "@/assets/services/content/production_2.webp";
import production_3 from "@/assets/services/content/production_3.webp";
import poster_1 from "@/assets/services/content/poster_1.webp";
import poster_3 from "@/assets/services/content/poster_3.webp";
import social_1 from "@/assets/services/social/google.webp";
import social_2 from "@/assets/services/social/social-media.webp";
import social_3 from "@/assets/services/social/linkedin.webp";
import performance_1 from "@/assets/services/social/Performance marketing.webp"
import celebrityEvent from "@/assets/services/content/celebrity.webp";
import meeting from "@/assets/services/content/meeting.webp";
import crm from "@/assets/services/content/crm.webp";
import web_1 from "@/assets/mockup/web_1.webp";
import web_2 from "@/assets/mockup/web_2.webp";
import web_3 from "@/assets/mockup/web_3.webp";
import web_4 from "@/assets/mockup/web_4.webp";
import ClientLottie, { type ClientLottieRef } from "@/components/shared/ClientLottie";
import { useEffect, useRef, useState } from "react";
import SEO from "@/components/utils/SEO";
import {
  faqPageSchema,
  organizationSchema,
  servicesSchema,
  websiteSchema,
  breadcrumbSchema,
} from "@/hooks/schemas";
import faqs from "@/data/faqs";
import FAQSection from "@/components/sections/shared/FAQSection";

const services = [
  {
    id: 1,
    title: "Performance Marketing",
    description:
      "Meta and Google Ads built for revenue, not reach. Full-funnel campaigns with flat fees and complete attribution from ad to close. No black-box reporting, no padded spend.",
    media: [
      {
        src: performance_1,
        type: "image" as const,
      },
      {
        src: social_3,
        type: "image" as const,
      },
    ],
    bgColor: "#1a2f28",
    cta: { text: "Learn More →", link: "/services/performance-marketing", }
  },
  {
    id: 2,
    title: "AI-ERA SEO",
    description:
      " Traditional SEO is table stakes. We add AEO (AI Overviews, featured snippets) and GEO (ChatGPT, Gemini, Perplexity citations). Buyers get answers before they click. We make sure yours is the answer they get.",
    media: [
      { src: "https://connectedmarkets.com/wp-content/uploads/2025/02/AI-SEO-in-2025-1200x686.webp", type: "image" as const }, {
        src: social_1,
        type: "image" as const,
      },

    ],
    bgColor: "#0D1F1A",
    cta: { text: "Learn More →", link: "/services/ai-era-seo" },
  },
  {
    id: 3,
    title: "SOCIAL MEDIA MANAGEMENT",
    description:
      "Content that builds the audience your sales team needs. Strategy, calendars, creative, and posting fully managed. Communities that convert, not just follower counts.",
    media: [
      { src: influencerCelebrityImg, type: "image" as const },
      {
        src: celebrityEvent,
        type: "image" as const,
      },
    ],
    bgColor: "#1a2f28",
    cta: { text: "Learn More →", link: "/services/social-media-management" },
  },
  {
    id: 4,
    title: "CONTENT AND CREATIVE",
    description:
      " AI handles production speed. Humans handle strategy and voice. Video, design, copy, and brand assets built with your brief, delivered with your tone.",
    media: [
      { src: production_1, type: "image" as const },
      { src: production_2, type: "image" as const },
      { src: production_3, type: "image" as const },
      { src: photoGallery1, type: "image" as const },
      { src: photoGallery2, type: "image" as const },
      { src: photoGallery3, type: "image" as const },
    ],
    bgColor: "#0D1F1A",
    cta: { text: "Learn More →", link: "/services/content-and-creative" },
  },
  {
    id: 5,
    title: "LINKEDIN B2B MARKETING",
    description:
      "Profile optimisation, content strategy, and targeted outreach that builds real pipeline. For founders and companies that sell to other businesses.",
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
    bgColor: "#1a2f28",
    cta: { text: "Learn More →", link: "/services/linkedin-b2b-marketing" },
  },
  {
    id: 6,
    title: "CRO AND FUNNEL DESIGN",
    description:
      "We fix what happens after the click. Landing pages, conversion flows, lead qualification systems built to turn visitors into conversations.", media: [
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
    cta: { text: "Learn More →", link: "/services/cro-and-funnel-design" },
  },
  {
    id: 7,
    title: "REVENUE ATTRIBUTION DASHBOARD",
    description:
      " Bundled into every growth retainer. Every channel tied to a business outcome. You will always know which activity is producing revenue and which one to cut.",
    media: [
      { src: crm, type: "image" as const },
      { src: social_2, type: "image" as const },
    ],
    bgColor: "#1a2f28",
    cta: { text: "Learn More →", link: "/services/revenue-attribution-dashboard" },
  },
  {
    id: 8,
    title: "BRAND AND IDENTITY",
    description:
      "Visual identity, positioning, and brand architecture for companies that are growing and need their brand to do the work. Logo, guidelines, tone of voice, and the full system.",
    media: [
      { src: martechGallery1, type: "image" as const },
      { src: martechGallery2, type: "image" as const },
      { src: crm, type: "image" as const },
    ],
    bgColor: "#0D1F1A",
    cta: { text: "Learn More →", link: "/services/brand-and-identity" },
  },
  {
    id: 9,
    title: "WEBSITE DESIGN AND DEVELOPMENT",
    description:
      "Fast, conversion-optimised sites built as sales tools, not brochures. Designed to do one thing: turn a visitor into a lead.",
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
    bgColor: "#1a2f28",
    cta: { text: "Learn More →", link: "/services/website-design-and-development" },
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
  const ref = useRef(null);
  const lottieRef = useRef<ClientLottieRef>(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/magic wand.json")
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

  return (
    <div className="min-h-screen bg-forest-deep">
      <SEO
        title="Digital Marketing Services Chennai | EyeLevel Growth Studio"
        description="Performance marketing, SEO, social media, content, LinkedIn B2B, CRO, brand identity, and website development — one studio, zero handoffs. Chennai's AI-powered growth team."
        keywords={[
          "digital marketing services Chennai",
          "marketing agency services Chennai",
          "performance marketing agency",
          "AI-Era SEO Chennai",
          "social media marketing agency Chennai",
        ]}
        schema={[
          organizationSchema,
          websiteSchema,
          servicesSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
          ]),
          faqPageSchema(faqs["Services"], {
            url: "https://theeyelevelstudio.com/services",
          }),
        ]}
        canonical="https://theeyelevelstudio.com/services"
        url="https://theeyelevelstudio.com/services"
      />
      <Header />

      <section
        ref={ref}
        className="relative pt-[110px] flex flex-col justify-center items-center pb-20 px-4 overflow-hidden lg:min-h-screen bg-forest-deep"
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
        {/* Background Elements */}
        {/* <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        </div> */}

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            <span
              className="text-sm font-medium font-bricolage text-primary"
            >
              What we do
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-dela uppercase text-center leading-[1.05] mb-5 text-primary"
          >
            {/* BIG TITLE */}
            <span className="relative flex items-end justify-center text-4xl md:text-6xl lg:text-7xl">
              <span className="">
                <span className="sr-only">O</span>
                {animationData && (
                  <ClientLottie
                    lottieRef={lottieRef}
                    animationData={animationData}
                    autoPlay={false}
                    loop
                    className="w-[38px] md:w-[53px] lg:w-[63px] pointer-events-none"
                  />
                )}
              </span>
              NE STUDIO
            </span>
            {" "}
            {/* SUBTITLE – ONE LINE, SMALLER */}
            <span className="block text-3xl md:text-5xl lg:text-6xl tracking-wide">
              NINE CAPABILITIES
              <WavyUnderline>ZERO HANDOFF</WavyUnderline>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-bricolage leading-relaxed"
            style={{ color: "rgba(248, 255, 232, 0.7)" }}
          >
            Most companies run 3 to 5 vendors for what we do inside one studio. Strategy, performance, content, SEO, and creative — all connected, all accountable to the same outcome.
          </motion.p>
        </div>
        <div className="flex items-center rounded-full relative font-bricolage z-1000 mt-8 justify-center gap-4">
          <Link to="/booking">
            <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full">
              Book a free 30-min diagnostic
            </Button>
          </Link>
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
              <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            ) : (
              <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            )}
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
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
                    className="text-2xl md:text-4xl lg:text-5xl font-dela leading-tight uppercase text-foreground"
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-sm md:text-base leading-relaxed font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.75)" }}
                  >
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  {service.cta && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="pt-4"
                    >
                      <Link to={service.cta.link}>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-lg font-dela uppercase hover:no-underline flex items-center gap-2 group transition-colors duration-300 text-primary"
                        >
                          {service.cta.text.replace("→", "")}
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* How it all connects Section */}
      <section className="py-24 md:py-32 px-4 relative bg-forest-deep text-center z-10">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow only, as requested by user to not repeat headline */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: "rgba(226, 254, 165, 0.1)",
                border: "1px solid rgba(226, 254, 165, 0.2)",
              }}
            >
              <span className="text-sm font-medium font-bricolage text-primary">
                How it all connects
              </span>
            </motion.div>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela uppercase text-primary mb-8 leading-tight">
                These are not nine <WavyUnderline>separate services</WavyUnderline>
              </h2>
              <p className="text-lg md:text-xl lg:text-xl font-bricolage leading-relaxed" style={{ color: "rgba(248, 255, 232, 0.85)" }}>
                They are nine parts of one growth system. Strategy informs creative. <br />Creative feeds performance. Performance data shapes SEO. SEO feeds content. <br /> Content builds the brand. The brand closes the deal.
              </p>
              <p className="text-lg md:text-xl lg:text:xl font-bricolage leading-relaxed mt-6 text-primary">
                When one studio runs all of it, nothing gets lost in translation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* faqs */}
      <FAQSection faqs={faqs["Services"]} />

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-forest-deep">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela mb-6 uppercase text-primary">
              Which service does your marketing{" "}
              <WavyUnderline>need most?</WavyUnderline>
            </h2>

            <p
              className="text-lg max-w-xl mx-auto mb-10 font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              30 minutes. No pitch deck. We will tell you exactly where to start.
            </p>

            <Link to="/booking">
              <Button className="group h-12 md:h-14 px-5 md:px-8 text-sm md:text-base font-semibold w-full sm:w-auto">
                <span>Book a free 30-min diagnostic</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter mascotBgClass="bg-forest-deep" showCTA={false} />
    </div>
  );
};

export default ServicesPage;



