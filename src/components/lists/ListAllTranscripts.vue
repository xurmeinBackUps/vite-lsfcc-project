<template>
  <v-list>
    <v-list-item v-for="(trans, key) in store.transcripts" :key="key">
      <ListItemTranscript :trans="trans" :obj-key="key" />
    </v-list-item>
  </v-list>
</template>

<script setup>
import { onMounted } from "vue";
import { useTranscripts } from "@/stores/transcripts.js";
import ListItemTranscript from "./ListItemTranscript.vue";

const store = useTranscripts();

onMounted(() => {
  store.fetchTranscripts();
})
</script>
