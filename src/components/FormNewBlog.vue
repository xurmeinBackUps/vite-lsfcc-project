<template>
  <v-form>
    <!-- ref="form" -->
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-textarea
      variant="outlined"
      name="new-blog"
      label="Provide your personal account anonymously"
      v-model="content"
    ></v-textarea>
    <v-btn @click="submitBlogPost(title, date, content)">Submit Blog</v-btn>
  </v-form>
</template>

<script setup>
import { useAnonBlog } from '../stores/blog.js';
import { ref, computed } from 'vue'

const store = useAnonBlog()

const title = ref('')
const content = ref('')

const date = computed(() => Date.now().toLocaleString())


function submitBlogPost(newBlogTitle, newDate, newBlogContent) {
  store.addBlog(newBlogTitle, newDate, newBlogContent)
  store.fetchBlogs()
}
</script>

<style scoped lang="scss"></style>
