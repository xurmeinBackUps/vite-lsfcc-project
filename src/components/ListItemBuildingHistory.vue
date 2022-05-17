<template>
  <v-card class="pa-5 ma-3" :class="privateStyles">
    <p class="text-subtitle-1">{{ entry.dates }}</p>
    <p class="text-body-2" v-html="entry.text"></p>
    <ListItemCrudButtons
      v-if="ui.roleIsAdmin"
      item-type="history"
      :index-item="entry"
      :index-key="eKey"
      @show=""
      @hide=""
      @edit=""
      @save=""
    />
  </v-card>
</template>

<script setup>
import { computed } from "vue";
import { useUiState } from "@/stores/uiState.js";
import ListItemCrudButtons from "@/layout/admin/ListItemCrudButtons.vue";

const ui = useUiState();

const props = defineProps({
  entry: Object,
  eKey: [String, Number],
});

const privateStyles = computed(() => ({
  "d-none": props.entry.private && !ui.roleIsAdmin,
  "font-italic text-grey": props.entry.private && ui.roleIsAdmin,
}));
</script>

<style></style>
