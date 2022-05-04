<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="profile in store.profiles" :key="profile.fullname">
        <ListItemProfiles :profile="profile" />
      </v-expansion-panel>
    </v-expansion-panels>
              <create-new-item item-type="profile" v-if="auth.userRole === 'admin' || auth.userRole === 'hudson'">
            <template #profile-form>
              <FormNewProfile />
            </template>
          </create-new-item>

  </div>
</template>

<script setup>
import { useProfiles } from "@/stores/profiles.js";
import { useAuth } from '@/stores/userAuth.js'
import FormNewProfile from "./FormNewProfile.vue";
import ListItemProfiles from "./ListItemProfiles.vue";
import CreateNewItem from '@/layout/CreateNewItem.vue';

const auth = useAuth()
const store = useProfiles();

store.fetchProfiles();
</script>
