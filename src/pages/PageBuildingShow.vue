<template>
  <content-wrapper>
    <template #base-component>
      <div v-if="this.$route.params.bId === 'building1'">
        <HistoryBuildingOne />
      </div>
      <div v-if="this.$route.params.bId === 'building2'">
        <HistoryBuildingTwo />
      </div>
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import HistoryBuildingOne from "@/components/HistoryBuildingOne.vue";
import HistoryBuildingTwo from "@/components/HistoryBuildingTwo.vue";
</script>
