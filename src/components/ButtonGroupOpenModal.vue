<template>
  <div>
    <button-open-modal target-modal="TheLoginModal">LOGIN</button-open-modal>
    <button-open-modal target-modal="TheContactFormModal">CONTACT</button-open-modal>
  </div>
</template>
<script setup>
import ButtonOpenModal from "../components/ButtonOpenModal.vue";
defineProps({
  targetModal: String,
});
</script>
<style></style>
