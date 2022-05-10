<template>
  <div>
    <v-card-title>{{ store.name }}</v-card-title>
    <br />
    <IndexBuildingHistory :entries="store.entries" />

  </div>
</template>

<script setup>
import { useBuildingTwo } from "@/stores/buildingTwo.js";
import IndexBuildingHistory from "./IndexBuildingHistory.vue";

const store = useBuildingTwo();

store.fetchName();
store.fetchEntries();
</script>

<style lang="scss" scoped></style>
