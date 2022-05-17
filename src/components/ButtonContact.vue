<template>

    <v-dialog v-model="ui.contactForm">
      <template v-slot:activator="{ props }">
        <v-row>
          <v-col>
            <v-btn
              class="contact-btn mb-5"
              color="indigo-lighten-1"
              size="large"
              v-bind="props"
            > contact </v-btn>
          </v-col>

        </v-row>
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
  width: 100px;
}
</style>
