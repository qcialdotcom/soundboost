// src/configs/downloads.ts

export interface DownloadTarget {
  id: string;
  name: string;
  description: string;
  buttonLabel: string;
  href: string | null;
}

export const EXTENSION_DOWNLOADS: DownloadTarget[] = [
  {
    id: "chrome",
    name: "Chrome",
    description: "Also works on Edge, Brave and other Chromium browsers.",
    buttonLabel: "Add to Chrome",
    href: null, // https://chrome.google.com/webstore/detail/...
  },
  {
    id: "firefox",
    name: "Firefox",
    description: "Install from Firefox Add-ons in one click.",
    buttonLabel: "Add to Firefox",
    href: null, // https://addons.mozilla.org/en-US/firefox/...
  },
];
