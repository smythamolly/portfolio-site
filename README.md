# Portfolio — Molly Smyth

Live at **https://smythamolly.github.io/portfolio-site/**

## Editing the content

All text and image captions live in [`src/content/`](src/content). Edit the JSON, save, and the
site updates — you never need to open a component file.

| File | What it controls |
| --- | --- |
| [`site.json`](src/content/site.json) | Name, qualification, hero text, philosophy, strengths, about, contact, nav |
| [`featured.json`](src/content/featured.json) | The two project cards on the home page |
| [`air-purifier.json`](src/content/air-purifier.json) | The air purifier project page |
| [`portfolio.json`](src/content/portfolio.json) | The making and art page |

The About bio is currently placeholder text. Replace `bio` in `site.json` with your own, then
delete the `bioPlaceholder` line to remove the note shown on the page.

### Adding images

1. Put the file in `public/images/air-purifier/` or `public/images/portfolio/`.
2. Reference it from the JSON by the path after `images/`, e.g. `"src": "portfolio/new-piece.jpg"`.
3. Run `npm run images` — this records each image's dimensions in the JSON so pages don't jump
   about while photos load.

Always write an `alt` description: it is what screen readers announce and what shows if an image
fails to load.

## Running it locally

```bash
npm install
npm run dev
```

## Pages

- `index.html` — home
- `portfolio/index.html` — making and art
- `projects/air-purifier/index.html` — air purifier project

To add another project page, copy one of these folders, add a matching entry file in
`src/entries/`, and register it in [`vite.config.js`](vite.config.js).

## Publishing

Every push to `main` rebuilds and publishes the site automatically. Colours, type and spacing are
defined once at the top of [`src/index.css`](src/index.css).
