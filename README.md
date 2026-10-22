# Sound Boost

Sound Boost is a free browser extension that makes quiet audio and video louder. Boost a tab's volume up to **600%** with one slider, without an account or tracking.

The project contains:

- `extension/` - the WXT + React browser extension
- `website/` - the Astro website at [soundboost.qcial.com](https://soundboost.qcial.com)

## Features

- Boost tab audio from 100% to 600%
- Turn boosting on or off instantly
- Save the selected level and enabled state in browser storage
- Works with Chrome, Firefox, Edge, and Brave
- Processes audio locally in the browser

## Requirements

- Node.js 22.12 or newer
- npm for the website
- Bun for the extension

## Run locally

### Website

```bash
cd website
npm install
npm run dev
```

Open the local URL shown by Astro.

### Extension

```bash
cd extension
bun install
bun run dev
```

WXT opens a development browser with the extension loaded. To run the Firefox version:

```bash
bun run dev:firefox
```

## Build

Build the website:

```bash
cd website
npm run build
```

Build and package the extension:

```bash
cd extension
bun run build
bun run zip
```

See the component-specific README files for more details:

- [Website README](./website/README.md)
- [Extension README](./extension/README.md)

## License

See the repository license for usage and distribution terms.
