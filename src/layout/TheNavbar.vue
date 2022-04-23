<template>
  <v-row>
    <v-col>
      <v-app-bar color="secondary" app>
        <router-link to="/">
          <v-app-bar-title> Lincoln School for Colored Children Project </v-app-bar-title>
        </router-link>
        <v-spacer></v-spacer>
        <router-link to="/about">
          <v-btn variant="outlined"> About </v-btn>
        </router-link>
        <router-link to="/partners">
          <v-btn variant="outlined"> Partners </v-btn>
        </router-link>
      </v-app-bar>
    </v-col>
  </v-row>
</template>

<script setup>
import { RouterLink } from "vue-router";
import {
  VAppBarNavIcon,
  VAppBarTitle,
  VSpacer,
  VBtn,
  VRow,
} from "vuetify/lib/components";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.logo {
  background-image: url("@/assets/logo.url");
}
</style>
