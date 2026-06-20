import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";


const services = [
  { title: "AI-Era SEO", description: "appear when patients search symptoms, conditions, and specialist names", slug: "ai-era-seo" },
  { title: "Social Media", description: "doctor-forward content that builds credibility, not just reach", slug: "social-media" },
  { title: "Performance Marketing", description: "paid campaigns targeting specific conditions, geographies, and patient demographics", slug: "performance-marketing" },
  { title: "Content and Creative", description: "patient education content, doctor profiles, and treatment explainers", slug: "content-and-creative" },
  { title: "CRO and Funnel Design", description: "appointment booking flows that reduce friction and increase conversion", slug: "cro-and-funnel-design" }
];

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-lime selection:text-black">
      <SEO
        title="Healthcare Marketing Agency Chennai | Hospital Marketing | EyeLevel Growth Studio"
        description="Patient acquisition built on trust. SEO, social media, and performance marketing for specialty clinics and hospitals. Not product marketing — trust architecture."
        keywords={["healthcare marketing agency Chennai", "hospital marketing agency Chennai", "clinic marketing India", "patient acquisition agency", "healthcare digital marketing Chennai", "medical marketing agency India"]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Healthcare Marketing",
            description: "Patient acquisition built on trust. SEO, social media, and performance marketing for specialty clinics and hospitals. Not product marketing — trust architecture.",
            provider: {
              "@type": "Organization",
              name: "EyeLevel Growth Studio",
              url: "https://theeyelevelstudio.com"
            },
            areaServed: "India",
            url: "https://theeyelevelstudio.com/industries/healthcare"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://theeyelevelstudio.com/" },
              { "@type": "ListItem", position: 2, name: "Industries", item: "https://theeyelevelstudio.com/industries" },
              { "@type": "ListItem", position: 3, name: "Healthcare", item: "https://theeyelevelstudio.com/industries/healthcare" }
            ]
          }
        ]}
        canonical="https://theeyelevelstudio.com/industries/healthcare"
        url="https://theeyelevelstudio.com/industries/healthcare"
        image="https://theeyelevelstudio.com/og/industries-1200x630.png"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 px-4 text-center bg-secondary min-h-screen flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <GreenButton> Industries / Healthcare</GreenButton>
            <h1 className="font-dela text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight uppercase text-primary">
              <span className="block mb-4 md:mb-6">Patients don't buy <WavyUnderline>healthcare</WavyUnderline></span>
              <span className="text-[#E2FEA5] block">They trust it</span>
            </h1>
            <p className="font-bricolage text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-foreground/80">
              Patient acquisition built on trust architecture, not product marketing.
            </p>
            <Link to="/booking" className="w-full sm:w-auto block sm:inline-block">
              <Button
                size="lg"
                className="group w-full sm:w-auto px-6 py-6 md:px-10 md:py-7 text-sm md:text-lg flex justify-center items-center"
              >
                Book a free 30-min diagnostic
                <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </Button>
            </Link>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-24 px-4 bg-background min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto w-full text-center">
            <GreenButton>The Reality Check</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary mt-6">
              The <WavyUnderline>problem</WavyUnderline> with healthcare marketing
            </h2>
            <p className="font-bricolage text-base md:text-lg lg:text-xl leading-relaxed text-foreground/70">
              Healthcare marketing done wrong looks like FMCG marketing. Promotional posts, discount-driven ads, and content that treats patients like consumers. It erodes trust. Healthcare decisions are high-stakes and slow. The marketing has to earn trust before it earns a booking.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 px-4 bg-secondary min-h-screen flex flex-col justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-16">
              <GreenButton>Our Services</GreenButton>
              <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl uppercase text-primary mt-6">
                What we do for <WavyUnderline>Healthcare</WavyUnderline>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {services.map((service, i) => (
                <Link key={i} to={`/services/${service.slug}`} className="block group w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                  <div

                    className="h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] border-2 border-primary/10 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(226,254,165,0.12)] !bg-white/5 hover:!bg-white/10"
                  >
                    <h3 className="font-dela text-xl mb-4 uppercase flex justify-between items-start text-white group-hover:text-primary transition-colors duration-500">
                      {service.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-[#E2FEA5] shrink-0 ml-2" />
                    </h3>
                    <p className="font-bricolage text-sm md:text-base leading-relaxed text-foreground/80">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why EyeLevel */}
        <section className="py-24 px-4 bg-background min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto w-full text-center">
            <GreenButton>The EyeLevel Difference</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary mt-6">
              Why <WavyUnderline>EyeLevel</WavyUnderline>
            </h2>
            <p className="font-bricolage text-base md:text-lg lg:text-xl leading-relaxed text-foreground/70">
              Right Hospitals, Kilpauk, trusted us to build their patient acquisition system from day one. We understand the difference between healthcare marketing and product marketing.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/10 bg-secondary/50 font-bricolage text-sm md:text-base text-foreground/80">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2FEA5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E2FEA5]"></span>
              </span>
              Proof: Right Hospitals, Kilpauk, Chennai — Active Retainer Client
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-24 px-4 text-center bg-forest-deep min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto w-full">
            <GreenButton>Take Action</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-6 uppercase text-primary mt-6">
              Ready to talk about your <WavyUnderline> healthcare </WavyUnderline> marketing?
            </h2>
            <p className="font-bricolage text-lg md:text-xl max-w-3xl mx-auto mb-10 text-foreground/80">
              30 minutes. No pitch deck. We will tell you what we see.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[280px] sm:max-w-none mx-auto">
              <Link to="/booking" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto px-6 py-6 md:px-10 md:py-7 text-sm md:text-lg flex justify-center items-center"
                >
                  Book a free 30-min diagnostic
                  <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform shrink-0" />
                </Button>
              </Link>
              <Link
                to="/industries"
                className="w-full sm:w-auto font-bricolage font-semibold text-primary hover:text-primary/80 border-2 border-primary/20 hover:bg-primary/10 rounded-full transition-all flex items-center justify-center gap-2 px-6 py-4 md:px-8 md:py-4 text-sm md:text-lg"
              >
                See all industries
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <EnhancedFooter showCTA={false} mascotBgClass="bg-forest-deep" />
    </div>
  );
};

export default Healthcare;
