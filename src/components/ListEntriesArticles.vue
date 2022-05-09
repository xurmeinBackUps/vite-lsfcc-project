<template>
  <div v-for="article in store.articles">
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
import EntryAbout from "@/layout/EntryAbout.vue";
import { onMounted } from "vue";
import { useAbout } from "@/stores/about.js";

const store = useAbout();

onMounted(() => {
  store.fetchArticles();
})
</script>

<style lang="scss" scoped></style>
