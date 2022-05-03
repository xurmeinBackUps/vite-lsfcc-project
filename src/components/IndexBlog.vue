<template>
  <v-list>
    <v-list-item v-for="doc in store.blogs">
      <IndexItemBlog :doc="doc" />
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useAnonBlog } from "@/stores/blog.js";
import IndexItemBlog from "./IndexItemBlog.vue"


const store = useAnonBlog();
store.fetchBlogs();
</script>
