import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/industries/itsaas_problem_realistic.png";


const services = [
  { title: "LinkedIn B2B Marketing", description: "founder visibility and outreach that builds pipeline before the sales call", slug: "linkedin-b2b-marketing" },
  { title: "Content and Creative", description: "thought leadership, case studies, and comparison content that does the pre-selling", slug: "content-and-creative" },
  { title: "AI-Era SEO", description: "ranking for the right intent keywords before buyers shortlist competitors", slug: "ai-era-seo" },
  { title: "Performance Marketing", description: "LinkedIn Ads and Google Ads targeted to specific job titles and company sizes", slug: "performance-marketing" },
  { title: "Revenue Attribution Dashboard", description: "so you know which activity is producing pipeline", slug: "revenue-attribution-dashboard" }
];

const ITSaaS = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-lime selection:text-black">
      <SEO
        title="IT & SaaS Marketing Agency India | EyeLevel Growth Studio"
        description="Demand gen, LinkedIn brand, and content that produces pipeline for B2B software companies. Performance marketing and SEO for IT and SaaS across India."
        keywords={["IT marketing agency India", "SaaS marketing agency India", "B2B software marketing", "LinkedIn marketing for SaaS", "demand generation agency Chennai", "IT company marketing India"]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "IT and SaaS Marketing",
            description: "Demand gen, LinkedIn brand, and content that produces pipeline for B2B software companies. Performance marketing and SEO for IT and SaaS across India.",
            provider: {
              "@type": "Organization",
              name: "EyeLevel Growth Studio",
              url: "https://theeyelevelstudio.com"
            },
            areaServed: "India",
            url: "https://theeyelevelstudio.com/industries/it-saas"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://theeyelevelstudio.com/" },
              { "@type": "ListItem", position: 2, name: "Industries", item: "https://theeyelevelstudio.com/industries" },
              { "@type": "ListItem", position: 3, name: "IT and SaaS", item: "https://theeyelevelstudio.com/industries/it-saas" }
            ]
          }
        ]}
        canonical="https://theeyelevelstudio.com/industries/it-saas"
        url="https://theeyelevelstudio.com/industries/it-saas"
        image="https://theeyelevelstudio.com/og/industries-1200x630.png"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="px-4 text-center bg-secondary min-h-screen flex flex-col justify-center relative overflow-hidden ] pt-40 pb-[100px]">
          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <GreenButton>Industries / IT and SaaS</GreenButton>
            <h1 className="font-dela text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight uppercase text-primary">
              <span className="block mb-4 md:mb-6">Your product solves a real problem</span>
              <span className="text-[#E2FEA5] block">Your <WavyUnderline>marketing </WavyUnderline>should too</span>
            </h1>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-foreground/80">
              Demand gen, LinkedIn brand, and content that produces pipeline <span className="whitespace-nowrap">— not just traffic.</span>
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
        <section className="px-4 bg-background min-h-screen flex flex-col justify-center py-[100px]">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-block">
                <GreenButton>The Problem</GreenButton>
              </div>
              <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary">
                The <WavyUnderline>problem</WavyUnderline> with it and saas marketing
              </h2>
              <p className="font-bricolage text-sm md:text-base lg:text-base leading-relaxed text-foreground/70">
                Most B2B software companies have a marketing problem that looks like a sales problem. Traffic without intent. Trial signups that do not convert. A founder who is the only one who can close a deal. And a marketing team producing content that gets clicks but not conversations.
              </p>
            </div>
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <img 
                src={problemImage} 
                alt="IT and SaaS Marketing Problem" 
                className="w-full h-[300px] lg:h-[400px] xl:h-[450px] object-cover rounded-3xl border-2 border-primary/20 shadow-[0_0_40px_rgba(226,254,165,0.15)] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="px-4 bg-secondary min-h-screen flex flex-col justify-center py-[100px]">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-16">
              <GreenButton>What we do for the industry</GreenButton>
              <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl uppercase text-primary">
                What we do for <WavyUnderline>IT and SaaS</WavyUnderline>
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
        <section className="px-4 bg-background flex flex-col justify-center py-[100px]">
          <div className="max-w-4xl mx-auto w-full text-center">
            <GreenButton>Why EyeLevel</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary">
              Why <WavyUnderline>EyeLevel</WavyUnderline>
            </h2>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl leading-relaxed text-foreground/70">
              We run B2B marketing the way a practitioner would. Not a campaign manager. The person building your strategy has sat across the table from enterprise buyers and knows what moves them.
            </p>
          </div>
        </section>

        {/* CTA Band */}
        <section className="px-4 text-center bg-forest-deep min-h-screen flex flex-col justify-center py-[100px]">
          <div className="max-w-4xl mx-auto w-full">
            <GreenButton>CTA band</GreenButton>
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-6 uppercase text-primary">
              Ready to talk about your <WavyUnderline> it and saas </WavyUnderline> marketing?
            </h2>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 text-foreground/80">
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

export default ITSaaS;
