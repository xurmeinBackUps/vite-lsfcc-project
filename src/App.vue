<template>
  <div class="app-container">
    <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
      <TheNavbar />
    </header>
    <main class="mdc-top-app-bar--fixed-adjust main">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { getDatabase, ref } from '@firebase/database';
import { rtdb } from './firebase.config';
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';


const db = await getDatabase(rtdb)
const data = await ref(db, '/')


onBeforeMount(async () => {
  await console.log(data)
})

</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.main {
  width: 90%;
  margin: auto;
}

.mdc-top-app-bar {
  background: $secondary;
}
</style>
