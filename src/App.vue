<template>
  <v-app class="lsfcc-app">
    <TheLoginPanel app />
    <TheNavbar app />

    <v-main class="lsfcc-main">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <TheFooter app />
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./layout/TheNavbar.vue";
import TheLoginPanel from "./layout/TheLoginPanel.vue";
import TheFooter from "./layout/TheFooter.vue";
</script>

<style lang="scss">
@use "@/assets/scss/_index.scss" as *;

.lsfcc-app {
  height: 100%;
}

.lsfcc-main {
  width: 75%;
  margin: auto;
  margin-top: 1.5em;
  margin-bottom: 5em;
}
</style>
