<template>
  <div v-for="(article, key) in store.articles" :key="key">
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
// import { onMounted, reactive } from "vue";

const store = useAbout();

// const data = reactive({
//   raw: [],
//   sorted: [],
// });

store.fetchArticles();

// onMounted(() => {
//   data.raw = store.articles;
//   store.sortArticles(data.raw);
//   console.log(store.sortArticles(data.raw));
// });
</script>

<style lang="scss" scoped></style>
