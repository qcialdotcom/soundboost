// src/configs/content.ts

import { SITE_INFO } from "./site";

export interface FeatureContent {
  icon: "volume" | "globe" | "sliders" | "power" | "save" | "shield" | "moon" | "zap";
  title: string;
  text: string;
}

export interface StepContent {
  icon: "globe" | "mouse" | "sliders";
  title: string;
  text: string;
}

export interface PrivacyPoint {
  icon: "wifi-off" | "database" | "shield";
  title: string;
  text: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const FEATURES: FeatureContent[] = [
  {
    icon: "volume",
    title: "Up to 600% boost",
    text: "Turn quiet audio and video up to six times louder than your system volume allows.",
  },
  {
    icon: "globe",
    title: "Works on any tab",
    text: `YouTube, meetings, streaming, podcasts - if a tab plays sound, ${SITE_INFO.name} can amplify it.`,
  },
  {
    icon: "sliders",
    title: "Precise control",
    text: "Fine-tune the level from 100% to 600% in 10% steps with a single slider.",
  },
  {
    icon: "power",
    title: "One-click on/off",
    text: "Switch the boost off instantly to return to normal volume without closing the tab.",
  },
  {
    icon: "save",
    title: "Remembers settings",
    text: "Your boost level and on/off state are saved in your browser for next time.",
  },
  {
    icon: "shield",
    title: "Private by design",
    text: "Audio is processed on your device. No account, no tracking, no data collected.",
  },
  {
    icon: "moon",
    title: "Light & dark theme",
    text: "A clean popup that matches your preference, with a quick theme toggle.",
  },
  {
    icon: "zap",
    title: "Light & free",
    text: "Tiny footprint, built-in limiter to reduce harsh distortion, and free to use.",
  },
];

export const STEPS: StepContent[] = [
  {
    icon: "globe",
    title: "Open a tab with audio",
    text: "Go to any video, call, or music page that sounds too quiet.",
  },
  {
    icon: "mouse",
    title: `Click the ${SITE_INFO.name} icon`,
    text: "Open the popup from your toolbar. Boost starts on that tab automatically.",
  },
  {
    icon: "sliders",
    title: "Drag the slider",
    text: "Pick a level between 100% and 600%. Changes apply instantly.",
  },
];

export const PRIVACY_POINTS: PrivacyPoint[] = [
  {
    icon: "wifi-off",
    title: "Processed on your device",
    text: "Tab audio is amplified locally in your browser. It is never recorded or sent anywhere.",
  },
  {
    icon: "database",
    title: "Only two settings stored",
    text: ` ${SITE_INFO.name} saves just your on/off state and boost level in browser storage.`,
  },
  {
    icon: "shield",
    title: "Minimal permissions",
    text: "It asks only for tab capture, offscreen audio processing, and storage - nothing else.",
  },
];

export const PRIVACY_BADGES: string[] = ["No account", "No tracking", "Free forever"];

export const FAQ: FAQItem[] = [
  {
    q: `What is ${SITE_INFO.name}?`,
    a: `${SITE_INFO.name} is a free Chrome extension that boosts the volume of any tab up to 600%, beyond your system volume limit.`,
  },
  {
    q: "How do I use it?",
    a: `Open a tab that plays audio, click the ${SITE_INFO.name} icon, and drag the slider. Boost starts on that tab as soon as you open the popup.`,
  },
  {
    q: "Which browsers are supported?",
    a: `${SITE_INFO.name} works on Google Chrome, Firefox and other Chromium-based browsers such as Edge and Brave.`,
  },
  {
    q: "Do I need an account?",
    a: "No. There is no sign-up or login. Install it and start boosting.",
  },
  {
    q: "Does it affect all my tabs?",
    a: "Boost is applied to tabs where you have opened the popup. Other tabs keep their normal volume.",
  },
  {
    q: "Why does it need tab capture permission?",
    a: "Chrome only allows an extension to raise a tab's volume above 100% by capturing that tab's audio. The audio is processed on your device and never stored or sent anywhere.",
  },
  {
    q: "Will high boost levels damage my speakers or ears?",
    a: "Very high levels can cause distortion and discomfort. Start low, increase gradually, and take care with headphones. A built-in limiter helps reduce harsh clipping.",
  },
  {
    q: "Why can't I boost some pages?",
    a: "Chrome blocks audio capture on internal pages such as chrome:// pages and the Chrome Web Store. Boost works on regular websites.",
  },
  {
    q: "Are my settings saved?",
    a: "Yes. Your on/off state and boost level are stored in your browser and restored the next time you open the popup.",
  },
  { q: "Is it free?", a: `Yes, ${SITE_INFO.name} is free to use.` },
];
