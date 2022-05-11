<template>
  <div v-if="!auth.userRole">
    <v-dialog v-model="ui.newBlogForm">
      <template v-slot:activator="{ props }">
      <v-btn v-bind="props" color="amber">
        Begin
      </v-btn>
      </template>
      <v-card class="pa-9 ma-3" color="lime">
        <FormRequestEmailAuth />
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useAuth } from '@/stores/passwordAuth.js'
import { useUiState } from '../stores/uiState.js';
import FormRequestEmailAuth from './FormRequestEmailAuth.vue';

const auth = useAuth()
const ui = useUiState()
</script>

<style lang="scss" scoped></style>
