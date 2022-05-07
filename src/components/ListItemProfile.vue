<template>
  <div :class="privateStyles">
    <v-expansion-panel-title class="title">
      {{ props.profile.fullname }}
      <span v-if="props.profile.lifetime" class="font-italic">
        &thinsp; &mdash; &thinsp;({{ props.profile.lifetime }})
      </span>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <p v-if="props.profile.pro" class="text-subtitle-1 font-italic">
        {{ props.profile.pro }}
        <span v-if="props.profile.employmentDates"
          >from {{ props.profile.employmentDates }}</span
        >
      </p>
      <p v-if="props.profile.personalHistory" class="text-body-2">
        {{ props.profile.personalHistory }}
      </p>
      <IndexItemAdminControls
        @show="showItem(props.pKey)"
        @hide="hideItem(props.pKey)"
        :index-item="props.profile"
        :item-key="props.pKey"
      />
    </v-expansion-panel-text>
  </div>
</template>

<script setup>
import IndexItemAdminControls from "@/layout/IndexItemAdminControls.vue";
import { useProfiles } from "@/stores/profiles.js";
import { useUiState } from "../stores/uiState";
import { computed } from "vue";

const ui = useUiState();
const store = useProfiles();

const props = defineProps({
  profile: Object,
  pKey: String,
});

const privateStyles = computed(() => ({
  "d-none": props.profile.private && !ui.adminUser,
  "font-italic text-grey": props.profile.private && ui.adminUser,
}));

function showItem(key) {
  store.setPrivateFalse(key);
}

function hideItem(key) {
  store.setPrivateTrue(key);
}
</script>

<style lang="scss" scoped>
.title {
  font-family: "Forum", serif;
  font-size: 1.115em;
}
</style>
