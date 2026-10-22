# Sound Boost Extension

This directory contains the Sound Boost browser extension, built with [WXT](https://wxt.dev/), React, and TypeScript.

Sound Boost captures audio from the active tab and lets you boost it from 100% to 600%. The selected level and on/off state are saved in browser storage.

## Requirements

- Node.js 22.12 or newer
- [Bun](https://bun.sh/)

## Development

Install dependencies and start the Chrome development build:

```bash
bun install
bun run dev
```

Start a Firefox development build:

```bash
bun run dev:firefox
```

The popup controls the active tab while it is open. Audio capture is not available on browser-internal pages such as `chrome://` pages or the Chrome Web Store.

## Build and package

Create an unpacked Chrome build:

```bash
bun run build
```

Create a Chrome zip archive:

```bash
bun run zip
```

Firefox equivalents:

```bash
bun run build:firefox
bun run zip:firefox
```

Run the TypeScript check:

```bash
bun run compile
```

Build artifacts are written to `.output/`.

## Project structure

- `entrypoints/` - extension entry points, including the popup and background logic
- `components/` - React UI components
- `hooks/` - extension state and audio behavior
- `config/` - shared extension metadata
- `public/` - icons and static assets

## Related project

The marketing website is in [../website](../website). For the project overview, see the [root README](../README.md).
