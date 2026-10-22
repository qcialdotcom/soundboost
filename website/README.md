# Sound Boost Website

This directory contains the Sound Boost marketing website, built with [Astro](https://astro.build/) and Tailwind CSS.

The site explains the extension, lists its features, answers common questions, and links to the Chrome and Firefox installation pages.

## Requirements

- Node.js 22.12 or newer
- npm

## Development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Astro will print the local URL in the terminal.

## Commands

| Command                   | Description                          |
| ------------------------- | ------------------------------------ |
| `npm run dev`             | Start the development server         |
| `npm run build`           | Build the production site            |
| `npm run preview`         | Preview the production build locally |
| `npm run astro -- --help` | Show Astro CLI help                  |

The production output is generated in `dist/`.

## Project structure

- `src/pages/` - site pages
- `src/components/` - reusable Astro components
- `src/configs/` - site metadata and content
- `public/` - static assets

## Related project

The browser extension source is in [../extension](../extension). For the project overview, see the [root README](../README.md).
