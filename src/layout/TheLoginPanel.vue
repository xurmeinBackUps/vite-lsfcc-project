<template>
  <v-navigation-drawer
    app
    temporary
    v-model="ui.drawerState"
    class="bg-white"
  >
    <p class="text-center">Admin Login</p>
    <hr />
    <FormAuth />
  </v-navigation-drawer>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import FormAuth from '@/components/FormAuth.vue'

const ui = useUiState();





  /*
    TODO function that uses bcrypt to hash password
    stored in pinia & saved to rtdb user record
    (firebase/auth uses it's own password security)
  */

  // import * as bcrypt from 'bcryptjs'

  // computed: {
  //   hashPassword: (state) => {
  //     let passphrase = state.credentials.password
  //     return (key) => passphrase.map((input) => bcrypt.hashSync(input, 10) = key)
  //   }
  // },
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";
</style>
