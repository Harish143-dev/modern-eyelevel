/**
 * The teal hero the whole portfolio section sits under. The site's own Header
 * is absolutely positioned over the top of the page, hence the generous top
 * padding — same allowance the old Works page made.
 */
export default function PortfolioHero() {
  return (
    <div className="bg-pf-teal px-[8vw] pb-12 pt-32 text-pf-cream max-[900px]:px-[6vw] max-[900px]:pb-9 max-[560px]:pb-7">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-3.5 text-[13px] font-semibold uppercase tracking-[2px] text-pf-gold">
          Client Portfolio
        </div>
        <h1 className="mb-4 max-w-[820px] font-pf-display text-[clamp(30px,4.6vw,48px)] font-bold leading-[1.15]">
          Everything EyeLevel has built and managed, in one place.
        </h1>
        <p className="max-w-[600px] text-[16.5px] text-pf-on-dark max-[560px]:text-[15px]">
          Browse by category — websites, photography, brand and campaign work,
          social media, and video.
        </p>
      </div>
    </div>
  );
}
