<template>
  <content-wrapper>
    <template #base-component>
      <ListAllProfiles />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ListAllProfiles from "@/components/ListAllProfiles.vue";
</script>

<style lang="scss" scoped></style>
