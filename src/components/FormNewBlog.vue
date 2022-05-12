<template>
  <v-form v-if="auth.bloggerEmail">
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-textarea
      variant="outlined"
      name="new-blog"
      label="Provide your personal account anonymously"
      v-model="content"
    ></v-textarea>
    <v-btn @click="submitBlogPost(content, props.date, title)">Submit Blog</v-btn>
  </v-form>
</template>

<script setup>
import { useAnonBlog } from "../stores/blog.js";
import { useAuth } from '@/stores/userAuth.js'
import { useRouter } from "vue-router";
import { ref } from "vue";

const props = defineProps({
  blogKey: String,
  date: String
})

const auth = useAuth()
const store = useAnonBlog();
const router = useRouter()

const title = ref("");
const content = ref("");

function submitBlogPost(newBlogTitle, newDate, newBlogContent) {
  store.addBlog(props.blogKey, newBlogTitle, newDate, newBlogContent);
  window.alert(`Thank you for sharing your story! Your blog won't be visibile to the public until it has been reviewed. Please contact ${import.meta.env.FB_HUDSON_EMAIL} for further details.`)
  setTimeout(router.push({ path: '/blog' }), 3000)
}

</script>

<style scoped lang="scss"></style>
