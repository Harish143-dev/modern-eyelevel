import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Bricolage Grotesque', 'sans-serif'],
        display: ['Dela Gothic One', 'cursive'],
        'dela': ['Dela Gothic One', 'cursive'],
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
        // Portfolio section only — see the `pf` colour scale below.
        'pf-display': ['Space Grotesk', 'sans-serif'],
        'pf-sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          black: "hsl(var(--brand-black))",
          light: "hsl(var(--brand-light))",
          yellow: "hsl(var(--brand-yellow))",
          lime: "hsl(var(--brand-lime))",
          pink: "hsl(var(--brand-pink))",
        },
        forest: {
          muted: "hsl(var(--forest-muted))",
          dark: "hsl(var(--forest-dark))",
          deep: "hsl(var(--forest-deep))",
        },
        /**
         * Portfolio section palette. Namespaced under `pf` on purpose — the
         * portfolio's own names for these (card, muted, border, display) all
         * already mean something else in the shadcn theme above, and `border`
         * in particular is applied globally by `* { @apply border-border }`.
         * Nothing outside src/components/portfolio should reach for these.
         */
        pf: {
          teal: "#163027",
          "teal-light": "#1f4436",
          cream: "#F3EFE6",
          gold: "#E6B961",
          ink: "#1a1a1a",
          muted: "#6b6f6a",
          card: "#ffffff",
          border: "#e4ddcd",
          chip: "#f0ede2", // badge pill background
          "on-dark": "#cfd9d0", // secondary text on teal
          body: "#3f4640", // long-form copy on cream
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "3rem",
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        "brand-hover": "0 24px 60px rgba(0,0,0,0.35)",
        "neo-sm": "0 4px 0 #0a0a0a",
        "neo-md": "0 6px 0 #0a0a0a",
        "neo-pressed": "0 0px 0 #0a0a0a",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pf-fade": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pf-fade": "pf-fade 0.25s ease",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
