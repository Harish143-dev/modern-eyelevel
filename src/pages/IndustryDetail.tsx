import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { GraduationCap, Trophy, Building2, Briefcase, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const industryData: Record<string, {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  heroDescription: string;
  challenge: {
    title: string;
    description: string;
  };
  approach: {
    title: string;
    description: string;
  };
  services: string[];
  cta: {
    headline: string;
    button: string;
  };
}> = {
  education: {
    icon: GraduationCap,
    title: "Edu-Marketing",
    tagline: "From Enquiries to Admissions",
    heroDescription: "In a competitive educational landscape, visibility and reputation are everything. We help schools, universities, and EdTech companies build powerful brands and create a predictable pipeline of qualified student applications.",
    challenge: {
      title: "The Modern Admissions Battleground",
      description: "Educational institutions face unprecedented challenges: fierce competition for a limited pool of students, difficulty reaching Gen Z, and pressure to prove ROI on marketing spend. Simply running ads is no longer enough. You need a sophisticated, full-funnel strategy to stand out and drive enrolment.",
    },
    approach: {
      title: "Building Your Institution's Growth Engine",
      description: "We combine two core strategies: building brand prestige and driving targeted applications. We tell your institution's unique story in a way that resonates with prospective students and parents. Then we use precision-targeted advertising to reach them at the exact moment they are making decisions.",
    },
    services: [
      "Student Persona Development",
      "SEO for Program Pages",
      "Google & Meta Ads for Admissions",
      "Content Marketing for Thought Leadership",
      "Social Media for Student Engagement",
      "Virtual Open House & Event Promotion",
      "Alumni Engagement Campaigns",
    ],
    cta: {
      headline: "Ready to Boost Your Enrolment?",
      button: "Book a Free Consultation for Your Institution",
    },
  },
  sports: {
    icon: Trophy,
    title: "Sports Marketing",
    tagline: "From Fans to Superfans",
    heroDescription: "In the sports industry, passion is your greatest asset. We help sports teams, leagues, and event organizers translate that passion into packed stadiums, engaged communities, and lucrative commercial opportunities.",
    challenge: {
      title: "More Than Just a Game",
      description: "The modern sports landscape requires more than just on-field excellence. You need a year-round, multi-platform fan experience. The challenges are immense: capturing attention in a crowded entertainment landscape, monetizing fan engagement beyond ticket sales, and building a loyal community.",
    },
    approach: {
      title: "Igniting Your Fanbase",
      description: "We specialize in turning casual fans into loyal superfans. We create compelling narratives, build vibrant online communities, and produce unforgettable experiences that forge an emotional bond between your brand and your audience.",
    },
    services: [
      "Fan Engagement Strategy",
      "Social Media Management & Community Building",
      "Video Production & Content Creation",
      "Event Promotion & Management",
      "Influencer & Athlete Marketing",
      "Sponsorship Activation",
      "Merchandise & E-commerce Marketing",
    ],
    cta: {
      headline: "Ready to Electrify Your Fanbase?",
      button: "Book a Free Consultation for Your Team",
    },
  },
  "real-estate": {
    icon: Building2,
    title: "Real Estate Marketing",
    tagline: "From Blueprints to Buyers",
    heroDescription: "In the competitive world of real estate, visibility and trust are the foundations of success. We help developers, brokers, and property management companies build powerful brands and generate a consistent flow of qualified leads.",
    challenge: {
      title: "The Digital-First Property Market",
      description: "Today's property buyers begin their journey online. To succeed, you need more than just listings—you need a sophisticated digital presence that builds trust, showcases your properties, and captures leads before your competitors do.",
    },
    approach: {
      title: "Building Your Lead Generation Engine",
      description: "We create a powerful lead generation engine that attracts, engages, and converts potential buyers. We use a combination of high-quality content, targeted advertising, and marketing automation to nurture leads from initial interest to final sale.",
    },
    services: [
      "Real Estate SEO & Local Search",
      "Google & Meta Ads for Property Listings",
      "3D Virtual Tours & Video Production",
      "Content Marketing for Neighborhood Guides",
      "Email Marketing & Lead Nurturing",
      "CRM Integration & Automation",
    ],
    cta: {
      headline: "Ready to Fill Your Pipeline?",
      button: "Book a Free Consultation for Your Project",
    },
  },
  b2b: {
    icon: Briefcase,
    title: "B2B Marketing",
    tagline: "From Leads to Loyalty",
    heroDescription: "In the complex world of B2B, a long sales cycle requires a sophisticated, full-funnel strategy. We help B2B companies build a predictable pipeline of qualified leads and nurture them into long-term, high-value customers.",
    challenge: {
      title: "The Modern B2B Buyer",
      description: "Today's B2B buyers are more informed and discerning than ever. They conduct extensive research online before ever speaking to a salesperson. To win their business, you need to build trust, demonstrate expertise, and be present at every stage of their decision-making journey.",
    },
    approach: {
      title: "Building Your Authority & Pipeline",
      description: "We focus on two key areas: building your brand's authority and creating a predictable sales pipeline. We use thought leadership content to establish you as an expert in your industry, and then use targeted marketing to drive qualified leads into your sales funnel.",
    },
    services: [
      "Account-Based Marketing (ABM)",
      "LinkedIn Marketing & Lead Generation",
      "B2B SEO & Content Marketing",
      "Webinar & Event Marketing",
      "Email Marketing & Nurturing",
      "CRM & Marketing Automation",
    ],
    cta: {
      headline: "Ready to Build Your Growth Engine?",
      button: "Book a Free Consultation for Your Business",
    },
  },
};

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industryData[slug || ""];

  if (!industry) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Industry Not Found</h1>
          <Link to="/industries">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Industries
            </Button>
          </Link>
        </div>
        <EnhancedFooter />
      </div>
    );
  }

  const IconComponent = industry.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/industries" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" />
            All Industries
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold mb-2"
          >
            {industry.tagline}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            {industry.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl"
          >
            {industry.heroDescription}
          </motion.p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-forest uppercase tracking-[0.3em] text-sm mb-4">The Challenge</p>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
              {industry.challenge.title}
            </h2>
            <p className="text-card-foreground/70 text-lg leading-relaxed">
              {industry.challenge.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {industry.approach.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {industry.approach.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-forest uppercase tracking-[0.3em] text-sm mb-4">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-8">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {industry.services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-forest rounded-xl p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry-specific CTA */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-4xl p-8 md:p-12 text-center card-cream"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
                {industry.cta.headline}
              </h2>
              <Link to="/contact">
                <Button size="lg" className="group rounded-full px-8">
                  {industry.cta.button}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
};

export default IndustryDetail;
