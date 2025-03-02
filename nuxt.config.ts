// https://nuxt.com/docs/api/configuration/nuxt-config
import articles from "./data/articles.js";

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
    routes: () => {
      return articles.map((article) => `/blog/${article.slug}`);
    },
  },
  compatibilityDate: "2025-02-26",
});
