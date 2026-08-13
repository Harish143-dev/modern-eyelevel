import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Photo } from "@/data/portfolio";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";

/**
 * Shape assumed for an image that has not reported its dimensions yet. Only
 * affects column balancing — tiles never crop, whatever this is.
 */
const DEFAULT_RATIO = 4 / 5;
export const GRID_GAP = 16;

export default function PhotoTilesGrid({
  photos,
  cols,
}: {
  photos: Photo[];
  cols: number;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const [colCount, setColCount] = useState(cols);
  const touchStartX = useRef<number | null>(null);

  useIsomorphicLayoutEffect(() => {
    const measure = () => {
      const w = window.innerWidth;
      setColCount(w < 600 ? 1 : w < 900 ? 2 : cols);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cols]);

  /**
   * Photos are dealt into columns in order, each going to whichever column is
   * currently shortest. That keeps the curated order reading left-to-right
   * across the top while packing without gaps.
   */
  const columns = useMemo(() => {
    const buckets: { photo: Photo; index: number }[][] = Array.from(
      { length: colCount },
      () => [],
    );
    const heights = new Array<number>(colCount).fill(0);

    photos.forEach((photo, index) => {
      let shortest = 0;
      for (let c = 1; c < colCount; c++) {
        if (heights[c] < heights[shortest]) shortest = c;
      }
      buckets[shortest].push({ photo, index });
      heights[shortest] += 1 / (ratios[photo.url] ?? DEFAULT_RATIO);
    });

    return buckets;
  }, [photos, ratios, colCount]);

  const recordRatio = useCallback((url: string, img: HTMLImageElement) => {
    if (!img.naturalWidth || !img.naturalHeight) return;
    setRatios((prev) =>
      prev[url] ? prev : { ...prev, [url]: img.naturalWidth / img.naturalHeight },
    );
  }, []);

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === null ? prev : (prev + 1) % photos.length,
      );
    },
    [photos.length],
  );

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setSelectedIndex((prev) =>
        prev === null ? prev : (prev - 1 + photos.length) % photos.length,
      );
    },
    [photos.length],
  );

  const handleClose = useCallback(() => setSelectedIndex(null), []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, handleNext, handlePrev, handleClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  return (
    <>
      <div className="flex items-start" style={{ gap: GRID_GAP }}>
        {columns.map((column, c) => (
          <div
            key={c}
            className="flex min-w-0 flex-1 flex-col"
            style={{ gap: GRID_GAP }}
          >
            {column.map(({ photo, index }) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Open image ${index + 1} of ${photos.length}`}
                className="relative block select-none overflow-hidden rounded-2xl border border-pf-border bg-black shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(22,48,39,0.12)]"
              >
                {/* h-auto: the image sets the tile's height, so nothing crops */}
                <img
                  src={photo.url}
                  alt=""
                  loading="lazy"
                  className="block h-auto w-full"
                  onLoad={(e) => recordRatio(photo.url, e.currentTarget)}
                />
              </button>
            ))}
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black/95 p-4"
          onClick={handleClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 z-[101] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          >
            ✕
          </button>

          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-[101] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:flex"
            onClick={handlePrev}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-[101] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:flex"
            onClick={handleNext}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <img
            src={photos[selectedIndex].url}
            alt=""
            draggable={false}
            className="max-h-[90vh] max-w-full select-none object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="pointer-events-none absolute bottom-6 left-1/2 z-[101] -translate-x-1/2 rounded-full bg-black/40 px-4 py-1.5 text-sm font-semibold tracking-widest text-white/60 backdrop-blur-sm">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
