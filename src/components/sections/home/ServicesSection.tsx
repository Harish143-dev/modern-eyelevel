import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import {
  ArrowRight,
  Target,
  Search,
  MessageSquare,
  Pen,
  Linkedin,
  Filter,
  LineChart,
  Palette,
  Monitor,
  CheckCircle2,
  X,
  Plus,
  Minus
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  link: string;
  subtitle?: string;
  icon: React.ReactNode;
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: "performance",
    number: "01",
    title: "Performance Marketing",
    description: "Meta and Google Ads built for revenue, not clicks. Flat fees, full attribution from ad to close.",
    link: "/services/performance-marketing",
    icon: <Target className="w-5 h-5" />,
    features: [
      "Meta & Google Ads",
      "Full Funnel Strategy",
      "Attribution & Reporting",
      "Conversion Focused"
    ]
  },
  {
    id: "seo",
    number: "02",
    title: "AI-Era SEO",
    subtitle: "( AEO + GEO ) ",
    description: "Traditional SEO plus AEO (AI Overviews, Featured Snippets) and GEO (ChatGPT, Gemini, Perplexity citations).",
    link: "/services/ai-era-seo",
    icon: <Search className="w-5 h-5" />,
    features: [
      "AI Overview Optimization",
      "Featured Snippets",
      "Technical SEO",
      "Content Strategy"
    ]
  },
  {
    id: "social",
    number: "03",
    title: "Social Media Management",
    description: "Content that builds the audience your sales team needs.",
    link: "/services/social-media-management",
    icon: <MessageSquare className="w-5 h-5" />,
    features: [
      "Audience Growth",
      "Community Engagement",
      "Platform Strategy",
      "Content Calendar"
    ]
  },
  {
    id: "content",
    number: "04",
    title: "Content & Creative",
    description: "AI handles production speed, humans handle strategy and voice. Video, design, copy, brand assets.",
    link: "/services/content-and-creative",
    icon: <Pen className="w-5 h-5" />,
    features: [
      "Video Production",
      "Copywriting",
      "Brand Assets",
      "Creative Direction"
    ]
  },
  {
    id: "linkedin",
    number: "05",
    title: "LinkedIn B2B Marketing",
    description: "Profile optimisation, content strategy, and targeted outreach that builds real pipeline.",
    link: "/services/linkedin-b2b-marketing",
    icon: <Linkedin className="w-5 h-5" />,
    features: [
      "Profile Optimization",
      "Targeted Outreach",
      "B2B Lead Generation",
      "Thought Leadership"
    ]
  },
  {
    id: "cro",
    number: "06",
    title: "CRO & Funnel Design",
    description: "We fix what happens after the click. Landing pages, conversion flows, lead qualification.",
    link: "/services/cro-and-funnel-design",
    icon: <Filter className="w-5 h-5" />,
    features: [
      "Landing Page Optimization",
      "A/B Testing",
      "User Journey Mapping",
      "Lead Qualification"
    ]
  },
  {
    id: "revenue",
    number: "07",
    title: "Revenue Attribution",
    description: "Bundled into growth retainers. Every campaign tied to a business outcome.",
    link: "/services/revenue-attribution-dashboard",
    icon: <LineChart className="w-5 h-5" />,
    features: [
      "Custom Dashboards",
      "ROI Tracking",
      "Campaign Analysis",
      "Data Integration"
    ]
  },
  {
    id: "brand",
    number: "08",
    title: "Brand & Identity",
    description: "Visual identity, positioning, and brand architecture.",
    link: "/services/brand-and-identity",
    icon: <Palette className="w-5 h-5" />,
    features: [
      "Visual Identity",
      "Brand Positioning",
      "Logo Design",
      "Brand Guidelines"
    ]
  },
  {
    id: "web",
    number: "09",
    title: "Web Design & Dev",
    description: "Fast, conversion-optimised sites. A sales tool, not a brochure.",
    link: "/services/website-design-and-development",
    icon: <Monitor className="w-5 h-5" />,
    features: [
      "Responsive Design",
      "UI/UX Design",
      "Performance Optimization",
      "CMS Integration"
    ]
  },
];

