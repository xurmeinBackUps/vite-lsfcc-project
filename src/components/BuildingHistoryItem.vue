<template>
  <div>
    <span>{{ entry.dates }}</span> -- <span v-html="entry.text"></span>
  </div>
</template>

<script setup>
defineProps({
  entry: Object,
});
</script>

<style></style>
