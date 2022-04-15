<template>
  <div>
    {{ props.profile.fullname }}
    <span v-if="props.profile.birthYear && props.profile.deathYear">
      ({{ props.profile.birthYear }} - {{ props.profile.deathYear }})
    </span>
    {{ props.profile.role }}
    <span v-if="props.profile.startYear && props.profile.endYear">
      from {{ props.profile.startYear }} to {{ props.profile.endYear }}
    </span>
    {{ props.profile.personalHistory }}
  </div>
</template>

<script setup>
const props = defineProps({
  profile: Object,
});
</script>

<style lang="scss" scoped></style>
