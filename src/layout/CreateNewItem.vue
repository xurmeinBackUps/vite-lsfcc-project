<template>
  <v-row>
    <v-btn color="green">
      Add New {{ itemType }} to Database
      <v-dialog
        v-model="ui.newTransDiag"
        activator="parent"
      >
        <slot :name="itemType + '-form'"></slot>
      </v-dialog>
    </v-btn>
  </v-row>
</template>

<script setup>
import { useUiState } from '../stores/uiState.js';
import { onMounted } from 'vue'

const ui = useUiState()

defineProps({
  itemType: String
})

onMounted(() => {

})
</script>

<style lang="scss" scoped></style>
