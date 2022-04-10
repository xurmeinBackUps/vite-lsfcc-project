<template>
  <ul v-for="thing in $props.randoThing" class="mdc-list">
    PLACEHOLDER UI
    <router-link to="/">
      <li class="mdc-list-item" tabindex="0">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">{{ thing }}</span>
      </li>
    </router-link>
  </ul>
</template>

<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  randoThing: Array,
});
</script>

<style lang="scss" scoped></style>
