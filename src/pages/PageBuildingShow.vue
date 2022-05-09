<template>
  <content-wrapper>
    <template #base-component>
      <div v-if="route.params.bId === 'building1'">
        <ShowBuildingOne />
      </div>
      <div v-if="route.params.bId === 'building2'">
        <ShowBuildingTwo />
      </div>
    </template>
  </content-wrapper>
</template>

<script setup>
import { useRoute } from "vue-router";
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ShowBuildingOne from "@/components/ShowBuildingOne.vue";
import ShowBuildingTwo from "@/components/ShowBuildingTwo.vue";

const route = useRoute();
</script>
