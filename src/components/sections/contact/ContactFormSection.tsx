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
import { ArrowRight, CheckCircle, Calendar, Mail, Send, ShieldCheck, Underline } from "lucide-react";
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
    <section className="px-4 py-[100px] bg-forest-deep">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left side - CTA text block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-start h-full text-center lg:text-left pt-0 lg:pt-4 w-full lg:col-span-7"
          >

            <div className="mb-6 w-full flex justify-center lg:justify-start">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela leading-[1.2] uppercase text-center lg:text-left break-words">
                <span className="block mb-1 text-primary">30 MINUTES</span>
                <span className="block mb-1 text-primary">NO PITCH DECK</span>
                <span className="block mb-1 text-primary">WE WILL TELL YOU</span>
                <span className="block mt-1"><WavyUnderline>WHAT WE SEE</WavyUnderline></span>
              </h2>
            </div>

            <p className="text-white/80 font-bricolage text-sm sm:text-base md:text-lg mb-10 max-w-md mx-auto lg:mx-0 text-center lg:text-left px-2 sm:px-0">
              A direct conversation about what's working, what's not, and what we would do differently.
            </p>

            <div className="flex flex-col items-center lg:items-start w-full max-w-md mx-auto lg:mx-0 px-2 sm:px-0 mt-4">
              <Link to="/booking" className="w-full">
                <Button className="w-full flex items-center justify-center gap-1 sm:gap-3 text-[12px] min-[380px]:text-[13px] sm:text-base px-1 sm:px-6 py-4 h-auto whitespace-normal rounded-full font-semibold transition-transform hover:translate-y-1 hover:shadow-none text-forest-dark"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="text-center leading-tight">Book a free 30-min diagnostic</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <div className="flex items-center w-full my-6 opacity-50">
                <div className="flex-1 h-[1px] bg-white/20"></div>
                <span className="px-4 text-white font-bricolage text-xs sm:text-sm uppercase tracking-widest">OR</span>
                <div className="flex-1 h-[1px] bg-white/20"></div>
              </div>

              <a href="mailto:hello@eyelevelstudio.in" className="w-full">
                <Button variant="outline" className="w-full rounded-xl h-auto min-h-[3.5rem] py-3 border border-white/20 hover:bg-white/10 text-white bg-transparent font-medium text-[12px] sm:text-base flex items-center justify-center gap-1 sm:gap-3 whitespace-normal px-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="text-center">Or email hello@eyelevelstudio.in</span>
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full mt-12 lg:mt-0 w-full lg:col-span-5"
          >

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-dela mb-8 text-primary uppercase whitespace-normal text-center lg:text-left break-words">
              OR SEND US <br className="hidden lg:block" /> <WavyUnderline>MESSAGE</WavyUnderline>
            </h2>
            <div
              className="rounded-3xl p-6 md:p-8 flex-1 flex flex-col justify-center border border-white/10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
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
                    className="text-2xl font-dela mb-4 text-white"
                  >
                    Got it.
                  </h3>
                  <p
                    className="mb-6 font-bricolage text-white/70"
                  >
                    We will be in touch within one business day.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-full font-bricolage bg-primary text-forest-dark hover:bg-primary/90"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
                  <div>
                    <Label
                      htmlFor="name"
                      className="font-medium font-bricolage text-white/90"
                    >
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="John Doe"
                      className="mt-2 rounded-xl font-bricolage placeholder:text-white/30 border-white/10 text-white bg-white/5 h-12 focus-visible:ring-primary"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="company"
                      className="font-medium font-bricolage text-white/90"
                    >
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      {...register("company")}
                      placeholder="Acme Inc."
                      className="mt-2 rounded-xl font-bricolage placeholder:text-white/30 border-white/10 text-white bg-white/5 h-12 focus-visible:ring-primary"
                    />
                    {errors.company && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="font-medium font-bricolage text-white/90"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="+91 98765 43210"
                      className="mt-2 rounded-xl font-bricolage placeholder:text-white/30 border-white/10 text-white bg-white/5 h-12 focus-visible:ring-primary"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="font-medium font-bricolage text-white/90"
                    >
                      What does your marketing look like today and what are you trying to fix? *
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Brief message..."
                      rows={4}
                      className="mt-2 rounded-xl resize-none font-bricolage placeholder:text-white/30 border-white/10 text-white bg-white/5 focus-visible:ring-primary"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="group w-full flex items-center justify-center gap-3 h-14 whitespace-normal rounded-full font-semibold text-base md:text-lg transition-all hover:translate-y-1 hover:translate-x-1 hover:shadow-none  text-forest-dark border-[3px] border-[#0a0a0a] shadow-[4px_4px_0px_#0a0a0a]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                    {!isSubmitting && <Send className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />}
                  </Button>

                  <div className="flex items-start justify-center gap-2 sm:gap-3 mt-4 text-white/60 font-bricolage text-xs sm:text-sm text-center">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-primary mt-0.5 sm:mt-0" />
                    <p>
                      We respond within one business day. If it is urgent, <br className="hidden xl:block" /> call <span className="whitespace-nowrap text-white/80">+91 97890 99499</span> directly.
                    </p>
                  </div>
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
