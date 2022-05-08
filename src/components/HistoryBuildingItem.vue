<template>
  <v-card class="pa-5 ma-3">
    <p class="text-subtitle-1">{{ entry.dates }}</p>
    <p class="text-body-2" v-html="entry.text"></p>
    <IndexItemAdminControls :index-item="entry" :index-key="eKey" />
  </v-card>
</template>

<script setup>
import IndexItemAdminControls from "@/layout/IndexItemAdminControls.vue";
import { useUiState } from "../stores/uiState";
import { computed } from "vue";
// import { }

const ui = useUiState();

defineProps({
  entry: Object,
  eKey: [String, Number],
  showItem: Function,
  hideItem: Function,
});

const privateStyles = computed(() => ({
  "d-none": store.trans.private && !ui.adminUser,
  "font-italic text-grey": store.trans.private && ui.adminUser,
}));
</script>

<style></style>
