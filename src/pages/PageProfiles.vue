<template>
  <content-wrapper>
    <template #base-component>
      <ListProfiles />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ListProfiles from "@/components/ListProfiles.vue";
</script>

<style lang="scss" scoped></style>
