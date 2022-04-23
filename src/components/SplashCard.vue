<template>
  <v-card height="20em">
    <v-card-title class="link">{{ cardTitle }}</v-card-title>
  </v-card>
</template>

<script setup>
import { VCard, VCardTitle } from "vuetify/lib/components";
defineProps({
  cardTitle: String,
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.link {
  color: $alert;
  text-align: center;
  width: 100%;
  background: #00011148;
  position: absolute;
  bottom: 0;
}
</style>
