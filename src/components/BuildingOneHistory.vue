<template>
  <div>
    <h3 class="mdc-card__title">{{ store.name }}</h3>
    <br />
    <ul v-for="e in store.entries" :key="e.key">
      <span>{{ e.id }}</span>
      <li>{{ e }}</li>
    </ul>
  </div>
</template>

<script>
import { useBuildingOne } from "@/stores/buildingOne.js";

export default {
  setup() {
    const store = useBuildingOne();
    store.fetchName();
    store.fetchEntries();
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
