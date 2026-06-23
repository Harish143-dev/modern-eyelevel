import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/industries/automotive_problem_realistic.png";

const services = [
  { title: "Performance Marketing", description: "Meta and Google Ads optimised for showroom visits and test-drive bookings, not just leads", slug: "performance-marketing" },
  { title: "Social Media", description: "model launches, walk-arounds, and dealership content that builds local trust", slug: "social-media-management" },
  { title: "CRO and Funnel Design", description: "landing pages built for test-drive conversion, not just enquiry volume", slug: "cro-and-funnel-design" },
  { title: "Revenue Attribution Dashboard", description: "connecting digital spend to showroom visits and closed deals", slug: "revenue-attribution-dashboard" },
  { title: "AI-Era SEO", description: "local search dominance for dealership location pages and model-specific queries", slug: "ai-era-seo" }
];

const Automotive = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-lime selection:text-black">
      <SEO
        title="Automotive Marketing Agency Chennai | Dealership Marketing | Eyelevel Growth Studio"
        description="Performance marketing for dealerships and component makers. Showroom footfall, test-drive bookings, and OEM mandate compliance — one studio, full attribution."
        keywords={["automotive marketing agency Chennai", "car dealership marketing Chennai", "automotive digital marketing India", "dealership lead generation", "OEM marketing India", "automotive advertising agency Chennai"]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Automotive Marketing",
            description: "Performance marketing for dealerships and component makers. Showroom footfall, test-drive bookings, and OEM mandate compliance — one studio, full attribution.",
            provider: {
              "@type": "Organization",
              name: "Eyelevel Growth Studio",
              url: "https://theeyelevelstudio.com"
            },
            areaServed: "India",
            url: "https://theeyelevelstudio.com/industries/automotive"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://theeyelevelstudio.com/" },
              { "@type": "ListItem", position: 2, name: "Industries", item: "https://theeyelevelstudio.com/industries" },
              { "@type": "ListItem", position: 3, name: "Automotive", item: "https://theeyelevelstudio.com/industries/automotive" }
            ]
          }
        ]}
        canonical="https://theeyelevelstudio.com/industries/automotive"
        url="https://theeyelevelstudio.com/industries/automotive"
        image="https://theeyelevelstudio.com/og/industries-1200x630.png"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 px-4 text-center bg-secondary min-h-screen flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10 w-full">
              <GreenButton>
                Industries / Automotive
              </GreenButton>
            <h1 className="font-dela text-3xl md:text-5xl lg:text-6xl mb-8 leading-[0.95] uppercase text-primary">
              Showroom visits don't happen by <WavyUnderline>accident</WavyUnderline>
            </h1>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-foreground/80">
              Dealerships and component makers. Footfall, test-drive bookings, OEM mandates — one team that handles all of it.
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
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-block">
                <GreenButton>The Problem</GreenButton>
              </div>
              <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary mt-6">
                The <WavyUnderline>problem</WavyUnderline> with automotive marketing
              </h2>
              <p className="font-bricolage text-sm md:text-base lg:text-base leading-relaxed text-foreground/70">
                Automotive marketing is high-spend and under-measured. Dealerships run Meta ads that generate form fills but no footfall. OEM mandates eat the budget. Digital and offline are tracked in separate spreadsheets. And no one can clearly answer what activity actually drove the customer through the door.
              </p>
            </div>
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <img 
                src={problemImage} 
                alt="Automotive Marketing Problem" 
                className="w-full h-[300px] lg:h-[400px] xl:h-[450px] object-cover rounded-3xl border-2 border-primary/20 shadow-[0_0_40px_rgba(226,254,165,0.15)] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 px-4 bg-secondary min-h-screen flex flex-col justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-16">
              <GreenButton> What we do for this industry</GreenButton>
              <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl uppercase text-primary mt-6">
                What we do for <WavyUnderline>Automotive</WavyUnderline>
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

        {/* Why Eyelevel */}
        <section className="py-24 px-4 bg-background flex flex-col justify-center">
          <div className="max-w-4xl mx-auto w-full text-center">
            <GreenButton>Why Eyelevel</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary mt-6">
              Why <WavyUnderline>Eyelevel</WavyUnderline>
            </h2>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl leading-relaxed text-foreground/70">
              We understand OEM constraints, local market dynamics, and the gap between a digital lead and a walk-in. We measure what matters: footfall, not form fills.
            </p>
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-24 px-4 text-center bg-forest-deep min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto w-full">
            <GreenButton>CTA band</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-6 uppercase text-primary mt-6">
              Ready to talk about your <WavyUnderline> automotive </WavyUnderline> marketing?
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

export default Automotive;
