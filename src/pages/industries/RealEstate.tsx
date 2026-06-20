import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";

const services = [
  { title: "Performance Marketing", description: "qualified lead gen optimised for site visits and bookings, not form fills", slug: "performance-marketing" },
  { title: "AI-Era SEO", description: "project pages ranking for intent keywords before the campaign launches", slug: "ai-era-seo" },
  { title: "Social Media", description: "aspirational content that builds trust before the buyer calls", slug: "social-media" },
  { title: "Content and Creative", description: "video walkthroughs, project stories, and neighbourhood content", slug: "content-and-creative" },
  { title: "CRO and Funnel Design", description: "landing pages built to qualify buyers, not just capture names", slug: "cro-and-funnel-design" }
];

const RealEstate = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-lime selection:text-black">
      <SEO
        title="Real Estate Marketing Agency Chennai | EyeLevel Growth Studio"
        description="Performance marketing, SEO, and content for real estate developers. Qualified site visits and bookings - not cheap form fills. Chennai's real estate marketing specialists."
        keywords={["real estate marketing agency Chennai", "property marketing agency Chennai", "real estate digital marketing India", "real estate lead generation Chennai", "real estate SEO India"]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Real Estate Marketing",
            description: "Performance marketing, SEO, and content for real estate developers. Qualified site visits and bookings - not cheap form fills. Chennai's real estate marketing specialists.",
            provider: {
              "@type": "Organization",
              name: "EyeLevel Growth Studio",
              url: "https://theeyelevelstudio.com"
            },
            areaServed: "India",
            url: "https://theeyelevelstudio.com/industries/real-estate"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://theeyelevelstudio.com/" },
              { "@type": "ListItem", position: 2, name: "Industries", item: "https://theeyelevelstudio.com/industries" },
              { "@type": "ListItem", position: 3, name: "Real Estate", item: "https://theeyelevelstudio.com/industries/real-estate" }
            ]
          }
        ]}
        canonical="https://theeyelevelstudio.com/industries/real-estate"
        url="https://theeyelevelstudio.com/industries/real-estate"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 px-4 text-center bg-secondary min-h-screen flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <GreenButton>Industries / Real Estate</GreenButton>
            <h1 className="font-dela text-3xl md:text-5xl lg:text-6xl mb-8 leading-[0.95] uppercase text-primary">
              Real estate doesn't need more <WavyUnderline>leads</WavyUnderline>
              <br />
              <span className="text-[#E2FEA5]">It needs the right ones</span>
            </h1>
            <p className="font-bricolage text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-foreground/80">
              High-trust, slow-burn sales. We build for closed deals and site visits, not cheap form fills
            </p>
            <Link to="/booking" className="w-full sm:w-auto block sm:inline-block">
              <Button
                size="lg"
                className="group w-full sm:w-auto px-6 py-5 md:px-10 md:py-7 text-sm md:text-lg flex justify-center items-center"
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
              The <WavyUnderline>problem</WavyUnderline> with real estate marketing
            </h2>
            <p className="font-bricolage text-base md:text-lg lg:text-xl leading-relaxed text-foreground/70">
              Most real estate marketing looks the same. Low-quality leads flooding the CRM. Agencies optimising for cost per lead instead of cost per site visit. Reports full of impressions, zero correlation to bookings. The developer ends up managing the agency instead of closing deals.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 px-4 bg-secondary min-h-screen flex flex-col justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-16">
              <GreenButton>Our Services</GreenButton>
              <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl uppercase text-primary mt-6">
                What we do for <WavyUnderline>Real Estate</WavyUnderline>
              </h2>
            </div>
            <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <Link key={i} to={`/services/${service.slug}`} className="block group w-full max-w-[350px] md:max-w-none">
                  <div className="h-full rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 border-2 border-primary/10 hover:border-primary/30 bg-white/5">
                    <h3 className="font-dela text-xl mb-4 uppercase flex justify-between items-start text-white group-hover:text-primary">
                      {service.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E2FEA5] shrink-0 ml-2" />
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
              We know the sales cycle, the site visit conversation, and what a qualified lead actually looks like. We do not optimise for the metric that looks good in a report. We optimise for the one that shows up in your booking sheet.
            </p>
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-24 px-4 text-center bg-forest-deep min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto w-full">
            <GreenButton>Take Action</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-6 uppercase text-primary mt-6">
              Ready to talk about your <WavyUnderline>  real estate </WavyUnderline> marketing?
            </h2>
            <p className="font-bricolage text-lg md:text-xl max-w-3xl mx-auto mb-10 text-foreground/80">
              30 minutes. No pitch deck. We will tell you what we see.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[280px] sm:max-w-none mx-auto">
              <Link to="/booking" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto px-6 py-5 md:px-10 md:py-7 text-sm md:text-lg flex justify-center items-center"
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

export default RealEstate;
