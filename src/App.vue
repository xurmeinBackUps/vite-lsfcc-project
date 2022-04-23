<template>
  <v-app>
    <TheLoginPanel app :drawer="drawer" />
    <TheNavbar app />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <v-btn
        variant="outlined"
        icon="mdi-login"
        @click="drawer = !drawer"
        color="blue"
      ></v-btn>
    </v-footer>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./layout/TheNavbar.vue";
import TheLoginPanel from "./layout/TheLoginPanel.vue";
import { useUiState } from "./stores/uiState.js";
import { useDisplay } from "vuetify/lib/framework";
import { VApp, VMain, VContainer, VFooter, VBtn } from "vuetify/components";
import { onMounted } from "vue";

defineProps({
  drawer: Boolean,
});

const display = useDisplay();

onMounted(() => {
  return display;
});
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

// .main {
//   width: 90%;
//   margin: auto;
//   margin-top: 1.5em;
//   margin-bottom: 1.5em;
// }

// .toggle {
//   bottom: 10px;
//   left: 10px;
//   color: $secondary;
//   cursor: default;
//   font-size: small;
// }
</style>
