<template>
  <v-btn @click.prevent="openModal(event, targetModal)">
      <slot :targetModal="targetModal">Contact</slot>
  </v-btn>
</template>

<script setup>
import { nextTick } from "vue";
import { router } from "@/router/index.js";

defineProps({
  targetModal: String,
});

function openModal(e, modal) {
  nextTick(() => {
    if (modal === "TheContactFormModal") {
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
