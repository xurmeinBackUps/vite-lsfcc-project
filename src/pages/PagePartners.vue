<template>
  <div v-for="partner in store.partners" :key="partner.name">
    <entry-partner>
      <template #heading>{{ partner.name }}</template>
      <a target="_blank" :href="partner.homepage">
        <img :src="partner.imgUrl" :alt="partner.name + ' homepage'" class="w-25"/>
      </a>
    </entry-partner>
  </div>
</template>

<script setup>
import EntryPartner from "@/layout/EntryPartner.vue";
import { usePartners } from "../stores/partners";

const store = usePartners()
store.fetchPartners()
</script>
