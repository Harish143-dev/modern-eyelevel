import { useEffect, useState } from "react";
import { X, ExternalLink } from "lucide-react";
import type { SiteCard } from "@/data/portfolio";

interface Props {
  site: SiteCard | null;
  onClose: () => void;
}

/**
 * Opens a client site live inside the portfolio — the real, interactive site in
 * an iframe.
 *
 * A handful of client sites (Shopify stores, same-origin-locked sites) send
 * X-Frame-Options / CSP frame-ancestors, which makes every browser refuse to
 * embed them. Those can never load live; for them alone we fall back to a
 * full-page screenshot. Everything else is the genuine live site.
 */
export default function WebsitePreviewModal({ site, onClose }: Props) {
  const [frameLoaded, setFrameLoaded] = useState(false);

  useEffect(() => {
    setFrameLoaded(false);
  }, [site?.link]);

  useEffect(() => {
    if (!site) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [site, onClose]);

  if (!site) return null;

  const isLive = site.embeddable === true;
  const badge = isLive ? (frameLoaded ? "Live now" : "Loading live site…") : "Snapshot";

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${site.name} website preview`}
    >
      <div
        className="flex h-full max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-pf-border bg-pf-card shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-pf-border px-4 py-3 sm:gap-3 sm:px-5">
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-pf-teal">
              {site.name}
            </div>
            {site.domain && (
              <div className="truncate text-xs text-pf-muted">{site.domain}</div>
            )}
          </div>

          <span
            className={`ml-auto flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              isLive && frameLoaded
                ? "bg-emerald-100 text-emerald-700"
                : "bg-pf-chip text-pf-teal"
            }`}
          >
            {isLive && frameLoaded && (
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            )}
            {badge}
          </span>

          <a
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open site in a new tab"
            className="hidden shrink-0 items-center gap-1.5 rounded-full border border-pf-border px-3 py-1.5 text-xs font-semibold text-pf-teal transition-colors hover:border-pf-gold sm:inline-flex"
          >
            Open <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-pf-muted transition-colors hover:bg-pf-chip hover:text-pf-teal"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>

        {/* Viewport */}
        <div className="relative flex-1 overflow-hidden bg-white">
          {isLive ? (
            <>
              {!frameLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-pf-card">
                  <span className="text-sm text-pf-muted">Loading live site…</span>
                </div>
              )}
              <iframe
                key={site.link}
                src={site.link}
                title={`${site.name} live site`}
                onLoad={() => setFrameLoaded(true)}
                referrerPolicy="no-referrer"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${
                  frameLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </>
          ) : (
            // This site blocks live embedding — a full-page screenshot is the
            // only thing a browser will show. It scrolls.
            <div className="absolute inset-0 overflow-auto">
              {site.previewUrl ? (
                <img
                  src={site.previewUrl}
                  alt={`${site.name} — full page`}
                  className="w-full"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-pf-muted">
                  Preview coming soon.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
