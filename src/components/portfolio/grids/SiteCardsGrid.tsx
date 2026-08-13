import type { SiteCard } from "@/data/portfolio";
import HatchPanel from "../HatchPanel";

export default function SiteCardsGrid({ cards }: { cards: SiteCard[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-[560px]:grid-cols-1">
      {cards.map((site) => (
        <div
          key={site.name}
          className="overflow-hidden rounded-2xl border border-pf-border bg-pf-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(22,48,39,0.12)]"
        >
          {site.imageUrl ? (
            <div
              className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden ${
                site.fullBleed ? "" : "px-8 py-5"
              }`}
              style={{ backgroundColor: site.imageBg || "#000" }}
            >
              {/* Tall or square logos are capped so they don't tower over the
                  wide wordmarks or run under the flag pill. */}
              <img
                src={site.imageUrl}
                alt={site.name}
                loading="lazy"
                className={
                  site.fullBleed
                    ? "h-full w-full object-contain"
                    : "max-h-[52%] max-w-full object-contain"
                }
              />
              {site.flag && <FlagPill label={site.flag} />}
            </div>
          ) : (
            <HatchPanel label={site.shotLabel} className="aspect-[16/10]">
              {site.flag && <FlagPill label={site.flag} />}
            </HatchPanel>
          )}

          <div className="p-5 pb-[22px]">
            <div className="mb-1 text-lg font-bold text-pf-teal">
              {site.name}
            </div>
            <div className="mb-3.5 text-[13.5px] text-pf-muted">
              {site.description}
            </div>

            {site.link && site.link !== "#" && (
              <a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border-b-[1.5px] border-pf-gold pb-0.5 text-[13.5px] font-semibold text-pf-teal"
              >
                Visit site →
              </a>
            )}

            {site.badges && site.badges.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {site.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-[20px] bg-pf-chip px-2.5 py-1 text-[11px] font-semibold tracking-[0.3px] text-pf-teal"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function FlagPill({ label }: { label: string }) {
  return (
    <span className="absolute left-3 top-3 rounded-[20px] bg-pf-gold px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.5px] text-pf-teal">
      {label}
    </span>
  );
}
