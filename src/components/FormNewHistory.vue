<template>
  <v-card color="pink">
    <v-form>
      <v-text-field v-model="dates" variant="outlined" label="Year/Range"></v-text-field>
      <v-textarea v-model="text" variant="outlined" label="Entry"></v-textarea>
        <v-btn @click="submitHistoryForm(dates, text)">Submit</v-btn>
        <v-btn @click="ui.newHistoryForm = false">Cancel</v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { useUiState } from '@/stores/uiState.js';
import { onBeforeMount, ref } from 'vue'
const useBuildingOne = () => import('@/stores/building1.js');
const useBuildingTwo = () => import('@/stores/building2.js');


const dates = ref('')
const text = ref('')

const ui = useUiState()

function store(){
  const bId = $route.param.bId
  if (bId === 'building1') {
       useBuildingOne()

  } else if (bId === 'building2') {
    useBuildingTwo()
  }
}


function submitHistoryForm(entryDates, entryText) {
  store.addTranscript(entryDates, entryText)
  ui.closeHistoryDiag()
}

onBeforeMount(() => {
  store()
})
</script>

<style lang="scss" scoped></style>
