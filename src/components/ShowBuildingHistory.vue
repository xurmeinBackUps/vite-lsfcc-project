<template>
  <div>
    <v-card-title>{{ store.name }}</v-card-title>
    <IndexBuildingHistory :entries="store.entries" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useBuildingHistory } from "@/stores/buildings.js";
import IndexBuildingHistory from "./IndexBuildingHistory.vue";

const store = useBuildingHistory();

const props = defineProps({
  bId: String
})

onMounted(() => {
  store.fetchName(props.bId);
  store.fetchEntries(props.bId);
})
</script>

<style lang="scss" scoped></style>
