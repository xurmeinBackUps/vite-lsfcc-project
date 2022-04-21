<template>
  <nav class="mdc-top-app-bar__row">
      <router-link to="/">

        <v-app-bar-nav-icon>
        </v-app-bar-nav-icon>
          <img
            alt="Lincoln School for Colored Children project logo"
            class="logo mdc-top-app-bar__navigation-icon"
            src="@/assets/logo.png"
          />
          <v-toolbar-title>
            Lincoln School for Colored Children Project
          </v-toolbar-title>
      </router-link>
        <v-spacer></v-spacer>
        <router-link to="/about">
            <v-btn>About</v-btn>

        </router-link>
        <router-link to="/partners">
            <v-btn>Partners</v-btn>

        </router-link>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { VAppBarNavIcon, VToolbarTitle, VSpacer, VBtn } from "vuetify/lib/components";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.mdc-tab-bar {
  display: inline-flex;
  width: fit-content;
}

.mdc-tab__content {
  color: $white;
}

.nav-banner {
  display: inline-flex;
  padding: 0.25em 1em;
}

.title {
  color: $black;
  font-size: 1.5em;
}

.logo {
  width: 3.5em;
  object-fit: contain;
}
</style>
