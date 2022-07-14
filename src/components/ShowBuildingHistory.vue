<template>
  <div>
    <v-card-title>{{ store.name }}</v-card-title>
    <ListBuildingHistory :bId="props.bId" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useBuildingHistory } from "@/stores/buildings.js";
import ListBuildingHistory from "./lists/ListBuildingHistory.vue";

const store = useBuildingHistory();

const props = defineProps({
  bId: String,
})

onMounted(() => {
  store.fetchName(props.bId);
  store.fetchEntries(props.bId);
})
</script>

<style lang="scss" scoped></style>
