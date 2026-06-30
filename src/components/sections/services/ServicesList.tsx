import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceGallery from "@/components/sections/services/ServiceGallery";

import influencerCelebrityImg from "@/assets/pages/services/influencer-celebrity.webp";
import photoGallery1 from "@/assets/pages/services/photo-gallery-1.webp";
import photoGallery2 from "@/assets/pages/services/photo-gallery-2.webp";
import photoGallery3 from "@/assets/pages/services/photo-gallery-3.webp";
import martechGallery1 from "@/assets/pages/services/martech-gallery-1.webp";
import martechGallery2 from "@/assets/pages/services/martech-gallery-2.webp";
import production_1 from "@/assets/pages/services/content-production-1.webp";
import production_2 from "@/assets/pages/services/content-production-2.webp";
import production_3 from "@/assets/pages/services/content-production-3.webp";
import poster_1 from "@/assets/pages/services/cro-poster-1.webp";
import poster_3 from "@/assets/pages/services/cro-poster-3.webp";
import social_1 from "@/assets/pages/services/seo-social.webp";
import social_2 from "@/assets/pages/services/social-media.webp";
import perf_mark_01 from "@/assets/pages/services/performance-marketing-1.webp";
import perf_mark_02 from "@/assets/pages/services/performance-marketing-2.webp";
import perf_mark_03 from "@/assets/pages/services/performance-marketing-3.webp";
import celebrityEvent from "@/assets/pages/services/celebrity.webp";
import meeting from "@/assets/pages/services/meeting.webp";
import crm from "@/assets/pages/services/crm.webp";
import web_1 from "@/assets/pages/services/web-design-1.webp";
import web_2 from "@/assets/pages/services/web-design-2.webp";
import web_3 from "@/assets/pages/services/web-design-3.webp";
import web_4 from "@/assets/pages/services/web-design-4.webp";
import social from "@/assets/pages/services/social-media-management.webp";
import linkedinb2b_2 from "@/assets/pages/services/linkedinb2b_2.webp";
import crofunneldesign_1 from "@/assets/pages/services/crofunneldesign.webp";
import crofunneldesign_2 from "@/assets/pages/services/crofunneldesign_2.webp";
import crofunneldesign_3 from "@/assets/pages/services/crofunneldesign_1.webp";
import revenueattribution_1 from "@/assets/pages/services/revenueattribution_1.webp";
import revenueattribution_2 from "@/assets/pages/services/revenueattribution_2.webp";
import brandandidentity_1 from "@/assets/pages/services/cro-poster-3.webp";
import brandandidentity_2 from "@/assets/pages/services/social_media_1.webp";
import brandandidentity_3 from "@/assets/content/works/misc/shoot_1.webp";
import aiseo_1 from "@/assets/pages/services/aiseo_3.webp";
import aiseo_2 from "@/assets/pages/services/aiseo_2.webp";
import linkedinb2b_3 from "@/assets/pages/services/linkedinb2b_3.webp";

const services = [
  {
    id: 1,
    title: "Performance Marketing",
    description:
      "Meta and Google Ads built for revenue, not reach. Full-funnel campaigns with flat fees and complete attribution from ad to close. No black-box reporting, no padded spend.",
    media: [
      {
        src: perf_mark_01,
        type: "image" as const,
      },
      {
        src: perf_mark_02,
        type: "image" as const,
      },
      {
        src: perf_mark_03,
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
      { src: aiseo_1, type: "image" as const }, {
        src: social_1,
        type: "image" as const,
      },
      {
        src: aiseo_2,
        type: "image" as const,
      }
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
      {
        src: social,
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
        src: linkedinb2b_2,
        type: "image" as const,
      },
      {
        src: linkedinb2b_3,
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
          src: crofunneldesign_3,
          type: "image" as const,
        },
        {
          src: crofunneldesign_1,
          type: "image" as const,
        },
        {
          src: crofunneldesign_2,
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
      { src: revenueattribution_1, type: "image" as const },
      { src: revenueattribution_2, type: "image" as const },
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
      { src: brandandidentity_1, type: "image" as const },
      { src: brandandidentity_2, type: "image" as const },
      { src: brandandidentity_3, type: "image" as const },
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

const ServicesList = () => {
  return (
    <>
      {services.map((service, index) => (
        <section
          key={service.id}
          id={`service-${service.id}`}
          className="px-4 relative overflow-hidden py-[100px]"
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
                    className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-dela leading-tight uppercase text-foreground"
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
                        <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full group overflow-hidden relative">
                          <span className="relative z-10 flex items-center gap-2">
                            {service.cta.text.replace("→", "")}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </span>

                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
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
    </>
  );
};

export default ServicesList;
