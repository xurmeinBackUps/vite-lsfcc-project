<template>
  <div>
    <p>{{ doc.title }}</p>
    <p>{{ doc.content }}</p>
  </div>
</template>

<script setup>
defineProps({
  doc: Object
})
</script>

<style lang="scss" scoped></style>
