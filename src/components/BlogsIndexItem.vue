<template>
  <div class="w-100">
    <p><span class="float-left">{{ doc.title }}</span><span class="float-right">{{ doc.date }}</span></p>
    <br />
    <p class="blog-content">{{ doc.content }}</p>
  </div>
</template>

<script setup>
defineProps({
  doc: Object
})
</script>

<style lang="scss" scoped>
.blog-content {
  overflow-wrap: break-word;
}
</style>
