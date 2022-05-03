<template>


    <v-dialog v-model="ui.newTranscriptForm">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="green">
          Add New {{ itemType }} to Database
        </v-btn>
      </template>
      <slot :name="itemType + '-form'"></slot>
    </v-dialog>

</template>

<script setup>
import { useUiState } from '../stores/uiState.js';
import { onMounted } from 'vue'

defineProps({
  itemType: String
})

const ui = useUiState()
</script>

<style lang="scss" scoped></style>
