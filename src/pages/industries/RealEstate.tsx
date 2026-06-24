import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/industries/real_estate_problem_edited.png";
import { realEstateIndustrySchema, breadcrumbSchema } from "@/hooks/schemas";

const services = [
  { title: "Performance Marketing", description: "qualified lead gen optimised for site visits and bookings, not form fills", slug: "performance-marketing" },
  { title: "AI-Era SEO", description: "project pages ranking for intent keywords before the campaign launches", slug: "ai-era-seo" },
  { title: "Social Media", description: "aspirational content that builds trust before the buyer calls", slug: "social-media" },
  { title: "Content and Creative", description: "video walkthroughs, project stories, and neighbourhood content", slug: "content-and-creative" },
  { title: "CRO and Funnel Design", description: "landing pages built to qualify buyers, not just capture names", slug: "cro-and-funnel-design" }
];

const RealEstate = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background selection:bg-brand-lime selection:text-black">
      <SEO
        title="Real Estate Marketing Agency Chennai | Eyelevel Growth Studio"
        description="Performance marketing, SEO, and content for real estate developers. Qualified site visits and bookings — not cheap form fills. Chennai's real estate marketing specialists."
        keywords={["real estate marketing agency Chennai", "property marketing agency Chennai", "real estate digital marketing India", "real estate lead generation Chennai", "real estate SEO India"]}
        image="https://theeyelevelstudio.com/og/industries-1200x630.png"
        schema={[
          realEstateIndustrySchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Industries", url: "https://theeyelevelstudio.com/industries" },
            { name: "Real Estate", url: "https://theeyelevelstudio.com/industries/real-estate" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/industries/real-estate"
        url="https://theeyelevelstudio.com/industries/real-estate"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="px-4 text-center bg-secondary min-h-[65vh] lg:min-h-[95vh] flex flex-col justify-center relative overflow-hidden pt-40 pb-[100px]">
          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <GreenButton>Industries / Real Estate</GreenButton>
            <h1 className="font-dela text-3xl md:text-5xl lg:text-6xl mb-8 leading-[0.95] uppercase text-primary">
              Real estate doesn't need more <WavyUnderline>leads</WavyUnderline>
              <br />
              <span className="text-[#E2FEA5]">It needs the right ones</span>
            </h1>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-foreground/80">
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
        <section className="px-4 bg-background min-h-[65vh] lg:min-h-[95vh] flex flex-col justify-center py-[100px]">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-block">
                <GreenButton>The Problem</GreenButton>
              </div>
              <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary">
                The <WavyUnderline>problem</WavyUnderline> with real estate marketing
              </h2>
              <p className="font-bricolage text-sm md:text-base lg:text-base leading-relaxed text-foreground/70">
                Most real estate marketing looks the same. Low-quality leads flooding the CRM. Agencies optimising for cost per lead instead of cost per site visit. Reports full of impressions, zero correlation to bookings. The developer ends up managing the agency instead of closing deals.
              </p>
            </div>
            <div className="lg:col-span-5 w-full flex justify-start lg:justify-end">
              <img 
                src={problemImage} 
                alt="Real Estate Marketing Problem" 
                className="w-full h-[300px] lg:h-[400px] xl:h-[450px] object-cover rounded-3xl border-2 border-primary/20 shadow-[0_0_40px_rgba(226,254,165,0.15)] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="px-4 bg-secondary min-h-[65vh] lg:min-h-[95vh] flex flex-col justify-center py-[100px]">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-16">
              <GreenButton>What we do for the industry</GreenButton>
              <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl uppercase text-primary">
                What we do for <WavyUnderline>Real Estate</WavyUnderline>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-fr gap-6 justify-items-center md:justify-items-stretch">
              {services.map((service, i) => (
                <Link 
                  key={i} 
                  to={`/services/${service.slug}`} 
                  className={`block group w-full h-full max-w-[350px] md:max-w-none lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
                >
                  <div className="h-full rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] border-2 border-primary/10 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(226,254,165,0.12)] bg-white/5 hover:bg-white/10 flex flex-col">
                    <h3 className="font-dela text-lg md:text-xl mb-4 uppercase flex justify-between items-start text-white group-hover:text-primary transition-colors duration-500">
                      {service.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-[#E2FEA5] shrink-0 ml-2" />
                    </h3>
                    <p className="font-bricolage text-sm md:text-base leading-relaxed text-foreground/80 mt-auto">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why EyeLevel */}
        <section className="px-4 bg-background flex flex-col justify-start py-[100px]">
          <div className="max-w-4xl mx-auto w-full text-center">
            <GreenButton>Why EyeLevel</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary">
              Why <WavyUnderline>EyeLevel</WavyUnderline>
            </h2>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl leading-relaxed text-foreground/70">
              We know the sales cycle, the site visit conversation, and what a qualified lead actually looks like. We do not optimise for the metric that looks good in a report. We optimise for the one that shows up in your booking sheet.
            </p>
          </div>
        </section>

        {/* CTA Band */}
        <section className="px-4 text-center bg-forest-deep min-h-[65vh] lg:min-h-[95vh] flex flex-col justify-center py-[100px]">
          <div className="max-w-4xl mx-auto w-full">
            <GreenButton>CTA band</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-6 uppercase text-primary">
              Ready to talk about your <WavyUnderline>  real estate </WavyUnderline> marketing?
            </h2>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 text-foreground/80">
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
