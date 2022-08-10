import { fileURLToPath, URL } from "node:url";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

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
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/head", "vue/macros", "pinia"],
      dts: "./src/auto-imports.d.ts",
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
    }),
    Components({ dts: "src/components.d.ts" }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
