<template>
  <div>
    <v-expansion-panel-title>
      {{ profile.fullname }}
      <span v-if="profile.lifetime" class="lifetime">
        &mdash; ({{ profile.lifetime }})
      </span>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <p v-if="profile.pro">{{ profile.pro }}</p>
      <p v-if="profile.employmentDates">from {{ profile.employmentDates }}</p>
      <p v-if="profile.personalHistory">{{ profile.personalHistory }}</p>
    </v-expansion-panel-text>

    <!--  -->
  </div>
</template>

<script setup>
defineProps({
  profile: Object,
});
</script>

<style lang="scss" scoped></style>
