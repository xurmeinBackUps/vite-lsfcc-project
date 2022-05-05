<template>
  <div class="text-center">
    <v-dialog v-model="ui.contactForm">
      <template v-slot:activator="{ props }">
        <v-btn color="indigo-lighten-1" v-bind="props">
          contact
        </v-btn>
      </template>
      <v-card color="white">
        <FormContact />
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useUiState } from '../stores/uiState';
import FormContact from './FormContact.vue';

const ui = useUiState()
</script>

<script lang="scss" scoped></script>
