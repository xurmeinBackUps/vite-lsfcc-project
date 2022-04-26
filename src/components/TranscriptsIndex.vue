<template>
  <div>
    <ul v-for="trans in store.transcripts">
      <TranscriptsIndexItem :trans="trans" />
    </ul>
  </div>
</template>

<script setup>
import { useTranscripts } from "@/stores/transcripts.js";
const TranscriptsIndexItem = () => import("./TranscriptsIndexItem.vue");

const store = useTranscripts();
store.fetchTranscripts();
</script>
