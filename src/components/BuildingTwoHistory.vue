<template>
  <div>
    <v-card-title>{{ store.name }}</v-card-title>
    <br />
    <BuildingHistoryInterface :entries="store.entries" />
  </div>
</template>

<script>
import { useBuildingTwo } from "@/stores/buildingTwo.js";
import BuildingHistoryInterface from "./BuildingHistoryInterface.vue";
import { VCardTitle } from "vuetify/lib/components";
export default {
  setup() {
    const store = useBuildingTwo();
    store.fetchName();
    store.fetchEntries();
    return { store };
  },
  components: { BuildingHistoryInterface, VCardTitle },
};
</script>

<style lang="scss" scoped></style>
