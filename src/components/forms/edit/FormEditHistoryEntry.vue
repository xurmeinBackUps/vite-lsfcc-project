<template>
  <v-card class="ma-3 pa-2" color="amber">
    <v-form>
      <v-text-field
        v-model="props.entry.dates"
        variant="outlined"
        label="Historical Dates"
      ></v-text-field>
      <v-textarea
        v-model="props.entry.text"
        variant="outlined"
        label="Entry Text"
      ></v-textarea>
      <v-btn
        @click="updateEntry()"
        color="green"
      > save </v-btn>
      <v-btn
        color="red"
        @click.stop="ui.editForm = false"
      > cancel </v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import { useBuildingHistory } from '@/stores/buildings.js';
import { useRoute } from "vue-router";

const props = defineProps({
  entry: Object,
  eKey: String,
})

const ui = useUiState();
const store = useBuildingHistory()

const route = useRoute()

function updateEntry() {
  store.editEntry(
    route.params.bId,
    props.eKey,
    props.entry.dates,
    props.entry.text
  )
  ui.editForm = false
}
</script>

<style lang="scss" scoped></style>
