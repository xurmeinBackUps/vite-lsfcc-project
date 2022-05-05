<template>
  <v-list>
    <v-list-item v-for="(blog, key) in store.blogs" :key="key">
      <IndexItemBlog :blog="blog" :b-key="key" />
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useAnonBlog } from "@/stores/blog.js";
import IndexItemBlog from "./IndexItemBlog.vue"

const store = useAnonBlog();
store.fetchBlogs();
</script>
