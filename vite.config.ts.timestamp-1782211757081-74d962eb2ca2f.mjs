// vite.config.ts
import { defineConfig } from "file:///C:/Users/acer/Desktop/EYELEVEL%20MAIN%20FOLDER/EYE%20LEVEL%20PRO1/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/acer/Desktop/EYELEVEL%20MAIN%20FOLDER/EYE%20LEVEL%20PRO1/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/acer/Desktop/EYELEVEL%20MAIN%20FOLDER/EYE%20LEVEL%20PRO1/node_modules/lovable-tagger/dist/index.js";
import { vitePrerenderPlugin } from "file:///C:/Users/acer/Desktop/EYELEVEL%20MAIN%20FOLDER/EYE%20LEVEL%20PRO1/node_modules/vite-prerender-plugin/src/index.js";
var __vite_injected_original_dirname = "C:\\Users\\acer\\Desktop\\EYELEVEL MAIN FOLDER\\EYE LEVEL PRO1";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhY2VyXFxcXERlc2t0b3BcXFxcRVlFTEVWRUwgTUFJTiBGT0xERVJcXFxcRVlFIExFVkVMIFBSTzFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFjZXJcXFxcRGVza3RvcFxcXFxFWUVMRVZFTCBNQUlOIEZPTERFUlxcXFxFWUUgTEVWRUwgUFJPMVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYWNlci9EZXNrdG9wL0VZRUxFVkVMJTIwTUFJTiUyMEZPTERFUi9FWUUlMjBMRVZFTCUyMFBSTzEvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcclxuaW1wb3J0IHsgdml0ZVByZXJlbmRlclBsdWdpbiB9IGZyb20gXCJ2aXRlLXByZXJlbmRlci1wbHVnaW5cIjtcclxuXHJcbmNvbnN0IHByZXJlbmRlclJvdXRlcyA9IFtcclxuICBcIi9cIixcclxuICBcIi9hYm91dC11c1wiLFxyXG4gIFwiL3NlcnZpY2VzXCIsXHJcbiAgXCIvcG9ydGZvbGlvXCIsXHJcbiAgXCIvaW5kdXN0cmllc1wiLFxyXG4gIFwiL2NvbnRhY3QtdXNcIixcclxuICBcIi9ibG9nXCIsXHJcbiAgXCIvY2FyZWVyc1wiLFxyXG4gIFwiL3ByaXZhY3ktcG9saWN5XCIsXHJcbiAgXCIvdGVybXMtYW5kLWNvbmRpdGlvblwiLFxyXG5dO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiOjpcIixcclxuICAgIHBvcnQ6IDgwODAsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgdml0ZVByZXJlbmRlclBsdWdpbih7XHJcbiAgICAgIHJlbmRlclRhcmdldDogXCIjcm9vdFwiLFxyXG4gICAgICBwcmVyZW5kZXJTY3JpcHQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvcHJlcmVuZGVyLnRzeFwiKSxcclxuICAgICAgYWRkaXRpb25hbFByZXJlbmRlclJvdXRlczogcHJlcmVuZGVyUm91dGVzLFxyXG4gICAgfSksXHJcbiAgICBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCksXHJcbiAgXS5maWx0ZXIoQm9vbGVhbiksXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmFzZTogXCIvXCIsXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWCxTQUFTLG9CQUFvQjtBQUM5WSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsMkJBQTJCO0FBSnBDLElBQU0sbUNBQW1DO0FBTXpDLElBQU0sa0JBQWtCO0FBQUEsRUFDdEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjtBQUdBLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLG9CQUFvQjtBQUFBLE1BQ2xCLGNBQWM7QUFBQSxNQUNkLGlCQUFpQixLQUFLLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsTUFDOUQsMkJBQTJCO0FBQUEsSUFDN0IsQ0FBQztBQUFBLElBQ0QsU0FBUyxpQkFBaUIsZ0JBQWdCO0FBQUEsRUFDNUMsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQ1IsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
