<template>
  <div class="mdc-card">
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
const BuildingOneHistory = () => import("./BuildingOneHistory.vue");
const BuildingTwoHistory = () => import("./BuildingTwoHistory.vue");
</script>
<style></style>
