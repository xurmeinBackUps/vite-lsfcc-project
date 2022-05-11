<template>
  <content-wrapper>
    <template #base-component>
      Page Blog New
      <FormNewBlog :blog-key="blog.newBlogKey" />
    </template>
  </content-wrapper>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAnonBlog } from "../stores/blog.js";
import { useAuth } from '@/stores/userAuth.js'
import ContentWrapper from "@/layout/ContentWrapper.vue";

const blog = useAnonBlog()
const auth = useAuth()
const route = useRoute();

onMounted(() => {
  auth.parseSignInLink()
})
</script>
