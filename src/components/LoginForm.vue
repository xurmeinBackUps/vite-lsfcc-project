<template>
  <form>
    <LoginFormInput :input-type="'email'"/>
    <LoginFormInput :input-type="'password'"/>
    <LoginFormSubmit @click.prevent="submitAuth" />
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";
import LoginFormInput from "./LoginFormInput.vue";
import LoginFormSubmit from './LoginFormSubmit.vue'

import { useAuth } from '@/stores/userAuth.js'

const __auth = useAuth()

onMounted(() => {
  __auth.fetchAccounts()
})

function submitAuth() {
  __auth.login()
}
</script>
