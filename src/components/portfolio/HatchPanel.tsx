import type { IconKey } from "@/data/portfolio";
import { PORTFOLIO_ICONS } from "./iconMap";

/**
 * Stand-in for a card's media while the image is missing. Deliberately looks
 * designed rather than broken — the folders under
 * `src/assets/content/works/portfolio/` ship empty, so this is what most of the
 * section renders until media is added.
 */
export default function HatchPanel({
  icon,
  label,
  className = "",
  children,
}: {
  icon?: IconKey;
  label?: string;
  className?: string;
  /** Absolutely positioned overlays, e.g. a site card's flag pill. */
  children?: React.ReactNode;
}) {
  const Icon = icon ? PORTFOLIO_ICONS[icon] : undefined;

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2.5 ${className}`}
      style={{
        background:
          "repeating-linear-gradient(45deg, #1f4436 0 2px, transparent 2px 22px), linear-gradient(135deg, #163027 0%, #1f4436 100%)",
      }}
    >
      {Icon && (
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border-[1.5px] border-pf-gold bg-black/[0.18]">
          <Icon className="h-[22px] w-[22px] text-pf-gold" />
        </div>
      )}
      {label && (
        <span className="font-pf-display text-[11px] font-semibold uppercase tracking-[1px] text-white opacity-80">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
