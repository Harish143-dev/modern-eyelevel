import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Grid3X3, 
  Clapperboard, 
  Bookmark, 
  CheckCircle2, 
  Sparkles, 
  Wifi, 
  Battery, 
  Radio, 
  ArrowUpRight,
  ShieldCheck,
  RotateCw
} from "lucide-react";
import type { SocialCard } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface Props {
  cards: SocialCard[];
}

export default function SocialCardsGrid({ cards }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [iframeState, setIframeState] = useState<"loading" | "loaded" | "error">("loading");
  const [activeTab, setActiveTab] = useState<"grid" | "reels">("grid");
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
    <div className="mt-2 flex flex-col gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:items-start">
      {/* ----------------------------------------------------------------- */}
      {/* LEFT COLUMN: 8-Brand Matrix & Selected Account Narrative Spotlight */}
      {/* ----------------------------------------------------------------- */}
      <div className="flex flex-col gap-6">
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
                onClick={() => setSelectedIndex(idx)}
                className={cn(
                  "group relative flex items-center gap-3 rounded-2xl p-3.5 text-left transition-all duration-300",
                  isSelected
                    ? "bg-pf-teal text-pf-cream shadow-[0_12px_28px_rgba(2,48,32,0.22)] ring-2 ring-pf-gold"
                    : "border border-pf-border bg-white text-pf-teal hover:border-pf-gold/60 hover:bg-pf-card/80 hover:shadow-sm"
                )}
              >
                {/* Logo / Avatar */}
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl text-sm font-bold transition-transform group-hover:scale-105",
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
                    <span className="truncate text-[14.5px] font-bold">
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

        {/* Selected Account Narrative Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard.handle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-4 rounded-2xl border border-pf-border bg-white p-6 shadow-sm"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-pf-border pb-3.5">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-pf-display text-lg font-bold text-pf-teal">
                    {activeCard.name || activeCard.handle}
                  </h3>
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                    Active Account
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-medium text-pf-gold">{activeCard.handle}</span>
                  <span className="text-pf-muted">•</span>
                  <span className="font-medium text-pf-muted">{activeCard.category || activeCard.platform}</span>
                </div>
              </div>

              {/* Stats badges */}
              <div className="flex items-center gap-2">
                {activeCard.postsCount && (
                  <div className="rounded-full border border-pf-border bg-pf-card px-2.5 py-0.5 text-xs font-bold text-pf-teal">
                    {activeCard.postsCount} <span className="font-normal text-pf-muted">posts</span>
                  </div>
                )}
                {activeCard.followers && (
                  <div className="rounded-full border border-pf-border bg-pf-card px-2.5 py-0.5 text-xs font-bold text-pf-teal">
                    {activeCard.followers} <span className="font-normal text-pf-muted">followers</span>
                  </div>
                )}
              </div>
            </div>

            {/* Formatted Bio with emojis */}
            {activeCard.bio && (
              <div className="rounded-xl border border-pf-border/70 bg-pf-chip/40 p-3.5 text-[13px] leading-relaxed text-pf-teal whitespace-pre-line">
                {activeCard.bio}
              </div>
            )}

            {/* Bio Link if present */}
            {activeCard.bioLink && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-pf-muted font-medium">Link in Bio:</span>
                <a
                  href={activeCard.bioLink.startsWith("http") ? activeCard.bioLink : `https://${activeCard.bioLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pf-teal underline decoration-pf-gold decoration-1 underline-offset-2 hover:text-pf-gold truncate max-w-[280px]"
                >
                  {activeCard.bioLink}
                </a>
              </div>
            )}

            {/* Story Highlights if available */}
            {activeCard.storyHighlights && activeCard.storyHighlights.length > 0 && (
              <div className="flex flex-col gap-2 pt-1 border-t border-pf-border/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-pf-muted">
                  Story Highlights Managed
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCard.storyHighlights.map((hl) => (
                    <span
                      key={hl.name}
                      className="inline-flex items-center gap-1 rounded-full border border-pf-border bg-white px-3 py-1 text-xs font-medium text-pf-teal shadow-xs"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-amber-400 to-pink-500" />
                      {hl.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Strategy / Working Model Narrative */}
            {activeCard.pitch && (
              <div className="relative rounded-xl border-l-4 border-pf-gold bg-pf-card/60 p-4">
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-pf-teal flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-pf-gold" />
                  <span>How We Run It</span>
                </div>
                <p className="text-[13.5px] leading-relaxed text-pf-body">
                  <span className="font-semibold text-pf-teal">
                    Yours would work the same way:{" "}
                  </span>
                  {activeCard.pitch}
                </p>
              </div>
            )}

            {/* Strategic Deliverables Chips */}
            {activeCard.highlights && activeCard.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {activeCard.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-pf-border/80 bg-white px-2.5 py-1 text-xs font-medium text-pf-teal"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* External Direct Action */}
            <div className="mt-1 flex items-center justify-between pt-3 border-t border-pf-border">
              <span className="text-xs text-pf-muted">
                Managed end-to-end by The EyeLevel Studio
              </span>
              <a
                href={activeCard.link || `https://www.instagram.com/${activeCard.handle.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-pf-teal px-4 py-2 text-xs font-bold text-pf-cream transition-colors hover:bg-pf-teal/90 hover:text-pf-gold"
              >
                <span>Visit on Instagram</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* RIGHT COLUMN: Realistic Phone Frame with Live Embed & Profile UI  */}
      {/* ----------------------------------------------------------------- */}
      <div className="flex justify-center lg:sticky lg:top-24">
        <div className="relative w-full max-w-[340px] aspect-[9/18.5] rounded-[48px] bg-[#1a1c1e] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.38),0_0_0_1px_rgba(255,255,255,0.08)] border-4 border-[#2b2e32]">
          
          {/* Subtle phone frame speaker / bezel accents */}
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[38px] bg-white shadow-inner">
            
            {/* Status Bar */}
            <div className="relative z-20 flex h-10 w-full shrink-0 items-center justify-between bg-white/90 px-6 pt-1 text-black backdrop-blur-sm border-b border-neutral-100">
              <span className="text-[12px] font-bold tracking-tight">9:41</span>

              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-2 h-[20px] w-[90px] -translate-x-1/2 rounded-full bg-black flex items-center justify-between px-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#111] border border-neutral-700" />
                <div className="h-2 w-2 rounded-full bg-[#080808] ring-1 ring-neutral-800" />
              </div>

              <div className="flex items-center gap-1.5">
                <Wifi className="h-3 w-3 text-neutral-800" />
                <Battery className="h-3.5 w-3.5 text-neutral-800" />
              </div>
            </div>

            {/* Live Feed / Sandboxed Iframe Container */}
            <div className="relative flex-1 overflow-hidden bg-white [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <iframe
                key={activeCard.handle}
                src={activeCard.embedUrl || (activeCard.link ? `${activeCard.link.replace(/\/$/, "")}/embed/` : "")}
                title={`${activeCard.handle} live instagram feed`}
                onLoad={() => setIframeState("loaded")}
                onError={() => setIframeState("error")}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
                className={cn(
                  "h-full w-full border-0 transition-opacity duration-300 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                  iframeState === "loaded" ? "opacity-100" : "opacity-0"
                )}
                style={{
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              />

              {/* Loading State Overlay */}
              {iframeState === "loading" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-white p-4 text-center z-10">
                  <RotateCw className="h-5 w-5 animate-spin text-pf-gold" />
                  <span className="text-xs font-semibold text-neutral-600">
                    Fetching live Instagram page…
                  </span>
                </div>
              )}

              {/* Floating Bottom Quick-Action Bar */}
              <div className="absolute bottom-3 left-3 right-3 z-30 pointer-events-auto">
                <a
                  href={activeCard.link || `https://www.instagram.com/${activeCard.handle.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-full bg-neutral-900/90 px-3 py-2 text-[11px] font-bold text-white shadow-lg backdrop-blur-md transition-transform hover:scale-[1.02]"
                >
                  <span>Open {activeCard.handle} on Instagram</span>
                  <ExternalLink className="h-3 w-3 text-pf-gold" />
                </a>
              </div>
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="h-4 w-full shrink-0 bg-white flex items-center justify-center pb-1">
              <div className="h-1 w-28 rounded-full bg-neutral-300" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
