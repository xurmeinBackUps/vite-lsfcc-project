<template>
  <div class="mdc-card">
    <span>{{ store.profiles }}</span>
  </div>
</template>
<script>
import { useProfiles } from "@/stores/profilesStore.js";

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
