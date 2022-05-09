<template>
  <v-card color="pink" class="">
    <v-form>
      <v-text-field v-model="dates" variant="outlined" label="Year/Range"></v-text-field>
      <v-textarea v-model="text" variant="outlined" label="Entry"></v-textarea>
        <v-btn @click="submitHistoryForm(dates, text)">Submit</v-btn>
        <v-btn @click=" ui.closeHistoryDiag()">Cancel</v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useUiState } from '@/stores/uiState.js';

const ui = useUiState()
const dates = ref('')
const text = ref('')

function submitHistoryForm(entryDates, entryText) {

  // props.store.addEntry(entryDates, entryText)
}
</script>

<style lang="scss" scoped></style>
