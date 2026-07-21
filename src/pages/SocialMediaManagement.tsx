import { useRef } from "react";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Edit3, Users, UserPlus, PieChart } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { socialMediaManagementSchema, breadcrumbSchema } from "@/hooks/schemas";

const parallaxItems: iCardItem[] = [
  {
    title: "Real Estate",
    description: "Property reviewers, site visit campaigns, and developer branding.",
    tag: "Real Estate",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#1a2f28",
    textColor: "#F8FFE8"
  },
  {
    title: "Healthcare",
    description: "Patient education, doctor-led content, and trust-building social feeds.",
    tag: "Healthcare",
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#2a4f44",
    textColor: "#F8FFE8"
  },
  {
    title: "Automotive",
    description: "High-octane creative, dealership promotions, and test-drive drives.",
    tag: "Automotive",
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#1a2f28",
    textColor: "#F8FFE8"
  },
  {
    title: "IT / SaaS",
    description: "B2B thought leadership, founder personal branding, and product updates.",
    tag: "IT/SaaS",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    color: "#2a4f44",
    textColor: "#F8FFE8"
  }
];

import { HeroSection } from "@/components/sections/services/SOCIAL MEDIA MANAGEMENT/HeroSection";
import { IncludesSection } from "@/components/sections/services/SOCIAL MEDIA MANAGEMENT/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/SOCIAL MEDIA MANAGEMENT/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/SOCIAL MEDIA MANAGEMENT/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/SOCIAL MEDIA MANAGEMENT/IndustriesSection";
import { CTASection } from "@/components/sections/services/SOCIAL MEDIA MANAGEMENT/CTASection";

const SocialMediaManagement = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="Social Media Marketing Agency Chennai | Eyelevel Growth Studio"
        description="Content that builds the audience your sales team actually needs. Strategy, calendars, creative, and posting — fully managed. Communities that convert."
        keywords={[
          "social media marketing agency Chennai",
          "social media management Chennai",
          "Instagram marketing Chennai",
          "Facebook marketing agency",
          "social media agency India",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          socialMediaManagementSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "Social Media Management", url: "https://theeyelevelstudio.com/services/social-media-management" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/social-media-management"
        url="https://theeyelevelstudio.com/services/social-media-management"
      />
      <Header />

      <HeroSection />
      <IncludesSection />
      <WhoIsItForSection />
      <QuoteSection />
      <IndustriesSection />
      <CTASection />
      <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
    </div >
  );
};

export default SocialMediaManagement;
