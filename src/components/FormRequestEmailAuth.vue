<template>
  <v-form>
    <v-text-field v-model="auth.credentials.email" variant="outlined" label="Email"></v-text-field>
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
  auth.bloggerSignup(auth.credentials.email, store.newBlogKey)
}
</script>

<style lang="sccs" scoped></style>
