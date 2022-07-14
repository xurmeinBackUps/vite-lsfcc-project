<template>
  <v-card color="blue">
    <v-form>

    </v-form>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useUiState } from "@/stores/uiState.js";
import { useTranscripts } from "@/stores/buildings.js";

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
