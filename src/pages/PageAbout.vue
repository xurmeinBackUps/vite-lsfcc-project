<template>
  <content-wrapper>
    <template #base-component>
      <PageAbout />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import PageAbout from "@/components/PageAbout.vue";
</script>
