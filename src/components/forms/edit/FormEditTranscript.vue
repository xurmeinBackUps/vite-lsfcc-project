<template>
  <v-card color="amber">
    <v-form>
          <v-text-field v-model="speaker" variant="outlined" label="Transcript Speaker"></v-text-field>
      <v-textarea v-model="text" variant="outlined" label="Transcript Text"></v-textarea>
    </v-form>
      <v-btn @click="submitTransForm(speaker, text)" color="green">SAVE</v-btn>
         <v-btn color="blue" @click.stop="ui.editForm = false">
          CANCEL
        </v-btn>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useUiState } from "@/stores/uiState.js";
import { useTranscripts } from "@/stores/transcripts.js";

const speaker = ref("");
const text = ref("");

const ui = useUiState();
const store = useTranscripts();

function submitTransForm(transSpeaker, transText) {
  store.addTranscript(transSpeaker, transText);
  ui.editForm = false;
}
</script>

<style lang="scss" scoped></style>
