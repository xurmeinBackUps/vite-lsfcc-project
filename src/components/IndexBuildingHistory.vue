<template>
  <div>
    <ul v-for="(e, key) in entries" :key="key">
      <IndexItemBuildingHistory :entry="e" :e-key="key" />
      <!-- :showItem="showItem"
        :hideItem="hideItem" -->
    </ul>
  </div>
</template>

<script setup>
import IndexItemBuildingHistory from "./IndexItemBuildingHistory.vue";

defineProps({
  entries: Object,
  // showItem: Function,
  // hideItem: Function,
});
</script>

<style lang="scss" scoped></style>
