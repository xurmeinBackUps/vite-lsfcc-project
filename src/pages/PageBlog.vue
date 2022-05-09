<template>
  <content-wrapper>
    <template #base-component>
      Anonymous Blog
      <ListAllBlogs />
      <v-divider class="my-9"></v-divider>
      <ButtonRequestEmailSignIn />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ListAllBlogs from "@/components/ListAllBlogs.vue";
import ButtonRequestEmailSignIn from "../components/ButtonRequestEmailSignIn.vue";
import { useAuth } from '@/stores/userAuth.js'

const auth = useAuth()
</script>
