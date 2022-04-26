<template>
  <content-wrapper>
    <template #base-component>
      Anon Blog
      <BlogsIndex />
      <TextAreaBlog />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import TextAreaBlog from "@/components/TextAreaBlog.vue";
import BlogsIndex from "@/components/BlogsIndex.vue";
</script>
