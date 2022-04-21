<template>
  <div
    :open="open"
    modal
    class="primary-drawer"
  >
    <div class="login-tools">
      <div class="mdc-drawer__header">
        <p>Admin Login</p>
        <ButtonClose @click="drawer()" />
      <hr />
      </div>
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import LoginForm from "../components/LoginForm.vue";
import ButtonClose from "../components/ButtonClose.vue";

const uiStore = useUiState();

defineProps({
  open: Boolean,
});

const drawer = () => {
  uiStore.closeDrawer();
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.primary-drawer {

  height: 100%;

  &*{
    height: inherit;
  }
}
.login-tools {
  text-align: center;
}

.mdc-drawer__header {
  background: $alert;
}


</style>
