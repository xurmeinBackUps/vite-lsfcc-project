<template>
  <v-row>
    <v-col>
      <v-app-bar color="purple" app>
        <router-link to="/" class="text-black">
          <v-app-bar-title> Lincoln School for Colored Children Project </v-app-bar-title>
        </router-link>
        <v-spacer></v-spacer>
        <router-link to="/about" class="text-black">
          <v-btn variant="outlined"> About </v-btn>
        </router-link>
        <router-link to="/partners" class="text-black">
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
@import "@/assets/scss/variables_and_overrides.scss";

</style>
