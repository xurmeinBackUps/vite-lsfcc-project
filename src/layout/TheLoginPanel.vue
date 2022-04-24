<template>
  <v-navigation-drawer app temporary v-model="store.drawerState">
    <p>Admin Login</p>
    <hr />
    <v-form>
      <v-text-field></v-text-field>
      <v-text-field></v-text-field>
      <v-btn> Sign In </v-btn>
    </v-form>
  </v-navigation-drawer>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";

const store = useUiState();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";
</style>
