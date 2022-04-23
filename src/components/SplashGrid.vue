<template>
  <div class="splash-grid">
    <router-link :to="{ name: 'building-show', params: { bId: 'building1' } }">
      <splash-card card-title="Building One" image="https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/pictures%2Fbuildings%2Flincoln-building-1b.jpg?alt=media&token=77c3906c-4e6c-4dee-8506-66d3eacfd7af">
        <v-img cover></v-img>
      </splash-card>
    </router-link>

    <router-link :to="{ name: 'building-show', params: { bId: 'building2' } }">
      <splash-card card-title="Building Two" image="https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/pictures%2Fbuildings%2Flincoln-building-2.jpg?alt=media&token=4554318f-f953-4465-a177-a5f8d24971d2" >
        <v-img cover></v-img>
      </splash-card>
    </router-link>

    <router-link to="/profiles">
      <splash-card card-title="Faculty & Staff" image="@/assets/icons/yearbook.png">
        <v-img cover></v-img>
      </splash-card>
    </router-link>

    <router-link to="/memorabilia">
      <splash-card card-title="Memorabilia" image="@/assets/icons/varsity.png">
        <v-img cover></v-img>
      </splash-card>
    </router-link>

    <router-link to="/transcripts">
      <splash-card card-title="Transcripts" image="@/assets/icons/transcription.png">
        <v-img cover></v-img>
      </splash-card>
    </router-link>

    <router-link to="/blog">
      <splash-card card-title="Blog" image="@/assets/icons/blog.png">
        <v-img cover></v-img>
      </splash-card>
    </router-link>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { VImg } from "vuetify/lib/components";
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
</style>
