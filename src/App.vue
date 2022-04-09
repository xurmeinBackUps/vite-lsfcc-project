<template>
  <div class="app-container">
    <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
      <TheNavbar />
    </header>
    <main class="mdc-top-app-bar--fixed-adjust main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.main {
  width: 90%;
  margin-top: 50px;
  margin: auto;
}

.mdc-top-app-bar {
  background: $secondary;
}
</style>
