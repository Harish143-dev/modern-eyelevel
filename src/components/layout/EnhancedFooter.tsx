import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
  Clock,
  Shield,
  Users,
  Phone,
  Calendar,
  ArrowRight,
  Facebook,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import eyelevelLogoColor from "@/assets/branding/eyelevel-logo-color-new.png";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";
import ClientLottie, { type ClientLottieRef } from "@/components/shared/ClientLottie";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "AI-Era SEO", href: "/services/ai-era-seo" },
      { label: "Social Media Management", href: "/services/social-media-management" },
      { label: "Content and Creative", href: "/services/content-and-creative" },
      { label: "LinkedIn B2B Marketing", href: "/services/linkedin-b2b-marketing" },
      { label: "CRO and Funnel Design", href: "/services/cro-and-funnel-design" },
      { label: "Revenue Attribution Dashboard", href: "/services" },
      { label: "Brand and Identity", href: "/services" },
      { label: "Website Design and Development", href: "/services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "IT/SaaS", href: "/industries/it-saas" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Manufacturing / B2B", href: "/industries/manufacturing-b2b" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Book a call", href: "/booking" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/theeyelevelstudio/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/theeyelevelstudio/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1DN368ZHPh/",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@theeyelevelstudio",
  },
  { icon: Twitter, label: "Twitter", href: "https://x.com/Eye_Levelstudio" },
];

const trustElements = [
  {
    icon: Clock,
    title: "Speed",
    description: "We reply in 24 hours. Growth doesn't wait.",
  },
  {
    icon: Shield,
    title: "Privacy",
    description: "We sign NDAs. Your secrets stay yours.",
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Talk to Architects, not sales reps.",
  },
];

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+55", country: "Brazil" },
  { code: "+52", country: "Mexico" },
  { code: "+7", country: "Russia" },
  { code: "+82", country: "South Korea" },
  { code: "+61", country: "Australia" },
  { code: "+1", country: "Canada" },
  { code: "+31", country: "Netherlands" },
  { code: "+46", country: "Sweden" },
  { code: "+41", country: "Switzerland" },
  { code: "+32", country: "Belgium" },
  { code: "+43", country: "Austria" },
  { code: "+47", country: "Norway" },
  { code: "+45", country: "Denmark" },
  { code: "+358", country: "Finland" },
  { code: "+48", country: "Poland" },
  { code: "+351", country: "Portugal" },
  { code: "+30", country: "Greece" },
  { code: "+353", country: "Ireland" },
  { code: "+64", country: "New Zealand" },
  { code: "+65", country: "Singapore" },
  { code: "+852", country: "Hong Kong" },
  { code: "+60", country: "Malaysia" },
  { code: "+66", country: "Thailand" },
  { code: "+84", country: "Vietnam" },
  { code: "+63", country: "Philippines" },
  { code: "+62", country: "Indonesia" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+972", country: "Israel" },
  { code: "+90", country: "Turkey" },
  { code: "+27", country: "South Africa" },
  { code: "+20", country: "Egypt" },
  { code: "+234", country: "Nigeria" },
  { code: "+254", country: "Kenya" },
  { code: "+92", country: "Pakistan" },
  { code: "+880", country: "Bangladesh" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+977", country: "Nepal" },
];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  companySize: z.string().min(1, "Please select company size"),
  website: z
    .string()
    .trim()
    .url("Invalid URL")
    .or(z.string().length(0))
    .optional(),
});

interface EnhancedFooterProps {
  showCTA?: boolean;
  accentColor?: string;
  mascotBgClass?: string;
}
const FOOTER_LEAD_WEBHOOK_URL =
  "https://automate.eyelevelstudio.in/webhook/fa30713f-f07b-4f1a-a560-d9409df62413";

