<template>
  <v-list>
    <v-list-item v-for="(blog, key) in store.blogs" :key="key">
      <ListItemBlog :blog="blog" :b-key="key" />
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useAnonBlog } from "@/stores/blog.js";
import ListItemBlog from "./ListItemBlog.vue"

const store = useAnonBlog();
store.fetchBlogs();
</script>