const ITEM_HEIGHT = 96;

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const activeService = services[activeIndex] || services[0];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map progress to an index between 0 and 8
    let newIndex = Math.round(latest * (services.length - 1));
    // Clamp it just in case
    newIndex = Math.max(0, Math.min(services.length - 1, newIndex));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  const scrollTo = (index: number) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const sectionTop = rect.top + scrollTop;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      const scrollableDistance = sectionHeight - windowHeight;
      const progress = index / (services.length - 1);
      const targetY = sectionTop + progress * scrollableDistance;
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={sectionRef} className="relative bg-secondary" style={{ height: "800vh" }}>
      <section className="sticky top-0 h-[100dvh] overflow-hidden flex flex-col">
        <div className="max-w-[1200px] w-full mx-auto px-4 relative z-10 py-10 lg:py-16 h-full flex flex-col justify-center min-h-0">
          <div className="mb-4 lg:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0">
            <div>
              <div className="mb-3 md:mb-4 inline-block">
                <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-foreground/30 text-foreground/80 text-sm tracking-wide font-medium">
                  Services
                </span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-dela text-2xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] tracking-wide uppercase"
              >
                <span className="text-primary">What<WavyUnderline className="text-foreground">we do</WavyUnderline> </span>
              </motion.h2>
            </div>

            <Link to="/services" className="shrink-0 mt-2 md:mt-0">
              <Button
                className="bg-primary text-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-primary/90 rounded-full px-6 py-4 text-sm font-bricolage group transition-all"
              >
                View all services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 w-full">
            <div className="col-span-1 lg:col-span-4 relative flex items-center justify-center h-full min-h-0">
              <div className="relative w-full h-[280px] md:h-[300px] flex items-center shrink-0">
                <motion.div
                  initial={false}
                  animate={{ y: -activeIndex * ITEM_HEIGHT }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute top-1/2 left-0 right-0 w-full"
                  style={{ marginTop: -ITEM_HEIGHT / 2 }}
                >
                  {services.map((service, index) => {
                    const distance = Math.abs(index - activeIndex);
                    const isVisible = distance <= 1;
                    const isActive = index === activeIndex;
                    
                    return (
                      <motion.div
                        key={service.id}
                        initial={false}
                        animate={{
                          opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                          scale: isVisible ? (isActive ? 1.05 : 0.95) : 0.8,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="px-2 w-full flex items-center justify-center"
                        style={{ 
                          height: `${ITEM_HEIGHT}px`,
                          pointerEvents: isVisible ? "auto" : "none" 
                        }}
                      >
                        <div
                          onClick={() => isVisible && scrollTo(index)}
                          className={cn(
                            "flex items-center justify-between p-3 md:p-4 w-full cursor-pointer transition-all duration-300 h-[72px] md:h-[80px]",
                            "rounded-[20px]",
                            isActive 
                              ? "bg-primary text-black border-2 border-black shadow-[4px_4px_0_0_#000]" 
                              : "bg-background border border-border text-foreground hover:border-primary/30"
                          )}
                        >
                          <div className="flex items-center gap-3 md:gap-4">
                            <div className={cn("flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full shrink-0", isActive ? "bg-black/10" : "bg-secondary")}>
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="font-dela text-sm md:text-base leading-tight">{service.title}</h4>
                              {service.subtitle && <span className="font-dela text-[10px] md:text-xs opacity-70 block mt-0.5">{service.subtitle}</span>}
                            </div>
                          </div>
                          {isActive ? <Minus className="w-4 h-4 shrink-0 text-black" /> : <Plus className="w-4 h-4 shrink-0" />}
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </div>
            </div>

            {/* Right Active Panel */}
            <div className="col-span-1 lg:col-span-8 h-full flex items-center min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-background border border-border/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[2rem] p-6 lg:p-8 w-full min-h-[380px] lg:min-h-[420px] flex flex-col relative text-foreground overflow-hidden"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <span className="font-bricolage font-bold text-primary/80 text-sm md:text-base mb-1 block shrink-0">
                      {activeService.number}
                    </span>
                    <h3 className="font-dela text-xl md:text-2xl lg:text-3xl mb-2 max-w-[85%] leading-[1.1] text-foreground shrink-0">
                      {activeService.title}
                    </h3>
                    <p className="font-bricolage text-sm md:text-base text-foreground/80 mb-4 max-w-full md:max-w-[85%] shrink-0">
                      {activeService.description}
                    </p>

                    <div className="space-y-2 mb-4 flex-1">
                      {activeService.features.map((feature, i) => (
                        <div key={i} className="flex items-start md:items-center gap-2 md:gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 md:mt-0" />
                          <span className="font-bricolage font-medium text-sm md:text-base text-foreground/90">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={activeService.link} className="mt-auto shrink-0 pt-2">
                      <Button className="bg-primary text-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-primary/90 rounded-full px-6 py-4 md:py-5 text-sm font-bricolage w-full md:w-fit group transition-all">
                        Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="absolute right-[-10%] top-[20%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
