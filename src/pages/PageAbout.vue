<template>
  <content-wrapper>
    <template #base-component>
      Page About
      <ButtonGroupOpenModal />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ButtonGroupOpenModal from "../components/ButtonGroupOpenModal.vue";
</script>
