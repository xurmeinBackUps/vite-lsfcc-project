<template>
  <ul v-for="trans in store.transcripts">
    <li>{{ trans }}</li>
  </ul>
</template>

<script setup>
import { useTranscripts } from "@/stores/transcripts.js";
import { onMounted } from "vue";

const store = useTranscripts();

onMounted(() => {
  store.fetchTranscripts();
});
</script>
