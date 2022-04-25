<template>
  <v-row>
    <v-col>
      <v-app-bar color="purple" app>
        <router-link to="/" class="text-black">
          <v-toolbar-title> Lincoln School for Colored Children Project </v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <router-link to="/about" class="text-black">
          <v-btn class="navlink-btn"> About </v-btn>
        </router-link>
        <router-link to="/partners" class="text-black">
          <v-btn class="navlink-btn"> Partners </v-btn>
        </router-link>
      </v-app-bar>
    </v-col>
  </v-row>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";
.navlink-btn {
  margin-right: 10px;
}
</style>
