<template>
  <div>
    {{ profile.fullname }}
    <span v-if="profile.lifetimer"> ({{ profile.lifetime }}) </span>
    {{ profile.pro }}
    <span v-if="profile.employmentDates"> from {{ profile.employmentDates }} </span>
    {{ profile.personalHistory }}
  </div>
</template>

<script setup>
defineProps({
  profile: Object,
});
</script>

<style lang="scss" scoped></style>
