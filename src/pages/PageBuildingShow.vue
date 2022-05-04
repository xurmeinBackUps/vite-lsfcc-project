<template>
  <content-wrapper>
    <template #base-component>
      <HistorySwitch :b-id="bId"/>
    </template>
  </content-wrapper>
</template>

<script setup>
import { provide, ref } from 'vue'
import ContentWrapper from "@/layout/ContentWrapper.vue";
import HistorySwitch from "@/layout/HistorySwitch.vue";

const buildingId = ref('');
provide('buildingId', buildingId)

defineProps({
  bId: String
})
</script>
