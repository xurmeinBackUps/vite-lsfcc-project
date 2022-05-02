<template>
<keep-alive>
  <v-navigation-drawer app temporary v-model="ui.drawerState" class="bg-white">
    <p class="text-center">Admin Login</p>
    <hr />
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              label="EMAIL"
              v-model="auth.credentials.email"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              label="PASSWORD"
              v-model="auth.credentials.password"
              type="password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-col v-if="auth.currentUser">
              <v-btn  color="red" @click.prevent="clickSignOut"> Sign Out </v-btn>
            </v-col>
            <v-col v-else>
              <v-btn color="blue" @click.prevent="clickSignIn"> Sign In </v-btn>
              <v-btn color="green" @click.prevent="clickSignUp"> Create Account </v-btn>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-navigation-drawer>
</keep-alive>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import { useAuth } from "@/stores/userAuth.js";

const ui = useUiState();
const auth = useAuth();

function clickSignIn() {
  auth.login();
  ui.drawerState = false;
}

function clickSignOut() {
  auth.logout();
  ui.drawerState = false;
}

function clickSignUp() {
  auth.signup();
  ui.drawerState = false
}



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
