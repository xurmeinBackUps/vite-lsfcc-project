<template>
  <content-wrapper>
    <template #base-component>
    Page Transcipts
          <TranscriptsIndex />

    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
const TranscriptsIndex = () => import("@/components/TranscriptsIndex.vue")
</script>

<style lang="scss" scoped></style>
