<template>
  <content-wrapper>S
    <template #base-component>
      Anonymous Blog
      <BlogsIndex />
        <BlogFormNew />
        <ButtonOpenModal target-modal="TheContactFormModal" />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import BlogFormNew from "@/components/BlogFormNew.vue";
import BlogsIndex from "@/components/BlogsIndex.vue";
import ButtonOpenModal from "@/components/ButtonOpenModal.vue";
import { useUiState } from "@/stores/uiState.js";

const store = useUiState()
</script>
