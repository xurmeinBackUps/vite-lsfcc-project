<template>
  <div>
    <h3 class="mdc-card__title">{{ store.name }}</h3>
    <br />
    <ul v-for="e in store.entries" :key="e.key">
      <span>{{ e.key }}</span>
      <li>{{ e }}</li>
    </ul>
  </div>
</template>

<script>
import { useBuildingTwo } from "@/stores/buildingTwo.js";

export default {
  setup() {
    const store = useBuildingTwo();
    store.fetchName();
    store.fetchEntries();
    return { store };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
