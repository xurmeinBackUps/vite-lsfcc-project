<template>
  <div>
    <ul v-for="trans in store.transcripts">
      <Suspense>
        <TranscriptsIndexItem :trans="trans" />
      </Suspense>
    </ul>
  </div>
</template>

<script setup>
import { useTranscripts } from "@/stores/transcripts.js";
import { Suspense } from "vue";
const TranscriptsIndexItem = () => import("./TranscriptsIndexItem.vue");

const store = useTranscripts();
store.fetchTranscripts();
</script>
