<template>
  <content-wrapper>
    <template #base-component>
      Anon Blog
      <BlogsIndex :blogs="store.blogs" />
      <TextAreaBlog />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import TextAreaBlog from "@/components/TextAreaBlog.vue";
import { useAnonBlog } from "@/stores/blog.js";

const BlogsIndex = () => import("@/components/BlogsIndex.vue");

const store = useAnonBlog();
store.fetchBlogs();
</script>
