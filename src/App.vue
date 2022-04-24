<template>
  <v-app>
    <TheLoginPanel app />
    <TheNavbar app />

    <v-main class="lsfcc-main">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

<<<<<<< Updated upstream
    <TheFooter app/>
=======
    <TheFooter app :drawer="drawer"/>
>>>>>>> Stashed changes
  </v-app>
</template>

<script setup>
import { VApp } from "vuetify/components";
import { RouterView } from "vue-router";
import TheNavbar from "./layout/TheNavbar.vue";
import TheLoginPanel from "./layout/TheLoginPanel.vue";
<<<<<<< Updated upstream
import TheFooter from "./layout/TheFooter.vue";
=======
import { useUiState } from "./stores/uiState.js";
import { useDisplay } from "vuetify/lib/framework";
import { VApp, VMain, VContainer } from "vuetify/components";
import { onMounted, onUpdated, reactive } from "vue";
import TheFooter from "./layout/TheFooter.vue";

const data = reactive({
  drawer: false,
});

const store = useUiState()

const display = useDisplay();

onMounted(() => {
  display;
  return data.drawer = store.$state.drawerState
});

onUpdated(() => {
  display;
  return data.drawer = store.$state.drawerState
});
>>>>>>> Stashed changes
</script>

<style lang="scss">
@import "@/assets/scss/variables_and_overrides.scss";

.lsfcc-main {
  width: 90%;
  margin: auto;
  margin-top: 1.5em;
  margin-bottom: 5em;
}

// .toggle {
//   bottom: 10px;
//   left: 10px;
//   color: $secondary;
//   cursor: default;
//   font-size: small;
// }
</style>
