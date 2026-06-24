import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import {
  contactPageSchema,
  faqPageSchema,
  contactLocalBusinessSchema,
  breadcrumbSchema,
} from "@/hooks/schemas";
import faqs from "@/data/faqs";
import FAQSection from "@/components/sections/shared/FAQSection";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactWhatToExpect from "@/components/sections/contact/ContactWhatToExpect";
import ContactDirectDetails from "@/components/sections/contact/ContactDirectDetails";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Eyelevel Growth Studio | Book a Free Marketing Diagnostic"
        description="Book a 30-minute diagnostic with Eyelevel Growth Studio. No pitch deck. A direct conversation about what is and is not working in your marketing."
        keywords={[
          "digital marketing agency contact Chennai",
          "book marketing diagnostic India",
          "marketing agency Chennai contact",
          "Eyelevel Growth Studio contact",
          "hire marketing agency Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/contact-1200x630.png"
        schema={[
          contactPageSchema,
          contactLocalBusinessSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Contact", url: "https://theeyelevelstudio.com/contact" }
          ]),
          faqPageSchema(faqs["Contact"], {
            url: "https://theeyelevelstudio.com/contact",
          }),
        ]}
        canonical="https://theeyelevelstudio.com/contact"
        url="https://theeyelevelstudio.com/contact"
      />
      <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
        <Header />

        <main>
          <ContactHero />
          <ContactFormSection />
          <ContactWhatToExpect />
          <ContactDirectDetails />
        </main>
        <FAQSection faqs={faqs["Contact"]} />
        <EnhancedFooter showCTA={false} mascotBgClass="bg-forest-deep" />
      </div>
    </>
  );
};

export default Contact;
