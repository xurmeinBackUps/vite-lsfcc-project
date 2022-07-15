<template>
  <router-link :to="{ name: 'transcripts-show', params: { transKey: transKey } }">
    <p>{{ trans.speaker }}</p>
  </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  trans: Object,
  transKey: String
});
</script>
