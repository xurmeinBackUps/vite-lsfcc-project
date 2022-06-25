<template>
  <v-card color="blue">
    <v-form>
      <v-text-field v-model="speaker" variant="outlined" label="Transcript Speaker"></v-text-field>
      <v-textarea v-model="text" variant="outlined" label="Transcript Text"></v-textarea>
        <v-btn @click="submitTransEdit(speaker, text)">Submit</v-btn>
        <v-btn @click="ui.editForm = false">Cancel</v-btn>
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

function submitTransEdit(transSpeaker, transText) {
  store.editTranscript(transSpeaker, transText)
  ui.editForm = false
}
</script>

<style lang="scss" scoped></style>
