<template>
  <div>
    <p>{{ entry.dates }}</p>
    <p v-html="entry.text"></p>
    <br />
  </div>
</template>

<script setup>
defineProps({
  entry: Object,
});
</script>

<style></style>
