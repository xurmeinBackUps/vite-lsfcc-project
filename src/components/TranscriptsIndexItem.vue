<template>
  <li>
    <p>{{ trans.speaker }}</p>
    <p>{{ trans.content }}</p>
  </li>
</template>

<script setup>
defineProps({
  trans: Object,
});
</script>

<style lang="scss" scoped></style>
