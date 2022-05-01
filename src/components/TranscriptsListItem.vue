<template>
  <router-link :to="{ name: 'transcript-show', params: { objKey: objKey } }">
    <p>{{ trans.speaker }}</p>
  </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  trans: Object,
  objKey: String
});
</script>

<style lang="scss" scoped></style>
