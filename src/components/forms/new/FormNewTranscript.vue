<template>
  <v-card color="blue">
    <v-form>
      <v-text-field v-model="speaker" variant="outlined" label="Transcript Speaker"></v-text-field>
      <v-textarea v-model="text" variant="outlined" label="Transcript Text"></v-textarea>
        <v-btn @click="submitTransForm(speaker, text)">Submit</v-btn>
        <v-btn @click="ui.newForm = false">Cancel</v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useUiState } from '@/stores/uiState.js';
import { useTranscripts } from '@/stores/transcripts.js';

const speaker = ref('')
const text = ref('')

const ui = useUiState()
const store = useTranscripts()

function submitTransForm(transSpeaker, transText) {
  store.addTranscript(transSpeaker, transText)
  ui.newForm = false
}
</script>

<style lang="scss" scoped></style>
