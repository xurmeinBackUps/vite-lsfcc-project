<template>
  <content-wrapper>
    <template #base-component>
      Page Transcipts Show
      <ShowTranscript :trans-key="route.params.objKey" />
    </template>
  </content-wrapper>
</template>

<script setup>
import { useRoute } from "vue-router";
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ShowTranscript from "../components/ShowTranscript.vue";

const route = useRoute();
</script>
