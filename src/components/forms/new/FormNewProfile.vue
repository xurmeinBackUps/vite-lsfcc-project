<template>
  <v-card color="orange" class="form">
    <v-form>
      <v-text-field
        v-model="fullname"
        variant="outlined"
        label="Full Name"
      ></v-text-field>

      <v-text-field
        v-model="employmentDates"
        variant="outlined"
        label="Employment Dates"
      ></v-text-field>

      <v-text-field
        v-model="lifetime"
        variant="outlined"
        label="Birth Year -- Death Year"
      ></v-text-field>

      <v-text-field
        v-model="pro"
        variant="outlined"
        label="Professional Title"
      ></v-text-field>

      <v-textarea
        v-model="personalHistory"
        variant="outlined"
        label="Profile Bio"
      ></v-textarea>

      <v-btn
        @click="
          submitProfileForm(fullname, employmentDates, lifetime, personalHistory, pro)
        "
      >
        Submit
      </v-btn>
      <v-btn @click="ui.newForm = false"> Cancel </v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useUiState } from "@/stores/uiState.js";
import { useProfiles } from "@/stores/profiles.js";

const fullname = ref("");
const employmentDates = ref("");
const lifetime = ref("");
const personalHistory = ref("");
const pro = ref("");

const ui = useUiState();
const store = useProfiles();

function submitProfileForm(newName, newEDates, newLDates, newBio, newPro) {
  store.addProfile(newName, newEDates, newLDates, newBio, newPro);
  ui.newForm = false
}
</script>

<style lang="scss" scoped></style>
