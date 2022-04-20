<template>
  <div>
    <div v-if="$route.params.bId === 'building1'">
      <BuildingOneHistory />
    </div>
    <div v-if="$route.params.bId === 'building2'">
      <BuildingTwoHistory />
    </div>
  </div>
</template>

<script setup>
// TODO:still needs  improvement
import BuildingOneHistory from "@/components/BuildingOneHistory.vue";
import BuildingTwoHistory from "@/components/BuildingTwoHistory.vue";
</script>
