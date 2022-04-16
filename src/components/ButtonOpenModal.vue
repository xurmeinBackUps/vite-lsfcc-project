<template>
  <button class="mdc-button mdc-button--raised">
    <span @click="openModal(event, targetModal)" class="mdc-button__label">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import router from "@/router";

defineProps({
  targetModal: String,
});

function openModal(e, modal) {
  if (modal === "TheLoginModal") {
    console.log("clicked login!", `router: ${router}`, `this.router: ${this.router}`);
    // router.go(3);
  } else if (modal === "TheContactFormModal") {
    console.log("clicked contact!", `router: ${router}`, `this.router: ${this.router}`);
    // router.go(4);
  }
}
</script>

<style></style>
