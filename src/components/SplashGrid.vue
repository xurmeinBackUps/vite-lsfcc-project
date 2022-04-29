<template>
  <div class="splash-grid">
    <router-link :to="{ name: 'building-show', params: { bId: 'building1' } }">
      <splash-card
        card-title="Building One"
        image="@/assets/images/lincoln-building-1a.jpg"
      >
      </splash-card>
    </router-link>

    <router-link :to="{ name: 'building-show', params: { bId: 'building2' } }">
      <splash-card
        card-title="Building Two"
        image="@/assets/images/lincoln-building-2.jpg"
      >
      </splash-card>
    </router-link>

    <router-link to="/profiles">
      <splash-card
        card-title="Faculty & Staff"
        image="@/assets/icons/yearbook.png"
      >
      </splash-card>
    </router-link>

    <router-link to="/memorabilia">
      <splash-card
        card-title="Memorabilia"
        image="@/assets/icons/varsity.png"
      >
      </splash-card>
    </router-link>

    <router-link to="/transcripts">
      <splash-card
        card-title="Transcripts"
        image="@/assets/icons/transcription.png"
      >
      </splash-card>
    </router-link>

    <router-link to="/blog">
      <splash-card
        card-title="Blog"
        image="@/assets/icons/blog.png"
      >
      </splash-card>
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

.icon-img {
  object-fit: contain;
}
</style>
