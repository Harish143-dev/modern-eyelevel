import { useEffect, useRef, useState } from "react";
import WhatsappMarketingHeroSection from "@/components/sections/whatsapp-marketing/WhatsappMarketingHeroSection";
import WhatsappMarketingOfferSection from "@/components/sections/whatsapp-marketing/WhatsappMarketingOfferSection";
import WhatsappMarketingCaseStudySection from "@/components/sections/whatsapp-marketing/WhatsappMarketingCaseStudySection";
import WhatsappMarketingIndustriesSection from "@/components/sections/whatsapp-marketing/WhatsappMarketingIndustriesSection";
import WhatsappMarketingStackSection from "@/components/sections/whatsapp-marketing/WhatsappMarketingStackSection";
import WhatsappMarketingFaqSection from "@/components/sections/whatsapp-marketing/WhatsappMarketingFaqSection";
import WhatsappMarketingStickyCta from "@/components/sections/whatsapp-marketing/WhatsappMarketingStickyCta";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is WhatsApp marketing for businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp marketing uses the WhatsApp Business API to send promotional messages, nurture leads, automate communication, and run broadcast campaigns. WhatsApp's 95%+ open rate makes it the highest-engagement channel for Indian consumer brands.",
      },
    },
    {
      "@type": "Question",
      name: "How does WhatsApp marketing work for D2C brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "D2C brands use WhatsApp for cart recovery, new product launches, loyalty updates, and post-purchase follow-up. Brands that move high-intent customers from Instagram to WhatsApp see significantly higher repeat purchase rates.",
      },
    },
    {
      "@type": "Question",
      name: "What is the WhatsApp Business API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An official Meta product allowing businesses to message at scale via platforms like Gupshup, WATI, or Twixor \u2014 with automation, CRM integration, and chatbots.",
      },
    },
    {
      "@type": "Question",
      name: "How do I set up WhatsApp marketing for my brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need a Meta Business account, verified phone number, and an API platform. EyeLevel handles full setup \u2014 typically within 5\u20137 business days.",
      },
    },
  ],
};

function WhatsAppMarketingPage() {
  const [hideSticky, setHideSticky] = useState(false);
  const finalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Dynamic FAQ Schema injection
    let schemaScript = document.getElementById("faq-schema");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "faq-schema";
      schemaScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(faqLd);

    return () => {
      schemaScript?.remove();
    };
  }, []);

  useEffect(() => {
    if (!finalRef.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setHideSticky(e.isIntersecting)),
      { threshold: 0.2 },
    );
    io.observe(finalRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".el-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SEO
        title="WhatsApp Marketing Agency India — EyeLevel Growth Studio"
        description="Full-service WhatsApp marketing: broadcasts, drip sequences, chatbots, and Business API setup. EyeLevel runs WhatsApp campaigns for D2C brands, hospitals, schools, and SaaS companies across India."
        keywords={[
          "WhatsApp marketing agency India",
          "WhatsApp Business API India",
          "WhatsApp marketing for D2C brands India",
          "WhatsApp broadcast campaign India",
          "Gupshup WATI Twixor India",
        ]}
        canonical="https://theeyelevelstudio.com/services/whatsapp-marketing"
        url="https://theeyelevelstudio.com/services/whatsapp-marketing"
      />
      <main className="bg-background text-foreground font-bricolage min-h-screen relative overflow-x-hidden">

        <Header />

        <WhatsappMarketingHeroSection scrollTo={scrollTo} />
        <WhatsappMarketingOfferSection />
        <WhatsappMarketingCaseStudySection scrollTo={scrollTo} />
        <WhatsappMarketingIndustriesSection />
        <WhatsappMarketingStackSection ref={finalRef} />
        <WhatsappMarketingFaqSection />

        <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
      </main>

      <WhatsappMarketingStickyCta hideSticky={hideSticky} />
    </>
  );
}

export default WhatsAppMarketingPage;




