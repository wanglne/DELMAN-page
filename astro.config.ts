import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeCitation from "rehype-citation";

import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [
        rehypeCitation,
        {
          bibliography: "bibliography.bib",
          linkCitations: true,
        },
      ],
    ],
  },
  integrations: [
    icon(),
    astroExpressiveCode({
      defaultProps: { wrap: true },
      minSyntaxHighlightingColorContrast: 0,
      themes: [
        {
          name: "delman-citation",
          type: "light",
          fg: "#24292e",
          bg: "#dde5dd",
          settings: [
            { settings: { foreground: "#24292e" } },
            {
              scope: ["support.function.key.bibtex"],
              settings: { foreground: "#005cc5" },
            },
            {
              scope: [
                "punctuation.definition.string.begin.bibtex",
                "punctuation.definition.string.end.bibtex",
              ],
              settings: { foreground: "#032f62" },
            },
            {
              scope: [
                "keyword.other.entry-type.bibtex",
                "punctuation.definition.keyword.bibtex",
              ],
              settings: { foreground: "#bf3441" },
            },
            {
              scope: ["entity.name.type.entry-key.bibtex"],
              settings: { foreground: "#6f42c1" },
            },
          ],
        },
      ],
      styleOverrides: {
        codeFontSize: "1rem",
        codeLineHeight: "1.5",
        borderRadius: "0.5rem",
        borderWidth: "0",
        codeBackground: "#dde5dd",
        frames: {
          shadowColor: "transparent",
        },
      },
      themeCssSelector: (theme) =>
        theme.type === "dark" ? `[data-theme="dark"]` : `[data-theme="light"]`,
    }),
    mdx(),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/google-sans-latin-600.woff2"],
            weight: "600",
            style: "normal",
          },
        ],
      },
      name: "Google Sans",
      cssVariable: "--font-google-sans",
      weights: ["600"],
    },
    {
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/noto-sans-latin.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
      name: "Noto Sans",
      cssVariable: "--font-noto-sans",
      weights: ["100 900"],
    },
  ],
  image: {
    responsiveStyles: true,
  },
});
