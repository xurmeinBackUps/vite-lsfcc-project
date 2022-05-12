<template>
  <v-form v-if="auth.bloggerEmail">
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-textarea
      variant="outlined"
      name="new-blog"
      label="Provide your personal account anonymously"
      v-model="content"
    ></v-textarea>
    <v-btn @click="submitBlogPost(content, date, title)">Submit Blog</v-btn>
  </v-form>
</template>

<script setup>
import { useAnonBlog } from "../stores/blog.js";
import { useAuth } from '@/stores/userAuth.js'
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  blogKey: String
})

const auth = useAuth()
const store = useAnonBlog();

const title = ref("");
const content = ref("");

const date = computed(() => {
  let now = Date.now();
  let readable = new Date(now);
  return readable.toDateString();
});

function submitBlogPost(newBlogTitle, newDate, newBlogContent) {
  store.addBlog(props.blogKey, newBlogTitle, newDate, newBlogContent);
  store.fetchBlogs();
}

</script>

<style scoped lang="scss"></style>
