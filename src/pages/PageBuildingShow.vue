<template>
  <div>
    <HistorySelector :b-id="bId" />
  </div>
</template>

<script setup>
import HistorySelector from "@/components/HistorySelector.vue";

defineProps({
  bId: String,
});
</script>
