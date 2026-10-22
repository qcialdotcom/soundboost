// hooks/useBoost.ts

import { useEffect, useState } from "react";

export const MIN = 100;
export const MAX = 600;

export function useBoost() {
  const [enabled, setEnabled] = useState(true);
  const [level, setLevel] = useState(200);

  // Start capturing the current tab's audio (popup open = Chrome's permission)
  const captureActiveTab = async () => {
    const [tab] = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (tab?.id === undefined) return;
    await browser.runtime
      .sendMessage({ target: "background", type: "capture", tabId: tab.id })
      .catch(() => {});
  };

  const sync = (next: { enabled: boolean; level: number }) => {
    browser.storage.local.set(next);
    browser.runtime
      .sendMessage({ target: "background", type: "settings" })
      .catch(() => {});
  };

  useEffect(() => {
    browser.storage.local.get(["enabled", "level"]).then((s) => {
      const e = typeof s.enabled === "boolean" ? s.enabled : true;
      const l = typeof s.level === "number" ? s.level : 200;
      setEnabled(e);
      setLevel(l);
      if (e) captureActiveTab();
    });
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    sync({ enabled: next, level });
    if (next) captureActiveTab();
  };

  const changeLevel = (value: number) => {
    setLevel(value);
    sync({ enabled, level: value });
  };

  return { enabled, level, toggle, changeLevel };
}
