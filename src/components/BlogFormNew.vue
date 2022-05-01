<template>
  <v-form
    v-if="auth.currentUser.uid"
    ref="form"
    v-model="submit"
  >
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <BlogTextArea :content="content" />
  </v-form>
</template>

<script setup>
import { useAuth } from '../stores/userAuth.js';
import { useAnonBlog } from '../stores/blog.js';
import { ref } from 'vue'
import BlogTextArea from './BlogTextArea.vue.js';

const auth = useAuth()
const store = useAnonBlog()

const title = ref('')
const content = ref('')
</script>

<style scoped lang="scss"></style>
