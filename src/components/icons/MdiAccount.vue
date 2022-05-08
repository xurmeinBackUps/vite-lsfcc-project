<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";

export default {
  data() {
    return {
      path: mdiAccount,
    };
  },
  components: { SvgIcon },
};
</script>
