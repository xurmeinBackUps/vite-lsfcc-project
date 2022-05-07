<template>
  <div v-for="(article, key) in rawData.articles" :key="key">
    <entry-about>
      <template #article-title>
        <span>
          {{ article.title }}
        </span>
      </template>
      <template #article-content>
        <div v-html="article.content"></div>
      </template>
    </entry-about>
  </div>
</template>

<script setup>
import { useAbout } from "@/stores/about.js";
import EntryAbout from "@/layout/EntryAbout.vue";
import { onMounted, reactive } from "vue";

const store = useAbout();
const rawData = reactive({
  articles: [],
});

store.fetchArticles();

onMounted(() => {
  rawData.articles = store.articles;
  store.sortArticles(rawData.articles);
});
</script>

<style lang="scss" scoped></style>
