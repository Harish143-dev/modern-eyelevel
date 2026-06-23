import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
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

import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesList from "@/components/sections/services/ServicesList";
import HowItConnects from "@/components/sections/services/HowItConnects";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-forest-deep">
      <SEO
        title="Digital Marketing Services Chennai | Eyelevel Growth Studio"
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

      <ServicesHero />
      <ServicesList />
      <HowItConnects />
      <ServicesCTA />
      <FAQSection
        faqs={faqs["Services"]}
        bgClass="bg-forest-deep"
      />

      <EnhancedFooter mascotBgClass="bg-forest-deep" showCTA={false} />
    </div>
  );
};

export default ServicesPage;
