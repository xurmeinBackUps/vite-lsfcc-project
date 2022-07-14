<template>
  <v-card color="amber">
    <v-form>
          <v-text-field v-model="dates" variant="outlined" label="Historical Dates"></v-text-field>
      <v-textarea v-model="text" variant="outlined" label="Entry Text"></v-textarea>
    </v-form>
      <!-- <v-btn @click="submitTransForm(speaker, text)" color="green">SAVE</v-btn> -->
         <v-btn color="blue" @click.stop="ui.editForm = false">
          CANCEL
        </v-btn>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useUiState } from "@/stores/uiState.js";
import { useBuildingHistory } from "@/stores/buildings.js";

const dates = ref("");
const text = ref("");

const ui = useUiState();
const store = useBuildingHistory();



</script>

<style lang="scss" scoped></style>
