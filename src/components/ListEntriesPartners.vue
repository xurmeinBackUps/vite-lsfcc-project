<template>
  <!-- do this as table -->
  <div v-for="partner in store.partners" :key="partner.name">
    <entry-partner>
      <template #heading>{{ partner.name }}</template>
      <template #partner-logo>
        <a target="_blank" :href="partner.homepage">
          <img :src="partner.imgUrl" :alt="partner.name + ' homepage'" class="w-25" />
        </a>
      </template>
    </entry-partner>
  </div>
  <!-- add MY INFO here. -->
</template>

<script setup>
import EntryPartner from "@/layout/EntryPartner.vue";
import { onMounted } from "vue";
import { usePartners } from "@/stores/partners.js";

const store = usePartners();

onMounted(() => {
  store.fetchPartners();
});
</script>

<style lang="scss" scoped></style>
