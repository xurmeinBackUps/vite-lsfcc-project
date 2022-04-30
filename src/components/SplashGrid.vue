<template>
  <div class="splash-grid">
    <router-link :to="{ name: 'building-show', params: { bId: 'building1' } }">
      <splash-card
        card-title="Building One"
        class="splash-card-img image b-one"
        hover
        elevation="6"></splash-card>
    </router-link>

    <router-link :to="{ name: 'building-show', params: { bId: 'building2' } }">
      <splash-card
        card-title="Building Two"
        class="splash-card-img image b-two"
        hover
        elevation="6"></splash-card>
    </router-link>

    <router-link to="/profiles">
      <splash-card
        card-title="Faculty & Staff"
        class="splash-card-img icon yrbk"
        hover
        elevation="6"></splash-card>
    </router-link>

    <router-link to="/memorabilia">
      <splash-card
        card-title="Memorabilia"
        class="splash-card-img icon varsity"
        hover
        elevation="6"></splash-card>
    </router-link>

    <router-link to="/transcripts">
      <splash-card
        card-title="Transcripts"
        class="splash-card-img icon transcripts"
        hover
        elevation="6"></splash-card>
    </router-link>

    <router-link to="/blog">
      <splash-card
        card-title="Blog"
        class="splash-card-img icon blog"
        hover
        elevation="6"></splash-card>
    </router-link>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import SplashCard from "./SplashCard.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables_and_overrides.scss";

.splash-grid {
  display: grid;
  gap: 50px;
  @media (max-width: $splash-grid-breakpoint) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (min-width: $splash-grid-breakpoint) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}

.splash-card-img {
  background-repeat: no-repeat;
  background-position: center;

  &.image {
    background-size: cover;

    &.b-one {
      background-image: url('@/assets/images/lincoln-building-1b.jpg');
    }

    &.b-two {
      background-image: url('@/assets/images/lincoln-building-2.jpg');
    }

  }

  &.icon {
    background-size: contain;

    &.yrbk {
      background-image: url('@/assets/icons/yearbook.png');
    }

    &.varsity {
      background-image: url('@/assets/icons/varsity.png');
    }

    &.transcripts {
      background-image: url('@/assets/icons/transcription.png');
    }

    &.blog {
      background-image: url('@/assets/icons/blog.png');
    }
  }
}
</style>
