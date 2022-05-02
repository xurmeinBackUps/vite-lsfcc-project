<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="profile in store.profiles" :key="profile.fullname">
        <ProfilesListItem :profile="profile" />
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import { useProfiles } from "@/stores/profiles.js";
import ProfilesListItem from "./ProfilesListItem.vue";
import CreateNewItem from './CreateNewItem.vue';

const store = useProfiles();

store.fetchProfiles();
</script>
