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
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  company: z
    .string()
    .trim()
    .max(100, "Company name must be less than 100 characters")
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;
const CONTACT_FORM_WEBHOOK_URL =
  import.meta.env.VITE_CONTACT_FORM_WEBHOOK_URL ??
  "https://automate.eyelevelstudio.in/webhook/contact-form";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    <div className="min-h-screen pt-10 bg-secondary">
      <SEO
        title="Contact EyeLevel — Free Marketing Consultation Chennai"
        description="Book a free 30-min consultation with EyeLevel — Chennai's specialized agency for Sports, Healthcare & Education. Call +91 97890 99499 or email us."
        keywords={[
          "marketing agency contact Chennai",
          "digital marketing consultation",
          "EyeLevel contact",
          "book marketing strategy call",
          "sports healthcare education agency inquiry",
        ]}
        schema={[
          contactPageSchema,
          localBusinessSchema,
          faqPageSchema(faqs["Contact"], {
            url: "https://theeyelevelstudio.com/contact-us",
          }),
        ]}
        canonical="https://theeyelevelstudio.com/contact-us"
        url="https://theeyelevelstudio.com/contact-us"
      />
      <Header />

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GreenButton>Get in Touch</GreenButton>
              <h1
                className="text-4xl md:text-6xl font-dela mb-6 uppercase text-primary"
              >
                MAKE SOME <WavyUnderline>NOISE</WavyUnderline>
              </h1>
              <p
                className="text-lg mb-12 font-bricolage"
                style={{ color: "rgba(248, 255, 232, 0.7)" }}
              >
                Ready to transform your brand? Fill out the form and our team
                will reach out within 24 hours to discuss your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(226, 254, 165, 0.1)" }}
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-bricolage"
                      style={{ color: "rgba(248, 255, 232, 0.6)" }}
                    >
                      Email us at
                    </p>
                    <p
                      className="font-medium font-bricolage text-foreground"
                    >
                      hello@eyelevelstudio.in
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(226, 254, 165, 0.1)" }}
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-bricolage"
                      style={{ color: "rgba(248, 255, 232, 0.6)" }}
                    >
                      Call us at
                    </p>
                    <p
                      className="font-medium font-bricolage text-foreground"
                    >
                      +91 9789099499
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-4xl p-8 md:p-10"
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
                    Message Received!
                  </h3>
                  <p
                    className="mb-6 font-bricolage"
                    style={{ color: "rgba(23, 50, 41, 0.7)" }}
                  >
                    Thanks for reaching out. Our team will get back to you
                    within 24 hours.
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
                      className="mt-2 rounded-xl font-bricolage"
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
                      htmlFor="email"
                      className="font-medium font-bricolage text-forest-dark"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john@company.com"
                      className="mt-2 rounded-xl font-bricolage"
                      style={{
                        backgroundColor: "rgba(23, 50, 41, 0.05)",
                        borderColor: "rgba(23, 50, 41, 0.2)",
                        color: "#173229",
                      }}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="company"
                      className="font-medium font-bricolage text-forest-dark"
                    >
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      {...register("company")}
                      placeholder="Acme Inc."
                      className="mt-2 rounded-xl font-bricolage"
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
                      htmlFor="message"
                      className="font-medium font-bricolage text-forest-dark"
                    >
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us about your project and goals..."
                      rows={5}
                      className="mt-2 rounded-xl resize-none font-bricolage"
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
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p
                    className="text-sm text-center font-bricolage"
                    style={{ color: "rgba(23, 50, 41, 0.5)" }}
                  >
                    By submitting, you agree to our{" "}
                    <Link
                      to="/privacy-policy"
                      className="underline underline-offset-2"
                    >
                      privacy policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <FAQSection faqs={faqs["Contact"]} />
      <EnhancedFooter showCTA={false} mascotBgClass="bg-background" />
    </div>
  );
};

export default Contact;



