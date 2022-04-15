<template>
  <div class="mdc-card">
    <ul v-for="profile in store.profiles">
      <ProfilesListItem :profile="profile" />
    </ul>
  </div>
</template>

<script>
import { useProfiles } from "@/stores/profiles.js";
import ProfilesListItem from "./ProfilesListItem.vue";

export default {
  setup() {
    const store = useProfiles();
    store.fetchProfiles();
    // store.pObjects();
    return {
      store,
    };
  },
  components: { ProfilesListItem },
};

// export default {
// 	beforeMount
// }
</script>
<style></style>
