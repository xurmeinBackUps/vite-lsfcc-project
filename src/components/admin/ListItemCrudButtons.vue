<template>
  <v-container>
    <br />
    <v-divider />
    <v-row class="mt-1">
      <v-col>
      <!-- required here for emit event listeners -->
        <v-dialog v-model="ui.editForm" fullscreen :scrim="false">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              @click="emit('edit', itemKey)"
              color="amber"
            > EDIT </v-btn>
          </template>
          <v-card color="white">
            <slot :name="itemType + '-form-edit'"></slot>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col>
        <v-btn
          v-if="!indexItem.private"
          @click="emit('hide', itemKey)"
          color="blue"
        > HIDE </v-btn>
        <v-btn
          v-else
          @click="emit('show', itemKey)"
          color="indigo"
        > SHOW </v-btn>
      </v-col>
      <v-col>
        <v-btn
          @click="emit('destroy', itemKey)"
          color="red"
        > DELETE </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";

const ui = useUiState();

defineProps({
  indexItem: Object,
  itemType: String,
  itemKey: String,
});

const emit = defineEmits([
  "edit",
  "hide",
  "show",
  "destroy"
]);
</script>
