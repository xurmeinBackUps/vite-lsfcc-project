<template>
  <v-footer v-model="ui.drawerState" app class="footer">
    <v-btn
      v-if="!ui.drawerState"
      variant="outlined"
      icon
      @click="ui.openDrawer"
      color="blue"
      size="x-small"
    >
      <MdiLogin />
    </v-btn>
  </v-footer>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import MdiLogin from "../components/icons/MdiLogin.vue";

const ui = useUiState();
</script>

<style lang="scss" scoped>
.footer {
  height: fit-content;
  position: absolute;
  bottom: 0;
}
</style>
