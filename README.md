# Kumar Aishwary Portfolio

A simple React portfolio built with Vite and configured for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The build output is generated in `dist/`.

## GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.
On every push to `master`, GitHub installs dependencies, builds the Vite app, and deploys
the `dist/` folder to GitHub Pages.

In the GitHub repository settings, set Pages to use GitHub Actions as the source.
