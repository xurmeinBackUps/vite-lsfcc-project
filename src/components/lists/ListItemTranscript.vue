<template>
  <router-link :to="{ name: 'transcripts-show', params: { objKey: objKey } }">
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
