import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { WorkItem } from "@/data/works";

interface PhoneCarouselProps {
  items: WorkItem[];
  /** Category name, shown as the eyebrow above each title. */
  categoryName: string;
  onOpen: (id: string) => void;
}

/**
 * Social work is shown one piece at a time in a 9:16 card, paged with the
 * controls beside the copy. The artwork is already shot in a device mockup, so
 * nothing draws a frame around it here.
 *
 * The arrows and dots only appear once there is more than one piece, so the
 * component reads as a single feature card while the category is still small.
 */
const PhoneCarousel = ({ items, categoryName, onOpen }: PhoneCarouselProps) => {
  const [index, setIndex] = useState(0);
  // Tracks which way to slide: 1 moves forward, -1 back.
  const [direction, setDirection] = useState(0);

  const count = items.length;
  const many = count > 1;

  // Guards against an out-of-range index when the category changes underneath.
  useEffect(() => {
    setIndex(0);
    setDirection(0);
  }, [categoryName]);

  const page = useCallback(
    (delta: number) => {
      if (!many) return;
      setDirection(delta);
      setIndex((i) => (i + delta + count) % count);
    },
    [count, many]
  );

  const goTo = (next: number) => {
    if (next === index) return;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  useEffect(() => {
    if (!many) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") page(-1);
      if (e.key === "ArrowRight") page(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [many, page]);

  const current = items[index];
  if (!current) return null;

  const arrowClass =
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-background bg-card text-background transition hover:bg-background hover:text-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-card";

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-16">
      {/* Left — the device, with its controls directly beneath */}
      <div className="flex shrink-0 flex-col items-center gap-7">
        <button
          type="button"
          onClick={() => onOpen(current.id)}
          aria-label={`Open ${current.title}`}
          className="group relative w-[min(72vw,290px)] shrink-0 rounded-[3rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-4 focus-visible:ring-offset-card"
        >
          {/* The artwork carries its own device frame, so none is drawn here */}
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {current.type === "video" ? (
                  <video
                    src={current.src}
                    muted
                    playsInline
                    loop
                    autoPlay
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={current.src}
                    alt={current.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {current.type === "video" && (
            <span className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-0.5 h-4 w-4 fill-primary-foreground text-primary-foreground" />
            </span>
          )}
        </button>

      </div>

      {/* Right — the story for whichever piece is on screen */}
      <figcaption className="max-w-[46ch] text-center md:flex-1 md:text-left">
        {/* Only the copy is keyed, so paging never re-animates the controls */}
        <motion.div
          key={`cap-${current.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-bricolage text-[0.68rem] uppercase tracking-[0.12em] text-brand-black/50">
            {categoryName}
          </span>
          <h3 className="mt-2 font-dela text-2xl uppercase leading-tight text-background md:text-3xl">
            {current.title}
          </h3>
          <p className="mt-4 font-bricolage leading-relaxed text-brand-black/60">
            {current.description}
          </p>
          <span className="mt-5 inline-block rounded-full bg-brand-black/[0.06] px-3.5 py-1.5 font-bricolage text-[0.7rem] text-brand-black/55">
            {current.tag}
          </span>
        </motion.div>

        {/* Controls live beside the copy, so reading and paging share one column */}
        {many && (
          <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => page(-1)}
                aria-label="Previous project"
                className={arrowClass}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => page(1)}
                aria-label="Next project"
                className={arrowClass}
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <span className="ml-1 font-bricolage text-sm tracking-wide text-brand-black/40">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </span>
            </div>

            <div
              className="flex items-center gap-2.5"
              role="tablist"
              aria-label="Choose project"
            >
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={item.title}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-7 bg-background"
                      : "w-2 bg-background/25 hover:bg-background/45"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </figcaption>
    </div>
  );
};

export default PhoneCarousel;
