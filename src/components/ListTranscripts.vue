<template>
  <v-list>
    <v-list-item v-for="(trans, key) in store.transcripts" :key="key">
      <ListItemTranscripts :trans="trans" :obj-key="key" />
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useTranscripts } from "@/stores/transcripts.js";
import ListItemTranscripts from "./ListItemTranscripts.vue";

const store = useTranscripts();
store.fetchTranscripts();
</script>
