<template>
  <div class="mdc-layout-grid splash-grid">
    <router-link :to="{ name: 'building-show', params: { bId: 'building1' } }">
      <div class="mdc-card">
        <div class="mdc-card__media b1"></div>
        <span class="mdc-card__content link">Building One</span>
      </div>
    </router-link>

    <router-link :to="{ name: 'building-show', params: { bId: 'building2' } }">
      <div class="mdc-card">
        <div class="mdc-card__media b2"></div>
        <span class="mdc-card__content link">Building Two</span>
      </div>
    </router-link>

    <router-link to="/profiles">
      <div class="mdc-card">
        <div class="mdc-card__media icon yrbk"></div>
        <span class="mdc-card__content link">Faculty & Staff</span>
      </div>
    </router-link>

    <router-link to="/memorabilia">
      <div class="mdc-card">
        <div class="mdc-card__media icon varsity"></div>
        <span class="mdc-card__content link">Memorabilia</span>
      </div>
    </router-link>

    <router-link to="/transcripts">
      <div class="mdc-card">
        <div class="mdc-card__media icon trans"></div>
        <span class="mdc-card__content link">Transcripts</span>
      </div>
    </router-link>

    <router-link to="/blog">
      <div class="mdc-card">
        <div class="mdc-card__media icon blog"></div>
        <span class="mdc-card__content link">Blog</span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
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

.mdc-card {
  border-radius: 3em;
  overflow: hidden;
  margin: auto;
  max-width: 500px;

  &__media {
    // min-height: 250px;
    height: 350px;
    &.b1 {
      background-image: url("https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/pictures%2Fbuildings%2Flincoln-building-1b.jpg?alt=media&token=77c3906c-4e6c-4dee-8506-66d3eacfd7af");
      object-fit: scale-down;
    }

    &.b2 {
      background-image: url("https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/pictures%2Fbuildings%2Flincoln-building-2.jpg?alt=media&token=4554318f-f953-4465-a177-a5f8d24971d2");
      object-fit: scale-down;
    }

    &.icon {
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
  }
}

.link {
  color: $accent;
  text-align: center;
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  height: fit-content;
  padding: 20px 0;
  background: #000111a6;
  position: absolute;
  bottom: 0;
}
</style>
