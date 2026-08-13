import { Link } from "react-router-dom";
import type { Service } from "@/data/portfolio";
import ToolPill from "./ToolPill";
import SiteCardsGrid from "./grids/SiteCardsGrid";
import PhotoTilesGrid from "./grids/PhotoTilesGrid";
import PhotoTabsGrid from "./grids/PhotoTabsGrid";
import SocialCardsGrid from "./grids/SocialCardsGrid";
import VideoTilesGrid from "./grids/VideoTilesGrid";

export default function ServicePanel({ service }: { service: Service }) {
  return (
    <div className="animate-pf-fade">
      <Link
        to="/portfolio"
        className="mb-7 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-pf-muted transition-colors hover:text-pf-teal"
      >
        ← All Categories
      </Link>

      <h2 className="mb-4 max-w-[700px] font-pf-display text-[clamp(26px,3.4vw,38px)] font-bold leading-[1.15] text-pf-teal">
        {service.title}
      </h2>

      <p className="mb-9 max-w-[640px] text-[15.5px] leading-[1.7] text-pf-body max-[560px]:text-[14.5px]">
        {service.description}
      </p>

      <SectionLabel>What We Do</SectionLabel>
      <div className="mb-8 grid grid-cols-3 gap-3 max-[700px]:grid-cols-2">
        {service.whatWeDo.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2.5 rounded-xl border border-pf-border bg-white px-4 py-3.5 text-[13.5px] font-semibold text-pf-teal"
          >
            <span className="flex h-[22px] w-[22px] min-w-[22px] items-center justify-center rounded-full bg-pf-gold text-xs font-bold text-pf-teal">
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>

      <SectionLabel>{service.toolsLabel}</SectionLabel>
      <div className="mb-2 flex flex-wrap gap-2.5">
        {service.tools.map((tool) => (
          <ToolPill key={tool.name} label={tool.name} icon={tool.icon} />
        ))}
      </div>

      <div className="mt-12 border-t border-pf-border pt-8">
        <div className="mb-1.5 text-xl font-bold text-pf-teal">
          {service.workTitle}
        </div>
        <div className="mb-6 text-[13.5px] text-pf-muted">
          {service.workNote}
        </div>

        <ServiceWork service={service} />
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3.5 text-xs font-bold uppercase tracking-[1.5px] text-pf-muted">
      {children}
    </div>
  );
}

/**
 * Picks the grid for the category's medium — and, while the asset folders are
 * still empty, says so in one line rather than rendering an empty grid.
 */
function ServiceWork({ service }: { service: Service }) {
  const cols = service.gridCols ?? 3;

  switch (service.workType) {
    case "sites": {
      const cards = service.siteCards ?? [];
      return cards.length ? (
        <SiteCardsGrid cards={cards} />
      ) : (
        <EmptyNote>{service.emptyNote}</EmptyNote>
      );
    }

    case "photos": {
      if (service.photoTabs?.length) {
        return <PhotoTabsGrid tabs={service.photoTabs} cols={cols} />;
      }
      const photos = service.photos ?? [];
      return photos.length ? (
        <PhotoTilesGrid photos={photos} cols={cols} />
      ) : (
        <EmptyNote>{service.emptyNote}</EmptyNote>
      );
    }

    case "social": {
      const cards = service.socialCards ?? [];
      return cards.length ? (
        <SocialCardsGrid cards={cards} />
      ) : (
        <EmptyNote>{service.emptyNote}</EmptyNote>
      );
    }

    case "videos": {
      const videos = service.videos ?? [];
      return videos.length ? (
        <VideoTilesGrid videos={videos} cols={cols} />
      ) : (
        <EmptyNote>{service.emptyNote}</EmptyNote>
      );
    }
  }
}

function EmptyNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-pf-border bg-white/60 px-6 py-12 text-center text-[14px] text-pf-muted">
      {children}
    </div>
  );
}
