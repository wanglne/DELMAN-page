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
          name: "delman-green",
          type: "light",
          fg: "#21312a",
          bg: "#dde5dd",
          settings: [
            { settings: { foreground: "#21312a" } },
            {
              scope: ["keyword", "storage", "entity.name", "support.type"],
              settings: { foreground: "#1c5c45" },
            },
            {
              scope: ["comment", "punctuation"],
              settings: { foreground: "#4b5b52" },
            },
            {
              scope: [
                "keyword.other.entry-type.bibtex",
                "punctuation.definition.keyword.bibtex",
              ],
              settings: { foreground: "#cf212e" },
            },
            {
              scope: ["entity.name.type.entry-key.bibtex"],
              settings: { foreground: "#6639ba" },
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
            src: ["./src/assets/fonts/google-sans-latin-400.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/google-sans-latin-600.woff2"],
            weight: "600",
            style: "normal",
          },
        ],
      },
      name: "Google Sans",
      cssVariable: "--font-google-sans",
      weights: ["400", "600"],
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
