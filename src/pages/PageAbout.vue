<template>
  <div>
    <ListAboutArticles :articles="store.articles" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import ListAboutArticles from '../components/ListAboutArticles.vue';
import { useAbout } from "@/stores/about.js";

const store = useAbout();

onMounted(() => {
  store.fetchArticles();
})
</script>

<style lang="scss" scoped></style>
