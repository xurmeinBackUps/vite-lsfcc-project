<template>
  <mcw-dialog>
    <div class="mdc-dialog__container">
      <div
        class="mdc-dialog__surface"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="my-dialog-title"
        aria-describedby="my-dialog-content"
      >
        <TheContactModal />
      </div>
    </div>
    <div class="mdc-dialog__scrim"></div>
  </mcw-dialog>
</template>

<script setup>
import TheContactModal from "./TheContactModal.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.mdc-dialog {
  &__surface {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__scrim {
    background-color: rgba(146, 122, 122, 0.519);
  }
}
</style>
