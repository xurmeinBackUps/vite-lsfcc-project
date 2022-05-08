<template>
  <content-wrapper>
    <template #base-component>
      <div v-if="route.params.bId === 'building1'">
        <HistoryBuildingOne />
      </div>
      <div v-if="route.params.bId === 'building2'">
        <HistoryBuildingTwo />
      </div>
    </template>
  </content-wrapper>
</template>

<script setup>
import { useRoute } from "vue-router";
import ContentWrapper from "@/layout/ContentWrapper.vue";
import HistoryBuildingOne from "@/components/HistoryBuildingOne.vue";
import HistoryBuildingTwo from "@/components/HistoryBuildingTwo.vue";

const route = useRoute();
</script>
