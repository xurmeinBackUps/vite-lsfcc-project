<template>
  <content-wrapper>
    <template #base-component>
      Page Transcipts Show
      <ShowTranscript :trans-key="this.$route.params.objKey" />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ShowTranscript from "../components/ShowTranscript.vue";
</script>

<style lang="scss" scoped></style>
