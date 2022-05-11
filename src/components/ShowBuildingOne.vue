<template>
  <div>
    <v-card-title>{{ store.name }}</v-card-title>
    <br />
    <IndexBuildingHistory :entries="store.entries" />

  </div>
</template>

<script setup>
import { useBuildingOne } from "@/stores/buildingOne.js";
import { onMounted } from "vue";
import IndexBuildingHistory from "./IndexBuildingHistory.vue";

const store = useBuildingOne();

onMounted(() => {
  store.fetchName();
  store.fetchEntries();
})</script>

<style lang="scss" scoped></style>
