<template>
  <form>
    <LoginFormInput :input-type="email" />
    <LoginFormInput :input-type="password" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import LoginFormInput from "./LoginFormInput.vue";

const email = ref("email");
const password = ref("password");
</script>
