<template>
  <div class="splash-grid">
    <router-link :to="{ name: 'building-show', params: { bId: 'building1' } }">
      <v-card class="splash-card">
        <v-img height="200px" class="b1" />
        <v-card-title class="link">Building One</v-card-title>
      </v-card>
    </router-link>

    <router-link :to="{ name: 'building-show', params: { bId: 'building2' } }">
      <v-card class="splash-card">
        <v-img height="200px" class="b2" />
        <v-card-title class="link">Building Two</v-card-title>
      </v-card>
    </router-link>

    <router-link to="/profiles">
      <v-card class="splash-card">
        <v-img height="200px" class="icon yrbk" />
        <v-card-title class="link">Faculty & Staff</v-card-title>
      </v-card>
    </router-link>

    <router-link to="/memorabilia">
      <v-card class="splash-card">
        <v-img height="200px" class="icon varsity" />
        <v-card-title class="link">Memorabilia</v-card-title>
      </v-card>
    </router-link>

    <router-link to="/transcripts">
      <v-card class="splash-card">
        <v-img height="200px" class="icon trans" />
        <v-card-title class="link">Transcripts</v-card-title>
      </v-card>
    </router-link>

    <router-link to="/blog">
      <v-card class="splash-card">
        <v-img height="200px" class="icon blog" />
        <v-card-title class="link">Blog</v-card-title>
      </v-card>
    </router-link>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { VCard, VImg, VCardTitle } from "vuetify/lib/components";
</script>

<style lang="scss" scoped>
// @import "@/assets/scss/variables.scss";

// .splash-grid {
//   padding-top: 2em;
//   display: grid;
//   gap: 50px;
//   @media (max-width: $splash-grid-breakpoint) {
//     grid-template-columns: repeat(2, 1fr);
//     grid-template-rows: repeat(3, 1fr);
//   }

//   @media (min-width: $splash-grid-breakpoint) {
//     grid-template-columns: repeat(3, 1fr);
//     grid-template-rows: repeat(2, 1fr);
//   }
// }

// .splash-card {
//   border-radius: 3em;
//   overflow: hidden;
//   margin: auto;
//   max-width: 500px;
//   height: 350px;

// }
// b1 {
//       background-image: url("https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/pictures%2Fbuildings%2Flincoln-building-1b.jpg?alt=media&token=77c3906c-4e6c-4dee-8506-66d3eacfd7af");
//       // object-fit: scale-down;
//     }

// b2 {
//       background-image: url("https://firebasestorage.googleapis.com/v0/b/lsfcc-project-moco.appspot.com/o/pictures%2Fbuildings%2Flincoln-building-2.jpg?alt=media&token=4554318f-f953-4465-a177-a5f8d24971d2");
//       // object-fit: scale-down;
//     }

// .icon {
//   background-size: contain;

//       &.yrbk {
//         background-image: url("@/assets/icons/yearbook.png");
//       }

//       &.varsity {
//         background-image: url("@/assets/icons/varsity.png");
//       }

//       &.trans {
//         background-image: url("@/assets/icons/transcription.png");
//       }

//       &.blog {
//         background-image: url("@/assets/icons/blog.png");
//       }
// }

// .link {
//   color: $alert;
//   text-align: center;
//   width: 100%;
//   border-top-left-radius: 0;
//   border-top-right-radius: 0;
//   height: fit-content;
//   padding: 20px 0;
//   background: #000111a6;
//   position: absolute;
//   bottom: 0;
// }
</style>
