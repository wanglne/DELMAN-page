# DELMAN Project Page

Research website for **DELMAN: Dynamic Defense Against Large Language Model Jailbreaking with Model Editing**, published in **ACL 2025 Findings**.

- [Paper](https://aclanthology.org/2025.findings-acl.598.pdf)
- [Official code](https://github.com/wanglne/DELMAN)
- [ACL Anthology](https://aclanthology.org/2025.findings-acl.598/)

## Local development

Use Node.js 24 and npm:

```bash
npm ci
npm run dev
```

Run `npm run build` to check types and generate the static website in `dist/`.

## Editing the page

| Content                                                        | File                                     |
| -------------------------------------------------------------- | ---------------------------------------- |
| Main section text and citation                                 | `src/paper.mdx`                          |
| Title, authors, affiliations, and resource links               | `src/components/Header.astro`            |
| Colors, fonts, spacing, and responsive layout                  | `src/styles/delman.css`                  |
| Safety and utility results                                     | `src/data/results.json`                  |
| Interactive method step labels, explanations, and zoom regions | `src/data/figures.json`                  |
| Impact comparison                                              | `src/components/ImpactComparison.astro`  |
| Sequential editing cases                                       | `src/components/SequentialResults.astro` |
| Supporting experiments and ablations                           | `src/components/SupportingResults.astro` |
| Editing cost chart and descriptions                            | `src/components/EditingEfficiency.astro` |
| Figures and page icons                                         | `public/`                                |

Data in the main result tables is transcribed from the paper's LaTeX Tables 1 and 8. The interactive method presentation uses the original Figure 2, with zoom regions defined in `src/data/figures.json`. Original paper figures retain their original image resolution.

## GitHub Pages

In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The included workflow deploys when you push to `main` and supports the repository's Pages base path automatically.

Built from [Roman Hauksson-Neill's Astro research template](https://research-template.roman.technology/), with the layout and interactions adapted from the SaLR and EVA project pages.
