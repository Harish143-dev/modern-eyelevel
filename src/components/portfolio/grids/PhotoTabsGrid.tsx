import { useState } from "react";
import type { PhotoTab } from "@/data/portfolio";
import PhotoTilesGrid from "./PhotoTilesGrid";

export default function PhotoTabsGrid({
  tabs,
  cols,
}: {
  tabs: PhotoTab[];
  cols: number;
}) {
  const [active, setActive] = useState(0);
  const current = tabs[active] ?? tabs[0];

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2.5" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-[30px] border-[1.5px] px-[18px] py-2.5 text-[13.5px] font-semibold transition-all duration-150 ease-in-out max-[560px]:px-3.5 max-[560px]:py-2 max-[560px]:text-[12.5px] ${
              i === active
                ? "border-pf-teal bg-pf-teal text-pf-cream"
                : "border-pf-border bg-white text-pf-teal hover:border-pf-gold"
            }`}
          >
            {tab.label}
            <span className={i === active ? "text-pf-gold" : "text-pf-muted"}>
              {tab.photos.length}
            </span>
          </button>
        ))}
      </div>

      {/* key resets measured ratios and lightbox state when the tab changes */}
      <PhotoTilesGrid key={current.label} photos={current.photos} cols={cols} />
    </>
  );
}
