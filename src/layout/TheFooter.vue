<template>
  <v-footer v-model="store.drawerState" app class="footer">
    <v-btn
      v-if="!store.drawerState"
      variant="outlined"
      icon="mdi-login"
      @click="store.openDrawer"
      color="blue"
      size="x-small"
    ></v-btn>
  </v-footer>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";

const store = useUiState();
</script>

<style lang="scss" scoped>
.footer {
  height: fit-content;
  position: absolute;
  bottom: 0;
}
</style>
