<template>
  <div class="splash-grid">
    <router-link :to="{ name: 'building-show', params: { bId: 'building1' } }">
      <splash-card
        card-title="Building One"
        image="https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/pictures%2Fbuildings%2Flincoln-building-1b.jpg?alt=media&token=77c3906c-4e6c-4dee-8506-66d3eacfd7af"
      >
        <v-img cover></v-img>
      </splash-card>
    </router-link>

    <router-link :to="{ name: 'building-show', params: { bId: 'building2' } }">
      <splash-card
        card-title="Building Two"
        image="https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/pictures%2Fbuildings%2Flincoln-building-2.jpg?alt=media&token=4554318f-f953-4465-a177-a5f8d24971d2"
      >
        <v-img cover></v-img>
      </splash-card>
    </router-link>

    <router-link to="/profiles">
      <splash-card
        card-title="Faculty & Staff"
        image="https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/icons%2Fyearbook.png?alt=media&token=a5917959-41c7-4d50-8b1a-97985f76cb4e"
      >
        <v-img cover></v-img>
      </splash-card>
    </router-link>

    <router-link to="/memorabilia">
      <splash-card
        card-title="Memorabilia"
        image="https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/icons%2Fvarsity.png?alt=media&token=04ba7540-2f9b-4124-b5ce-25e4cf51e54e"
      >
        <v-img cover></v-img>
      </splash-card>
    </router-link>

    <router-link to="/transcripts">
      <splash-card
        card-title="Transcripts"
        image="https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/icons%2Ftranscription.png?alt=media&token=38154380-31c7-4f8a-8246-e1d043ce91e3"
      >
        <v-img cover></v-img>
      </splash-card>
    </router-link>

    <router-link to="/blog">
      <splash-card
        card-title="Blog"
        image="https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/icons%2Fblog.png?alt=media&token=9d21863f-e534-4a68-b62c-4d6edd2a3d66"
      >
        <v-img cover></v-img>
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
</style>
