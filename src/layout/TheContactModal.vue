<template>
  <div>
    <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
    <h2 class="mdc-dialog__title" id="my-dialog-title">CONTACT FORM MODAL</h2>
    <div class="mdc-dialog__content" id="my-dialog-content">
      <ul class="mdc-list">
        <li class="mdc-list-item" tabindex="0">
          <span class="mdc-list-item__graphic">
            <div class="mdc-radio">
              <input
                class="mdc-radio__native-control"
                type="radio"
                id="test-dialog-baseline-confirmation-radio-1"
                name="test-dialog-baseline-confirmation-radio-group"
                checked
              />
              <div class="mdc-radio__background">
                <div class="mdc-radio__outer-circle"></div>
                <div class="mdc-radio__inner-circle"></div>
              </div>
            </div>
          </span>
          <label
            id="test-dialog-baseline-confirmation-radio-1-label"
            for="test-dialog-baseline-confirmation-radio-1"
            class="mdc-list-item__text"
            >None</label
          >
        </li>
        <!-- ... -->
      </ul>
    </div>
    <div class="mdc-dialog__actions">
      <mcw-dialog-button @click="this.$router.back()">Dismiss</mcw-dialog-button>
      <mcw-dialog-button @click="this.$router.back()" isDefault>Accept</mcw-dialog-button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
