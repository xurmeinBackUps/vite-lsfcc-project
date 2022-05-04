<template>
  <v-card color="pink">
    <v-form>
      <v-text-field v-model="dates" variant="outlined" label="Year/Range"></v-text-field>
      <v-textarea v-model="text" variant="outlined" label="Entry"></v-textarea>
        <v-btn @click="submitHistoryForm(store, dates, text)">Submit</v-btn>
        <v-btn @click=" ui.closeHistoryDiag()">Cancel</v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { onMounted, ref, inject } from 'vue'
import { useUiState } from '@/stores/uiState.js';
const useBuildingOne = () => import('@/stores/building1.js');
const useBuildingTwo = () => import('@/stores/building2.js');

const buildingId = inject('buildingId')

const dates = ref('')
const text = ref('')

const ui = useUiState()

function buildingStore(){
  if (buildingId === 'building1') {
    useBuildingOne()
  } else if (buildingId === 'building2') {
    useBuildingTwo()
  }
}

function submitHistoryForm(bStore, entryDates, entryText) {
  bStore.addEntry(entryDates, entryText)
}

let store

onMounted(() => {
  return store = buildingStore()
})
</script>

<style lang="scss" scoped></style>
