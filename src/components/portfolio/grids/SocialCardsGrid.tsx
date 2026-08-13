import type { SocialCard } from "@/data/portfolio";

export default function SocialCardsGrid({ cards }: { cards: SocialCard[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 max-[560px]:grid-cols-1">
      {cards.map((card) => (
        <div
          key={card.handle}
          className="flex flex-col gap-3.5 rounded-2xl bg-pf-teal p-6 text-pf-cream"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-pf-gold text-lg font-bold text-pf-teal">
            {card.logoUrl ? (
              <img
                src={card.logoUrl}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              card.iconText
            )}
          </div>

          <div className="text-xs font-semibold uppercase tracking-[1.5px] text-pf-gold">
            {card.platform}
          </div>
          <div className="font-pf-display text-[17px] font-bold">
            {card.handle}
          </div>
          <div className="text-[13px] text-pf-on-dark">{card.description}</div>

          <a
            href={card.link || "#"}
            target={card.link ? "_blank" : undefined}
            rel={card.link ? "noopener noreferrer" : undefined}
            className="mt-auto inline-block w-fit border-b border-pf-gold text-[13px] font-semibold text-pf-gold"
          >
            {card.linkText}
          </a>
        </div>
      ))}
    </div>
  );
}
