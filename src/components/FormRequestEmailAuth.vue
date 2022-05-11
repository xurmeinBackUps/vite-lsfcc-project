<template>
  <v-form class="modal-form">
    <v-text-field v-model="emailAuth.email" variant="outlined" label="Email" class="width"></v-text-field>
    <v-btn @click="submitBloggerRequest()">Submit</v-btn>
  </v-form>
</template>

<script setup>
import { useBloggerAuth } from '../stores/emailAuth.js';
import {useAnonBlog } from '@/stores/blog.js'

const emailAuth = useBloggerAuth()
const store = useAnonBlog()


function submitBloggerRequest() {
  store.createNewKey()
  emailAuth.bloggerSignup(emailAuth.email, store.newBlogKey)
}
</script>


