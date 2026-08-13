import { Navigate, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import PortfolioShell from "@/components/portfolio/PortfolioShell";
import ServicePanel from "@/components/portfolio/ServicePanel";
import { SERVICES, isPanelId, CATEGORY_BUTTONS } from "@/data/portfolio";
import { breadcrumbSchema, organizationSchema } from "@/hooks/schemas";

const ORIGIN = "https://theeyelevelstudio.com";

export default function PortfolioCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();

  if (!isPanelId(categoryId)) {
    return <Navigate to="/portfolio" replace />;
  }

  const service = SERVICES[categoryId];
  const label =
    CATEGORY_BUTTONS.find((c) => c.id === categoryId)?.label ?? service.title;
  const url = `${ORIGIN}/portfolio/${categoryId}`;

  return (
    <>
      <SEO
        title={`${label} Portfolio | Eyelevel Growth Studio`}
        description={service.description}
        schema={[
          organizationSchema,
          breadcrumbSchema([
            { name: "Home", url: `${ORIGIN}/` },
            { name: "Portfolio", url: `${ORIGIN}/portfolio` },
            { name: label, url },
          ]),
        ]}
        canonical={url}
        url={url}
      />

      <Header />
      <PortfolioShell>
        <ServicePanel service={service} />
      </PortfolioShell>
      <EnhancedFooter mascotBgClass="bg-pf-cream" />
    </>
  );
}
