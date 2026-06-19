import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import eyelevelLogo from "@/assets/branding/eyelevel_Logo.svg";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";
import SEO from "@/components/utils/SEO";
import {
  contactPageSchema,
  faqPageSchema,
  localBusinessSchema,
} from "@/hooks/schemas";
import faqs from "@/data/faqs";
import FAQSection from "@/components/sections/shared/FAQSection";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  company: z
    .string()
    .trim()
    .min(1, "Company is required")
    .max(100, "Company name must be less than 100 characters"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .max(20, "Phone number must be less than 20 characters"),
  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;
const CONTACT_FORM_WEBHOOK_URL =
  import.meta.env.VITE_CONTACT_FORM_WEBHOOK_URL ??
  "https://automate.eyelevelstudio.in/webhook/contact-form";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch(CONTACT_FORM_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || (result && result.ok === false)) {
        throw new Error(result?.message || "Failed to send message");
      }

      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <SEO
        title="Contact EyeLevel Growth Studio | Book a Free Marketing Diagnostic"
        description="Book a 30-minute diagnostic with EyeLevel Growth Studio. No pitch deck. A direct conversation about what is and is not working in your marketing."
        keywords={[
          "digital marketing agency contact Chennai",
          "book marketing diagnostic India",
          "marketing agency Chennai contact",
          "EyeLevel Growth Studio contact",
          "hire marketing agency Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/contact-1200x630.png"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact EyeLevel Growth Studio",
            description: "Book a 30-minute diagnostic with EyeLevel Growth Studio.",
            url: "https://theeyelevelstudio.com/contact"
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "EyeLevel Growth Studio",
            url: "https://theeyelevelstudio.com",
            telephone: "+919789099499",
            email: "hello@eyelevelstudio.in",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN"
            },
            areaServed: "Chennai",
            serviceType: "Digital Marketing Agency"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://theeyelevelstudio.com/" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://theeyelevelstudio.com/contact" }
            ]
          },
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
          {/* Section 1 - Hero */}
          <section className="pt-32 pb-20 px-4 min-h-[70vh] md:min-h-screen flex flex-col justify-center" style={{ backgroundColor: "#1F3D2E" }}>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center flex flex-col items-center"
              >
                <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary font-bricolage text-sm font-medium mb-14">
                  Talk to EyeLevel
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-dela mb-6 text-primary uppercase leading-tight max-w-4xl text-center mx-auto">
                  <span className="block"> Book your</span>
                  <span className="text-2xl md:text-3xl lg:text-5xl block md:inline relative bottom-2"> 30-minute <WavyUnderline>diagnostic</WavyUnderline></span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-4 font-bricolage max-w-4xl text-white/90 leading-relaxed text-center">
                  No pitch deck. No slide show. A direct conversation about what is and is not working in your marketing — and what we would do differently.
                </p>
                <p className="text-base font-bricolage max-w-3xl text-white/60 leading-relaxed text-center">
                  We do not send a proposal on call one. We listen, ask the questions that matter, and tell you honestly what we see. If there is a fit, we talk next steps.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Section 2 - Booking embed & Form */}
          <section className="pt-16 pb-16 lg:pb-24 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-stretch">

                {/* Left side - CTA text block */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-col justify-start h-full lg:pr-8 text-center lg:text-left pt-0 lg:pt-4"
                >
                  <div className="mb-8 md:mb-10 w-full">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-dela text-primary leading-[1.2] uppercase text-center lg:text-left break-words">
                      <span className="block mb-1">30 MINUTES.</span>
                      <span className="block mb-1">NO PITCH DECK.</span>
                      <span className="block mb-1">WE WILL TELL YOU</span>
                      <span className="block mt-2"><WavyUnderline>WHAT WE SEE</WavyUnderline></span>
                    </h2>
                  </div>

                  <div className="flex flex-col items-center justify-center lg:items-start gap-4">
                    <Button                    >
                      <Link to="/booking" className="flex items-center justify-center">
                        Book a free 30-min diagnostic
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>

                    <p className="font-bricolage text-white/80 mt-2 font-medium text-base md:text-lg text-center lg:text-left">
                      Or email <a href="mailto:hello@eyelevelstudio.in" className="underline hover:text-primary transition-colors">hello@eyelevelstudio.in</a>
                    </p>
                  </div>
                </motion.div>

                {/* Right side - Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col h-full mt-12 lg:mt-0"
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-dela mb-6 text-primary uppercase whitespace-normal text-center lg:text-left break-words">
                    Or send us a <WavyUnderline>message</WavyUnderline>
                  </h2>
                  <div
                    className="rounded-3xl md:rounded-4xl p-6 md:p-10 flex-1 flex flex-col justify-center"
                    style={{
                      backgroundColor: "#F8FFE8",
                      border: "3px solid #0a0a0a",
                      boxShadow: "0 6px 0 #0a0a0a",
                    }}
                  >
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-primary"
                        >
                          <CheckCircle
                            className="w-8 h-8 text-forest-dark"
                          />
                        </div>
                        <h3
                          className="text-2xl font-dela mb-4 text-forest-dark"
                        >
                          Got it.
                        </h3>
                        <p
                          className="mb-6 font-bricolage"
                          style={{ color: "rgba(23, 50, 41, 0.7)" }}
                        >
                          We will be in touch within one business day.
                        </p>
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          className="rounded-full font-bricolage"
                          style={{
                            backgroundColor: "#173229",
                            color: "#F8FFE8",
                          }}
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                          <Label
                            htmlFor="name"
                            className="font-medium font-bricolage text-forest-dark"
                          >
                            Your Name *
                          </Label>
                          <Input
                            id="name"
                            {...register("name")}
                            placeholder="John Doe"
                            className="mt-2 rounded-xl font-bricolage placeholder:text-forest-light/80"
                            style={{
                              backgroundColor: "rgba(23, 50, 41, 0.05)",
                              borderColor: "rgba(23, 50, 41, 0.2)",
                              color: "#173229",
                            }}
                          />
                          {errors.name && (
                            <p className="text-red-600 text-sm mt-1">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label
                            htmlFor="company"
                            className="font-medium font-bricolage text-forest-dark"
                          >
                            Company Name *
                          </Label>
                          <Input
                            id="company"
                            {...register("company")}
                            placeholder="Acme Inc."
                            className="mt-2 rounded-xl font-bricolage placeholder:text-forest-light/80"
                            style={{
                              backgroundColor: "rgba(23, 50, 41, 0.05)",
                              borderColor: "rgba(23, 50, 41, 0.2)",
                              color: "#173229",
                            }}
                          />
                          {errors.company && (
                            <p className="text-red-600 text-sm mt-1">
                              {errors.company.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label
                            htmlFor="phone"
                            className="font-medium font-bricolage text-forest-dark"
                          >
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder="+91 98765 43210"
                            className="mt-2 rounded-xl font-bricolage placeholder:text-forest-light/80"
                            style={{
                              backgroundColor: "rgba(23, 50, 41, 0.05)",
                              borderColor: "rgba(23, 50, 41, 0.2)",
                              color: "#173229",
                            }}
                          />
                          {errors.phone && (
                            <p className="text-red-600 text-sm mt-1">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label
                            htmlFor="message"
                            className="font-medium font-bricolage text-forest-dark"
                          >
                            What does your marketing look like today and what are you trying to fix? *
                          </Label>
                          <Textarea
                            id="message"
                            {...register("message")}
                            placeholder="Brief message..."
                            rows={5}
                            className="mt-2 rounded-xl resize-none font-bricolage placeholder:text-forest-light/80"
                            style={{
                              backgroundColor: "rgba(23, 50, 41, 0.05)",
                              borderColor: "rgba(23, 50, 41, 0.2)",
                              color: "#173229",
                            }}
                          />
                          {errors.message && (
                            <p className="text-red-600 text-sm mt-1">
                              {errors.message.message}
                            </p>
                          )}
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full group rounded-full font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                          disabled={isSubmitting}
                          style={{
                            backgroundColor: "#173229",
                            color: "#F8FFE8",
                            border: "3px solid #0a0a0a",
                            boxShadow: "0 4px 0 #0a0a0a",
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send message"}
                        </Button>

                        <p
                          className="text-sm text-center font-bricolage"
                          style={{ color: "rgba(23, 50, 41, 0.6)" }}
                        >
                          We respond within one business day. If it is urgent, call <span className="whitespace-nowrap">+91 97890 99499</span> directly.
                        </p>
                      </form>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section 3 - What to expect */}
          <section className="py-20 md:py-32 px-4 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-dela text-primary mb-16 text-center uppercase"
              >
                What the <WavyUnderline>30 minutes </WavyUnderline> looks like
              </motion.h2>

              <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
                {[
                  {
                    num: "01",
                    title: "We ask about your business, not your brief",
                    body: "We want to understand what you are trying to grow, what has been tried, and what the board cares about. Not your industry category. Your actual situation."
                  },
                  {
                    num: "02",
                    title: "We tell you what we see",
                    body: "Based on what you share, we will give you a straight read on where the gaps are. If something obvious is broken, we will say so. This is not a soft intro call."
                  },
                  {
                    num: "03",
                    title: "We talk about fit honestly",
                    body: "We are not the right studio for every company. If we are not the right fit, we will say that too. If there is a clear match, we outline what working together could look like."
                  }
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-background rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col h-full group"
                  >
                    <h3 className="text-xl md:text-2xl font-dela mb-4 uppercase text-white group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-base md:text-lg font-bricolage text-white/60 leading-relaxed flex-1">
                      {card.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4 - Direct contact details */}
          <section className="py-16 md:py-24 px-4" style={{ backgroundColor: "#2A5040" }}>
            <div className="max-w-7xl mx-auto text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-dela text-primary mb-20 uppercase"
              >
                Prefer to reach us <WavyUnderline>directly ?</WavyUnderline>
              </motion.h3>

              <div className="border border-white/10 rounded-3xl md:rounded-[2.5rem] py-16 px-6 md:px-12 lg:px-24 mb-16 bg-white/5 backdrop-blur-sm">
                <div className="grid md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <a href="mailto:hello@eyelevelstudio.in" className="text-[11px] sm:text-xs lg:text-lg font-dela text-white hover:text-primary transition-colors">
                      hello@eyelevelstudio.in
                    </a>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <a href="tel:+919789099499" className="text-[11px] sm:text-xs lg:text-lg font-dela text-white hover:text-primary transition-colors whitespace-nowrap">
                      +91 97890 99499
                    </a>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-[11px] sm:text-xs lg:text-lg font-dela text-white mb-3 text-center">
                      Chennai, Tamil Nadu, India
                    </p>
                    <p className="text-sm font-bricolage text-white/70 max-w-[250px]">
                      We work with clients across India. In-person meetings in Chennai by appointment.
                    </p>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-white/10"
              >
                <p className="text-sm md:text-base font-bricolage text-white/70 max-w-2xl mx-auto">
                  We respond to all enquiries within one business day. Discovery calls are scheduled Monday to Friday, 10am to 6pm IST.
                </p>
              </motion.div>
            </div>
          </section>
        </main>
        <FAQSection faqs={faqs["Contact"]} />
        <EnhancedFooter showCTA={false} mascotBgClass="bg-forest-deep" />
      </div>
    </>
  );
};

export default Contact;



