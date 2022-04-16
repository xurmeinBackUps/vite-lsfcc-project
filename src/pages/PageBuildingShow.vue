<template>
  <content-wrapper>
    <template #base-component>
      <HistorySwitch :b-id="bId" />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import HistorySwitch from "@/components/HistorySwitch.vue";
</script>
