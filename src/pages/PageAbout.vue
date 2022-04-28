<template>
  <content-wrapper>
    <template #base-component>
      About the Lincoln School for Colored Children Project
      <AboutPreface />
      <AboutAuthorStatement />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import AboutPreface from "../components/AboutPreface.vue";
import AboutAuthorStatement from "../components/AboutAuthorStatement.vue";
</script>
