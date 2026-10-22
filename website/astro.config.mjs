import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import { SITE_INFO } from "./src/configs/site";

export default defineConfig({
  site: SITE_INFO.url,

  vite: {
    plugins: [tailwindcss()],
    resolve: { alias: { "@": new URL("./src", import.meta.url).pathname } },
  },

  integrations: [sitemap(), robotsTxt()],
});
