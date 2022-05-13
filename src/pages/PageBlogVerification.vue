<template>
  <div>
  verify email
  <VerifyNewBlogger />
  </div>
</template>

<script setup>
import VerifyNewBlogger from "@/components/VerifyNewBlogger.vue";

defineProps({
  query: Object
})
</script>

<style lang="scss" scoped></style>
