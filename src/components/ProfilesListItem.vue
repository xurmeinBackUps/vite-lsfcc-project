<template>
  <div>
    <v-expansion-panel-title>
      {{ profile.fullname }}
      <span v-if="profile.lifetime">
        &thinsp; &mdash; &thinsp;({{ profile.lifetime }})
      </span>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <p v-if="profile.pro">
        {{ profile.pro }}
        <span v-if="profile.employmentDates">from {{ profile.employmentDates }}</span>
      </p>
      <p v-if="profile.personalHistory">{{ profile.personalHistory }}</p>
    </v-expansion-panel-text>
  </div>
</template>

<script setup>
defineProps({
  profile: Object,
});
</script>
