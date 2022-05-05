<template>
  <div v-for="partner in store.partners" :key="partner.name">
    <PartnerEntry>
      <template #heading>{{ partner.name }}</template>
      <a target="_blank" :href="partner.homepage">
        <img :src="partner.imgUrl" :alt="partner.name + ' homepage'" class="w-25"/>
      </a>
    </PartnerEntry>
  </div>
</template>

<script setup>
import PartnerEntry from "@/layout/PartnerEntry.vue";
import { usePartners } from "../stores/partners";

const store = usePartners()
store.fetchPartners()
</script>
