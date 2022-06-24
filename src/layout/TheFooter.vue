<template>
  <v-footer v-model="ui.drawerState" app class="w-100 footer">
    <v-container fluid>
      <v-row dense>
        <v-col class="float-start">
          <v-btn
            v-if="!ui.drawerState"
            variant="outlined"
            icon
            @click="ui.openDrawer"
            color="blue-grey"
            size="x-small"
          >
            <MdiLogin />
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <span class="float-right text-caption copy"> &copy; 2022, J.Peacock </span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import MdiLogin from "@/components/icons/MdiLogin.vue";

const ui = useUiState();
</script>

<style lang="scss" scoped>
.footer {
  height: 2.5em;
  position: absolute;
  bottom: 0;
  z-index: 1;
}

.copy {
  margin-right: -25px;
}
</style>
