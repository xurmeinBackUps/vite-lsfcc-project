<template>
  <div>
    <ul v-for="e in entries" :key="e.key">
      <HistoryBuildingItem :entry="e" />
    </ul>
  </div>
</template>

<script setup>
import HistoryBuildingItem from "./HistoryBuildingItem.vue";

defineProps({
  // TODO: use different word than 'entries'
  entries: Array,
});
</script>

<style lang="scss" scoped></style>
