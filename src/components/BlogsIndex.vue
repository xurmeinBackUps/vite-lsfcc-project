<template>
  <ul v-for="doc in blogs">
    <li>
      <p>{{ doc.title }}</p>
      <p>{{ doc.content }}</p>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  blogs: Array,
});
</script>
