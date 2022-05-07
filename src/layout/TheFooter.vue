<template>
  <v-footer v-model="ui.drawerState" app class="footer">
    <v-btn
      v-if="!ui.drawerState"
      variant="outlined"
      icon="mdi-login"
      @click="ui.openDrawer"
      color="blue"
      size="x-small"
    ></v-btn>
  </v-footer>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";

const ui = useUiState();
</script>

<style lang="scss" scoped>
.footer {
  height: fit-content;
  position: absolute;
  bottom: 0;
}
</style>
