<template>
  <v-row>
    <v-col>
      <v-app-bar color="purple-lighten-2"  app>

        <router-link to="/" class="home-btn d-inline-flex">
          <v-img height="48px" max-width="48px" class="logo"></v-img>
          <v-toolbar-title class="text-black mt-2 ml-2"> Lincoln School for Colored Children Project </v-toolbar-title>
        </router-link>



          <p v-if="user.email" class="text-black">
            <v-icon>mdi-account</v-icon>
            Hello, {{ user.email }}
          </p>


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

defineProps({
  user: Object
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";
.navlink-btn {
  margin-right: 10px;
}

.home-btn {
  width: 50vw;
}

.logo {
  background-image: url('@/assets/icons/logo.png');
  background-size: cover;
}
</style>
