<template>
  <div>
    <header class="pt-16 pb-9 sm:pb-16 sm:text-center">
      <h1
        class="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200"
      >
        Décryptages
      </h1>
      <p class="text-lg text-slate-700 dark:text-slate-400">
        Clés de lecture pour saisir l’actualité et agir
      </p>
    </header>
    <div class="space-y-16 mx-auto max-w-7xl">
      <blog-item
        v-for="article in articles"
        :key="article.title"
        :title="article.title"
        :image="article.image"
        :description="article.description"
        :date="article.date"
        :slug="article.slug"
      >
      </blog-item>
    </div>
  </div>
</template>

<script setup>
import siteMetaInfo from "~/data/sitemetainfo.js";
import articles from "~/data/articles.js";

// const { data: articles } = await useAsyncData("home", () =>
//   queryContent("/articles")
//     .only([
//       "title",
//       "description",
//       "image",
//       "img",
//       "slug",
//       "tags",
//       "author",
//       "date",
//       "draft",
//     ])
//     .sort({ date: 1 })
//     .find()
// );

useSeoMeta({
  title: `${siteMetaInfo.title} | Blogs`,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "Its Solaiman's Pen and Paper to write ",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<style></style>
