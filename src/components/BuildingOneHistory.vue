<template>
  <div>
    <h3 class="mdc-card__title">{{ store.name }}</h3>
    <hr />
    <ul v-for="e in store.entries" :key="e.key">
      <BuildingHistoryItem :entry="e" />
    </ul>
  </div>
</template>

<script>
import { useBuildingOne } from "@/stores/buildingOne.js";
import BuildingHistoryItem from "./BuildingHistoryItem.vue";

export default {
  setup() {
    const store = useBuildingOne();
    store.fetchName();
    store.fetchEntries();
    return {
      store,
    };
  },
  components: { BuildingHistoryItem },
};
</script>

<style lang="scss" scoped></style>
