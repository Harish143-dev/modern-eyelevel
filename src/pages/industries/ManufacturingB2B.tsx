import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import problemImage from "@/assets/industries/manufacturing_problem_realistic_v2.png";

const services = [
  { title: "LinkedIn B2B Marketing", description: "build the brand and founder visibility that gets you into the conversation early", slug: "linkedin-b2b-marketing" },
  { title: "AI-Era SEO", description: "rank for the product and category keywords your buyers are searching", slug: "ai-era-seo" },
  { title: "Content and Creative", description: "capability decks, product explainers, and industry content that pre-sells", slug: "content-and-creative" },
  { title: "Website Design and Development", description: "a site that reflects the quality of your product", slug: "website-design-and-development" },
  { title: "Revenue Attribution Dashboard", description: "connect digital activity to enquiry pipeline", slug: "revenue-attribution-dashboard" }
];

const ManufacturingB2B = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-lime selection:text-black">
      <SEO
        title="Manufacturing Marketing Agency Chennai | B2B Marketing | EyeLevel Growth Studio"
        description="LinkedIn, SEO, and content for Chennai and Coimbatore manufacturers. Your buyers moved online — we help them find you and choose you before the first call."
        keywords={["manufacturing marketing agency Chennai", "B2B marketing agency Chennai", "manufacturing digital marketing India", "industrial marketing agency", "Coimbatore B2B marketing", "manufacturing SEO India"]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Manufacturing and B2B Marketing",
            description: "LinkedIn, SEO, and content for Chennai and Coimbatore manufacturers. Your buyers moved online — we help them find you and choose you before the first call.",
            provider: {
              "@type": "Organization",
              name: "EyeLevel Growth Studio",
              url: "https://theeyelevelstudio.com"
            },
            areaServed: "India",
            url: "https://theeyelevelstudio.com/industries/manufacturing-b2b"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://theeyelevelstudio.com/" },
              { "@type": "ListItem", position: 2, name: "Industries", item: "https://theeyelevelstudio.com/industries" },
              { "@type": "ListItem", position: 3, name: "Manufacturing and B2B", item: "https://theeyelevelstudio.com/industries/manufacturing-b2b" }
            ]
          }
        ]}
        canonical="https://theeyelevelstudio.com/industries/manufacturing-b2b"
        url="https://theeyelevelstudio.com/industries/manufacturing-b2b"
        image="https://theeyelevelstudio.com/og/industries-1200x630.png"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="px-4 text-center bg-secondary min-h-screen flex flex-col justify-center relative overflow-hidden ] pt-40 pb-[100px]">
          <div className="max-w-5xl mx-auto relative z-10 w-full">
              <GreenButton>
                Industries / Manufacturing and B2B
              </GreenButton>
            <h1 className="font-dela text-3xl md:text-5xl lg:text-6xl mb-8 leading-[0.95] uppercase text-primary">
              Your buyers research online before they ever <WavyUnderline>call you</WavyUnderline>
            </h1>
            <p className="font-bricolage text-sm md:text-base lg:text-base max-w-3xl mx-auto mb-12 leading-relaxed text-foreground/80">
              Chennai and Coimbatore manufacturers. Your market moved online. Your marketing needs to catch up.
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
        <section className="px-4 bg-background min-h-screen flex flex-col justify-center py-[100px]">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-block">
                <GreenButton>The Reality Check</GreenButton>
              </div>
              <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary">
                The <WavyUnderline>problem</WavyUnderline> with manufacturing marketing
              </h2>
              <p className="font-bricolage text-sm md:text-base lg:text-base leading-relaxed text-foreground/70">
                Manufacturing companies have strong products and weak digital presence. Buyers shortlist vendors online now — even in B2B, even in traditional sectors. If you are not showing up in search, on LinkedIn, and with a credible website, you are being shortlisted out before the first conversation.
              </p>
            </div>
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <img 
                src={problemImage} 
                alt="Manufacturing Marketing Problem" 
                className="w-full h-[300px] lg:h-[400px] xl:h-[450px] object-cover rounded-3xl border-2 border-primary/20 shadow-[0_0_40px_rgba(226,254,165,0.15)] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="px-4 bg-secondary min-h-screen flex flex-col justify-center py-[100px]">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-16">
              <GreenButton>What we do for this industry</GreenButton>
              <h2 className="font-dela text-2xl md:text-4xl lg:text-5xl uppercase text-primary">
                What we do for <WavyUnderline>Manufacturing and B2B</WavyUnderline>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {services.map((service, i) => (
                <Link key={i} to={`/services/${service.slug}`} className="block group w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                  <div className="h-full rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] border-2 border-primary/10 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(226,254,165,0.12)] !bg-white/5 hover:!bg-white/10 flex flex-col text-left items-start">
                    <h3 className="font-dela text-sm sm:text-base md:text-xl mb-3 md:mb-4 uppercase flex justify-between items-start text-white group-hover:text-primary transition-colors duration-500 w-full">
                      <span className="pr-2">{service.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-[#E2FEA5] shrink-0" />
                    </h3>
                    <p className="font-bricolage text-[13px] sm:text-sm md:text-base leading-relaxed text-foreground/80">
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
            <h2 className="font-dela text-2xl md:text-4xl lg:text-5xl mb-8 uppercase text-primary">
              Why <WavyUnderline>EyeLevel</WavyUnderline>
            </h2>
            <p className="font-bricolage text-sm md:text-lg lg:text-xl leading-relaxed text-foreground/70">
              We translate complex products into clear value propositions that buyers can act on. No fluff. No generic content. Copy and strategy that reflects how your buyers actually evaluate vendors.
            </p>
          </div>
        </section>

        {/* CTA Band */}
        <section className="px-4 text-center bg-forest-deep min-h-screen flex flex-col justify-center py-[100px]">
          <div className="max-w-4xl mx-auto w-full">
            <GreenButton>CTA band</GreenButton>
            <h2 className="font-dela text-2xl md:text-4xl lg:text-5xl mb-6 uppercase text-primary">
              Ready to talk about your <WavyUnderline> manufacturing and b2b </WavyUnderline> marketing?
            </h2>
            <p className="font-bricolage text-sm md:text-lg max-w-3xl mx-auto mb-10 text-foreground/80">
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

export default ManufacturingB2B;
