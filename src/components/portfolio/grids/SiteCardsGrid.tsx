import { useState } from "react";
import type { SiteCard } from "@/data/portfolio";
import HatchPanel from "../HatchPanel";
import WebsitePreviewModal from "../WebsitePreviewModal";

export default function SiteCardsGrid({ cards }: { cards: SiteCard[] }) {
  const [active, setActive] = useState<SiteCard | null>(null);

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-[560px]:grid-cols-1">
        {cards.map((site) => {
          const canPreview = Boolean(site.embeddable || site.previewUrl);

          // The card visual is the site itself — the screenshot, cropped to its
          // top so it reads like a real page. No logo, no flag pill.
          const media = site.previewUrl ? (
            <div className="relative aspect-[16/10] overflow-hidden bg-white">
              <img
                src={site.previewUrl}
                alt={`${site.name} website`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ) : (
            <HatchPanel label={site.shotLabel} className="aspect-[16/10]" />
          );

          return (
            <div
              key={site.name}
              className="overflow-hidden rounded-2xl border border-pf-border bg-pf-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(22,48,39,0.12)]"
            >
              {canPreview && site.previewUrl ? (
                <button
                  type="button"
                  onClick={() => setActive(site)}
                  aria-label={`Preview the ${site.name} website`}
                  className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pf-gold"
                >
                  {media}
                </button>
              ) : (
                media
              )}

              <div className="p-5 pb-[22px]">
                <div className="mb-1 text-lg font-bold text-pf-teal">
                  {site.name}
                </div>
                <div className="mb-3.5 text-[13.5px] text-pf-muted">
                  {site.description}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  {canPreview && (
                    <button
                      type="button"
                      onClick={() => setActive(site)}
                      className="inline-flex items-center gap-1.5 border-b-[1.5px] border-pf-gold pb-0.5 text-[13.5px] font-semibold text-pf-teal"
                    >
                      {site.embeddable ? "Preview live →" : "Preview →"}
                    </button>
                  )}
                  {site.link && site.link !== "#" && (
                    <a
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-pf-muted transition-colors hover:text-pf-teal"
                    >
                      Visit site ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <WebsitePreviewModal site={active} onClose={() => setActive(null)} />
    </>
  );
}
