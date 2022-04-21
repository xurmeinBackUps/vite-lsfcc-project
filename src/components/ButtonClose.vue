<template>
  <v-btn color="primary" @click.stop="`${target} = !${target}`" icon class="corner">
    <v-icon >{{ this.$vuetify.icons.aliases.close }}</v-icon>
  </v-btn>
</template>

<script setup>
import { VBtn, VIcon } from 'vuetify/lib/components'

defineProps({
  target: String
})
</script>

<style scoped lang="scss">
.corner {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
