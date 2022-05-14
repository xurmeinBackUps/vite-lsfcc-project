<template>
  <v-row class="mb-10">
    <v-col class="mb-10">
      <v-card class="main-card pa-5 bg-white">
        <slot name="base-component"></slot>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.main-card {
  min-height: 80vh;
  position: relative;
}
</style>
