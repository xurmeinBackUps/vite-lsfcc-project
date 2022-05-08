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
import TheNavbar from "./layout/TheNavbar.vue";
import TheLoginPanel from "./layout/TheLoginPanel.vue";
import TheFooter from "./layout/TheFooter.vue";
import { RouterView } from "vue-router";
</script>

<style lang="scss">
@import "@/assets/scss/variables_and_overrides.scss";

.lsfcc-main {
  width: 90%;
  margin: auto;
  margin-top: 1.5em;
  margin-bottom: 5em;
}
</style>
