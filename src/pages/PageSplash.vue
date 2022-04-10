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

    <router-link to="/content-idx-test">
      <div class="mdc-card">
        <div class="mdc-card__media icon varsity"></div>
        <span class="mdc-card__content link">Memorabilia</span>
      </div>
    </router-link>

    <router-link to="/content-idx-test">
      <div class="mdc-card">
        <div class="mdc-card__media icon trans"></div>
        <span class="mdc-card__content link">Transcripts</span>
      </div>
    </router-link>

    <router-link to="/content-idx-test">
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 300px);
  column-gap: 50px;
}

.mdc-card {
  border-radius: 3em;
  overflow: hidden;
  margin: auto;
  max-width: 500px;

  &__media {
    height: 250px;

    &.b1 {
      background-image: url("@/assets/lincoln-building-1a.jpg");
      object-fit: scale-down;
    }

    &.b2 {
      background-image: url("@/assets/lincoln-building-2.jpg");
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
