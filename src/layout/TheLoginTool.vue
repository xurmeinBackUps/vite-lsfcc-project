<template>
  <mcw-drawer
    ref="drawer"
    v-model="open"
    dismissible
    toolbar-spacer
    class="primary-drawer login-tools"
  >
    <hr class="mdc-list-divider" />
    <ul>
      <li>
        <input v-model="email" />
      </li>
      <li>
        <input v-model="password" />
      </li>
    </ul>
  </mcw-drawer>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useUiState } from "@/stores/uiState.js";

const uiStore = useUiState();

defineProps({
  open: Boolean,
});
const email = ref("");
const password = ref("");
const drawer = ref(null);
function drawerToggle() {
  if (uiStore.drawerState === true) {
    console.log(drawer.refs);
  } else {
    console.log(drawer.refs);
  }
}

onMounted(() => {
  drawerToggle;
});

onUpdated(() => {
  drawerToggle;
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
</style>
