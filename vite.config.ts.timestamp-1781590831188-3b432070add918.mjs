// vite.config.ts
import { defineConfig } from "file:///C:/Users/acer/EYE%20LEVEL%20PRO1/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/acer/EYE%20LEVEL%20PRO1/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/acer/EYE%20LEVEL%20PRO1/node_modules/lovable-tagger/dist/index.js";
import { vitePrerenderPlugin } from "file:///C:/Users/acer/EYE%20LEVEL%20PRO1/node_modules/vite-prerender-plugin/src/index.js";
var __vite_injected_original_dirname = "C:\\Users\\acer\\EYE LEVEL PRO1";
var prerenderRoutes = [
  "/",
  "/about-us",
  "/services",
  "/portfolio",
  "/industries",
  "/contact-us",
  "/blog",
  "/careers",
  "/privacy-policy",
  "/terms-and-condition"
];
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: path.resolve(__vite_injected_original_dirname, "./src/prerender.tsx"),
      additionalPrerenderRoutes: prerenderRoutes
    }),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  base: "/"
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhY2VyXFxcXEVZRSBMRVZFTCBQUk8xXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhY2VyXFxcXEVZRSBMRVZFTCBQUk8xXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hY2VyL0VZRSUyMExFVkVMJTIwUFJPMS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xyXG5pbXBvcnQgeyB2aXRlUHJlcmVuZGVyUGx1Z2luIH0gZnJvbSBcInZpdGUtcHJlcmVuZGVyLXBsdWdpblwiO1xyXG5cclxuY29uc3QgcHJlcmVuZGVyUm91dGVzID0gW1xyXG4gIFwiL1wiLFxyXG4gIFwiL2Fib3V0LXVzXCIsXHJcbiAgXCIvc2VydmljZXNcIixcclxuICBcIi9wb3J0Zm9saW9cIixcclxuICBcIi9pbmR1c3RyaWVzXCIsXHJcbiAgXCIvY29udGFjdC11c1wiLFxyXG4gIFwiL2Jsb2dcIixcclxuICBcIi9jYXJlZXJzXCIsXHJcbiAgXCIvcHJpdmFjeS1wb2xpY3lcIixcclxuICBcIi90ZXJtcy1hbmQtY29uZGl0aW9uXCIsXHJcbl07XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogXCI6OlwiLFxyXG4gICAgcG9ydDogODA4MCxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICB2aXRlUHJlcmVuZGVyUGx1Z2luKHtcclxuICAgICAgcmVuZGVyVGFyZ2V0OiBcIiNyb290XCIsXHJcbiAgICAgIHByZXJlbmRlclNjcmlwdDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9wcmVyZW5kZXIudHN4XCIpLFxyXG4gICAgICBhZGRpdGlvbmFsUHJlcmVuZGVyUm91dGVzOiBwcmVyZW5kZXJSb3V0ZXMsXHJcbiAgICB9KSxcclxuICAgIG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiBjb21wb25lbnRUYWdnZXIoKSxcclxuICBdLmZpbHRlcihCb29sZWFuKSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBiYXNlOiBcIi9cIixcclxufSkpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtSLFNBQVMsb0JBQW9CO0FBQy9TLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUywyQkFBMkI7QUFKcEMsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxrQkFBa0I7QUFBQSxFQUN0QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBR0EsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sb0JBQW9CO0FBQUEsTUFDbEIsY0FBYztBQUFBLE1BQ2QsaUJBQWlCLEtBQUssUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxNQUM5RCwyQkFBMkI7QUFBQSxJQUM3QixDQUFDO0FBQUEsSUFDRCxTQUFTLGlCQUFpQixnQkFBZ0I7QUFBQSxFQUM1QyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFDUixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
