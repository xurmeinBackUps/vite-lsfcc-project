<template>
  <v-list>
    <v-list-item v-for="trans in store.transcripts">
      <TranscriptsIndexItem :trans="trans" />
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useTranscripts } from "@/stores/transcripts.js";
import TranscriptsIndexItem from "./TranscriptsIndexItem.vue";

const store = useTranscripts();
store.fetchTranscripts();
</script>
