<template>
  <div class="splash-grid">
    <router-link :to="{ name: 'building-show', params: { bId: 'building1' } }">
      <SplashCard card-title="Building One" class="b1" />
    </router-link>

    <router-link :to="{ name: 'building-show', params: { bId: 'building2' } }">
      <SplashCard card-title="Building Two" class="b2" />
    </router-link>

    <router-link to="/profiles">
      <SplashCard card-title="Faculty & Staff" class="icon yrbk" />
    </router-link>

    <router-link to="/memorabilia">
      <SplashCard card-title="Memorabilia" class="icon varsity" />
    </router-link>

    <router-link to="/transcripts">
      <SplashCard card-title="Transcripts" class="icon trans" />
    </router-link>

    <router-link to="/blog">
      <SplashCard card-title="Blog" class="icon blog" />
    </router-link>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import SplashCard from "../components/SplashCard.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.splash-grid {
  padding-top: 2em;
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

// .splash-card {
//   border-radius: 3em;
//   overflow: hidden;
//   margin: auto;
//   max-width: 500px;
//   height: 350px;

.b1 {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/pictures%2Fbuildings%2Flincoln-building-1b.jpg?alt=media&token=77c3906c-4e6c-4dee-8506-66d3eacfd7af");
  object-fit: scale-down;
}

.b2 {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/pictures%2Fbuildings%2Flincoln-building-2.jpg?alt=media&token=4554318f-f953-4465-a177-a5f8d24971d2");
  object-fit: scale-down;
}

.icon {
  background-size: contain;

  &.yrbk {
    background-image: url("@/assets/icons/yearbook.png");
  }

  &.varsity {
    background-image: url("@/assets/icons/varsity.png");
  }

  &.trans {
    background-image: url("@/assets/icons/transcription.png");
  }

  &.blog {
    background-image: url("@/assets/icons/blog.png");
  }
}
</style>
