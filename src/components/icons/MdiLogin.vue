<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiLogin } from "@mdi/js";

export default {
  data() {
    return {
      path: mdiLogin,
    };
  },
  components: { SvgIcon },
};
</script>
