<template>
  <v-row class="mb-10">
    <v-col class="mb-10">
      <v-card class="pa-5">
        <slot name="base-component"></slot>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {
  VRow,
  VCol,
  VCard
} from "vuetify/lib/components";
</script>
