<template>
  <div class="item">
    <v-card class="pa-5" color="white">
      <h3>
        <slot name="article-title"></slot>
      </h3>
      <slot name="article-content"></slot>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.item {
  margin-bottom: 25px;
}
</style>
