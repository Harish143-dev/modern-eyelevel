import industryEducation from "@/assets/industries/edu.webp";
import industrySports from "@/assets/industries/sport.webp";
import industryRealestate from "@/assets/industries/new/realestate.webp";
import industryB2b from "@/assets/industries/b2b.webp";
import pickelball from "@/assets/industries/pickleball.webp";
import industrySaas from "@/assets/industries/new/saas.webp";
import industryD2d from "@/assets/industries/d2c.webp";
import industryHealthcare from "@/assets/industries/new/healthcare.webp";
import industryOffshore from "@/assets/industries/offshore.webp";
import industryAutomotive from "@/assets/industries/new/automative.webp";
import industryManufacturing from "@/assets/industries/new/Automation.webp";

export interface IndustryPageItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortTagline: string;
  description: string;
  longDescription: string;
  href: string;
  image: string;
  accentColor: string;
  stats: { value: string; label: string }[];
  capabilities: string[];
}

export const industriesPageData: IndustryPageItem[] = [
  {
    id: "real-estate",
    number: "01",
    title: "Real Estate",
    tagline: "Close Deals Not Form Fills",
    shortTagline: "Sell Faster.",
    description: "High-trust, slow-burn sales. We build for closed deals and site visits, not cheap form fills.",
    longDescription: "Leverage high-performance digital systems built specifically to move real estate inventory in competitive markets. From pre-launch to sold-out.",
    href: "/industries/real-estate",
    image: industryRealestate,
    accentColor: "#E2FEA5",
    stats: [
      { value: "50%", label: "Faster Sales" },
      { value: "8x", label: "Lead Quality" },
      { value: "₹500Cr+", label: "Properties Sold" },
    ],
    capabilities: ["Performance Marketing", "AI-Era SEO", "Social Media", "Content and Creative", "CRO and Funnel Design"],
  },
  {
    id: "saas",
    number: "02",
    title: "SaaS & Tech Startups",
    tagline: "Produce Pipeline Not Traffic",
    shortTagline: "Scale MRR.",
    description: "Demand gen, LinkedIn brand, and content that produces pipeline - not just traffic.",
    longDescription: "Pipeline-first marketing for SaaS companies. LinkedIn B2B campaigns, content systems, and GTM execution from seed to Series B.",
    href: "/industries/it-saas",
    image: industrySaas,
    accentColor: "#E2FEA5",
    stats: [],
    capabilities: ["LinkedIn B2B Marketing", "Content and Creative", "AI-Era SEO", "Performance Marketing", "Revenue Attribution Dashboard"],
  },
  {
    id: "healthcare",
    number: "03",
    title: "Healthcare",
    tagline: "Patient Trust Architecture",
    shortTagline: "Book Patients.",
    description: "Patient acquisition built on trust architecture, not product marketing.",
    longDescription: "Digital marketing for hospitals, clinics, and wellness brands. GMB optimisation, patient acquisition campaigns, and content.",
    href: "/industries/healthcare",
    image: industryHealthcare,
    accentColor: "#E2FEA5",
    stats: [],
    capabilities: ["AI-Era SEO", "Social Media", "Performance Marketing", "Content and Creative", "CRO and Funnel Design"],
  },
  {
    id: "automotive",
    number: "04",
    title: "Automotive Marketing",
    tagline: "Convert Clicks to Showroom Visits",
    shortTagline: "Drive Footfall.",
    description: "Dealerships and component makers. Footfall, test-drive bookings, OEM mandates - one team that handles all of it.",
    longDescription: "Dealerships often rely on generic OEM campaigns or disconnected agency efforts. We build marketing engines that actually move metal by driving hyper-local, high-intent buyers into your showroom.",
    href: "/industries/automotive",
    image: industryAutomotive,
    accentColor: "#E2FEA5",
    stats: [
      { value: "3x", label: "Test Drives" },
      { value: "100%", label: "OEM Compliance" },
      { value: "40%", label: "Lower CPL" },
    ],
    capabilities: ["Performance Marketing", "Social Media", "CRO and Funnel Design", "Revenue Attribution Dashboard", "AI-Era SEO"],
  },
  {
    id: "manufacturing-b2b",
    number: "05",
    title: "Manufacturing & B2B",
    tagline: "Own The Digital Shortlist",
    shortTagline: "Generate Pipeline.",
    description: "Chennai and Coimbatore manufacturers. Your market moved online. Your marketing needs to catch up.",
    longDescription: "LinkedIn, SEO, and content for Chennai and Coimbatore manufacturers. Your buyers moved online — we help them find you and choose you before the first call.",
    href: "/industries/manufacturing-b2b",
    image: industryManufacturing,
    accentColor: "#E2FEA5",
    stats: [],
    capabilities: ["LinkedIn B2B Marketing", "AI-Era SEO", "Content and Creative", "Website Design and Development", "Revenue Attribution Dashboard"],
  },

  // {
  //   id: "saas",
  //   number: "01",
  //   title: "SaaS & Tech Startups",
  //   tagline: "From Demo to Deal",
  //   shortTagline: "Scale MRR.",
  //   description: "Pipeline-first marketing for SaaS companies. LinkedIn B2B campaigns, content systems, and GTM execution from seed to Series B.",
  //   longDescription: "Pipeline-first marketing for SaaS companies. LinkedIn B2B campaigns, content systems, and GTM execution from seed to Series B.",
  //   href: "/industries/it-saas",
  //   image: industrySaas,
  //   accentColor: "#E2FEA5",
  //   stats: [],
  //   capabilities: ["B2B Campaigns", "Content Systems", "GTM Execution", "Pipeline Growth"],
  // },
  // {
  //   id: "d2c",
  //   number: "02",
  //   title: "D2C & E-commerce",
  //   tagline: "From Cart to Community",
  //   shortTagline: "Grow LTV.",
  //   description: "CAC reduction and retention marketing for D2C brands. WhatsApp campaigns, Meta performance ads, and AI content production.",
  //   longDescription: "CAC reduction and retention marketing for D2C brands. WhatsApp campaigns, Meta performance ads, and AI content production.",
  //   href: "/industries/d2c",
  //   image: industryD2d,
  //   accentColor: "#FCFAC2",
  //   stats: [],
  //   capabilities: ["WhatsApp Campaigns", "Meta Ads", "AI Content", "CAC Reduction"],
  // },
  // {
  //   id: "healthcare",
  //   number: "03",
  //   title: "Healthcare",
  //   tagline: "From Patient Search to Booked Appointment",
  //   shortTagline: "Book Patients.",
  //   description: "Digital marketing for hospitals, clinics, and wellness brands. GMB optimisation, patient acquisition campaigns, and content.",
  //   longDescription: "Digital marketing for hospitals, clinics, and wellness brands. GMB optimisation, patient acquisition campaigns, and content.",
  //   href: "/industries/healthcare",
  //   image: industryHealthcare,
  //   accentColor: "#FFB4B4",
  //   stats: [],
  //   capabilities: ["GMB Optimisation", "Patient Acquisition", "Content Creation", "Digital Marketing"],
  // },
  // {
  //   id: "offshore",
  //   number: "04",
  //   title: "Offshore / US Clients",
  //   tagline: "Indian Expertise. Your Market's Standards.",
  //   shortTagline: "Global Reach.",
  //   description: "Full-service marketing retainers for US and UAE companies that want senior-level strategy at Indian efficiency.",
  //   longDescription: "Full-service marketing retainers for US and UAE companies that want senior-level strategy at Indian efficiency.",
  //   href: "/industries/offshore",
  //   image: industryOffshore,
  //   accentColor: "#B8D4BE",
  //   stats: [],
  //   capabilities: ["Full-Service Retainers", "Senior-Level Strategy", "Indian Efficiency", "US/UAE Markets"],
  // },
  // {
  //   id: "sports",
  //   number: "05",
  //   title: "Sports Marketing",
  //   tagline: "From Fans to Superfans",
  //   shortTagline: "Win Bigger.",
  //   description: "We help sports teams, leagues, and event organizers translate passion into packed stadiums, engaged communities, and lucrative commercial opportunities.",
  //   longDescription: "Go beyond the game with brand strategies that maximize your reach and monetize your global fanbase. We turn every match into a marketing opportunity.",
  //   href: "/sports-marketing-agency",
  //   image: industrySports,
  //   accentColor: "#FFB4B4",
  //   stats: [
  //     { value: "10M+", label: "Fan Reach" },
  //     { value: "200%", label: "ROI Increase" },
  //     { value: "50+", label: "Teams & Leagues" },
  //   ],
  //   capabilities: ["Fan Engagement", "Sponsorship Activation", "Event Marketing", "Merchandise Strategy"],
  // },
  // {
  //   id: "b2b",
  //   number: "06",
  //   title: "B2B Marketing",
  //   tagline: "From Leads to Loyalty",
  //   shortTagline: "Close Sooner.",
  //   description: "We help B2B companies build a predictable pipeline of qualified leads and nurture them into long-term, high-value customers.",
  //   longDescription: "Build a sophisticated engine that identifies high-value targets and moves them efficiently through your sales cycle. Strategic marketing meets measurable results.",
  //   href: "/b2b-marketing-agency",
  //   image: industryB2b,
  //   accentColor: "#FCFAC2",
  //   stats: [
  //     { value: "5x", label: "Pipeline Growth" },
  //     { value: "30%", label: "Shorter Cycle" },
  //     { value: "100+", label: "Enterprise Clients" },
  //   ],
  //   capabilities: ["Account-Based Marketing", "Content Strategy", "Sales Enablement", "Lead Scoring"],
  // },
  // {
  //   id: "pickleball-marketing",
  //   number: "07",
  //   title: "Pickleball Marketing",
  //   tagline: "From Courts to Community",
  //   shortTagline: "Scale the League.",
  //   description: "We help pickleball leagues, clubs, tournaments, and brands turn fast-growing interest into stronger communities, fuller events, and sponsor-ready visibility.",
  //   longDescription: "From launch buzz to long-term fan retention, we build marketing systems for pickleball properties that need more than generic sports promotion. We connect local energy with digital reach so your league, club, or tournament keeps growing on and off the court.",
  //   href: "/pickleball-marketing-agency",
  //   image: pickelball,
  //   accentColor: "#C7B6FF",
  //   stats: [
  //     { value: "3x", label: "Community Growth" },
  //     { value: "40%", label: "Higher Event Turnout" },
  //     { value: "25+", label: "Brand & League Campaigns" },
  //   ],
  //   capabilities: ["Tournament Promotion", "Community Growth", "Sponsorship Packaging", "Player & Club Branding"],
  // },
  // {
  //   id: "education",
  //   number: "08",
  //   title: "Edu-Marketing",
  //   tagline: "From Enquiries to Admissions",
  //   shortTagline: "Enroll More.",
  //   description: "We help schools, universities, and EdTech companies build powerful brands and create a predictable pipeline of qualified student applications.",
  //   longDescription: "Partner with us to streamline your admissions funnel and attract students who are the perfect fit for your campus. Our data-driven approach ensures every marketing dollar translates into quality enrollments.",
  //   href: "/education-marketing-agency/",
  //   image: industryEducation,
  //   accentColor: "#B8D4BE",
  //   stats: [
  //     { value: "3x", label: "Enrollment Growth" },
  //     { value: "45%", label: "Lower CAC" },
  //     { value: "150+", label: "Institutions Served" },
  //   ],
  //   capabilities: ["Admission Campaigns", "Brand Building", "Lead Nurturing", "Digital Strategy"],
  // },
  // {
  //   id: "real-estate",
  //   number: "09",
  //   title: "Real Estate",
  //   tagline: "From Blueprints to Buyers",
  //   shortTagline: "Sell Faster.",
  //   description: "We help developers, brokers, and property management companies build powerful brands and generate a consistent flow of qualified leads.",
  //   longDescription: "Leverage high-performance digital systems built specifically to move real estate inventory in competitive markets. From pre-launch to sold-out.",
  //   href: "/industries/real-estate",
  //   image: industryRealestate,
  //   accentColor: "#E2FEA5",
  //   stats: [
  //     { value: "50%", label: "Faster Sales" },
  //     { value: "8x", label: "Lead Quality" },
  //     { value: "₹500Cr+", label: "Properties Sold" },
  //   ],
  //   capabilities: ["Project Launches", "Virtual Tours", "Lead Generation", "Brand Positioning"],
  // },
  // {
  //   id: "automotive",
  //   number: "10",
  //   title: "Automotive Marketing",
  //   tagline: "Showroom visits don't happen by accident",
  //   shortTagline: "Drive Footfall.",
  //   description: "Performance marketing for dealerships and component makers. Showroom footfall, test-drive bookings, and OEM mandate compliance.",
  //   longDescription: "Dealerships often rely on generic OEM campaigns or disconnected agency efforts. We build marketing engines that actually move metal by driving hyper-local, high-intent buyers into your showroom.",
  //   href: "/industries/automotive",
  //   image: industryB2b, // TODO: Replace with automotive specific image
  //   accentColor: "#E2FEA5",
  //   stats: [
  //     { value: "3x", label: "Test Drives" },
  //     { value: "100%", label: "OEM Compliance" },
  //     { value: "40%", label: "Lower CPL" },
  //   ],
  //   capabilities: ["Footfall Generation", "Test-Drive Funnels", "OEM Compliance", "Dealership Branding"],
  // },
  // {
  //   id: "manufacturing-b2b",
  //   number: "11",
  //   title: "Manufacturing & B2B",
  //   tagline: "Your buyers research online before they ever call you.",
  //   shortTagline: "Generate Pipeline.",
  //   description: "LinkedIn, SEO, and content for Chennai and Coimbatore manufacturers. We help them find you and choose you before the first call.",
  //   longDescription: "LinkedIn, SEO, and content for Chennai and Coimbatore manufacturers. Your buyers moved online — we help them find you and choose you before the first call.",
  //   href: "/industries/manufacturing-b2b",
  //   image: industryB2b, // TODO: Replace with specific image
  //   accentColor: "#C7B6FF",
  //   stats: [],
  //   capabilities: ["LinkedIn Marketing", "B2B SEO", "Content Creation", "Lead Generation"],
  // },
];

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";


