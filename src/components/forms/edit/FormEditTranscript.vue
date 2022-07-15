<template>
  <v-card class="ma-3 pa-2" color="amber">
    <v-form>
      <v-text-field
        v-model="store.trans.speaker"
        variant="outlined"
        label="Transcript Speaker"
      ></v-text-field>
      <v-textarea
        v-model="store.trans.text"
        variant="outlined"
        label="Transcript Text"
      ></v-textarea>
    </v-form>
    <v-btn
      color="green"
      @click="editTrans()"
    > save </v-btn>
    <v-btn
      color="red"
      @click.stop="ui.editForm = false"
    >
      cancel
    </v-btn>
  </v-card>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import { useTranscripts } from "@/stores/transcripts.js";
import { useRoute } from "vue-router";

const ui = useUiState();
const store = useTranscripts();

const route = useRoute()

function editTrans() {
  store.editTranscript(route.params.transKey)
  ui.editForm = false
}
</script>

<style lang="scss" scoped></style>
