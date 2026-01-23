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
  "performance-marketing-specialist": {
    title: "Performance Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Chennai, India",
    datePosted: "01/15/2025",
    experience: "2-4 years",
    shortDescription:
      "Drive paid media campaigns and optimize for maximum ROI across multiple platforms.",
    aboutCompany: `Founded in 2020, EyeLevel Growth Studio is a digital growth partner for leading brands and hyper-scaling startups in India. With a team of digital experts across Bengaluru, Mumbai, NCR, and Chennai, we are one of India's fastest-growing independent digital marketing solutions companies. 

EyeLevel is a Google Premier Partner, Facebook Business Partner, and works closely with ecosystem partners like Hotstar, Amazon & LinkedIn. We work as extended growth teams with top brands, driving innovation through a combination of creativity and performance.

We have bagged numerous awards from Google, ET Brand Equity, Foxglove, and other prestigious organizations, and have been adjudged amongst the Fastest Growing Agencies in the industry.`,
    responsibilities: [
      "Develop and maintain strong relationships with clients by understanding their business objectives, requirements, and challenges.",
      "Strategize and execute digital marketing campaigns across all platforms (social media, search engines, display advertising, etc.) to achieve client goals.",
      "Work closely with the internal team to ensure that campaigns are executed flawlessly and delivered on time.",
      "Analyze campaign performance and provide insights to clients on the impact of their digital marketing efforts.",
      "Proactively identify opportunities to grow client accounts and provide solutions to increase their ROI.",
      "Ensure that the team is updated with the latest industry trends and best practices in digital marketing.",
    ],
    requirements: [
      "At least 2-4 years of experience in digital marketing with a proven track record of building and maintaining client relationships.",
      "Strong understanding of all digital marketing platforms and strategies, with a focus on creativity and data.",
      "Excellent communication and presentation skills, with the ability to articulate complex ideas to clients.",
      "Strong analytical skills with the ability to use data to drive decision making.",
      "Ability to work in a fast-paced environment and handle multiple projects simultaneously.",
    ],
    qualities: [
      "Someone who embraces the EyeLevel Mindset by exhibiting adaptability, inclusivity, sincerity, curiosity, entrepreneurial spirit, and teamwork.",
      "Mix of a creative and data-driven mindset, goal-oriented individual with a passion for making all marketing efforts quantifiable and tangible towards business outcomes.",
      "Positive attitude and innate curiosity towards the world of digital marketing while displaying a tendency for grasping concepts quickly and making sound judgments.",
      "Ability to lead and mentor a team. Capable of inspiring and interacting with all levels of staff and experience.",
      "Ability to create a collaborative and outcomes-driven environment while managing multiple projects.",
      "Passionate go-getter with the ability to work on own initiative, is preemptive and proactive.",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Flexible working hours and remote work options",
      "Learning and development opportunities",
      "Health insurance and wellness programs",
      "Team outings and company events",
    ],
  },
  "content-strategist": {
    title: "Content Strategist",
    department: "Creative",
    type: "Full-time",
    location: "Remote",
    datePosted: "01/10/2025",
    experience: "2-5 years",
    shortDescription:
      "Develop compelling content strategies that engage audiences and drive conversions.",
    aboutCompany: `Founded in 2020, EyeLevel Growth Studio is a digital growth partner for leading brands and hyper-scaling startups in India. With a team of digital experts across Bengaluru, Mumbai, NCR, and Chennai, we are one of India's fastest-growing independent digital marketing solutions companies.`,
    responsibilities: [
      "Develop comprehensive content strategies aligned with client business objectives.",
      "Create compelling narratives across multiple formats including blogs, social media, and video scripts.",
      "Collaborate with design and marketing teams to ensure content consistency.",
      "Analyze content performance and optimize strategies based on data insights.",
      "Stay updated with content trends and implement innovative approaches.",
    ],
    requirements: [
      "2-5 years of experience in content strategy or content marketing.",
      "Excellent writing and editing skills with a portfolio of published work.",
      "Strong understanding of SEO and content optimization techniques.",
      "Experience with content management systems and analytics tools.",
      "Ability to manage multiple projects and meet deadlines.",
    ],
    qualities: [
      "Creative thinker with a passion for storytelling.",
      "Strong attention to detail and quality.",
      "Collaborative team player with excellent communication skills.",
      "Proactive and self-motivated individual.",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Fully remote work option",
      "Learning and development budget",
      "Health and wellness benefits",
    ],
  },
  "growth-analyst": {
    title: "Growth Analyst",
    department: "Analytics",
    type: "Full-time",
    location: "Remote / Hybrid",
    datePosted: "01/12/2025",
    experience: "1-3 years",
    shortDescription:
      "Analyze data to uncover growth opportunities and optimize marketing performance.",
    aboutCompany: `Founded in 2020, EyeLevel Growth Studio is a digital growth partner for leading brands and hyper-scaling startups in India.`,
    responsibilities: [
      "Analyze marketing campaign data to identify trends and optimization opportunities.",
      "Build dashboards and reports to track key performance metrics.",
      "Collaborate with marketing teams to implement data-driven strategies.",
      "Conduct competitive analysis and market research.",
      "Present insights and recommendations to clients and internal stakeholders.",
    ],
    requirements: [
      "1-3 years of experience in analytics or data-driven marketing roles.",
      "Proficiency in analytics tools like Google Analytics, Tableau, or similar.",
      "Strong Excel/Google Sheets skills and basic SQL knowledge.",
      "Excellent problem-solving and critical thinking abilities.",
      "Strong communication skills for presenting data insights.",
    ],
    qualities: [
      "Curious and detail-oriented with a passion for data.",
      "Ability to translate complex data into actionable insights.",
      "Self-starter with strong organizational skills.",
    ],
    benefits: [
      "Competitive compensation",
      "Flexible hybrid work arrangement",
      "Career growth opportunities",
      "Health benefits",
    ],
  },
  "ui-ux-designer": {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    datePosted: "01/08/2025",
    experience: "2-4 years",
    shortDescription:
      "Create beautiful, user-centered designs that convert visitors into customers.",
    aboutCompany: `Founded in 2020, EyeLevel Growth Studio is a digital growth partner for leading brands and hyper-scaling startups in India.`,
    responsibilities: [
      "Design intuitive user interfaces for web and mobile applications.",
      "Conduct user research and usability testing.",
      "Create wireframes, prototypes, and high-fidelity mockups.",
      "Collaborate with developers to ensure design implementation accuracy.",
      "Maintain and evolve design systems.",
    ],
    requirements: [
      "2-4 years of experience in UI/UX design.",
      "Proficiency in Figma, Sketch, or similar design tools.",
      "Strong portfolio demonstrating UI/UX projects.",
      "Understanding of design principles and user-centered design methodology.",
      "Experience with responsive design and mobile-first approaches.",
    ],
    qualities: [
      "Creative and innovative with a keen eye for detail.",
      "Strong communication and presentation skills.",
      "Ability to accept and incorporate feedback constructively.",
    ],
    benefits: [
      "Competitive salary",
      "Fully remote work",
      "Design tools and software provided",
      "Professional development opportunities",
    ],
  },
  "business-development-executive": {
    title: "Business Development Executive",
    department: "Sales",
    type: "Full-time",
    location: "Chennai, India",
    datePosted: "01/05/2025",
    experience: "1-3 years",
    shortDescription:
      "Build relationships and drive new business opportunities for the agency.",
    aboutCompany: `Founded in 2020, EyeLevel Growth Studio is a digital growth partner for leading brands and hyper-scaling startups in India.`,
    responsibilities: [
      "Identify and pursue new business opportunities.",
      "Build and maintain relationships with prospective clients.",
      "Prepare and deliver compelling presentations and proposals.",
      "Negotiate contracts and close deals.",
      "Collaborate with internal teams to ensure client success.",
    ],
    requirements: [
      "1-3 years of experience in business development or sales.",
      "Strong understanding of digital marketing services.",
      "Excellent communication and negotiation skills.",
      "Proven track record of meeting or exceeding targets.",
      "Bachelor's degree in Business, Marketing, or related field.",
    ],
    qualities: [
      "Self-motivated and results-driven.",
      "Strong networking and relationship-building abilities.",
      "Resilient and persistent in pursuing opportunities.",
    ],
    benefits: [
      "Base salary plus commission",
      "Performance bonuses",
      "Career advancement opportunities",
      "Health and wellness benefits",
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
