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
import Beliefs from "@/components/sections/about/aboutBeliefs";
import Numbers from "@/components/sections/about/aboutNumbers";
import JoinUs from "@/components/sections/about/aboutJoinUs";

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-secondary">
      <SEO
        title="About Eyelevel Growth Studio | Built From the Client Side"
        description="Eyelevel is the extended marketing team built by a marketing head with 15 years client-side. Fractional CMO across India. Book a free 30-min diagnostic."
        keywords={[
          "fractional CMO India",
          "extended marketing team",
          "digital marketing agency Chennai",
          "client-side marketing leadership",
          "AI-powered growth studio Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/about-1200x630.png"
        schema={[
          organizationSchema,
          aboutPageSchema,
          faqPageSchema(faqs["About Us"], {
            url: "https://theeyelevelstudio.com/about",
          }),
        ]}
        canonical="https://theeyelevelstudio.com/about"
        url="https://theeyelevelstudio.com/about"
      />
      <Header />

      <AboutHero />
      <WhyEyeLevelExists />

      {/* "Values" bento-grid section was commented out / unused in the original
          file, so it isn't wired in here. Say the word if you want it restored
          as its own component (components/about/Values.tsx). */}

      <Leadership />
      <Beliefs />
      <Numbers />

      <JoinUs />

      <FAQSection
        faqs={faqs["About Us"]}
        bgClass="#1a2f28"
      />

      <EnhancedFooter showCTA={false} mascotBgClass="bg-secondary" />
    </div>
  );
};

export default About;
