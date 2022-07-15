<template>
  <content-wrapper>
    <template #base-component>
      <ShowBuildingHistory :bId="route.params.bId"/>
    </template>
  </content-wrapper>
</template>

<script setup>
import { useRoute } from "vue-router";
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ShowBuildingHistory from "@/components/ShowBuildingHistory.vue";

const route = useRoute();
</script>
