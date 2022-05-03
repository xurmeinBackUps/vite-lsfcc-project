<template>
  <div>
    <v-card-title>{{ store.name }}</v-card-title>
    <br />
    <HistoryBuildingItemsIndex :entries="store.entries" />
  </div>
</template>

<script setup>
import { useBuildingTwo } from "@/stores/buildingTwo.js";
import HistoryBuildingItemsIndex from "./HistoryBuildingItemsIndex.vue";

const store = useBuildingTwo();
store.fetchName();
store.fetchEntries();
</script>

<style lang="scss" scoped></style>
