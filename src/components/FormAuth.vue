<template>
  <v-container>
    <v-form>
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
            <v-btn
              color="red"
              @click.prevent="clickSignOut"
            > Sign Out </v-btn>
          </v-col>
          <v-col v-else>
            <v-btn
              color="blue"
              @click.prevent="clickSignIn"
            > Sign In </v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup>
import { useAuth } from "@/stores/userAuth.js";
import { useUiState } from "@/stores/uiState.js";

const ui = useUiState();
const auth = useAuth();

function clickSignIn() {
  auth.adminLogin();
  auth.$patch({
    credentials: {
      email: '',
      password: ''
    }
  })
  ui.drawerState = false;
}

function clickSignOut() {
  auth.logout();
  ui.drawerState = false;
}
</script>
