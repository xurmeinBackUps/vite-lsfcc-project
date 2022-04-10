<template>
  <div class="mdc-card">
    <ul v-for="profile in store.profiles">
      <li>{{ profile }}</li>
    </ul>
  </div>
</template>

<script>
import { useProfiles } from "@/stores/profiles.js";

export default {
  setup() {
    const store = useProfiles();
    store.fetchProfiles();

    return {
      store,
    };
  },
};

// export default {
// 	beforeMount
// }
</script>
<style></style>
