// wxt.config.ts

import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { mkdirSync, readdirSync, existsSync } from "node:fs";
import { homedir } from "node:os";

const profile = resolve(".wxt/chrome-profile");
mkdirSync(profile, { recursive: true });

// use the following command to install the latest stable version of Chrome for testing
// bunx @puppeteer/browsers install chrome@stable --path ~/.chrome-for-testing
const root = resolve(homedir(), ".chrome-for-testing/chrome");
const ver = existsSync(root) ? readdirSync(root).sort().pop() : undefined;
const chrome = ver ? resolve(root, ver, "chrome-linux64/chrome") : undefined;

export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  webExt: {
    binaries: chrome ? { chrome } : undefined,
    chromiumProfile: profile,
    keepProfileChanges: true,
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
