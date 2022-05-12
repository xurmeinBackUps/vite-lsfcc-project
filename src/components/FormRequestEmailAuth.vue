<template>
  <v-form class="modal-form">
    <v-text-field v-model="auth.bloggerEmail" variant="outlined" label="Email" class="width"></v-text-field>
    <v-btn @click="submitBloggerRequest()">Submit</v-btn>
  </v-form>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuth } from '../stores/userAuth.js';
import { useAnonBlog } from '@/stores/blog.js'

const auth = useAuth()
const store = useAnonBlog()
const router = useRouter()

function submitBloggerRequest() {
  store.createNewKey()
  auth.bloggerSignup(auth.bloggerEmail, store.newBlogKey)
  // TODO: use redirect method from vue-router for proper timing, runs too late(???) currently
  setTimeout(router.push({
    name: 'new-blog',
    params: {
      blogKey:  store.newBlogKey
    }
  }), 5000)
}
</script>


