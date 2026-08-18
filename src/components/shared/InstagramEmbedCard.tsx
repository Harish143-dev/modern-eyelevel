import { useState, useRef, useEffect } from "react";
import { ExternalLink, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface InstagramEmbedCardProps {
  embedUrl: string;
  link?: string;
  title?: string;
  handle?: string;
  className?: string;
}

export default function InstagramEmbedCard({
  embedUrl,
  link,
  title = "Instagram post",
  handle,
  className,
}: InstagramEmbedCardProps) {
  const [embedState, setEmbedState] = useState<"loading" | "active" | "error">("loading");
  const loadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setEmbedState("loading");
    if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);

    loadTimeoutRef.current = setTimeout(() => {
      setEmbedState((prev) => (prev === "loading" ? "active" : prev));
    }, 3000);

    return () => {
      if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
    };
  }, [embedUrl]);

  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl bg-white", className)}>
      {/* Loading state overlay */}
      {embedState === "loading" && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-neutral-50 p-4 text-center">
          <RotateCw className="h-5 w-5 animate-spin text-pf-gold" />
          <span className="text-xs font-semibold text-neutral-600">
            Loading Live Feed...
          </span>
        </div>
      )}

      {/* Sandboxed Cross-Origin Iframe */}
      <iframe
        src={embedUrl}
        title={title}
        className={cn(
          "h-full w-full border-0 transition-opacity duration-500",
          embedState === "active" ? "opacity-100" : "opacity-0"
        )}
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        onLoad={() => {
          if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
          setEmbedState("active");
        }}
        onError={() => {
          if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
          setEmbedState("error");
        }}
      />

      {/* Action footer if link is provided */}
      {link && (
        <div className="absolute bottom-3 left-3 right-3 z-20">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-full bg-neutral-900/90 px-3 py-2 text-[11px] font-bold text-white shadow-lg backdrop-blur-md transition-transform hover:scale-[1.02]"
          >
            <span>Open {handle || "Post"} on Instagram</span>
            <ExternalLink className="h-3 w-3 text-pf-gold" />
          </a>
        </div>
      )}
    </div>
  );
}
