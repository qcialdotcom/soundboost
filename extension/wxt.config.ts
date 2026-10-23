// wxt.config.ts

import tailwindcss from "@tailwindcss/vite";
import { existsSync, mkdirSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { resolve } from "node:path";
import { loadEnv } from "vite";
import { defineConfig } from "wxt";

// Stable Chrome extension ID.
const CHROME_EXTENSION_KEY = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "WXT_CHROME_EXTENSION_KEY",
).WXT_CHROME_EXTENSION_KEY;

// Stable Firefox extension ID.
const FIREFOX_EXTENSION_ID = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "WXT_FIREFOX_EXTENSION_ID",
).WXT_FIREFOX_EXTENSION_ID;

const profile = resolve(".wxt/chrome-profile");
mkdirSync(profile, { recursive: true });

// use the following command to install the latest stable version of Chrome for testing
// bunx @puppeteer/browsers install chrome@stable --path ~/.chrome-for-testing
const root = resolve(homedir(), ".chrome-for-testing/chrome");
const ver = existsSync(root) ? readdirSync(root).sort().pop() : undefined;
const chrome = ver ? resolve(root, ver, "chrome-linux64/chrome") : undefined;

export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: ({ browser }) => ({
    name: "Sound Boost",
    description:
      "Boost quiet audio and video in any tab up to 600% beyond your system volume limit.",
    permissions: ["tabCapture", "offscreen", "storage"],
    ...(browser === "chrome" && {
      key: CHROME_EXTENSION_KEY,
    }),
    ...(browser === "firefox" && {
      browser_specific_settings: {
        gecko: {
          id: FIREFOX_EXTENSION_ID,
          data_collection_permissions: {
            required: ["none"],
          },
        },
      },
    }),
  }),
  webExt: {
    binaries: chrome ? { chrome } : undefined,
    chromiumProfile: profile,
    keepProfileChanges: true,
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
