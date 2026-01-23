import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Home, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import mascotTrophy from "@/assets/mascot-trophy-new.png";

type ThankYouType = "application" | "contact" | "booking" | "general";

const thankYouContent: Record<
  ThankYouType,
  {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    primaryAction: { label: string; path: string; icon: React.ReactNode };
    secondaryAction: { label: string; path: string };
  }
> = {
  application: {
    title: "Application Submitted!",
    subtitle: "Thank You for Your Interest",
    description:
      "Our HR team will carefully review your application and get in touch with you if your profile is shortlisted. We typically respond within 5-7 business days.",
    icon: <Briefcase className="w-8 h-8" />,
    primaryAction: {
      label: "View More Positions",
      path: "/careers",
      icon: <Briefcase className="w-5 h-5" />,
    },
    secondaryAction: { label: "Back to Home", path: "/" },
  },
  contact: {
    title: "Message Received!",
    subtitle: "Thank You for Reaching Out",
    description:
      "Our team will get in touch with you shortly. We typically respond within 24-48 hours during business days.",
    icon: <Mail className="w-8 h-8" />,
    primaryAction: {
      label: "Explore Our Services",
      path: "/services",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    secondaryAction: { label: "Back to Home", path: "/" },
  },
  booking: {
    title: "Booking Confirmed!",
    subtitle: "Thank You for Scheduling",
    description:
      "Your appointment has been scheduled successfully. You'll receive a confirmation email with all the details shortly.",
    icon: <CheckCircle className="w-8 h-8" />,
    primaryAction: {
      label: "Learn About Us",
      path: "/about",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    secondaryAction: { label: "Back to Home", path: "/" },
  },
  general: {
    title: "Thank You!",
    subtitle: "We've Received Your Submission",
    description:
      "Our team will review your submission and get back to you shortly. We appreciate your interest in EyeLevel Growth Studio.",
    icon: <CheckCircle className="w-8 h-8" />,
    primaryAction: {
      label: "Explore Our Work",
      path: "/services",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    secondaryAction: { label: "Back to Home", path: "/" },
  },
};

const ThankYou = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const type = (searchParams.get("type") as ThankYouType) || "general";
  const position = searchParams.get("position");

  const content = thankYouContent[type] || thankYouContent.general;

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: "#253e35" }}
    >
      <Header />

      <main className="pt-32 pb-20 px-4 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/4 -right-20 w-80 h-80 rounded-full"
            style={{ backgroundColor: "#E2FEA5" }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-1/4 -left-20 w-60 h-60 rounded-full"
            style={{ backgroundColor: "#E2FEA5" }}
          />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Success Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="mb-8"
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto"
              style={{ backgroundColor: "#E2FEA5" }}
            >
              <CheckCircle className="w-12 h-12" style={{ color: "#253e35" }} />
            </div>
          </motion.div>

          {/* Mascot */}
          <motion.img
            src={mascotTrophy}
            alt="EyeLevel Mascot"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 object-contain"
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1
              className="font-dela text-4xl md:text-5xl lg:text-6xl mb-4 uppercase"
              style={{ color: "#F8FFE8" }}
            >
              {content.title}
            </h1>

            <h2
              className="font-dela text-xl md:text-2xl mb-6"
              style={{ color: "#E2FEA5" }}
            >
              {content.subtitle}
            </h2>

            {position && type === "application" && (
              <p
                className="text-lg mb-4 font-bricolage"
                style={{ color: "rgba(248, 255, 232, 0.8)" }}
              >
                Position: <span style={{ color: "#E2FEA5" }}>{position}</span>
              </p>
            )}

            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              {content.description}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group rounded-full px-8 py-6 text-base font-semibold font-bricolage hover:translate-y-0.5 hover:shadow-none transition-all duration-150"
              style={{
                backgroundColor: "#FCFAC2",
                color: "#0a0a0a",
                border: "3px solid #0a0a0a",
                boxShadow: "0 4px 0 #0a0a0a",
              }}
              onClick={() => navigate(content.primaryAction.path)}
            >
              {content.primaryAction.label}
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                {content.primaryAction.icon}
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold font-bricolage hover:translate-y-0.5 transition-all duration-150"
              style={{
                backgroundColor: "transparent",
                color: "#F8FFE8",
                border: "2px solid rgba(248, 255, 232, 0.3)",
              }}
              onClick={() => navigate(content.secondaryAction.path)}
            >
              <Home className="mr-2 w-5 h-5" />
              {content.secondaryAction.label}
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t"
            style={{ borderColor: "rgba(248, 255, 232, 0.1)" }}
          >
            <p
              className="text-sm font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.5)" }}
            >
              Have questions? Reach out to us at{" "}
              <a
                href="mailto:hello@eyelevelstudio.com"
                className="underline hover:text-[#E2FEA5] transition-colors"
              >
                hello@eyelevelstudio.com
              </a>
            </p>
          </motion.div>
        </div>
      </main>

      <EnhancedFooter showCTA={false} />
    </div>
  );
};

export default ThankYou;
