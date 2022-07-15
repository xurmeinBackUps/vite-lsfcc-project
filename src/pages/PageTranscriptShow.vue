<template>
  <content-wrapper>
    <template #base-component>
      <v-card-title>
        Transcipt Reader
      </v-card-title>
      <ShowTranscript :trans-key="route.params.transKey" />
    </template>
  </content-wrapper>
</template>

<script setup>
import { useRoute } from "vue-router";
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ShowTranscript from "@/components/ShowTranscript.vue";

const route = useRoute();
</script>
