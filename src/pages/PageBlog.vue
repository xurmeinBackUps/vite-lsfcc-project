<template>
  <content-wrapper>S
    <template #base-component>
      Anonymous Blog
      <BlogsIndex />
      <v-divider class="my-9"></v-divider>
      <BlogFormNew /><!-- v-if="store.getCurrentUser.uid"  -->
      <ButtonOpenModal

        target-modal="TheContactFormModal"
      />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import BlogsIndex from "@/components/BlogsIndex.vue";
import ButtonOpenModal from "@/components/ButtonOpenModal.vue";
import { useUiState } from "@/stores/uiState.js";
import BlogFormNew from"@/components/BlogFormNew.vue"

const store = useUiState()
</script>
