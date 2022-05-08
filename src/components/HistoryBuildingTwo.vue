<template>
  <div>
    <v-card-title>{{ store.name }}</v-card-title>
    <br />
    <HistoryBuildingItemsIndex :entries="store.entries" />
    <create-new-item item-type="history">
      <template #history-form>
        <FormNewHistory />
      </template>
    </create-new-item>
  </div>
</template>

<script setup>
import { useBuildingTwo } from "@/stores/buildingTwo.js";
import HistoryBuildingItemsIndex from "./HistoryBuildingItemsIndex.vue";
import CreateNewItem from "@/layout/CreateNewItem.vue";
import FormNewHistory from "./FormNewHistory.vue";

const store = useBuildingTwo();

store.fetchName();
store.fetchEntries();
</script>

<style lang="scss" scoped></style>
