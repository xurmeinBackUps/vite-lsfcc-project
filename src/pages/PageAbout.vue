<template>
  <div v-for="(article, key) in store.fetchArticles" :key="key">
      <entry-about >
        <template #article-title>
          <span>
            {{ article.title }}
          </span>
        </template>
        <template #article-content>
          <slot v-html="article.content"></slot>
        </template>

      </entry-about>
  </div>
</template>

<script setup>
import { useAbout } from "@/stores/about.js"
import EntryAbout from "@/layout/EntryAbout.vue";

const store = useAbout()
store.fetchArticles()
</script>
