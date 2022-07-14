<template>
  <v-dialog v-model="ui.editForm" fullscreen>
    <v-card class="pa-9 ma-3 form" color="white">
      <slot :name="itemType + '-form'"></slot>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";

const ui = useUiState();

defineProps({
  itemType: String,
});
</script>

<style lang="scss" scoped>
.form {
  width: 67vw;
}
</style>
