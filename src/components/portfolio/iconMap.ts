import type { IconKey } from "@/data/portfolio";
import {
  IconAi,
  IconBrand,
  IconPhoto,
  IconSocial,
  IconVideo,
  IconWeb,
} from "./icons";

/**
 * Lives apart from icons.tsx so that file only exports components — otherwise
 * Fast Refresh gives up on it.
 */
export const PORTFOLIO_ICONS: Record<
  IconKey,
  React.ComponentType<{ className?: string }>
> = {
  web: IconWeb,
  photo: IconPhoto,
  brand: IconBrand,
  social: IconSocial,
  video: IconVideo,
  ai: IconAi,
};
