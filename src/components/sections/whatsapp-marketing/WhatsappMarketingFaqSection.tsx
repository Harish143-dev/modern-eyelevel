import FAQSection from "@/components/sections/shared/FAQSection";

const whatsappFaqs = [
  {
    question: "What is WhatsApp marketing for businesses?",
    answer: "WhatsApp marketing uses the WhatsApp Business API to send promotional messages, nurture leads, automate communication, and run broadcast campaigns. WhatsApp's 95%+ open rate makes it the highest-engagement channel for Indian consumer brands.",
  },
  {
    question: "How does WhatsApp marketing work for D2C brands?",
    answer: "D2C brands use WhatsApp for cart recovery, new product launches, loyalty updates, and post-purchase follow-up. Brands that move high-intent customers from Instagram to WhatsApp see significantly higher repeat purchase rates.",
  },
  {
    question: "What is the WhatsApp Business API?",
    answer: "An official Meta product allowing businesses to message at scale via platforms like Gupshup, WATI, or Twixor — with automation, CRM integration, and chatbots.",
  },
  {
    question: "How do I set up WhatsApp marketing for my brand?",
    answer: "You need a Meta Business account, verified phone number, and an API platform. Eyelevel handles full setup — typically within 5–7 business days.",
  },
];

export default function WhatsappMarketingFaqSection() {
  return <FAQSection faqs={whatsappFaqs} />;
}

