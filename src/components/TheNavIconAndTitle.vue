<template>
  <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
    <router-link to="/">
      <div class="nav-banner">
        <img
          alt="Lincoln School for Colored Children project logo"
          class="logo mdc-top-app-bar__navigation-icon"
          src="@/assets/icons/logo.png"
        />

        <h1 class="mdc-top-app-bar__title title">
          Lincoln School for Colored Children Project
        </h1>
      </div>
    </router-link>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

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
