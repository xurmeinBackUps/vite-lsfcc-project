<template>
  <div >
    <v-dialog v-model="ui.newTransForm">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="green"> Add New {{ itemType }} to Database </v-btn>
      </template>
      <v-card class="pa-9 ma-3" color="white">
        <slot :name="itemType + '-form'"></slot>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useUiState } from "../stores/uiState.js";

const ui = useUiState()

defineProps({
  itemType: String,
});
</script>
