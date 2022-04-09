<template>
  <div class="mdc-card">
    <h3 class="mdc-card__title">{{ store.name }}</h3>
    <br />
    <ul v-for="e in store.entries">
      <li>{{ e }}</li>
    </ul>
  </div>
</template>
<script setup>
import { useBuildingOne } from "@/stores/buildingOne.js";

const store = useBuildingOne();
store.fetchName();
store.fetchEntries();

// export default {
// 	beforeMount
// }
</script>
<style></style>
