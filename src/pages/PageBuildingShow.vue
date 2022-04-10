<template>
  <div class="mdc-card">
    <BuildingHistory :b-id="bId" />
  </div>
</template>

<script setup>
import BuildingHistory from "@/components/BuildingHistory.vue";

defineProps({
  bId: String,
});
</script>
