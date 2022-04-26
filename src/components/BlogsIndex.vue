<template>
  <div>
    <ul v-for="doc in store.blogs">
      <Suspense>
        <BlogsIndexItem :doc="doc" />
      </Suspense>
    </ul>
  </div>
</template>

<script setup>
import { useAnonBlog } from "@/stores/blog.js";
import { Suspense } from "vue";
const BlogsIndexItem = () => import("./BlogsIndexItem.vue");

const store = useAnonBlog();
store.fetchBlogs();
</script>
