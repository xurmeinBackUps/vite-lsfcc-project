<template>
  <div>
    <ul v-for="doc in store.blogs">
      <li>
        <BlogsIndexItem ref="doc" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAnonBlog } from "@/stores/blog.js";
const BlogsIndexItem = () => import("./BlogsIndexItem.vue");

const store = useAnonBlog();
store.fetchBlogs();
</script>
