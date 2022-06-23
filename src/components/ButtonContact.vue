<template>
  <v-dialog v-model="ui.contactForm">
    <template v-slot:activator="{ props }">
      <v-btn class="contact-btn mb-5 mr-9" color="indigo-lighten-1" v-bind="props">
        contact shannon
      </v-btn>
    </template>
    <v-card color="white">
      <FormContact />
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import FormContact from "./FormContact.vue";

const ui = useUiState();
</script>

<style lang="scss" scoped>
.contact-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: fit-content;
}
</style>
