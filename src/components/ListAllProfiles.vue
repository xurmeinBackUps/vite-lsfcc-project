<template>
  <div>
    <v-expansion-panels class="mb-5">
      <v-expansion-panel v-for="(profile, key) in store.profiles" :key="key">
        <ListItemProfile :profile="profile" :p-key="key" />
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import { useProfiles } from "@/stores/profiles.js";
import ListItemProfile from "./ListItemProfile.vue";
import { onMounted } from "vue";

const store = useProfiles();

onMounted(() => {
  store.fetchProfiles();
})

</script>
