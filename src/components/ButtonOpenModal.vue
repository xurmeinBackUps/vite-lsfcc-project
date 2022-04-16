<template>
  <button class="mdc-button mdc-button--raised">
    <span @click.prevent="openModal(event, targetModal)" class="mdc-button__label">
      <slot :targetModal="targetModal"></slot>
    </span>
  </button>
</template>

<script setup>
import router from "@/router";
import { nextTick } from "vue";

defineProps({
  targetModal: String,
});

function openModal(e, modal) {
  nextTick(async () => {
    if ((await modal) === "TheLoginModal") {
      console.log("clicked login!", `router: ${JSON.stringify(router)}`);
      router.push({ path: `/login/${modal}`, name: "login-form" });
    } else if ((await modal) === "TheContactFormModal") {
      console.log("clicked contact!", `router: ${JSON.stringify(router)}`);
      router.push({ path: `/contact/${modal}`, name: "contact-form" });
    }
  });
}
</script>

<style></style>
