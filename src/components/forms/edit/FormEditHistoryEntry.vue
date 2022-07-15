<template>
  <v-card class="ma-3 pa-2" color="amber">
    <v-form>
      <v-text-field v-model="props.entry.dates" variant="outlined" label="Historical Dates"></v-text-field>
      <v-textarea v-model="props.entry.text" variant="outlined" label="Entry Text"></v-textarea>
      <!-- <v-btn @click="submitTransForm(speaker, text)" color="green">SAVE</v-btn> -->
      <v-btn color="green" @click.stop="ui.editForm = false">
        SAVE
      </v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";

const props = defineProps({
  entry: Object,
  eKey: String,
})

const ui = useUiState();
</script>

<style lang="scss" scoped></style>
