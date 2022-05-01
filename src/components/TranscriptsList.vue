<template>
  <v-list>
    <v-list-item v-for="(trans, key) in store.transcripts" :key="key">
      <TranscriptsListItem :trans="trans" :obj-key="key"></TranscriptsListItem>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useTranscripts } from "@/stores/transcripts.js";
import TranscriptsListItem from "./TranscriptsListItem.vue";

const store = useTranscripts();
store.fetchTranscripts();
</script>
