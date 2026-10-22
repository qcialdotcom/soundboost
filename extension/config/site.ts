// config/site.ts

export const SITE_INFO = {
  name: "Sound Boost",
  tagline: "Boost your audio to the next level.",
  description:
    "Sound Boost is a Chrome extension that lets you increase audio volume beyond the default level on supported websites.",
  url: "https://soundboost.qcial.com",
  email: "contact@qcial.com",
  logo: {
    src: "/logo.png",
    alt: "Sound Boost Chrome extension logo",
  },
  parent: {
    name: "Qcial.Com",
    url: "https://qcial.com",
  },
} as const;
