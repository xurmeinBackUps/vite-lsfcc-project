<template>
  <ul
    v-for="profile in store.profiles"
    :key="profile.fullname"
    class="mdc-list mdc-list--two-line"
  >
    <ProfilesListItem :profile="profile" />
  </ul>
</template>

<script setup>
import { useProfiles } from "@/stores/profiles.js";
import ProfilesListItem from "./ProfilesListItem.vue";

const store = useProfiles();

store.fetchProfiles();
</script>
