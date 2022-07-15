<template>
  <v-row class="mb-10">
    <v-col class="mb-10">
      <v-sheet class="main-sheet pa-7 bg-white  rounded-shaped" elevation="2">
        <slot name="base-component"></slot>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.main-card {
  height: fit-content;
}
</style>
