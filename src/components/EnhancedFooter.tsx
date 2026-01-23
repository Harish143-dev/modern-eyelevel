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
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import eyelevelLogoColor from "@/assets/eyelevel-logo-color-new.png";
import WavyUnderline from "./WavyUnderline";
import GreenButton from "./GreenButton";

const footerLinks = [
  {
    title: "Important Links",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "About Us", href: "/about" },
      { label: "Industry", href: "/industries" },
      { label: "Blogs", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Growth Strategy", href: "/services" },
      { label: "Performance Marketing", href: "/services" },
      { label: "AI & Automation", href: "/services" },
      { label: "Creative & Branding", href: "/services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Edu-Marketing", href: "/industries/education" },
      { label: "Sports Marketing", href: "/industries/sports" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "B2B Marketing", href: "/industries/b2b" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@eyelevelstudio.in" },
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
}

const EnhancedFooter = ({
  showCTA = true,
  accentColor = "#E2FEA5",
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
      console.log(validated);
      // Here you would typically send the data to your backend

      const response = await fetch(
        "https://automate.eyelevelstudio.in/webhook/99729aac-2987-4906-85ff-691df5a11d35",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validated),
        },
      );

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
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Form Section - Only show when showCTA is true */}
      {showCTA && (
        <section className="py-12 md:py-16 px-4 bg-[#0D1F1A] relative">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lime/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
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
                  Get the audit Know what to <WavyUnderline>fix</WavyUnderline>
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
                      <div className="w-12 h-12 rounded-2xl bg-lime/10 border border-lime/20 flex items-center justify-center flex-shrink-0 group-hover:bg-lime/20 transition-colors duration-300">
                        <element.icon className="w-5 h-5 text-lime" />
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
                      className="flex items-center gap-3 text-white/70 hover:text-lime transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-lime/20 transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-bricolage">+91 97890 99499</span>
                    </a>
                    <a
                      href="mailto:hello@eyelevelstudio.in"
                      className="flex items-center gap-3 text-white/70 hover:text-lime transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-lime/20 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-bricolage">
                        hello@eyelevelstudio.in
                      </span>
                    </a>
                    <a
                      href="/booking"
                      className="flex items-center gap-3 hover:opacity-80 transition-colors group"
                      style={{ color: "#d0e999" }}
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
                    </a>
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
                  className="bg-[#1A2F28] rounded-3xl p-8 md:p-10 border border-white/10"
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
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-lime/50 focus:ring-lime/20 h-12 rounded-xl font-bricolage"
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
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-lime/50 focus:ring-lime/20 h-12 rounded-xl font-bricolage"
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
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-lime/50 focus:ring-lime/20 h-12 rounded-xl font-bricolage"
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
                            className="w-28 bg-white/5 border border-white/10 text-white h-12 rounded-xl font-bricolage px-2 focus:border-lime/50 focus:ring-lime/20 focus:outline-none appearance-none cursor-pointer text-sm"
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
                                className="bg-[#1A2F28]"
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
                            className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-lime/50 focus:ring-lime/20 h-12 rounded-xl font-bricolage"
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
                        className="w-full bg-white/5 border border-white/10 text-white h-12 rounded-xl font-bricolage px-4 focus:border-lime/50 focus:ring-lime/20 focus:outline-none appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.4)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundPosition: "right 1rem center",
                          backgroundSize: "1.5rem",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <option value="" className="bg-[#1A2F28]">
                          Select company size
                        </option>
                        {companySizes.map((size) => (
                          <option
                            key={size}
                            value={size}
                            className="bg-[#1A2F28]"
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
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-lime/50 focus:ring-lime/20 h-12 rounded-xl font-bricolage"
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
                        className="w-full h-14 text-[#0D1F1A] hover:opacity-90 font-dela text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
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
                    EyeLevel. We respect your privacy.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Footer */}
      <div className="bg-[#173229] py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
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
                      <Link
                        to={link.href}
                        className="text-white/50 hover:text-lime transition-colors duration-300 text-sm font-bricolage"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Social Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-white font-semibold font-bricolage mb-4 text-sm">
                Connect
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:bg-lime hover:text-[#173229] transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <img
                src={eyelevelLogoColor}
                alt="EyeLevel"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/40 text-sm font-bricolage">
              © 2026, EyeLevel Growth Studio. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/terms"
                className="text-white/40 hover:text-lime transition-colors text-sm font-bricolage"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-white/40 hover:text-lime transition-colors text-sm font-bricolage"
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
