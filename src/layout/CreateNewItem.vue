<template>
  <div v-if="ui.adminUser">
    <v-dialog v-model="ui.newTransForm" >
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="green">
          Add New {{ itemType }} to Database
        </v-btn>
      </template>
      <v-card color="white">
        <slot :name="itemType + '-form'"></slot>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useUiState } from '../stores/uiState.js';

defineProps({
  itemType: String
})



const ui = useUiState()
</script>

<style lang="scss" scoped></style>
