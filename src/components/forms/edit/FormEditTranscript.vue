<template>
  <v-card class="ma-3 pa-2" color="amber">
    <v-form>
      <v-text-field v-model="store.trans.speaker" variant="outlined" label="Transcript Speaker"></v-text-field>
      <v-textarea v-model="store.trans.text" variant="outlined" label="Transcript Text"></v-textarea>
    </v-form>
      <!-- <v-btn @click="submitTransForm(speaker, text)" color="green">SAVE</v-btn> -->
         <v-btn color="green" @click.stop="ui.editForm = false">
          SAVE
        </v-btn>
  </v-card>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import { useTranscripts } from "@/stores/transcripts.js";



const ui = useUiState();
const store = useTranscripts();

// function submitTransForm(transSpeaker, transText) {
//   store.addTranscript(transSpeaker, transText);
//   ui.editForm = false;
// }
</script>

<style lang="scss" scoped></style>
