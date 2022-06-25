<template>
  <section class="partners-grid">
    <div v-for="partner in store.partners" :key="partner.name">
      <entry-partner>
        <template #heading>{{ partner.name }}</template>
        <template #partner-logo>
          <a target="_blank" :href="partner.homepage">
            <v-img :src="partner.imgUrl" :alt="partner.name + ' homepage'" class="partner-logo" ></v-img>
          </a>
        </template>
      </entry-partner>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { usePartners } from "@/stores/partners.js";
import EntryPartner from "@/layout/EntryPartner.vue";

const store = usePartners();

onMounted(() => {
  store.fetchPartners();
});
</script>

<style lang="scss" scoped>
.partners-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1em;
}

.partner-logo {
  height: 250px;

}
</style>
