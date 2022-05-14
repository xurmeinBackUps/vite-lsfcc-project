<template>
  <v-carousel hide-delimiters class="h-100">
  <template v-slot:prev="{ props }">
      <v-btn
        variant="contained"
        rounded="pill"
        color="light-blue"
        @click="props.onClick"
      > {{ back }} </v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
        variant="contained"
        rounded="pill"
        color="blue"
        @click="props.onClick"
      > {{ next }} </v-btn>
      </template>
    <v-carousel-item v-for="(img, i) in state.images" :key="i">
    <v-card class="w-50 elevation-0 memcard">
      <v-img  :src="img.file" contain></v-img>
      <v-card-title>{{ img.subtitle }}</v-card-title>
    </v-card>
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
    { file: imgB1A, subtitle: 'Lincoln School Building 1' },
    { file: imgB1B, subtitle: 'Lincoln School Building 1' },
    { file: imgB1C, subtitle: 'Lincoln School Building 1' },
    { file: imgB2, subtitle: 'Lincoln School Building 2' }
  ]
})

const back = ref('<<')
const next = ref('>>')
</script>

<style lang="scss" scoped>
.memcard {
  margin-right: 25%;
  margin-left: 25%;
}
</style>
