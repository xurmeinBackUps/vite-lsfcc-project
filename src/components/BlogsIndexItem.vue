<template>
  <div>
    <p><span class="float-left">{{ doc.title }}</span><span class="float-right">{{ doc.date }}</span></p>
    <br />
    <p>{{ doc.content }}</p>
  </div>
</template>

<script setup>
defineProps({
  doc: Object
})
</script>

<style lang="scss" scoped></style>
