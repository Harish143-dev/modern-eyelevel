import { useCallback, useMemo, useRef, useState } from "react";
import type { VideoTile } from "@/data/portfolio";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";
import VideoCard from "./VideoCard";
import { GRID_GAP } from "./PhotoTilesGrid";

/**
 * Most reels are 9:16, so that is the shape assumed until a clip reports its
 * own. Only affects column balancing — tiles take the real ratio once known.
 */
const DEFAULT_VIDEO_RATIO = 9 / 16;

/** Row unit fine enough that a tile's height rounds to within a few pixels. */
const VIDEO_ROW_UNIT = 4;

export default function VideoTilesGrid({
  videos,
  cols,
  disableTabs = false,
}: {
  videos: VideoTile[];
  cols: number;
  disableTabs?: boolean;
}) {
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const [colCount, setColCount] = useState(cols);
  const [colWidth, setColWidth] = useState(0);
  const [selectedTab, setSelectedTab] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const measure = () => {
      const w = window.innerWidth;
      const c = w < 600 ? 1 : w < 900 ? 2 : cols;
      setColCount(c);
      setColWidth((el.clientWidth - GRID_GAP * (c - 1)) / c);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [cols, selectedTab]); // re-measure when tab changes since content changes

  const recordRatio = useCallback((url: string, ratio: number) => {
    if (!url || !ratio) return;
    setRatios((prev) => (prev[url] ? prev : { ...prev, [url]: ratio }));
  }, []);

  // Compute unique categories based on video labels (clients)
  const tabs = useMemo(() => {
    const labels = videos.map((v) => v.label).filter(Boolean);
    return ["All", ...Array.from(new Set(labels))].sort((a, b) => {
      if (a === "All") return -1;
      if (b === "All") return 1;
      return a.localeCompare(b);
    });
  }, [videos]);

  /**
   * Filter videos by selected tab, then hold landscape reels back to the end, 
   * so the portrait grid runs uninterrupted and wide tiles sit together at the bottom.
   */
  const ordered = useMemo(() => {
    const filtered = selectedTab === "All" 
      ? videos 
      : videos.filter((v) => v.label === selectedTab);

    const isLandscape = (v: VideoTile) =>
      (ratios[v.url] ?? DEFAULT_VIDEO_RATIO) > 1;
      
    return [...filtered.filter((v) => !isLandscape(v)), ...filtered.filter(isLandscape)];
  }, [videos, ratios, selectedTab]);

  return (
    <div className="flex flex-col gap-8">
      {/* Category Tabs */}
      {!disableTabs && tabs.length > 2 && (
        <div className="mb-2 flex flex-wrap gap-2.5" role="tablist">
          {tabs.map((tab) => {
            const count = tab === "All" ? videos.length : videos.filter((v) => v.label === tab).length;
            const isActive = selectedTab === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedTab(tab)}
                className={`flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border-[1.5px] px-[14px] py-[6px] text-[12.5px] font-semibold transition-all duration-150 ease-in-out max-[560px]:px-3 max-[560px]:py-1.5 max-[560px]:text-[11.5px] ${
                  isActive
                    ? "border-pf-teal bg-pf-teal text-pf-cream shadow-md"
                    : "border-pf-border bg-white text-pf-teal hover:border-pf-gold"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      )}

      {/* Masonry Grid */}
      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
          gridAutoRows: `${VIDEO_ROW_UNIT}px`,
          gridAutoFlow: "row dense",
          columnGap: GRID_GAP,
          rowGap: 0,
        }}
      >
        {ordered.map((video) => {
          const ratio = ratios[video.url] ?? DEFAULT_VIDEO_RATIO;
          // Landscape reels earn two columns so they read at a decent size
          // instead of being squeezed into a portrait-width slot.
          const span = ratio > 1 && colCount > 1 ? 2 : 1;
          const tileWidth = colWidth * span + GRID_GAP * (span - 1);
          const rowSpan = colWidth
            ? Math.ceil((tileWidth / ratio + GRID_GAP) / VIDEO_ROW_UNIT)
            : undefined;

          return (
            <div
              key={video.url}
              style={{
                gridColumnEnd: `span ${span}`,
                gridRowEnd: rowSpan ? `span ${rowSpan}` : undefined,
                alignSelf: "start",
                marginBottom: GRID_GAP,
              }}
            >
              <VideoCard 
                video={video} 
                ratio={ratio} 
                showBadge={!disableTabs && selectedTab === "All"}
                onRatio={recordRatio} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
