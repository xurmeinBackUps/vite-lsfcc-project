<template>
  <li>
    <p>{{ doc.title }}</p>
    <p>{{ doc.content }}</p>
  </li>
</template>

<script setup>
defineProps({
  doc: Object,
});
</script>

<style lang="scss" scoped></style>
