<template>
  <content-wrapper>
    <template #base-component>
      <v-card-title>
        New Blog Post Form
      </v-card-title>
      <FormNewBlog :blog-key="blog.newBlogKey" />
    </template>
  </content-wrapper>
</template>

<script setup>
import { useAnonBlog } from "@/stores/blog.js";
import ContentWrapper from "@/layout/ContentWrapper.vue";
import FormNewBlog from "@/components/FormNewBlog.vue";

const blog = useAnonBlog()
</script>
