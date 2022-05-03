<template>
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
</template>

<script setup>
import { useAuth } from "@/stores/userAuth.js";
import { useUiState } from "@/stores/uiState.js";

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
</script>

<style lang="scss" scoped></style>
