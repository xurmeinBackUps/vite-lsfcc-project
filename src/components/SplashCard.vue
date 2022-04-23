<template>
  <v-card height="300" width="400">
    <v-card-title class="link text-yellow">{{ cardTitle }}</v-card-title>
  </v-card>
</template>

<script setup>
import { VCard, VCardTitle } from "vuetify/lib/components";
defineProps({
  cardTitle: String,
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";

.link {
  font-family: 'Forum';
  justify-content: center;
  width: 100%;
  background: #00011148;
  position: absolute;
  bottom: 0;
}
</style>
