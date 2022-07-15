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

      <v-btn
        @click="updateProfile()"
        color="green"
      > save </v-btn>
      <v-btn
        color="red"
        @click.stop="ui.editForm = false"
      > cancel </v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import { useProfiles } from "@/stores/profiles.js"

const props = defineProps({
  pKey: String,
  profile: Object
})

const ui = useUiState();
const store = useProfiles()

function updateProfile() {
  store.editProfile(
    props.pKey,
    props.profile.fullname,
    props.profile.employmentDates,
    props.profile.lifetime,
    props.profile.personalHistory,
    props.profile.pro
  )
  ui.editForm = false
}
</script>
