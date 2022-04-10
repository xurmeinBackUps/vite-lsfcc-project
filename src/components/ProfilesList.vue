<template>
  <div class="mdc-card">
    <ul v-for="profile in store.profiles">
      <ProfileContent :profile="profile" />
    </ul>
  </div>
</template>

<script setup>
import { useProfiles } from "@/stores/profiles.js";
import ProfileContent from "./ProfileContent.vue";

const store = useProfiles();
store.fetchProfiles();

// export default {
// 	beforeMount
// }
</script>
<style></style>
