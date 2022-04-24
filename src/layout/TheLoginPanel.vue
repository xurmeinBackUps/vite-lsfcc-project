<template>
  <v-navigation-drawer
    app
    temporary
<<<<<<< Updated upstream
    v-model="store.drawerState"
=======
    :drawer="drawer"
>>>>>>> Stashed changes
  >
    <div class="login-tools">
      <div class="mdc-drawer__header">
        <p>Admin Login</p>
      <hr />
      </div>
      <LoginForm />
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import LoginForm from "../components/LoginForm.vue";

const store = useUiState()
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";

// .mdc-drawer__header {
//   background: $alert;
// }


</style>
