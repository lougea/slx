<template>
  <div class="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 mt-10">
    <!-- Image de l'article -->
    <img
      class="mx-auto w-full my-10 rounded-md drop-shadow-sm h-64 object-cover"
      :src="article?.image"
      alt="Image de l'article"
    />

    <!-- Conteneur principal -->
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Contenu de l'article (à gauche) -->
      <div class="flex-1">
        <!-- Titre et date -->
        <h1 class="text-4xl text-gray-700 font-extrabold mb-6">
          {{ article?.title }}
        </h1>
        <p class="text-gray-500 mb-10">
          Publié le {{ formatDate(article?.date) }}
        </p>

        <!-- Introduction -->
        <ProseCard class="mb-10">
          <p class="text-lg text-gray-700 leading-relaxed prose prose-sm">
            {{ article?.intro }}
          </p>
        </ProseCard>

        <!-- Contenu principal -->
        <div class="prose max-w-none">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
          <p class="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Section 1</h2>
          <p class="text-gray-700 mb-6">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Section 2</h2>
          <p class="text-gray-700 mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      <!-- Sommaire collant (à droite) -->
      <div class="w-full lg:w-80 flex-shrink-0">
        <div class="sticky top-20">
          <UCard class="p-4">
            <UVerticalNavigation :links="article?.summary" />
          </UCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import siteMetaInfo from "@/data/sitemetainfo";
import author from "@/data/author.js";
import articles from "@/data/articles.js";

const route = useRoute();

// Trouver l'article correspondant au slug
const article = articles.find((article) => article.slug === route.params.slug);

if (!article) {
  throw createError({ statusCode: 404, statusMessage: "Article not found" });
}

// Formater la date
const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("fr", options);
};

// SEO
useSeoMeta({
  title: article?.title ?? "",
  meta: [
    {
      hid: "description",
      name: "description",
      content: article?.description,
    },
  ],
});
</script>
