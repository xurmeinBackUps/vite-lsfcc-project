<template>
  <content-wrapper>
    <template #base-component>
      Page Blog New
      <FormNewBlog :blog-key="blog.newBlogKey" :date="blog.date" />
    </template>
  </content-wrapper>
</template>

<script setup>
import { useAnonBlog } from "../stores/blog.js";
import ContentWrapper from "@/layout/ContentWrapper.vue";
import FormNewBlog from "../components/FormNewBlog.vue";

const blog = useAnonBlog()
</script>
