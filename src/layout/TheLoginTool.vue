<template>
  <mcw-drawer v-model="open" modal class="primary-drawer login-tools" @click="drawer()">
    <LoginForm />
  </mcw-drawer>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import LoginForm from "../components/LoginForm.vue";

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
</style>
