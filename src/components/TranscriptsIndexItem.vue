<template>
  <div>
    <p>{{ trans.speaker }}</p>
    <p>{{ trans.text }}</p>
  </div>
</template>

<script setup>
defineProps({
  trans: Object,
});
</script>

<style lang="scss" scoped></style>
