<template>
  <li class="mdc-list-item">
    <span v-if="!profile.personalHistory" class="mdc-list-item--disabled"></span>
    <span v-else class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__text">
      <span class="mdc-list-item__primary-text">
        <span class="fullname">{{ profile.fullname }}</span>
        <span v-if="profile.lifetime" class="lifetime">
          &mdash; ({{ profile.lifetime }})</span
        >
      </span>
      <span class="mdc-list-item__secondary-text sub">
        <span v-if="profile.pro">{{ profile.pro }}</span
        ><span v-if="profile.employmentDates"> from {{ profile.employmentDates }}</span>
      </span>
    </span>

    <!-- {{ profile.personalHistory }} -->
  </li>
</template>

<script setup>
defineProps({
  profile: Object,
});
</script>

<style lang="scss" scoped></style>
