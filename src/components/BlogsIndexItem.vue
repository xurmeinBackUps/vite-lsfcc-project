<template>
  <div>
    <p>{{ doc.title }}</p>
    <p>{{ doc.content }}</p>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const doc = reactive({
  content: "",
  title: "",
});
</script>

<style lang="scss" scoped></style>
