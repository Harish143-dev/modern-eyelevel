import Header from "@/components/layout/Header";
import Hero from "@/components/pages/home/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import WhyEyeLevelExists from "@/components/pages/home/WhyEyeLevelExists";
import ServicesSection from "@/components/pages/home/ServicesSection";
import HomeIndustriesSection from "@/components/pages/home/HomeIndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import Results from "@/components/sections/Results";
import FounderSection from "@/components/pages/home/FounderSection";
import Difference from "@/components/pages/home/Difference";
import ComparisonTable from "@/components/pages/home/ComparisonTable";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import {
  faqPageSchema,
  homePageSchema,
  homeServicesSchema,
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  localBusinessSchema,
} from "@/hooks/schemas";
import faqs from "@/data/faqs";

const Index = () => {
  return (
    <>
      <SEO
        title="Digital Marketing Agency Chennai | EyeLevel Growth Studio"
        description="EyeLevel Growth Studio is a full-service AI-powered marketing agency in Chennai. Real Estate, Healthcare, IT/SaaS, Automotive, Manufacturing. Book a free 30-min diagnostic."
        keywords={[
          "digital marketing agency Chennai",
          "AI-powered marketing agency",
          "real estate marketing agency Chennai",
          "healthcare marketing agency Chennai",
          "fractional CMO India",
          "performance marketing Chennai",
        ]}
        schema={[
          organizationSchema,
          localBusinessSchema,
          websiteSchema,
          homePageSchema,
          homeServicesSchema,
          faqPageSchema(faqs["Home"]),
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/"
        url="https://theeyelevelstudio.com/"
      />
      <div className="min-h-screen bg-background overflow-x-clip">
        <Header />
        <Hero />
        <ClientLogos />
        <WhyEyeLevelExists />
        <HomeIndustriesSection />
        <ServicesSection />
        <ProcessSection />
        <ComparisonTable />
        <Difference />
        <FounderSection />
        <Results />
        <CTABand />
        <FAQSection faqs={faqs["Home"]} />
        <EnhancedFooter showCTA={false} mascotBgClass="bg-forest-deep" />
      </div>
    </>
  );
};

export default Index;

