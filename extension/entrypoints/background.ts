// entrypoints/background.ts

const DEFAULTS = { enabled: true, level: 200 };

async function ensureOffscreen() {
  const offscreen = (browser as any).offscreen;
  if (await offscreen.hasDocument()) return;
  await offscreen.createDocument({
    url: browser.runtime.getURL("/offscreen.html"),
    reasons: ["USER_MEDIA"],
    justification: "Capture tab audio and boost its volume",
  });
}

async function getSettings() {
  const s = await browser.storage.local.get(["enabled", "level"]);
  return {
    enabled: typeof s.enabled === "boolean" ? s.enabled : DEFAULTS.enabled,
    level: typeof s.level === "number" ? s.level : DEFAULTS.level,
  };
}

async function pushSettings() {
  await ensureOffscreen();
  const { enabled, level } = await getSettings();
  await browser.runtime.sendMessage({
    target: "offscreen",
    type: "settings",
    enabled,
    level,
  });
}

async function captureTab(tabId: number) {
  await ensureOffscreen();
  const streamId = await (browser as any).tabCapture.getMediaStreamId({
    targetTabId: tabId,
  });
  await pushSettings();
  await browser.runtime.sendMessage({
    target: "offscreen",
    type: "capture",
    tabId,
    streamId,
  });
}

export default defineBackground(() => {
  // Messages from the popup
  browser.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (msg?.target !== "background") return;

    if (msg.type === "capture") {
      captureTab(msg.tabId)
        .then(() => sendResponse({ ok: true }))
        .catch((e) => sendResponse({ ok: false, error: String(e) }));
      return true; // async response
    }

    if (msg.type === "settings") {
      pushSettings()
        .then(() => sendResponse({ ok: true }))
        .catch((e) => sendResponse({ ok: false, error: String(e) }));
      return true;
    }
  });

  // Free the stream when a tab closes
  browser.tabs.onRemoved.addListener((tabId) => {
    browser.runtime
      .sendMessage({ target: "offscreen", type: "release", tabId })
      .catch(() => {});
  });
});
