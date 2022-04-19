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
    <mcw-fab class="toggle" mini icon="login" @click="drawer()"></mcw-fab>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import TheNavbar from "./layout/TheNavbar.vue";
import TheLoginTool from "./layout/TheLoginTool.vue";
import { useUiState } from "./stores/uiState.js";

export default {
  setup() {
    const uiStore = useUiState();

    return { uiStore };
  },

  components: {
    RouterView,
    TheLoginTool,
    TheNavbar,
  },

  methods: {
    drawer() {
      this.uiStore.toggleDrawer();
    },
  },
};
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

.toggle {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: transparent;
}
</style>
