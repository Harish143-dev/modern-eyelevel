# Eyelevel Studio Brand Guidelines

Welcome to the definitive guide for Eyelevel Studio's visual identity. This document outlines the core principles, colors, typography, and UI patterns that define our premium, growth-focused digital presence.

---

## 1. Brand Identity & Vibe

**Vibe:** Premium, modern, energetic, and highly intentional.
Eyelevel Studio blends two distinct design paradigms into a cohesive aesthetic:
- **Neo-Brutalism:** High-contrast borders, solid shadows, and bold geometry that commands attention.
- **Organic Glassmorphism:** Subtle blur effects combined with a distinct fractal noise texture to soften the harshness of brutalism and add a tactical, premium feel.

> [!NOTE]
> The overarching goal is to balance the *loud* impact of our typography and borders with the *soft* elegance of our cream backgrounds and organic textures.

---

## 2. Color Palette

Our color palette leans heavily into natural, sophisticated tones (forest greens and creams) juxtaposed against high-energy accents (lime yellow).

### Primary Colors
These form the foundation of our UI and are used extensively for backgrounds, main text, and primary actions.

| Color Name | Hex Code | Tailwind Token | Usage |
| :--- | :--- | :--- | :--- |
| **Forest Green (Dark)** | `#2D5C4F` | `bg-background` / `bg-forest` | Primary dark backgrounds, hero sections. |
| **Cream (Off-White)** | `#F5F5F0` | `bg-foreground` / `bg-cream` | Default body text on dark themes, light card backgrounds. |
| **Bright Lime Yellow** | `#E2FEA5` | `bg-lime` / `bg-primary` | Main call-to-action buttons, active menu states, high-contrast highlights. |
| **Brand Light (Mint/Cream)** | `#F8FFE8` | `bg-brand-light` | Soft background for light sections and headers. |

### Neutrals & Structural Colors
Used for borders, shadows, and subtle text.

| Color Name | Hex Code | Tailwind Token | Usage |
| :--- | :--- | :--- | :--- |
| **Deep Charcoal/Black** | `#0A0A0A` | `bg-black` / `border-black` | Heavy borders and neo-brutalist solid shadows. |
| **Dark Gray** | `#1A1A1A` | `bg-card-foreground` | Standard body text on light backgrounds. |
| **Forest 900** | `#173229` | `bg-forest-900` | Deepest green for footer and nested navigation menus. |

### Secondary Accents
Used sparingly for badges, tags, or specific illustrations.

- **Burnt Orange:** `#E8866F` (`text-orange`)
- **Purple:** `hsl(280, 70%, 65%)` (`text-purple`)
- **Pink:** `hsl(350, 80%, 72%)` (`text-pink`)
- **Teal:** `hsl(172, 35%, 37%)` (`text-teal`)

---

## 3. Typography

We utilize a two-font system to create maximum contrast between headings and body copy.

### Headings (Display)
**Font Family:** `Dela Gothic One`
- **Vibe:** Bold, wide, impactful, and unapologetic.
- **Usage:** Strictly reserved for `<h1>` through `<h6>` tags. It is meant to be read slowly and command attention. Use `tracking-[0.08em]` for navigation links or badges.
- **Tailwind Class:** `font-dela` or `font-display`

### Body & UI (Sans-Serif)
**Font Family:** `Bricolage Grotesque`
- **Vibe:** Clean, modern, highly legible at small sizes.
- **Usage:** Used for all paragraphs, button text, forms, and general UI components.
- **Tailwind Class:** `font-bricolage` or `font-sans`

---

## 4. Brand Assets

### The Logo
- **Main SVG Logo:** `eyelevel_Logo.svg`
- **Usage:** Always ensure the logo has ample padding. Use the white variant (`eyelevel-logo-white.png`) strictly on dark forest backgrounds, and the color variant on cream/light backgrounds.

### The Mascot
Our 3D mascot is a core part of our playful yet professional identity.
- **Assets:** `career_mascot.webp`, `hide.webp`, `mascot_transparent.webp`.
- **Implementation Rules:** Mascots should often "break the box." When placing a mascot in a card or section, allow it to overflow the boundaries (`overflow-visible`, absolute positioning) to create depth and interactivity.

---

## 5. UI & Styling Patterns

### Neo-Brutalist Borders & Shadows
Instead of soft, blurry drop shadows, we use hard, solid shadows combined with thick borders to create distinct layers.
- **Standard Border:** `border-2 border-foreground`
- **Standard Shadow:** `shadow-[0_4px_0_hsl(var(--foreground))]`
- **Hover States:** Elements often scale down or translate slightly, and the shadow flattens to create a "pressed" physical button effect.

### Glassmorphism & Noise Textures
To prevent the neo-brutalism from feeling too harsh, we inject texture.
- **Global Noise:** A subtle fractal noise SVG is applied to `body::before` with an opacity of `0.08` to give the entire site a physical, grainy texture.
- **Card Surfaces:** Use `.card-surface` or `.card-cream` which incorporates `backdrop-blur-sm`, low-opacity borders (`border-lime/15`), and its own isolated noise texture.

### Micro-Interactions & Animations
- **Hover Scaling:** Interactive elements like buttons and cards should feature a gentle `hover:scale-105` transition.
- **Marquees:** Infinite sliding marquees (`.animate-marquee`) are used for social proof, tech stacks, and infinite looping text to keep the page feeling dynamic.
- **Floating:** Apply `.animate-float` (a 4s ease-in-out vertical translation) to mascots or decorative elements to make the layout feel alive.

> [!TIP]
> **Developer Handoff:** Whenever possible, use the predefined Tailwind theme variables (e.g., `bg-brand-light` instead of `bg-[#f8ffe8]`). This ensures global consistency and makes future rebranding efforts seamless.
