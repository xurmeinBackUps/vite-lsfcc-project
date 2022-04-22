<template>
  <ul
    v-for="profile in store.profiles"
    :key="profile.fullname"
    class="mdc-list mdc-list--two-line"
  >
    <ProfilesListItem :profile="profile" />
  </ul>
</template>

<script>
import { useProfiles } from "@/stores/profiles.js";
import ProfilesListItem from "./ProfilesListItem.vue";

export default {
  setup() {
    const store = useProfiles();
    store.fetchProfiles();

    return {
      store,
    };
  },
  components: { ProfilesListItem },
};
</script>
