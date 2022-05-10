<template>
  <v-row>
    <v-col>
      <v-app-bar color="purple-lighten-2" app>
        <router-link to="/" class="home-btn d-inline-flex noline">
          <v-img height="48px" max-width="48px" class="logo"></v-img>
          <v-toolbar-title class="text-black mt-3 ml-4 site-title">
            Lincoln School for Colored Children Project
          </v-toolbar-title>
        </router-link>



        <v-spacer></v-spacer>

        <router-link to="/about" class="text-black noline">
          <v-btn class="navlink-btn"> About </v-btn>
        </router-link>

        <router-link to="/partners" class="text-black noline">
          <v-btn class="navlink-btn"> Partners </v-btn>
        </router-link>
      </v-app-bar>
    </v-col>
  </v-row>
</template>

<script setup>
import { RouterLink } from "vue-router";
import MdiAccount from "@/components/icons/MdiAccount.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";

.site-title {
  font-size: 1.25rem;
}

.navlink-btn {
  margin-right: 10px;
  font-size: 0.75rem;
}

.home-btn {
  width: 55vw;
}

.logo {
  background-image: url("@/assets/icons/logo.png");
  background-size: cover;
}

.noline {
  text-decoration: none;
}

.greeting {
  font-size: 10px;
  margin-left: -10vw;
}
</style>
