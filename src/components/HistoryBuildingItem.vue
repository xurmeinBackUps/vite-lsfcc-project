<template>
  <v-card class="pa-5 ma-3" :class="privateStyles">
    <p class="text-subtitle-1">{{ entry.dates }}</p>
    <p class="text-body-2" v-html="entry.text"></p>
    <IndexItemAdminControls :index-item="entry" :index-key="eKey" />
  </v-card>
</template>

<script setup>
import IndexItemAdminControls from "@/layout/IndexItemAdminControls.vue";
import { useUiState } from "../stores/uiState";
import { computed } from "vue";

const ui = useUiState();

const props = defineProps({
  entry: Object,
  eKey: [String, Number],
});

const privateStyles = computed(() => ({
  "d-none": props.entry.private && !ui.adminUser,
  "font-italic text-grey": props.entry.private && ui.adminUser,
}));
</script>

<style></style>
