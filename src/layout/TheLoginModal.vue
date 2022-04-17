<template>
  <div
    class="mdc-dialog__surface"
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="my-dialog-title"
    aria-describedby="my-dialog-content"
  >
    <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
    <h2 class="mdc-dialog__title" id="my-dialog-title">
      <!--
     -->THE LOGIN MODAL<!--
   -->
    </h2>
    <div class="mdc-dialog__content" id="my-dialog-content"></div>
    <div class="mdc-dialog__actions">
      <button
        type="button"
        class="mdc-button mdc-dialog__button"
        data-mdc-dialog-action="close"
      >
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Cancel</span>
      </button>
      <button
        type="button"
        class="mdc-button mdc-dialog__button"
        data-mdc-dialog-action="accept"
      >
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">OK</span>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
