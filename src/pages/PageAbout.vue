<template>
  <content-wrapper>
    <template #base-component>
      Page About
      <button-open-modal target-modal="TheLoginModal">LOGIN</button-open-modal>
      <button-open-modal target-modal="TheContactFormModal">CONTACT</button-open-modal>
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ButtonOpenModal from "../components/ButtonOpenModal.vue";
</script>
