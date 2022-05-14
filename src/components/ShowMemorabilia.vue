<template>
  <v-carousel hide-delimiters>
  <template v-slot:prev="{ props }">
      <v-btn
        variant="contained"
        color="light-blue"
        @click="props.onClick"
      > {{ back }} </v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
        variant="contained"
        color="light-blue"
        @click="props.onClick"
      > {{ next }} </v-btn>
      </template>
    <v-carousel-item v-for="(img, i) in state.images" :key="i">
      <v-img :src="img" contain></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { reactive, ref } from 'vue';
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

const back = ref('<<')
const next = ref('>>')
</script>

<style lang="scss" scoped>
.mems {
  height: 100%;
}
</style>
