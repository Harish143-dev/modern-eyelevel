import PortfolioHero from "./PortfolioHero";
import CategoryNav from "./CategoryNav";

/**
 * Everything between the site header and footer on a portfolio route.
 *
 * `pf-root` is what lets this section keep the portfolio's own cream/teal/gold
 * palette and Inter + Space Grotesk inside a site whose base layer sets a
 * forest background, Dela Gothic headings and a border on every <section>.
 * See the `.pf-root` rules in src/index.css.
 */
export default function PortfolioShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pf-root min-h-screen bg-pf-cream text-pf-ink">
      <PortfolioHero />
      <CategoryNav />
      {/* Padding sits outside the max-width so the body lines up with the hero
          and the category strip, which are both full-bleed with the same inset. */}
      <main className="px-[8vw] pb-20 pt-12 max-[900px]:px-[6vw] max-[900px]:pb-[60px] max-[900px]:pt-9">
        <div className="mx-auto max-w-[1200px]">{children}</div>
      </main>
    </div>
  );
}
