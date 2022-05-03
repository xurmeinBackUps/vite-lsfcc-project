<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-dialog v-model="ui.newTransForm" >
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="green">
              Add New {{ itemType }} to Database
            </v-btn>
          </template>
          <slot :name="itemType + '-form'"></slot>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useUiState } from '../stores/uiState.js';

defineProps({
  itemType: String
})



const ui = useUiState()
</script>

<style lang="scss" scoped></style>
