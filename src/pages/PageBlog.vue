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
const BlogsIndex = () => import("@/components/BlogsIndex.vue")

</script>
