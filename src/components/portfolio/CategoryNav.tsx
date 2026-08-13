import { Link, useLocation } from "react-router-dom";
import { CATEGORY_BUTTONS } from "@/data/portfolio";
import { PORTFOLIO_ICONS } from "./iconMap";

/**
 * Sticky category strip. The site header is absolutely positioned and scrolls
 * away, so `top-0` is safe here — nothing overlaps it once the page moves.
 */
export default function CategoryNav() {
  const { pathname } = useLocation();

  return (
    <div className="sticky top-0 z-40 border-b border-pf-border bg-pf-cream px-[8vw] py-4 max-[900px]:px-[6vw] max-[900px]:py-3.5">
      <nav
        aria-label="Portfolio categories"
        className="pf-scrollbar-hide mx-auto flex max-w-[1200px] flex-wrap gap-2.5 max-[900px]:flex-nowrap max-[900px]:overflow-x-auto max-[900px]:pb-0.5"
      >
        {CATEGORY_BUTTONS.map((button) => {
          const Icon = PORTFOLIO_ICONS[button.icon];
          const isActive = pathname === `/portfolio/${button.id}`;

          return (
            <Link
              key={button.id}
              to={`/portfolio/${button.id}`}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-2 whitespace-nowrap rounded-[30px] border-[1.5px] px-[18px] py-[11px] text-[13.5px] font-semibold transition-all duration-150 ease-in-out max-[560px]:px-3.5 max-[560px]:py-2.5 max-[560px]:text-[12.5px] ${
                isActive
                  ? "border-pf-teal bg-pf-teal text-pf-cream"
                  : "border-pf-border bg-white text-pf-teal hover:border-pf-gold"
              }`}
            >
              <Icon
                className={`h-4 w-4 ${isActive ? "text-pf-gold" : "text-pf-teal"}`}
              />
              {button.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
