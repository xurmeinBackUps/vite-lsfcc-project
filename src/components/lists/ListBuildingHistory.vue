<template>
  <ul v-for="(e, key) in entries" :key="key">
    <ListItemBuildingHistory :entry="e" :e-key="key"/>
  </ul>
</template>

<script setup>
import ListItemBuildingHistory from "./ListItemBuildingHistory.vue";

defineProps({
  entries: Object,
  bId: String
});
</script>

<style lang="scss" scoped></style>
