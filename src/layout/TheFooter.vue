<template>
   <v-footer v-model="store.drawerState" app class="footer">
      <v-btn
        v-if="!store.drawerState"
        variant="outlined"
        icon="mdi-login"
        @click="store.openDrawer"
        color="blue"
      ></v-btn>
    </v-footer>
</template>

<script setup>
import { VBtn, VFooter } from 'vuetify/lib/components'
import { useUiState } from "@/stores/uiState.js";

const store = useUiState()
</script>

<style lang="scss" scoped>
.footer {
  height: fit-content;
  position: absolute;
  bottom: 0;
}
</style>
