<template>
  <div>
    <ul v-for="(e, key) in entries" :key="key">
      <HistoryBuildingItem :entry="e" :e-key="key" />
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
