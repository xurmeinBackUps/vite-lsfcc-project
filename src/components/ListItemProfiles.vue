<template>
  <div>
    <v-expansion-panel-title class="title">
      {{ profile.fullname }}
      <span v-if="profile.lifetime" class="font-italic">
        &thinsp; &mdash; &thinsp;({{ profile.lifetime }})
      </span>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <p v-if="profile.pro" class="text-subtitle-1 font-italic">
        {{ profile.pro }}
        <span v-if="profile.employmentDates">from {{ profile.employmentDates }}</span>
      </p>
      <p v-if="profile.personalHistory" class="text-body-2">
        {{ profile.personalHistory }}
      </p>
              <IndexItemAdminControls v-if="auth.userRole === 'admin' || auth.userRole === 'hudson'" />

    </v-expansion-panel-text>
  </div>
</template>

<script setup>
import IndexItemAdminControls from '@/layout/IndexItemAdminControls.vue';
import { useAuth } from '@/stores/userAuth.js'

const auth = useAuth();

defineProps({
  profile: Object,
});
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Forum', serif;
  font-size: 1.5em;
}
</style>
