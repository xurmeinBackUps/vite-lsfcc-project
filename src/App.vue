<template>
  <div class="app-container">
    <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
      <TheNavbar />
    </header>
    <main class="mdc-top-app-bar--fixed-adjust main">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
<<<<<<< HEAD

=======
>>>>>>> bd51c99d345f3678c147258c5e6a1a1f4a04d9d3
import TheNavbar from "./components/TheNavbar.vue";
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.main {
  width: 90%;
  margin: auto;
}

.mdc-top-app-bar {
  background: $secondary;
}
</style>
