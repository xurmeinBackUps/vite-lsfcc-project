<template>
  <ul v-for="(entry, key) in store.entries" :key="key">
    <ListItemBuildingHistory :entry="entry" :e-key="key"/>
  </ul>
</template>

<script setup>
import { useBuildingHistory } from '@/stores/buildings.js';
import ListItemBuildingHistory from "./ListItemBuildingHistory.vue";

defineProps({
  bId: String
});

const store = useBuildingHistory()
</script>

<style lang="scss" scoped></style>
