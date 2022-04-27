<template>
  <div>
    <v-card-title>{{ store.name }}</v-card-title>
    <br />
    <BuildingHistoryInterface :entries="store.entries" />
  </div>
</template>

<script setup>
import { useBuildingOne } from "@/stores/buildingOne.js";
import BuildingHistoryInterface from "./BuildingHistoryInterface.vue";

const store = useBuildingOne();

store.fetchName();
store.fetchEntries();
</script>

<style lang="scss" scoped></style>
