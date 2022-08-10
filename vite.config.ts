import { fileURLToPath, URL } from "node:url";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const { NODE_ENV } = process.env;

const IsProd = NODE_ENV && NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      onRoutesGenerated: (routes) =>
        generateSitemap({
          routes,
          hostname: IsProd
            ? "https://theagencyrepm.com/"
            : "http://127.0.0.1:5173/",
          readable: true,
        }),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
