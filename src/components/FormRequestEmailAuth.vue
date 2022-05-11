<template>
  <v-form class="modal-form">
    <v-text-field v-model="auth.bloggerEmail" variant="outlined" label="Email" class="width"></v-text-field>
    <v-btn @click="submitBloggerRequest()">Submit</v-btn>
  </v-form>
</template>

<script setup>
import { useAuth } from '../stores/userAuth.js';
import {useAnonBlog } from '@/stores/blog.js'

const auth = useAuth()
const store = useAnonBlog()


function submitBloggerRequest() {
  store.createNewKey()
  auth.bloggerSignup(auth.bloggerEmail, store.newBlogKey)
}
</script>


