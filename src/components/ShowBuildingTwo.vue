<template>
  <div>
    <v-card-title>{{ store.name }}</v-card-title>
    <br />
    <IndexBuildingHistory :entries="store.entries" />

  </div>
</template>

<script setup>
import { useBuildingTwo } from "@/stores/buildingTwo.js";
import { onMounted } from "vue";
import IndexBuildingHistory from "./IndexBuildingHistory.vue";

const store = useBuildingTwo();

onMounted(() => {
  store.fetchName();
  store.fetchEntries();
})
</script>

<style lang="scss" scoped></style>