export interface IndustryShowcaseProps {
  industry: IndustryPageItem;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export const IndustryShowcase = ({ industry, index }: IndustryShowcaseProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const isEven = index % 2 === 0;

  return (
    <section
      id={industry.id}
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden py-[100px]"
      style={{
        backgroundColor: isEven ? "#173229" : "#1e3c30",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
        >
          {/* Image Section */}
          <motion.div
            className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[9/11] rounded-3xl overflow-hidden group">
              {/* Image with parallax */}
              <motion.div
                style={{ scale: imageScale }}
                className="absolute inset-0"
              >
                <img
                  loading="lazy"
                  src={industry.image}
                  alt={industry.title}
                  title={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Overlay gradient */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: `linear-gradient(135deg, ${industry.accentColor}20, transparent 60%)`,
                }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className={`text-center lg:text-left ${isEven ? "lg:order-2" : "lg:order-1"}`}
            style={{ y: contentY, opacity: contentOpacity }}
          >
            {/* Title & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GreenButton>{industry.tagline}</GreenButton>
              <h2
                className="font-dela text-[26px] sm:text-3xl md:text-4xl lg:text-5xl mb-6 leading-[1.1] uppercase break-words hyphens-auto"
                style={{ color: industry.accentColor }}
              >
                {industry.title}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-bricolage text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "rgba(248, 255, 232, 0.85)" }}
            >
              {industry.description}
            </motion.p>

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
            >
              {industry.capabilities.map((capability, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full font-bricolage text-sm border"
                  style={{
                    borderColor: "rgba(248, 255, 232, 0.2)",
                    color: "rgba(248, 255, 232, 0.7)",
                  }}
                >
                  {capability}
                </span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="z-20"
            >
              <Button
                asChild
                size="lg"
                style={{
                  backgroundColor: industry.accentColor,
                }}
              >
                <a href={industry.href} className="flex items-center justify-center text-center whitespace-normal">
                  <span className="hidden sm:inline">Explore</span> {industry.title}
                  <ArrowUpRight className="ml-1 md:ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: "rgba(248, 255, 232, 0.1)" }}
      />
    </section>
  );
};

