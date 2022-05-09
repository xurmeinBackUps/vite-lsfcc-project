<template>
  <v-list>
    <v-list-item v-for="(trans, key) in store.transcripts" :key="key">
      <ListItemTranscript :trans="trans" :obj-key="key" />
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useTranscripts } from "@/stores/transcripts.js";
import ListItemTranscript from "./ListItemTranscript.vue";
import { onMounted } from "vue";

const store = useTranscripts();

onMounted(() => {
  store.fetchTranscripts();
})
</script>
