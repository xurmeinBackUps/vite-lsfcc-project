<template>
  <content-wrapper>
    <template #base-component>
      Anonymous Blog
      <ListAllBlogs />
      <ButtonRequestEmailSignIn />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ListAllBlogs from "@/components/ListAllBlogs.vue";
import ButtonRequestEmailSignIn from "../components/ButtonRequestEmailSignIn.vue";
</script>
