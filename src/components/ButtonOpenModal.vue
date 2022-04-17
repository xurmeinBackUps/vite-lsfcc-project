<template>
  <button class="mdc-button mdc-button--raised">
    <span @click.prevent="openModal(event, targetModal)" class="mdc-button__label">
      <slot :targetModal="targetModal"></slot>
    </span>
  </button>
</template>

<script setup>
import { nextTick } from "vue";
import { router } from "@/router/index.js";
defineProps({
  targetModal: String,
});

function openModal(e, modal) {
  nextTick(() => {
    if (modal === "TheLoginModal") {
      router.push({
        path: `/login`,
        name: "login-form",
        component: () => import(/* @vite-ignore */ `@/layout/${modal}.vue`),
      });
    } else if (modal === "TheContactFormModal") {
      router.push({
        path: `/contact`,
        name: "contact-form",
        component: () => import(/* @vite-ignore */ `@/layout/${modal}.vue`),
      });
    }
  });
}
</script>

<style></style>
