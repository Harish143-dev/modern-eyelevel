import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JoinTheLeague from "@/components/JoinTheLeague";
import WhatWeDo from "@/components/WhatWeDo";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import TextTestimonials from "@/components/TextTestimonials";
import WhyEyeLevel from "@/components/WhyEyeLevel";
import FAQSection from "@/components/FAQSection";
import EnhancedFooter from "@/components/EnhancedFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <JoinTheLeague />
      <WhatWeDo />
      <IndustriesSection />
      <ProcessSection />
      <TextTestimonials />
      <WhyEyeLevel />
      <FAQSection />
      <EnhancedFooter />
    </div>
  );
};

export default Index;
