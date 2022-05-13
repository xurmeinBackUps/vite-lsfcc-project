<template>
  <v-carousel
    hide-delimiters
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(img, i) in state.images"
      :key="i"
      :src="img"
    color="black"

    ></v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { reactive } from 'vue';
import imgB1A from '@/assets/images/lincoln-building-1a.jpg'
import imgB1B from '@/assets/images/lincoln-building-1b.jpg'
import imgB1C from '@/assets/images/lincoln-building-1c.png'
import imgB2 from '@/assets/images/lincoln-building-2.jpg'

const state = reactive({
  images: [
    imgB1A,
    imgB1B,
    imgB1C,
    imgB2
  ]
})
</script>

<style lang="scss" scoped>

</style>
