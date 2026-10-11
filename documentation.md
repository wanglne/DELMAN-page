# Page maintenance

All author-facing editing instructions are in [README.md](README.md).

The site uses Astro and MDX, local Noto Sans fonts, static paper figures, and browser-side interactions. It does not call a model API. Model comparisons, category tabs, figure playback, editing cases, and the efficiency metric selector are implemented in `src/components/`.

Public asset URLs use `import.meta.env.BASE_URL` so the same source works locally and on a GitHub Pages project path. External resource and author links open in a new tab. Figures have static fallbacks, and motion is reduced when the visitor requests reduced motion.
