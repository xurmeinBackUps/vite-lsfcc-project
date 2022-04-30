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
              v-model="userAuth.credentials.email"
              required
            ></v-text-field>
            <v-text-field
              label="PASSWORD"
              v-model="userAuth.credentials.password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-col>
              <v-btn color="blue" @click="clickSignIn"> Sign In </v-btn>
            </v-col>
            <v-col>
              <v-btn color="green" @click="clickSignUp"> Create Account </v-btn>
            </v-col>
            <v-col>
              <v-btn color="red" @click="clickSignOut"> Sign Out </v-btn>
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
const userAuth = useAuth();

function clickSignIn() {
  userAuth.login();
  ui.drawerState = false;
}

function clickSignOut() {
  userAuth.logout();
  ui.drawerState = false;
}

function clickSignUp() {
  userAuth.signup();
  ui.drawerState = false
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";
</style>
