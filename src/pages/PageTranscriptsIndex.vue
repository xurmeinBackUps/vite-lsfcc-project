<template>
  <content-wrapper>
    <template #base-component>
      Page Transcipts Index
      <TranscriptsList />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";

import TranscriptsList from "@/components/TranscriptsList.vue";
</script>

<style lang="scss" scoped></style>
