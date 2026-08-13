import { Link } from "react-router-dom";
import { HOME_CARDS } from "@/data/portfolio";
import HatchPanel from "./HatchPanel";

export default function PortfolioLanding() {
  return (
    <div className="animate-pf-fade">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="mb-3.5 inline-block rounded-[20px] bg-pf-teal px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[1.5px] text-pf-gold">
            What We Do
          </span>
          <h2 className="font-pf-display text-[clamp(22px,2.8vw,30px)] font-bold text-pf-teal">
            Choose a category to see the work
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px] max-[900px]:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] max-[560px]:grid-cols-1">
        {HOME_CARDS.map((card) => (
          <Link
            key={card.id}
            to={`/portfolio/${card.id}`}
            className="group flex flex-col overflow-hidden rounded-[18px] border border-pf-border bg-pf-card transition-all duration-200 ease-in-out hover:-translate-y-1 hover:border-pf-gold hover:shadow-[0_14px_30px_rgba(22,48,39,0.12)]"
          >
            {card.imageUrl ? (
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <HatchPanel
                icon={card.icon}
                label={card.mediaLabel}
                className="aspect-[16/10]"
              />
            )}

            <div className="flex grow flex-col gap-2.5 px-6 pb-6 pt-[22px]">
              <h3 className="text-[19px] font-bold text-pf-teal">
                {card.title}
              </h3>
              <p className="grow text-[13.5px] text-pf-muted">
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
