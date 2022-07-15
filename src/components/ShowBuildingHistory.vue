<template>
  <v-row>
    <v-col >
      <v-card flat>
        <v-toolbar density="compact" class="bg-grey">
          <v-toolbar-title>{{ store.name }}</v-toolbar-title>
            <template v-slot:extension>
              <v-tabs
                v-model="tab"
                slider-color="purple"
                class="tabs"
              >
                <v-tab
                  v-for="(entry, key) in store.entries"
                  :key="key"
                   class="tabs"
                > {{ entry.dates }} </v-tab>
              </v-tabs>
           </template>
          </v-toolbar>
        <v-window v-model="tab">
          <v-window-item
            v-for="(entry, key) in store.entries"
            :key="key"
          ><ListItemBuildingHistory :entry="entry" :e-key="key"/></v-window-item>
        </v-window>
      </v-card>
    </v-col>
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

<style lang="scss" scoped>
.tabs {
  min-width: 0;
  color: black;
}
</style>
