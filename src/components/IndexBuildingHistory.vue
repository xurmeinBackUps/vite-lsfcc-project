<template>
  <ul v-for="(e, key) in entries" :key="key">
    <IndexItemBuildingHistory :entry="e" :e-key="key" />
  </ul>
</template>

<script setup>
import IndexItemBuildingHistory from "./IndexItemBuildingHistory.vue";

defineProps({
  entries: Object,
});
</script>

<style lang="scss" scoped></style>
