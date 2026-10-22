// entrypoints/offscreen/main.ts

const audioContext = new AudioContext();

interface Chain {
  stream: MediaStream;
  gainNode: GainNode;
}
const chains = new Map<number, Chain>();

let enabled = true;
let level = 200; // percent

const currentGain = () => (enabled ? level / 100 : 1);

async function capture(tabId: number, streamId: string) {
  if (chains.has(tabId)) return;

  const stream = await navigator.mediaDevices.getUserMedia({
    audio: {
      mandatory: {
        chromeMediaSource: "tab",
        chromeMediaSourceId: streamId,
      },
    },
  } as MediaStreamConstraints);

  const source = audioContext.createMediaStreamSource(stream);
  const gainNode = audioContext.createGain();

  gainNode.gain.value = currentGain();

  source.connect(gainNode);
  gainNode.connect(audioContext.destination);

  chains.set(tabId, { stream, gainNode });
  if (audioContext.state === "suspended") await audioContext.resume();

  stream.getAudioTracks()[0]?.addEventListener("ended", () => {
    chains.delete(tabId);
  });
}

function release(tabId: number) {
  const chain = chains.get(tabId);
  if (!chain) return;
  chain.stream.getTracks().forEach((t) => t.stop());
  chain.gainNode.disconnect();
  chains.delete(tabId);
}

function applyGain() {
  chains.forEach(({ gainNode }) => {
    gainNode.gain.value = currentGain();
  });
}

browser.runtime.onMessage.addListener((msg) => {
  if (msg?.target !== "offscreen") return;

  if (msg.type === "capture") {
    return capture(msg.tabId, msg.streamId).then(() => true);
  }
  if (msg.type === "release") {
    release(msg.tabId);
  }
  if (msg.type === "settings") {
    enabled = msg.enabled;
    level = msg.level;
    applyGain();
  }
});
