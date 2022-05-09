<template>
  <div v-for="article in props.articles">
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

const props = defineProps({
  articles: Array
})
</script>

<style lang="scss" scoped></style>
