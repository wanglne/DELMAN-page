# DELMAN project page

This is an Astro + MDX research website. Main prose and the citation live in `src/paper.mdx`; the layout is `src/pages/index.astro`. The header is `src/components/Header.astro` and the design system is `src/styles/delman.css`.

Use the existing light background, green palette, and local Noto Sans font. Keep Overview, Methodology, Results, and Citation at the same content width. Public asset paths must use `import.meta.env.BASE_URL` for GitHub Pages compatibility.

Safety and utility data are in `src/data/results.json`, transcribed from the paper's LaTeX Tables 8 and 1. Safety values are grouped by benchmark, then GCG, AutoDAN, and PAIR. Preserve the reported values and define comparison scopes clearly when highlighting best results.

The interactive method uses the original Figure 2 image, without redrawing its contents. Explanations and zoom regions live in `src/data/figures.json`. The expandable methodology panel contains the editing objective. Respect reduced motion and ensure every interactive component has a useful static default.

Use Node.js 24. `npm ci` installs dependencies; `npm run dev` starts local development; `npm run build` checks types and builds the static website. The GitHub Pages workflow passes deployment site and base settings.
