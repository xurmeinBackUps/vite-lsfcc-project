<template>
  <div class="app-container">
    <mcw-icon-button
      >menu
      <TheLoginTool open />
    </mcw-icon-button>
    <div class="mdc-drawer-app-content drawer-main-content">
      <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
        <TheNavbar />
      </header>
      <div class="mdc-top-app-bar--fixed-adjust">
        <main class="main">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./layout/TheNavbar.vue";
import TheLoginTool from "./layout/TheLoginTool.vue";
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Forum&family=Roboto:ital,wght@0,400;0,700;1,300&display=swap");

.main {
  width: 90%;
  margin: auto;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.mdc-top-app-bar {
  background: $secondary;
}
</style>
