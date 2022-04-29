<template>
  <content-wrapper>S
    <template #base-component>
      Anonymous Blog
      <BlogsIndex />
      <span v-if="store.getCurrentUser.accessToken" >
        <BlogTextArea />
      </span>
      <span v-else>
        <ButtonOpenModal target-modal="TheContactFormModal" />
      </span>
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import BlogTextArea from "@/components/BlogTextArea.vue";
import BlogsIndex from "@/components/BlogsIndex.vue";
import ButtonOpenModal from "../components/ButtonOpenModal.vue";
import { useUiState } from "@/stores/uiState.js";

const store = useUiState()
</script>
