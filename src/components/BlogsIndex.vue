<template>
  <v-list>
    <v-list-item v-for="doc in store.blogs">
        <BlogsIndexItem :doc="doc" />
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useAnonBlog } from "@/stores/blog.js";
import BlogsIndexItem from "./BlogsIndexItem.vue"

const store = useAnonBlog();
store.fetchBlogs();
</script>
