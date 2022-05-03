<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="profile in store.profiles" :key="profile.fullname">
        <ListItemProfiles :profile="profile" />
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import { useProfiles } from "@/stores/profiles.js";
import ListItemProfiles from "./ListItemProfiles.vue";
import CreateNewItem from '@/layout/CreateNewItem.vue';

const store = useProfiles();

store.fetchProfiles();
</script>
