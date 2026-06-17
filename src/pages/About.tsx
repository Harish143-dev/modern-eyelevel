import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import FAQSection from "@/components/sections/shared/FAQSection";
import faqs from "@/data/faqs";
import {
  aboutPageSchema,
  faqPageSchema,
  organizationSchema,
} from "@/hooks/schemas";

import AboutHero from "@/components/sections/about/AboutHero";
import WhyEyeLevelExists from "@/components/sections/about/aboutWhyEyeLevelExists";
import Leadership from "@/components/sections/about/aboutLeadership";
import Gallery from "@/components/sections/about/aboutGallery";
import Beliefs from "@/components/sections/about/aboutBeliefs";
import Numbers from "@/components/sections/about/aboutNumbers";
import JoinUs from "@/components/sections/about/aboutJoinUs";

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-secondary">
      <SEO
        title="About EyeLevel Growth Studio — AI Marketing Agency, Chennai"
        description="Meet the team behind EyeLevel Growth Studio. 50+ clients, 2 national pickleball leagues produced, and AI-powered marketing from Chennai."
        keywords={[
          "marketing agency Chennai",
          "digital marketing agency India",
          "AI marketing agency India",
        ]}
        schema={[
          organizationSchema,
          aboutPageSchema,
          faqPageSchema(faqs["About Us"], {
            url: "https://theeyelevelstudio.com/about-us",
          }),
        ]}
        canonical="https://theeyelevelstudio.com/about-us"
        url="https://theeyelevelstudio.com/about-us"
      />
      <Header />

      <AboutHero />
      <WhyEyeLevelExists />

      {/* "Values" bento-grid section was commented out / unused in the original
          file, so it isn't wired in here. Say the word if you want it restored
          as its own component (components/about/Values.tsx). */}

      <Leadership />
      <Gallery />
      <Beliefs />
      <Numbers />

      <FAQSection faqs={faqs["About Us"]} />

      <JoinUs />

      <EnhancedFooter showCTA={false} mascotBgClass="bg-background" />
    </div>
  );
};

export default About;
