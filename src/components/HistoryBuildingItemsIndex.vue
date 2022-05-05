<template>
  <div>
    <ul v-for="e in entries" :key="e.position">
      <HistoryBuildingItem :entry="e" />
    </ul>
  </div>
</template>

<script setup>
import HistoryBuildingItem from "./HistoryBuildingItem.vue";

defineProps({
  entries: Object,
});
</script>

<style lang="scss" scoped></style>
