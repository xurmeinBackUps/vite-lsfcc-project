<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="profile in store.profiles" :key="profile.fullname">
        <ProfilesListItem :profile="profile" />
        <IndexItemAdminControls v-if="auth.userRole === 'admin' || auth.userRole === 'hudson'"/>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import { useAuth } from '@/stores/userAuth.js'
import { useProfiles } from "@/stores/profiles.js";
import ProfilesListItem from "./ProfilesListItem.vue";
import IndexItemAdminControls from './IndexItemAdminControls.vue';
import CreateNewItem from './CreateNewItem.vue';

const store = useProfiles();
const auth = useAuth();

store.fetchProfiles();
</script>
