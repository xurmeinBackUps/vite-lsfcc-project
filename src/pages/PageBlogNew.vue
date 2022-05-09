<template>
  <content-wrapper>
    <template #base-component>
      Page Blog New
      <FormNewBlog :blog-key="route.params.blogKey" />
    </template>
  </content-wrapper>
</template>

<script setup>
import { useRoute } from "vue-router";
import ContentWrapper from "@/layout/ContentWrapper.vue";

const route = useRoute();
</script>
