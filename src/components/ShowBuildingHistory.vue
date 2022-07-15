<template>
  <v-row>
    <v-card flat>
      <v-toolbar>
        <v-toolbar-title>{{ store.name }}</v-toolbar-title>
        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            slider-color="purple"
          >
            <v-tab
              v-for="(entry, key) in store.entries"
              :key="key"
            > {{ entry.dates }} </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="(entry, key) in store.entries"
            :key="key"
          >
            <ListItemBuildingHistory :entry="entry" :e-key="key"/>
          </v-tab-item>
        </v-tabs-items>
    </v-card>
  </v-row>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useBuildingHistory } from "@/stores/buildings.js";
import ListItemBuildingHistory from "./lists/ListItemBuildingHistory.vue";

const store = useBuildingHistory();
const tab = ref(null)
const props = defineProps({
  bId: String,
})

onMounted(() => {
  store.fetchName(props.bId);
  store.fetchEntries(props.bId)
})
</script>
