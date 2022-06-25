<template>

    <v-expansion-panels class="mb-5">
      <v-expansion-panel v-for="(profile, key) in store.profiles" :key="key">
        <ListItemProfile :profile="profile" :p-key="key" />
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>
import { onMounted } from "vue";
import { useProfiles } from "@/stores/profiles.js";
import ListItemProfile from "./ListItemProfile.vue";

const store = useProfiles();

onMounted(() => {
  store.fetchProfiles();
})

</script>
