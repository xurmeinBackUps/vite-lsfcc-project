<template>
  <div>
    <p class="text-subtitle-1">{{ entry.dates }}</p>
    <p class="text-body-2" v-html="entry.text"></p>
    <br />
    <br/>
  </div>
</template>

<script setup>
defineProps({
  entry: Object,
});
</script>

<style></style>
