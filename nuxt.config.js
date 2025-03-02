// https://nuxt.com/docs/api/configuration/nuxt-config
const articles = require("./data/articles.js");

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "nuxt-svgo", "@nuxt/image", "@nuxt/ui"],
  css: ["@/assets/css/main.css"],
  components: true,
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: "github-dark",
      langs: [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "shell",
        "mdc",
        "md",
        "yaml",
        "c",
        "cpp",
        "java",
        "javascript",
      ],
    },
  },
  generate: {
    routes: [
      "/blog/2025-01-bref",
      // "/blog/2025-02-article2",
      // "/blog/2025-03-article3",
    ],
  },
  compatibilityDate: "2025-02-26",
});
