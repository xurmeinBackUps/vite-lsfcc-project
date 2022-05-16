<template>
  <v-row class="mb-10">
    <v-col class="mb-10">
      <v-card class="main-card pa-7 bg-white rounded-shaped">
        <slot name="base-component"></slot>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.main-card {
  height: fit-content;
}
</style>
