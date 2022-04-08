<template>
  <ul class="mdc-list">
    PLACEHOLDER UI
    <router-link to="/">
      <li class="mdc-list-item" tabindex="0">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">Single-line item</span>
      </li>
    </router-link>
    <router-link to="/">
      <li class="mdc-list-item">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">Single-line item</span>
      </li>
    </router-link>
    <router-link to="/">
      <li class="mdc-list-item">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">Single-line item</span>
      </li>
    </router-link>
    <mcw-card>HELLO!</mcw-card>
  </ul>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
