# This is a personal Fork of [tab](https://koryschneider.com/tab). 
Any credit must go to [Kory Schneider](https://koryschneider.com/).

### What

A minimal, customizable command line [startpage](https://koryschneider.com/tab).

### Why

To get places on the web faster, with less distraction.

### How

See [basic usage and examples][usage] or the [complete documentation][commands] (or both).

### Brave

The [`brave-extension`](brave-extension) directory contains a minimal Manifest
V3 extension that opens this start page in every new Brave tab. See the
[installation instructions](brave-extension/README.md).

### Local development

Use Node.js 22.19 or newer. Run `npm ci` to install dependencies and
`npm run dev` to start the development server. Run `npm run build` to
regenerate the root `index.html` served by GitHub Pages.

[usage]: doc/usage.md
[commands]: doc/commands.md
