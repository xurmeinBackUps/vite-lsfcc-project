<template>
  <v-textarea
    variant="outlined"
    name="new-blog"
    label="Provide your personal account anonymously"
    v-model="content"
  ></v-textarea>
</template>

<script setup>
defineProps({
  content: String
})
</script>

<style lang="scss" scoped></style>
