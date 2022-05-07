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
import { useBuildingOne } from "@/stores/buildingOne.js";
import { useAuth } from "@/stores/userAuth.js"
import HistoryBuildingItemsIndex from "./HistoryBuildingItemsIndex.vue";
import CreateNewItem from '@/layout/CreateNewItem.vue'
import FormNewHistory from "./FormNewHistory.vue";

const store = useBuildingOne();
const auth = useAuth()

store.fetchName();
store.fetchEntries();
</script>

<style lang="scss" scoped></style>
