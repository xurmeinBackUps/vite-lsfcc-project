<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="profile in store.profiles" :key="profile.fullname">
      <ProfilesListItem :profile="profile" />
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { useProfiles } from "@/stores/profiles.js";
import ProfilesListItem from "./ProfilesListItem.vue";

const store = useProfiles();

store.fetchProfiles();
</script>
