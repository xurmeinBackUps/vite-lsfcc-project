<template>
    <v-dialog v-model="ui.editForm" fullscreen>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="yellow"> EDIT </v-btn>
      </template>
      <v-card color="white" >
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

