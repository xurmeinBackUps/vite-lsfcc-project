<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    temporary
  >
    <div class="login-tools">
      <div class="mdc-drawer__header">
        <p>Admin Login</p>
        <ButtonClose target="drawer" />
      <hr />
      </div>
      <LoginForm />
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import LoginForm from "../components/LoginForm.vue";
import ButtonClose from "../components/ButtonClose.vue";

const uiStore = useUiState();

defineProps({
  drawer: Boolean,
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

// .mdc-drawer__header {
//   background: $alert;
// }


</style>
