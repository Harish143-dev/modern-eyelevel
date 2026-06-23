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
import { ArrowRight, CheckCircle } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";

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

const ContactFormSection = () => {
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
    <section className="px-4 py-[100px]">
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
              <Button 
              >
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
  );
};

export default ContactFormSection;
