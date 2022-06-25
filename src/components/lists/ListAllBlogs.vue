<template>
  <v-list>
    <v-list-item v-for="(blog, key) in store.blogs" :key="key">
      <ListItemBlog :blog="blog" :b-key="key" />
    </v-list-item>
  </v-list>
</template>

<script setup>
import { onMounted } from "vue";
import { useAnonBlog } from "@/stores/blog.js";
import ListItemBlog from "./ListItemBlog.vue"

const store = useAnonBlog();

onMounted(() => {
  store.fetchBlogs();
})
</script>
