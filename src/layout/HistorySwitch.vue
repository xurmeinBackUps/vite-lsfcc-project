<template>
  <div>
    <div v-if="this.$route.params.bId === 'building1'">
      <HistoryBuildingOne />
    </div>
    <div v-if="this.$route.params.bId === 'building2'">
      <HistoryBuildingTwo />
    </div>
  </div>
</template>

<script setup>
// TODO:still needs  improvement
import HistoryBuildingOne from "@/components/HistoryBuildingOne.vue";
import HistoryBuildingTwo from "@/components/HistoryBuildingTwo.vue";
</script>
