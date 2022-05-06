<template>
  <div>
    <v-expansion-panels class="mb-5">
      <v-expansion-panel v-for="(profile, key) in store.profiles" :key="key">
        <ListItemProfile :profile="profile" :p-key="key" />
      </v-expansion-panel>
    </v-expansion-panels>
    <create-new-item item-type="profile">
      <template #profile-form>
        <FormNewProfile />
      </template>
    </create-new-item>
  </div>
</template>

<script setup>
import { useProfiles } from "@/stores/profiles.js";
import FormNewProfile from "./FormNewProfile.vue";
import ListItemProfile from "./ListItemProfile.vue";
import CreateNewItem from '@/layout/CreateNewItem.vue';
import { onMounted } from "vue";

const store = useProfiles();

onMounted(() => {
  store.fetchProfiles();
})

</script>
