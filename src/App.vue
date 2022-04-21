<template>
  <v-app>
    <v-navigation-drawer app>
      <TheLoginPanel :open="uiStore.drawerState" />
    </v-navigation-drawer>
    <v-app-bar app>
        <TheNavbar />
    </v-app-bar>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
      <v-footer app>
       <button
        class="toggle"
        icon="login"
        @click="drawer()"
      >
        <span class="mdc-icon">login</span>
      </button>
      </v-footer>

  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./layout/TheNavbar.vue";
import TheLoginPanel from "./layout/TheLoginPanel.vue";
import { useUiState } from "./stores/uiState.js";

const uiStore = useUiState();

const drawer = () => {
  uiStore.openDrawer();
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.app-container {
  position: relative;
}

.main {
  width: 90%;
  margin: auto;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.toggle {
  bottom: 10px;
  left: 10px;
  color: $secondary;
  cursor: default;
  font-size: small;
}
</style>
