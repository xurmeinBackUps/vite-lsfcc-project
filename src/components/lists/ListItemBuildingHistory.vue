<template>
  <v-card class="pa-5 ma-3" :class="privateStyles">
    <p id="entry-dates" class="text-subtitle-1">{{ entry.dates }}</p>
    <p id="entry-text" class="text-body-2" v-html="entry.text"></p>
    <list-item-crud-buttons
      v-if="ui.roleIsAdmin"
      item-type="history"
      :index-item="entry"
      :index-key="eKey"
      @show="showItem(props.eKey)"
      @hide="hideItem(props.eKey)"
      @edit="editItem(props.eKey)"
      @destroy="destroyRecord(props.eKey)"
    >
      <template #history-form-edit>
        <FormEditHistoryEntry :entry="props.entry" :e-key="props.eKey"  />
      </template>
    </list-item-crud-buttons>
  </v-card>
</template>

<script setup>
import { useRoute } from "vue-router";

import { computed } from "vue";
import { useUiState } from "@/stores/uiState.js";
import { useBuildingHistory } from '@/stores/buildings.js';
import ListItemCrudButtons from "@/components/admin/ListItemCrudButtons.vue";
import FormEditHistoryEntry from '@/components/forms/edit/FormEditHistoryEntry.vue';

const ui = useUiState();
const store = useBuildingHistory()
const route = useRoute();

const props = defineProps({
  entry: Object,
  eKey: [String, Number],
  // bId: String
});

const privateStyles = computed(() => ({
  "d-none": props.entry.private && !ui.roleIsAdmin,
  "font-italic text-grey": props.entry.private && ui.roleIsAdmin,
}));


function showItem(key) {
  store.setPrivateFalse(route.params.bId, key);
}

function hideItem(key) {
  store.setPrivateTrue(route.params.bId, key);
}

function destroyRecord(key) {
  store.deleteEntry(route.params.bId, key);
}

function editItem(key) {
  ui.editForm = true
  store.submitEdit(route.params.bId, key)
}
</script>

<style></style>
