import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Share2,
  Calendar,
  Users,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Job data for EyeLevel Growth Studio
const jobListings: Record<
  string,
  {
    title: string;
    department: string;
    type: string;
    location: string;
    datePosted: string;
    experience: string;
    shortDescription: string;
    aboutCompany: string;
    responsibilities: string[];
    requirements: string[];
    qualities: string[];
    benefits: string[];
  }
> = {
  "real-estate-sales-manager": {
    title: "Real Estate Sales Manager",
    department: "sales",
    type: "Full-time",
    location: "Chennai, India",
    datePosted: "21/01/2026",
    experience: "5+ years",
    shortDescription:
      "Build lasting client relationships and deliver consistent closures.",
    aboutCompany: `Growth is a climb. We don't do guesswork. EyeLevel Growth Studio isn't a traditional "stiff" agency. We are a high-performance growth engine. We unite strategy, design, AI, and performance to help brands rise.
Our promise is simple: Serious attention. Clear timelines. No confusion. We don't care about vanity metrics. We care about leads, sales, and real business outcomes. We are the "smart, busy friend" clients trust to get it done.
`,
    responsibilities: [
      "Drive sales for residential and/or commercial real estate projects",
      "Manage the complete sales cycle: lead handling, site visits, negotiations, and closures",
      "Build and maintain strong relationships with clients, channel partners, and brokers",
      "Understand customer requirements and recommend suitable properties",
      "Track market trends, pricing, competition, and buyer behavior",
      "Coordinate with internal teams to ensure smooth documentation and handover",
      "Meet and exceed monthly and quarterly sales targets",
      "Represent the brand professionally at client meetings, site visits, and events",
    ],
    requirements: [
      "Minimum 5+ years of experience in real estate sales (mandatory)",
      "Proven track record of closing property deals successfully",
      "Strong industry connections and an existing client/broker network",
      "Excellent communication, negotiation, and presentation skills",
      "Multilingual: English + regional languages (Tamil preferred)",
      "Deep understanding of real estate processes and market dynamics",
      "Willingness to travel for sales activities and site visits",
    ],
    qualities: [
      "Confident, presentable, and relationship-driven personality",
      "Target-driven closer with a strong sales mindset",
      "High ownership and accountability for results",
      "Ability to build trust quickly with clients and partners",
      "Self-motivated and performance-focused",
    ],
    benefits: [
      "High-visibility role with direct impact on revenue",
      "Attractive fixed salary with high-performance incentives",
      "Work with a growing, ambitious team",
      "Clear growth path linked to performance",
      "Opportunity to grow alongside the business",
    ],
  },
  "head-of-creative--strategy": {
    title: "Head of Creative & Strategy",
    department: "Creative & Strategy",
    type: "Full-time",
    location: "Chennai, India",
    datePosted: "22/01/2026",
    experience: "5+ years",
    shortDescription:
      "Lead ideas, shape strategy, and turn creativity into growth.",
    aboutCompany: `Growth is a climb. We don't do guesswork. EyeLevel Growth Studio isn't a traditional "stiff" agency. We are a high-performance growth engine. We unite strategy, design, AI, and performance to help brands rise.
Our promise is simple: Serious attention. Clear timelines. No confusion. We don't care about vanity metrics. We care about leads, sales, and real business outcomes. We are the "smart, busy friend" clients trust to get it done.
`,
    responsibilities: [
      "Own the creative vision and strategic direction across all EyeLevel projects",
      "Lead, mentor, and push the creative squad—designers, editors, and creators",
      "Translate business problems into clear, conversion-focused creative strategies",
      "Build campaign roadmaps that drive revenue, not just aesthetics",
      "Manage workflows, assign tasks, and ensure zero missed deadlines",
      "Present work confidently to clients and explain the why behind every decision",
      "Handle feedback constructively and protect the quality of output",
      "Drive innovation through new campaign ideas, formats, and AI workflows",
      "Ensure every deliverable—from logos to full-funnel campaigns—performs",
    ],
    requirements: [
      "5+ years of experience in a Creative or Advertising Agency (mandatory)",
      "Strong ability to combine strategy and creative thinking",
      "Hands-on expertise with Adobe Creative Suite (Photoshop, Illustrator, etc.)",
      "A portfolio that proves brand-building and action-driving work",
      "Experience managing people, timelines, and multiple projects",
      "Clear, simple communication—no jargon, no fluff",
    ],
    qualities: [
      "Ownership mindset—you take responsibility, not excuses",
      "Problem-solver who cares about outcomes, not applause",
      "Calm leader who can push teams without chaos",
      "Confident presenter who can defend ideas logically",
      "Curious, adaptive, and always improving",
      "Comfortable working in a high-performance environment",
    ],
    benefits: [
      "High-impact leadership role with real decision-making power",
      "Work on brands and problems that actually matter",
      "Performance-driven culture with zero micromanagement",
      "Space to experiment, innovate, and grow fast",
      "A team that values clarity, speed, and execution",
    ],
  },
  "visualizer--senior-graphic-designer": {
    title: "Visualizer / Senior Graphic Designer",
    department: "Creative",
    type: "Full-time",
    location: "Chennai, India",
    datePosted: "22/01/2026",
    experience: "5+ years",
    shortDescription:
      "Turn ideas into visuals that perform across brands and campaigns.",
    aboutCompany: `Growth is a climb. We don't do guesswork. EyeLevel Growth Studio isn't a traditional "stiff" agency. We are a high-performance growth engine. We unite strategy, design, AI, and performance to help brands rise.
Our promise is simple: Serious attention. Clear timelines. No confusion. We don't care about vanity metrics. We care about leads, sales, and real business outcomes. We are the "smart, busy friend" clients trust to get it done.
`,
    responsibilities: [
      "Translate ideas and strategies into strong, effective visual design",
      "Create brand, campaign, and marketing creatives across platforms",
      "Work on digital and offline creatives with equal confidence",
      "Support campaigns from concept to execution",
      "Collaborate closely with strategy and performance teams",
      "Ensure design output is sharp, consistent, and on-brand",
      "Meet deadlines without compromising on quality",
    ],
    requirements: [
      "Strong skills in visual conceptualisation and design thinking",
      "Experience in brand, campaign, and marketing design",
      "Hands-on expertise with Adobe Creative Suite",
      "Strong understanding of design fundamentals",
      "Ability to handle both digital and offline design",
      "Agency experience is mandatory",
    ],
    qualities: [
      "Visual thinker with a strong point of view",
      "Detail-oriented and quality-obsessed",
      "Comfortable taking feedback and improving fast",
      "Self-driven and reliable under deadlines",
      "Team player who understands real-world constraints",
      "Someone who designs with purpose, not just aesthetics",
    ],
    benefits: [
      "Work on real brands and real growth problems",
      "Fast-paced, high-performance culture",
      "Clear expectations and zero confusion",
      "Room to grow creatively and professionally",
      "A team that values output over noise",
    ],
  },
  "django--devops-engineer": {
    title: "Django + DevOps Engineer",
    department: "Backend",
    type: "On-site / Hybrid",
    location: "Chennai, India",
    datePosted: "23/01/2026",
    experience: "3+ years",
    shortDescription: "Build backend systems that stay up and scale.",
    aboutCompany: `Growth is a climb. We don't do guesswork. EyeLevel Growth Studio isn't a traditional "stiff" agency. We are a high-performance growth engine. We unite strategy, design, AI, and performance to help brands rise.
Our promise is simple: Serious attention. Clear timelines. No confusion. We don't care about vanity metrics. We care about leads, sales, and real business outcomes. We are the "smart, busy friend" clients trust to get it done.
`,
    responsibilities: [
      "Develop and maintain backend applications using Python and Django",
      "Deploy, manage, and maintain applications on Ubuntu-based VPS servers",
      "Configure, optimize, and maintain Apache web servers",
      "Set up and manage CI/CD pipelines for reliable and repeatable deployments",
      "Monitor systems, troubleshoot issues, and ensure high availability",
      "Improve application performance, security, and deployment workflows",
      "Take ownership from code commit to production release",
    ],
    requirements: [
      "3+ years of hands-on experience with Python and Django",
      "Strong understanding of Linux (Ubuntu) server environments",
      "Experience with Apache configuration and server management",
      "Hands-on experience managing VPS or cloud infrastructure",
      "Familiarity with CI/CD tools and deployment automation",
      "Ability to independently handle deployments and production issues",
    ],
    qualities: [
      "Ownership mindset—you don’t wait to be told",
      "Comfortable working across development and infrastructure",
      "Calm problem-solver during production issues",
      "Detail-oriented with a focus on stability and security",
      "Clear communicator who values alignment and clarity",
      "Someone who enjoys building systems that just work",
    ],
    benefits: [
      "High-ownership role with real production responsibility",
      "Opportunity to shape deployment and infrastructure decisions",
      "Clear expectations and direct communication",
      "Work with a fast-moving, execution-focused team",
      "Space to grow technically while building real-world systems",
    ],
  },
  "general-application": {
    title: "General Application",
    department: "Various",
    type: "Full-time / Part-time",
    location: "Remote / Hybrid / On-site",
    datePosted: "Open",
    experience: "Various",
    shortDescription:
      "We're always looking for exceptional talent. Send us your resume and tell us how you can contribute to our growth story.",
    aboutCompany: `Founded in 2020, EyeLevel Growth Studio is a digital growth partner for leading brands and hyper-scaling startups in India. With a team of digital experts across Bengaluru, Mumbai, NCR, and Chennai, we are one of India's fastest-growing independent digital marketing solutions companies.

EyeLevel is a Google Premier Partner, Facebook Business Partner, and works closely with ecosystem partners like Hotstar, Amazon & LinkedIn.`,
    responsibilities: [
      "Responsibilities will vary based on the role and your expertise.",
      "Collaborate with cross-functional teams to deliver exceptional results.",
      "Contribute to the growth and success of our clients.",
      "Stay updated with industry trends and best practices.",
    ],
    requirements: [
      "Relevant experience in your area of expertise.",
      "Strong communication and collaboration skills.",
      "Passion for digital marketing and growth.",
      "Ability to work in a fast-paced environment.",
    ],
    qualities: [
      "Someone who embraces the EyeLevel Mindset.",
      "Creative and data-driven approach.",
      "Positive attitude and eagerness to learn.",
      "Team player with strong work ethic.",
    ],
    benefits: [
      "Competitive compensation",
      "Flexible work arrangements",
      "Learning and development opportunities",
      "Great team culture",
    ],
  },
};

const JobDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const job = slug ? jobListings[slug] : null;

  if (!job) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#253e35" }}>
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-dela text-4xl text-[#F8FFE8] mb-4">
            Job Not Found
          </h1>
          <p className="text-[rgba(248,255,232,0.7)] mb-8">
            The job you're looking for doesn't exist.
          </p>
          <Button
            onClick={() => navigate("/careers")}
            className="bg-[#E2FEA5] text-[#253e35]"
          >
            Back to Careers
          </Button>
        </div>
        <EnhancedFooter />
      </div>
    );
  }

  const handleApply = () => {
    navigate(`/apply?position=${encodeURIComponent(job.title)}`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at EyeLevel Growth Studio`,
        text: job.shortDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: "#253e35" }}
    >
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/careers")}
            className="flex items-center gap-2 text-[rgba(248,255,232,0.7)] hover:text-[#E2FEA5] mb-8 transition-colors font-bricolage"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </motion.button>

          {/* Job Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-xs px-3 py-1 rounded-full font-medium font-bricolage"
                style={{ backgroundColor: "#E2FEA5", color: "#173229" }}
              >
                EyeLevel Growth Studio
              </span>
              <span
                className="text-xs px-3 py-1 rounded-full font-medium font-bricolage"
                style={{ backgroundColor: "#173229", color: "#F8FFE8" }}
              >
                {job.type}
              </span>
            </div>

            <h1
              className="text-3xl md:text-5xl font-dela mb-4 uppercase"
              style={{ color: "#F8FFE8" }}
            >
              {job.title}
            </h1>

            <div
              className="flex flex-wrap items-center gap-4 text-sm font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Posted on {job.datePosted}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {job.department}
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {job.experience}
              </span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-12"
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
              onClick={handleApply}
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold font-bricolage"
              style={{
                backgroundColor: "transparent",
                color: "#F8FFE8",
                border: "2px solid rgba(248, 255, 232, 0.3)",
              }}
              onClick={handleShare}
            >
              <Share2 className="mr-2 w-5 h-5" />
              Share Job
            </Button>
          </motion.div>

          {/* Job Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* About Company */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#173229",
                border: "1px solid rgba(226, 254, 165, 0.1)",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                About EyeLevel Growth Studio
              </h2>
              <p
                className="font-bricolage whitespace-pre-line"
                style={{ color: "rgba(248, 255, 232, 0.8)" }}
              >
                {job.aboutCompany}
              </p>
            </div>

            {/* Responsibilities */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#173229",
                border: "1px solid rgba(226, 254, 165, 0.1)",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                Roles and Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.8)" }}
                  >
                    <CheckCircle
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "#E2FEA5" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#173229",
                border: "1px solid rgba(226, 254, 165, 0.1)",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                Requirements
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.8)" }}
                  >
                    <CheckCircle
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "#E2FEA5" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualities */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#173229",
                border: "1px solid rgba(226, 254, 165, 0.1)",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                Qualities We Look For
              </h2>
              <ul className="space-y-3">
                {job.qualities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.8)" }}
                  >
                    <CheckCircle
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "#E2FEA5" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#173229",
                border: "1px solid rgba(226, 254, 165, 0.1)",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                Why Work With Us?
              </h2>
              <p
                className="font-bricolage mb-4"
                style={{ color: "rgba(248, 255, 232, 0.8)" }}
              >
                Our team is our most valuable resource! At EyeLevel, each one of
                us is a dynamic superstar. We have carefully bred an ecosystem
                which hires nothing but incredibly and exceptionally talented
                people who can dream, collaborate, experiment and break new
                grounds.
              </p>
              <ul className="space-y-3">
                {job.benefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.8)" }}
                  >
                    <CheckCircle
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "#E2FEA5" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply CTA */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                backgroundColor: "#F8FFE8",
                border: "3px solid #0a0a0a",
                boxShadow: "0 6px 0 #0a0a0a",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#0a0a0a" }}
              >
                Ready to Join Our Team?
              </h2>
              <p
                className="font-bricolage mb-6"
                style={{ color: "rgba(10, 10, 10, 0.7)" }}
              >
                Passionate about digital marketing and eager to make an impact?
                We’d love to hear from you.
              </p>
              <Button
                size="lg"
                className="group rounded-full px-10 py-6 text-base font-semibold font-bricolage hover:translate-y-0.5 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: "#FCFAC2",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
                onClick={handleApply}
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <EnhancedFooter showCTA={false} />
    </div>
  );
};

export default JobDetails;