const EnhancedFooter = ({
  showCTA,
  accentColor = "#E2FEA5",
  mascotBgClass = "bg-forest-green",
}: EnhancedFooterProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    countryCode: "+91",
    phone: "",
    companySize: "",
    website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const lottieRef1 = useRef<ClientLottieRef>(null);
  const lottieRef2 = useRef<ClientLottieRef>(null);
  const lottieRef3 = useRef<ClientLottieRef>(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/photo click.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  const hasPlayedInitial = useRef(false);
  const hasLeftHero = useRef(false);

  const playSequence = () => {
    if (!lottieRef1.current) return;

    // reset all
    lottieRef1.current.stop();
    lottieRef2.current?.stop();
    lottieRef3.current?.stop();

    lottieRef1.current.setSpeed(0.7);
    lottieRef2.current?.setSpeed(0.7);
    lottieRef3.current?.setSpeed(0.7);

    lottieRef1.current.goToAndPlay(0, true);
  };

  useEffect(() => {
    if (animationData && !hasPlayedInitial.current) {
      playSequence();
      hasPlayedInitial.current = true;
    }
  }, [animationData]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasLeftHero.current) {
            playSequence();
            hasLeftHero.current = false;
          }
        } else {
          hasLeftHero.current = true;
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = formSchema.parse(formData);

      // Here you would typically send the data to your backend

      const response = await fetch(FOOTER_LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validated),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || (result && result.ok === false)) {
        throw new Error(result?.message || "Failed to submit");
      }

      toast({
        title: "Request Submitted!",
        description:
          "We'll get back to you within 24 hours with the brutal truth.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        countryCode: "+91",
        phone: "",
        companySize: "",
        website: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="overflow-hidden relative">
      {/* Form Section - Only show when showCTA is true */}
      {showCTA && (
        <section className="pt-12 md:pt-16 pb-[50px] md:pb-[60px] px-4 bg-forest-deep border-0 border-transparent">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <GreenButton> Get Started</GreenButton>
                <h2
                  className="font-dela text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight uppercase"
                  style={{ color: accentColor }}
                >
                  Get the audit- Find what needs{" "}
                  <WavyUnderline>fixing</WavyUnderline>
                </h2>
                <p className="text-white/60 font-bricolage text-lg md:text-xl mb-12 max-w-lg">
                  You provide the target; we provide the weapon. We'll analyze
                  your current setup and build a preliminary battle plan for
                  market domination. No cost. No sales pitch. Just the brutal
                  truth.
                </p>

                {/* Trust Elements */}
                <div className="space-y-6">
                  {trustElements.map((element, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <element.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-white font-bricolage font-semibold mb-1">
                          {element.title}
                        </h4>
                        <p className="text-white/50 font-bricolage text-sm">
                          {element.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 pt-12 border-t border-white/10"
                >
                  <div className="flex flex-wrap gap-6">
                    <a
                      href="tel:+919789099499"
                      className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-bricolage">+91 97890 99499</span>
                    </a>
                    <a
                      href="mailto:hello@eyelevelstudio.in"
                      className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-bricolage">
                        hello@eyelevelstudio.in
                      </span>
                    </a>
                    <Link
                      to="/booking"
                      className="flex items-center gap-3 hover:opacity-80 transition-colors group text-primary"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center group-hover:opacity-80 transition-colors"
                        style={{ backgroundColor: "rgba(208, 233, 153, 0.2)" }}
                      >
                        <Calendar className="w-4 h-4" />
                      </div>
                      <span className="font-bricolage font-semibold">
                        Book a Call Directly
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-background rounded-3xl p-8 md:p-10 border border-white/10"
                >
                  <div className="space-y-5">
                    {/* Name & Company Row */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/60 text-sm font-bricolage mb-2">
                          Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-lime/20 h-12 rounded-xl font-bricolage"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm font-bricolage mb-2">
                          Company *
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Inc."
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-lime/20 h-12 rounded-xl font-bricolage"
                        />
                        {errors.company && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.company}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/60 text-sm font-bricolage mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-lime/20 h-12 rounded-xl font-bricolage"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm font-bricolage mb-2">
                          Phone *
                        </label>
                        <div className="flex gap-2">
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="w-28 bg-white/5 border border-white/10 text-white h-12 rounded-xl font-bricolage px-2 focus:border-primary/50 focus:ring-lime/20 focus:outline-none appearance-none cursor-pointer text-sm"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.4)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                              backgroundPosition: "right 0.5rem center",
                              backgroundSize: "1rem",
                              backgroundRepeat: "no-repeat",
                            }}
                          >
                            {countryCodes.map((country) => (
                              <option
                                key={`${country.code}-${country.country}`}
                                value={country.code}
                                className="bg-background"
                              >
                                {country.code} {country.country}
                              </option>
                            ))}
                          </select>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 000-0000"
                            className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-lime/20 h-12 rounded-xl font-bricolage"
                          />
                        </div>
                        {errors.countryCode && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.countryCode}
                          </p>
                        )}
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company Size */}
                    <div>
                      <label className="block text-white/60 text-sm font-bricolage mb-2">
                        Company Size *
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 text-white h-12 rounded-xl font-bricolage px-4 focus:border-primary/50 focus:ring-lime/20 focus:outline-none appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.4)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundPosition: "right 1rem center",
                          backgroundSize: "1.5rem",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <option value="" className="bg-background">
                          Select company size
                        </option>
                        {companySizes.map((size) => (
                          <option
                            key={size}
                            value={size}
                            className="bg-background"
                          >
                            {size}
                          </option>
                        ))}
                      </select>
                      {errors.companySize && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.companySize}
                        </p>
                      )}
                    </div>

                    {/* Website URL */}
                    <div>
                      <label className="block text-white/60 text-sm font-bricolage mb-2">
                        Website URL
                      </label>
                      <Input
                        name="website"
                        type="url"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourcompany.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-lime/20 h-12 rounded-xl font-bricolage"
                      />
                      {errors.website && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.website}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 text-forest-950 hover:opacity-90 font-dela text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                        style={{
                          backgroundColor: "#d0e999",
                          boxShadow:
                            "0 10px 15px -3px rgba(208, 233, 153, 0.2)",
                        }}
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            Get The Truth
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </div>

                  {/* Form Footer */}
                  <p className="text-white/30 text-xs text-center mt-6 font-bricolage">
                    By submitting, you agree to receive communications from
                    Eyelevel. We respect your privacy.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {animationData && (
        <div
          className={`flex items-center border-0 outline-none justify-between w-full ${mascotBgClass}`}
        >
          <ClientLottie
            lottieRef={lottieRef1}
            animationData={animationData}
            autoPlay={false}
            loop={false}
            onComplete={() => {
              lottieRef2.current?.goToAndPlay(0, true);
            }}
            className="w-[150px] md:w-[180px] lg:w-[200px] pointer-events-none z-40"
          />
          <ClientLottie
            lottieRef={lottieRef2}
            animationData={animationData}
            autoPlay={false}
            loop={false}
            onComplete={() => {
              lottieRef3.current?.goToAndPlay(0, true);
            }}
            className=" w-[150px] md:w-[180px] lg:w-[200px] pointer-events-none z-40"
          />
          <ClientLottie
            lottieRef={lottieRef3}
            animationData={animationData}
            autoPlay={false}
            loop={false}
            onComplete={() => {
              setTimeout(playSequence, 800);
            }}
            className="w-[150px] md:w-[180px] lg:w-[200px] pointer-events-none z-40"
          />
        </div>
      )}

      {/* Bottom Footer */}

      <div className="bg-background py-12 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {footerLinks.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-white font-semibold font-bricolage mb-4 text-sm">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-white/50 hover:text-primary transition-colors duration-300 text-sm font-bricolage"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact & Social Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-white font-semibold font-bricolage mb-4 text-sm">
                Contact
              </h3>
              <ul className="space-y-2 mb-6">
                <li><a href="mailto:hello@eyelevelstudio.in" className="text-white/50 hover:text-primary transition-colors duration-300 text-sm font-bricolage">hello@eyelevelstudio.in</a></li>
                <li><a href="tel:+919789099499" className="text-white/50 hover:text-primary transition-colors duration-300 text-sm font-bricolage">+91 97890 99499</a></li>
                <li className="text-white/50 text-sm font-bricolage">Chennai, Tamil Nadu, India</li>
              </ul>

              <h3 className="text-white font-semibold font-bricolage mb-4 text-sm">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={social.label}
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-primary hover:text-forest-dark transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-dela text-xl text-primary uppercase">Fire your ad agency.</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center relative justify-between gap-4 pt-8 border-t border-white/10">
            <div className="flex flex-col items-center md:items-start gap-1">
              <img
                loading="lazy"
                src={eyelevelLogoColor}
                alt="Eyelevel"
                title="Eyelevel"
                className="h-8 w-auto mb-1"
              />
              <span className="text-white/50 text-xs font-bricolage tracking-wide">Built by a marketing head, for marketing heads. Chennai's full-service AI-powered growth studio.</span>
            </div>
            <p className="text-white/40 text-xs md:text-sm font-bricolage">
              (c) 2026, Eyelevel Growth Studio. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/terms-and-condition"
                className="text-white/40 hover:text-primary transition-colors text-sm font-bricolage"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy-policy"
                className="text-white/40 hover:text-primary transition-colors text-sm font-bricolage"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;



