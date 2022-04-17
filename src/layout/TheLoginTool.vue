<template>
  <mcw-drawer
    ref="drawer"
    v-model="state.open"
    modal
    toolbar-spacer
    class="primary-drawer login-tools"
  >
    <hr class="mdc-list-divider" />
    <mcw-list>
      <mcw-list-item>
        <mcw-textfield v-model="email" />
      </mcw-list-item>
      <mcw-list-item>
        <mcw-textfield v-model="password" />
      </mcw-list-item>
    </mcw-list>
  </mcw-drawer>
</template>

<script setup>
import { reactive, ref } from "vue";

const state = reactive({
  open: Function,
});

const email = ref("");
const password = ref("");
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
</style>
