<template>
    <v-dialog v-model="ui.editForm" fullscreen :scrim="false">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="amber"> EDIT </v-btn>
      </template>
      <v-card color="white">
        <slot :name="itemType + '-form-edit'"></slot>
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

