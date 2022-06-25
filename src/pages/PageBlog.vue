<template>
  <content-wrapper>
    <template #base-component>
      <v-card-title>
        Anonymous Blog
      </v-card-title>
      <ListAllBlogs />
      <ButtonRequestEmailSignIn />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ListAllBlogs from "@/components/lists/ListAllBlogs.vue";
import ButtonRequestEmailSignIn from "@/components/ButtonRequestEmailSignIn.vue";
</script>
