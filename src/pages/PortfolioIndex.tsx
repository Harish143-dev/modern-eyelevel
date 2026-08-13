import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import PortfolioShell from "@/components/portfolio/PortfolioShell";
import PortfolioLanding from "@/components/portfolio/PortfolioLanding";
import { LEGACY_CATEGORY_REDIRECTS } from "@/data/portfolio";
import { breadcrumbSchema, organizationSchema } from "@/hooks/schemas";

export default function PortfolioIndex() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // The old portfolio kept its category in `?c=`. Those links are in the wild,
  // so send them to the page that now holds that work.
  const legacy = searchParams.get("c");
  useEffect(() => {
    if (!legacy) return;
    const target = LEGACY_CATEGORY_REDIRECTS[legacy];
    if (target) navigate(`/portfolio/${target}`, { replace: true });
  }, [legacy, navigate]);

  return (
    <>
      <SEO
        title="Portfolio | Eyelevel Growth Studio — Websites, Photography, Brand, Social & Video"
        description="Client work from Eyelevel Growth Studio: ecommerce and brand websites, product photography, brand and campaign creative, social media management, video and AI video."
        keywords={[
          "creative agency portfolio Chennai",
          "brand campaign portfolio India",
          "product photography portfolio Chennai",
          "video production portfolio India",
        ]}
        schema={[
          organizationSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Portfolio", url: "https://theeyelevelstudio.com/portfolio" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/portfolio"
        url="https://theeyelevelstudio.com/portfolio"
      />

      <Header />
      <PortfolioShell>
        <PortfolioLanding />
      </PortfolioShell>
      <EnhancedFooter mascotBgClass="bg-pf-cream" />
    </>
  );
}
