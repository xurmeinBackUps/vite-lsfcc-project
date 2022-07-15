<template>
  <v-card class="pa-5 ma-3 w-100" :class="privateStyles">
    <p class="text-subtitle-1">{{ entry.dates }}</p>
    <p class="text-body-2">{{ entry.text }}</p>
    <list-item-crud-buttons
      v-if="ui.roleIsAdmin"
      @edit="ui.editForm = true"
      @show="showItem(props.eKey)"
      @hide="hideItem(props.eKey)"
      @destroy="destroyRecord(props.eKey)"
      :index-item="props.entry"
      :item-key="props.eKey"
      item-type="entry"
    >
      <template #entry-form-edit>
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
  eKey: String,
});

const privateStyles = computed(() => ({
  "d-none": props.entry.private && !ui.roleIsAdmin,
  "font-italic text-grey": props.entry.private && ui.roleIsAdmin,
}));

function showItem(key) {
  const bId = route.params.bId
  store.setPrivateFalse(bId, key);
}

function hideItem(key) {
  const bId = route.params.bId
  store.setPrivateTrue(bId, key);
}

function destroyRecord(key) {
  const bId = route.params.bId
  store.deleteEntry(bId, key);
}
</script>
