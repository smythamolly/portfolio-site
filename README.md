# Portfolio

Personal portfolio site — React + Vite, deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Editing content

All copy lives in [`src/data/site.js`](src/data/site.js): profile, projects, capabilities, and
navigation. Changing that file is enough for most updates — no component edits needed.

Design tokens (colour, type, spacing) are CSS custom properties at the top of
[`src/index.css`](src/index.css).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it
to GitHub Pages.

One-time setup in the repository: **Settings → Pages → Build and deployment → Source: GitHub
Actions**.

The site is served from `https://smythamolly.github.io/portfolio-site/`. That subpath is set as
`base` in [`vite.config.js`](vite.config.js) — if the repository is renamed, or moved to a custom
domain, update it there.
