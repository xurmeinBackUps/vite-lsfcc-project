<template>
  <div v-if="!auth.userRole">
        <v-divider class="my-9"></v-divider>

    <v-dialog v-model="ui.newBlogForm">
      <template v-slot:activator="{ props }">
      <v-btn v-bind="props" color="amber">
        Begin
      </v-btn>
      </template>
      <v-card class="pa-9 width justify-center" color="lime">
        <FormRequestEmailAuth />
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useAuth } from '@/stores/userAuth.js'
import { useUiState } from '@/stores/uiState.js';
import FormRequestEmailAuth from './FormRequestEmailAuth.vue';

const auth = useAuth()
const ui = useUiState()
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";

.width {
  width: 90vw;
}

</style>
