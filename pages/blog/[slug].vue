<template>
  <div class="px-1 mx-auto sm:px-6 lg:px-10 xl:max-w-7xl mt-6 sm:mt-10">
    <div v-if="article" class="flex flex-col lg:flex-row gap-8 lg:gap-20">
      <div class="flex-1">
        <img
          class="mx-auto w-full mb-10 rounded-md drop-shadow-sm h-64 object-cover"
          :src="article?.image"
          alt="Image de l'article"
        />

        <h1
          class="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6"
        >
          {{ article?.title }}
        </h1>

        <p class="text-gray-500 text-sm sm:text-base">
          Publié le {{ formatDate(article?.date) }}
        </p>

        <div class="mb-6 sm:mb-10">
          <p
            class="text-gray-700 leading-relaxed prose prose-sm sm:prose-xl whitespace-pre-line"
          >
            {{ article?.intro }}
          </p>
        </div>

        <UCard
          v-for="section in article?.sections"
          :key="section.id"
          :id="section.id"
          class="mb-6 sm:mb-10"
        >
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            {{ section.title }}
          </h2>

          <div
            class="text-gray-700 leading-relaxed prose prose-sm sm:prose-xl whitespace-pre-line"
          >
            <template
              v-for="(part, index) in splitTextWithImages(
                section.text,
                section.images
              )"
              :key="index"
            >
              <template v-if="part.type === 'text'">
                {{ part.content }}
              </template>

              <template v-else-if="part.type === 'image'">
                <div class="float-left mr-4 w-1/2 not-prose my-6">
                  <img
                    :src="part.content"
                    :alt="`Image ${index + 1} pour ${section.title}`"
                    class="w-full h-auto rounded-lg shadow-md"
                  />
                  <figcaption
                    v-if="part.label"
                    class="text-sm text-gray-600 text-center mt-1 truncate w-32 sm:w-auto"
                  >
                    {{ part.label }}
                  </figcaption>
                </div>
              </template>
            </template>
          </div>

          <div v-if="section.solution" class="mt-4 p-4 bg-green-50 rounded-lg">
            <p class="text-gray-700 leading-relaxed prose prose-sm sm:prose-xl">
              {{ section.solution }}
            </p>
          </div>

          <div v-if="section.question" class="mt-4 p-4 bg-gray-100 rounded-lg">
            <p class="text-gray-700 leading-relaxed prose prose-sm sm:prose-xl">
              {{ section.question }}
            </p>
          </div>
        </UCard>
      </div>

      <div class="w-full lg:w-80 flex-shrink-0">
        <div class="sticky top-6 sm:top-20 space-y-4 sm:space-y-6">
          <UCard :ui="{ body: { padding: 'p-3 sm:p-4' } }">
            <UVerticalNavigation
              :links="article?.summary"
              :ui="{ size: 'text-base sm:text-lg' }"
            />
          </UCard>

          <UCard class="p-3 sm:p-4">
            <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Découvrez-aussi
            </h3>

            <div
              v-for="article in otherArticles"
              class="fakeimg mb-3 sm:mb-4"
              style="height: 80px; background-color: #e2e8f0"
            >
              {{ article }}
            </div>
          </UCard>
        </div>
      </div>
    </div>

    <div
      class="footer text-center mt-6 sm:mt-10 py-4 sm:py-6 border-t border-gray-200"
    >
      <h2 class="text-gray-700 text-sm sm:text-base">Footer</h2>
    </div>
  </div>
</template>

<script setup>
import articles from "@/data/articles.js";

const route = useRoute();

// Trouver l'article correspondant au slug
const article = articles.find((article) => article.slug === route.params.slug);

const otherArticles = articles.find(
  (article) => article.slug !== route.params.slug
);

if (!article) {
  throw createError({ statusCode: 404, statusMessage: "Article not found" });
}

// Formater la date
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("fr", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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

const splitTextWithImages = (text, images) => {
  const parts = [];
  let currentText = text;
  let imageIndex = 0;

  while (currentText.includes("[IMAGE")) {
    const imageMarker = `[IMAGE${imageIndex + 1}]`;
    const markerIndex = currentText.indexOf(imageMarker);

    if (markerIndex !== -1) {
      // Ajouter le texte avant l'image
      parts.push({ type: "text", content: currentText.slice(0, markerIndex) });
      // Ajouter l'image
      parts.push({
        type: "image",
        content: images[imageIndex].src,
        label: images[imageIndex]?.label,
      });
      // Mettre à jour le texte restant
      currentText = currentText.slice(markerIndex + imageMarker.length);
      imageIndex++;
    }
  }

  // Ajouter le texte restant
  if (currentText) {
    parts.push({ type: "text", content: currentText });
  }

  return parts;
};
</script>
