<template>
  <div class="mdc-card">
    {{ b1Name }}
    <div class="mdc-card__content">
      {{ b1Years }}
    </div>
  </div>
</template>

<script setup>
import { useBuildingOne } from "@/stores/buildingOne.js";
import { ref } from "vue";

const b1Store = useBuildingOne();
const b1Name = await b1Store.fetchName();
const b1Years = await b1Store.fetchYears();
</script>
