<template>
  <v-list>
    <v-list-item v-for="(entry, key) in store.entries" :key="key">
      <ListItemBuildingHistory :entry="entry" :e-key="key"/>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { onMounted } from "vue"
import { useRoute } from "vue-router";

import { useBuildingHistory } from '@/stores/buildings.js';
import ListItemBuildingHistory from "./ListItemBuildingHistory.vue";

const store = useBuildingHistory()
const route = useRoute();

onMounted(() => {
  store.fetchEntries(route.params.bId);
})
</script>
