<template>
  <div>
    <div v-if="this.$route.params.bId === 'building1'">
      <BuildingOneHistory />
    </div>
    <div v-if="this.$route.params.bId === 'building2'">
      <BuildingTwoHistory />
    </div>
  </div>
</template>

<script setup>
// TODO:still needs  improvement
import BuildingOneHistory from "./BuildingOneHistory.vue";
import BuildingTwoHistory from "./BuildingTwoHistory.vue";

defineProps({
  bId: String,
});
</script>
<style></style>
