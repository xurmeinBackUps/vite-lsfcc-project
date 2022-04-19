<template>
  <div class="app-container">
    <TheLoginTool :open="uiStore.drawerState" />
    <div class="mdc-drawer-app-content drawer-main-content">
      <div>
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
    <mcw-material-icon class="toggle" icon="login" @click="drawer()" />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./layout/TheNavbar.vue";
import TheLoginTool from "./layout/TheLoginTool.vue";
import { useUiState } from "./stores/uiState.js";

const uiStore = useUiState();

const drawer = () => {
  uiStore.openDrawer();
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Forum&family=Roboto:ital,wght@0,400;0,700;1,300&display=swap");

.app-container {
  position: relative;
}

.main {
  width: 90%;
  margin: auto;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.mdc-top-app-bar {
  background: $secondary;
}

.toggle {
  bottom: 10px;
  left: 10px;
  color: $accent;
  cursor: default;
  font-size: x-small;
}
</style>
