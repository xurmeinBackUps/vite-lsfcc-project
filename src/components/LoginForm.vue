<template>
  <form>
    <LoginFormInput :input-type="email" />
    <LoginFormInput :input-type="password" />
    <LoginFormSubmit @click.prevent="submitAuth" />
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";
import LoginFormInput from "./LoginFormInput.vue";

import { useUsers } from '@/stores/users.js'
import LoginFormSubmit from './LoginFormSubmit.vue'

const users = useUsers()
const email = ref("email");
const password = ref("password");

onMounted(() => {
  users.fetchAccounts()
})

function submitAuth() {
  users.login()
}
</script>
