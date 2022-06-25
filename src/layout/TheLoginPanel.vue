<template>
  <v-navigation-drawer
    app
    temporary
    v-model="ui.drawerState"
    class="bg-white"
  >
    <p class="text-center">Admin Login</p>
    <hr />
    <FormAuth />
  </v-navigation-drawer>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import FormAuth from '@/components/forms/FormAuth.vue'

const ui = useUiState();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";
</style>
