<template>
  <nav class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <router-link to="/">
        <div class="nav-banner">
          <img alt="Lincoln School for Colored Children project logo" class="logo mdc-top-app-bar__navigation-icon"
            src="/assets/logo.png" />

          <h1 class="mdc-top-app-bar__title title">
            Lincoln School for Colored Children Project
          </h1>
        </div>
      </router-link>
    </section>

    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
      <div class="mdc-tab-bar">
        <router-link to="/about">
          <button class="mdc-tab mdc-button">
            <span class="mdc-tab__content">About</span>
            <span class="mdc-button__ripple"></span>
          </button>
        </router-link>
        <router-link to="/partners">
          <button class="mdc-tab mdc-button">
            <span class="mdc-tab__content">Partners</span>
            <span class="mdc-button__ripple"></span>
          </button>
        </router-link>
      </div>
    </section>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";

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
