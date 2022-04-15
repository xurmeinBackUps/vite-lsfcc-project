<template>
  <div>
    {{ profile.fullname }}
    <span v-if="profile.birthYear && profile.deathYear">
      ({{ profile.birthYear }} - {{ profile.deathYear }})
    </span>
    {{ profile.role }}
    <span v-if="profile.startYear && profile.endYear">
      from {{ profile.startYear }} to {{ profile.endYear }}
    </span>
    {{ profile.personalHistory }}
  </div>
</template>

<script setup>
defineProps({
  profile: Object,
});
</script>

<style lang="scss" scoped></style>
