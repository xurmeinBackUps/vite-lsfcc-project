<template>
  <v-card class="ma-3 pa-2 form" color="amber">
    <v-form>
      <v-text-field
        v-model="profile.fullname"
        variant="outlined"
        label="Full Name"
      ></v-text-field>

      <v-text-field
        v-model="profile.employmentDates"
        variant="outlined"
        label="Employment Dates"
      ></v-text-field>

      <v-text-field
        v-model="profile.lifetime"
        variant="outlined"
        label="Birth Year -- Death Year"
      ></v-text-field>

      <v-text-field
        v-model="profile.pro"
        variant="outlined"
        label="Professional Title"
      ></v-text-field>

      <v-textarea
        v-model="profile.personalHistory"
        variant="outlined"
        label="Profile Bio"
      ></v-textarea>


      <v-btn @click="ui.editForm = false" color="green"> SAVE </v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";

defineProps({
  pKey: String,
  profile: Object
})

const ui = useUiState();
</script>

<style lang="scss" scoped></style>
