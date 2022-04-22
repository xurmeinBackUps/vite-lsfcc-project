<template>
  <div>
    <h3 class="mdc-card__title">{{ store.name }}</h3>
    <br />
    <BuildingHistoryInterface :entries="store.entries" />
  </div>
</template>

<script>
import { useBuildingOne } from "@/stores/buildingOne.js";
import BuildingHistoryInterface from "./BuildingHistoryInterface.vue";

export default {
  setup() {
    const store = useBuildingOne();
    store.fetchName();

    store.fetchEntries()

    return {
      store,

    };
  },
  components: {
    BuildingHistoryInterface
  },


};
</script>

<style lang="scss" scoped></style>
