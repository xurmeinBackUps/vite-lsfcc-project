<template>
  <v-navigation-drawer app temporary v-model="ui.drawerState">
    <p class="text-center">Admin Login</p>
    <hr />
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field label="EMAIL" required></v-text-field>
            <v-text-field label="PASSWORD" required></v-text-field>
            <v-btn class="float-right" color="blue" @click="clickSignIn"> Sign In </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-navigation-drawer>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import { useAuth } from "@/stores/userAuth.js";
import { onMounted } from "vue";

const ui = useUiState();
const userAuth = useAuth();

onMounted(() => {
  userAuth.fetchAccounts();
});

function clickSignIn() {
  userAuth.login();
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";
</style>
