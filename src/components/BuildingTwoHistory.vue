<template>
  <div>
    <h3 class="mdc-card__title">{{ store.name }}</h3>
    <br />
    <ul v-for="e in store.entries" :key="e.key">
      <BuildingHistoryItem :entry="e" />
    </ul>
  </div>
</template>

<script>
import { useBuildingTwo } from "@/stores/buildingTwo.js";
import BuildingHistoryItem from "./BuildingHistoryItem.vue";

export default {
  setup() {
    const store = useBuildingTwo();
    store.fetchName();
    store.fetchEntries();
    return { store };
  },
  methods: {},
  components: { BuildingHistoryItem },
};
</script>

<style lang="scss" scoped></style>
