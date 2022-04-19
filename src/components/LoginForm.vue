<template>
  <ul>
    <li>
      <input v-model="email" />
    </li>
    <li>
      <input v-model="password" />
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
</script>
