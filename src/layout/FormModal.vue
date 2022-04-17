<template>
  <div class="mdc-dialog">
    <div class="mdc-dialog__container">
      <!-- <TheLoginModal /> -->
      <!-- <TheContactModal/> -->
    </div>
    <div class="mdc-dialog__scrim"></div>
  </div>
</template>

<script setup>
// import TheContactModal from '@/components/TheContactModal.vue'
// import TheLoginModal from '@/components/TheLoginModal.vue'

const modalState = reactive({
  isOpen: Boolean,
  // dismissed: Boolean,
  // formSent: Boolean
});
</script>

<style lang="scss" scoped></style>
