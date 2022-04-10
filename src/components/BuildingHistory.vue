<template>
  <div class="mdc-card">
    <div v-if="this.$route.params.bId === 'building1'">
      <h3 class="mdc-card__title">{{ b1store.name }}</h3>
      <br />
      <ul v-for="e in b1store.entries">
        <li>{{ e }}</li>
      </ul>
    </div>
    <div v-if="this.$route.params.bId === 'building2'">
      <h3 class="mdc-card__title">{{ b2store.name }}</h3>
      <br />
      <ul v-for="e in b2store.entries" :key="e.key">
        <span>{{ e.id }}</span>
        <li>{{ e }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// TODO: Dear god, code this better!
import { useBuildingOne } from "@/stores/buildingOne.js";
import { useBuildingTwo } from "@/stores/buildingTwo.js";

export default {
  setup(props) {
    // const store = toRef(props, "bId");
    const b2store = useBuildingTwo();
    const b1store = useBuildingOne();
    b1store.fetchName();
    b1store.fetchEntries();
    b2store.fetchName();
    b2store.fetchEntries();

    return {
      b1store,
      b2store,
      // store,
      props,
    };
  },
  // computed: {
  //   schools(store){
  //     return (s)
  //   }
  // },
};

// export default {
// 	beforeMount
// }
</script>
<style></style>
