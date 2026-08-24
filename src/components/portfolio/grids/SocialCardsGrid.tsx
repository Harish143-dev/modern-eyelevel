import { useState, useEffect, useRef } from "react";
import { 
  Radio, 
  ArrowUpRight
} from "lucide-react";
import type { SocialCard } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import Iphone16Pro from "@/components/portfolio/iphone16-pro";

interface Props {
  cards: SocialCard[];
  title?: string;
  note?: string;
}

export default function SocialCardsGrid({ cards, title, note }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [iframeState, setIframeState] = useState<"loading" | "loaded" | "error">("loading");
  const loadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeCard = cards[selectedIndex] || cards[0];

  useEffect(() => {
    setIframeState("loading");
    if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);

    // Timeout fallback if Instagram cross-origin blocks iframe loading event
    loadTimeoutRef.current = setTimeout(() => {
      setIframeState((prev) => (prev === "loading" ? "loaded" : prev));
    }, 2800);

    return () => {
      if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
    };
  }, [selectedIndex]);

  if (!cards.length) return null;

  return (
    <div className="mt-6 sm:mt-8 flex flex-col gap-9 lg:grid lg:grid-cols-[1fr_235px] xl:grid-cols-[1fr_245px] lg:gap-8 xl:gap-10 lg:items-start max-w-[1060px]">
      {/* ----------------------------------------------------------------- */}
      {/* LEFT COLUMN: Header + 6-Brand Matrix                              */}
      {/* ----------------------------------------------------------------- */}
      <div className="flex flex-col gap-4">
        {/* Category Work Header */}
        {(title || note) && (
          <div className="flex flex-col gap-1.5">
            {title && (
              <h3 className="text-xl font-bold text-pf-teal">
                {title}
              </h3>
            )}
            {note && (
              <p className="text-[13.5px] text-pf-muted">
                {note}
              </p>
            )}
          </div>
        )}

        {/* Eyebrow & Hint */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-pf-border bg-pf-card px-3 py-1 text-xs font-bold uppercase tracking-[1.5px] text-pf-teal">
            <Radio className="h-3 w-3 animate-pulse text-emerald-600" />
            <span>Live Account Roster ({cards.length})</span>
          </div>
          <span className="text-xs font-medium text-pf-muted">
            Click any account to preview live feed
          </span>
        </div>

        {/* 2-Column Brand Selector Matrix */}
        <div className="grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
          {cards.map((card, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={card.handle}
                type="button"
                onClick={() => {
                  if (idx !== selectedIndex) {
                    setSelectedIndex(idx);
                    setIframeState("loading");
                  }
                }}
                className={cn(
                  "group relative flex items-center gap-3 rounded-2xl p-3.5 text-left transition-all duration-300",
                  isSelected
                    ? "bg-pf-teal text-pf-cream shadow-[0_10px_26px_rgba(2,48,32,0.20)] ring-2 ring-pf-gold"
                    : "border border-pf-border bg-white text-pf-teal hover:border-pf-gold/60 hover:bg-pf-card/80 hover:shadow-sm"
                )}
              >
                {/* Logo / Avatar */}
                <div
                  className={cn(
                    "flex h-11 w-11 min-h-[44px] min-w-[44px] max-h-[44px] max-w-[44px] shrink-0 items-center justify-center overflow-hidden rounded-xl text-xs font-bold transition-transform group-hover:scale-105",
                    isSelected
                      ? "bg-pf-gold text-pf-teal ring-2 ring-pf-gold/40"
                      : "border border-pf-border bg-pf-chip text-pf-teal"
                  )}
                >
                  {card.logoUrl ? (
                    <img
                      src={card.logoUrl}
                      alt={card.name || card.handle}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    card.iconText
                  )}
                </div>

                {/* Account Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="truncate text-[14px] font-bold">
                      {card.name || card.handle.replace("@", "")}
                    </span>
                    {isSelected && (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pf-gold animate-pulse" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "truncate text-xs font-medium",
                      isSelected ? "text-pf-gold" : "text-pf-muted"
                    )}
                  >
                    {card.category || card.platform}
                  </div>
                </div>

                {/* Chevron/Arrow icon indicator */}
                <ArrowUpRight
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-300",
                    isSelected
                      ? "rotate-45 text-pf-gold"
                      : "text-pf-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* RIGHT COLUMN: Realistic Compact iPhone 16 Pro Frame               */}
      {/* ----------------------------------------------------------------- */}
      <div className="flex justify-center lg:sticky lg:top-24">
        <div className="w-full max-w-[235px] xl:max-w-[245px]">
          <Iphone16Pro
            finish="black"
            showIsland={true}
            showStatusBar={true}
            statusBarColor="dark"
            glassReflection={true}
            shadow={true}
            wallpaper="bg-white"
          >
            {/* Live Feed / Sandboxed Iframe Container inside iPhone Screen */}
            <div className="relative flex flex-col h-full w-full overflow-hidden bg-white">
              <div className="relative flex-1 w-full overflow-hidden bg-white [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pt-8 pb-5">
                <iframe
                  key={activeCard.handle}
                  src={activeCard.embedUrl || `https://www.instagram.com/${activeCard.handle.replace("@", "").trim()}/embed/`}
                  title={`${activeCard.handle} live instagram feed`}
                  onLoad={() => setIframeState("loaded")}
                  onError={() => setIframeState("error")}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className={cn(
                    "border-0 transition-opacity duration-300 pointer-events-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                    iframeState === "loaded" ? "opacity-100" : "opacity-0"
                  )}
                  style={{
                    width: "128%",
                    height: "128%",
                    transform: "scale(0.78)",
                    transformOrigin: "top left",
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                    overflow: "hidden",
                  }}
                />

                {/* Hide Instagram Native Icon Overlay (Removes pink/purple gradient line entirely) */}
                {iframeState === "loaded" && (
                  <div className="absolute top-[26px] right-0 z-20 h-[52px] w-[58px] bg-white pointer-events-none" />
                )}

                {/* Skeleton Loading State Overlay */}
                {iframeState === "loading" && <InstagramProfileSkeleton />}

                {/* Error State */}
                {iframeState === "error" && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white px-4 text-center">
                    <span className="mb-2 text-2xl">😕</span>
                    <p className="text-xs font-semibold text-neutral-900">Feed unavailable</p>
                    <p className="mt-1 text-[10px] text-neutral-500">Instagram embed is restricted for this account.</p>
                  </div>
                )}
              </div>
            </div>
          </Iphone16Pro>
        </div>
      </div>
    </div>
  );
}

function InstagramProfileSkeleton() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col bg-white px-3.5 pt-10 pb-4 select-none pointer-events-none">
      {/* Top Profile Header - below status bar/island */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {/* Avatar Skeleton */}
          <div className="h-9 w-9 shrink-0 rounded-full bg-neutral-200 animate-pulse" />

          {/* Account Details Skeleton */}
          <div className="min-w-0 flex-1 flex flex-col justify-center gap-1.5">
            <div className="h-3 w-24 rounded bg-neutral-200 animate-pulse" />
            <div className="h-2 w-16 rounded bg-neutral-100 animate-pulse" />
            <div className="h-2 w-32 rounded bg-neutral-200 animate-pulse" />
          </div>
        </div>

        {/* Mini Logo Placeholder Skeleton */}
        <div className="h-4 w-4 shrink-0 rounded-[4px] bg-neutral-200 animate-pulse" />
      </div>

      {/* 3x2 Shimmering Posts Grid */}
      <div className="mt-4 grid grid-cols-3 gap-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square w-full rounded-[2px] bg-neutral-200/90 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
