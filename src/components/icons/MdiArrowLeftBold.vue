<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowLeftBold } from "@mdi/js";

export default {
  data() {
    return {
      path: mdiArrowLeftBold,
    };
  },
  components: { SvgIcon },
};
</script>
