<template>
  <div>
    <ul v-for="e in entries" :key="e.key">
      <BuildingHistoryItem :entry="e" />
    </ul>




  </div>
</template>

<script setup>
import BuildingHistoryItem from "./BuildingHistoryItem.vue";


defineProps({
    entries: Array
})

</script>

<style lang="scss" scoped></style>
