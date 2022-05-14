<template>
  <v-form>
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-textarea
      variant="outlined"
      name="new-blog"
      label="Provide your personal account anonymously"
      v-model="content"
    ></v-textarea>
    <v-btn @click="submitBlogPost(content, title)">Submit Blog</v-btn>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAnonBlog } from "@/stores/blog.js";

const props = defineProps({
  blogKey: String,
})

const store = useAnonBlog();
const router = useRouter()

const title = ref("");
const content = ref("");

function submitBlogPost(newBlogTitle, newBlogContent) {
  store.addBlog(props.blogKey, newBlogTitle, newBlogContent);
  window.alert(`Thank you for sharing your story! Your blog won't be visibile to the public until it has been reviewed. Please contact ${import.meta.env.FB_HUDSON_EMAIL} for further details.`)
  setTimeout(router.push({ path: '/blog' }), 3000)
}

</script>

