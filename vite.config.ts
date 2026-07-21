import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

// Entry points for the prerender crawler. It follows in-page links from here,
// so listing the hubs (/services, /industries, /blog, /careers) is enough to
// reach every detail page. Only add routes that exist in AppRoutes.tsx —
// anything else renders the NotFound component into a static 200 page.
const prerenderRoutes = [
  "/",
  "/about",
  "/services",
  "/industries",
  "/work",
  "/contact",
  "/blog",
  "/careers",
  "/booking",
  "/apply",
  "/privacy-policy",
  "/terms-and-condition",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: path.resolve(__dirname, "./src/prerender.tsx"),
      additionalPrerenderRoutes: prerenderRoutes,
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
}));
