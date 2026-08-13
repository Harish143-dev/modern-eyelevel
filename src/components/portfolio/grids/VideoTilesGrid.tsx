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
}: {
  videos: VideoTile[];
  cols: number;
}) {
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const [colCount, setColCount] = useState(cols);
  const [colWidth, setColWidth] = useState(0);
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
  }, [cols]);

  const recordRatio = useCallback((url: string, ratio: number) => {
    if (!url || !ratio) return;
    setRatios((prev) => (prev[url] ? prev : { ...prev, [url]: ratio }));
  }, []);

  /**
   * Landscape reels are held back to the end, so the portrait grid runs
   * uninterrupted and the wide tiles sit together at the bottom. Stable, so
   * client order is otherwise untouched.
   */
  const ordered = useMemo(() => {
    const isLandscape = (v: VideoTile) =>
      (ratios[v.url] ?? DEFAULT_VIDEO_RATIO) > 1;
    return [...videos.filter((v) => !isLandscape(v)), ...videos.filter(isLandscape)];
  }, [videos, ratios]);

  return (
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
            <VideoCard video={video} ratio={ratio} onRatio={recordRatio} />
          </div>
        );
      })}
    </div>
  );
}
