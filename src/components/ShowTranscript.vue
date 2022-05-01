<template>
  <div>
    <p>{{ store.trans.speaker }}</p>
    <br/>
    <p>{{ store.trans.text }}</p>
  </div>
</template>

<script setup>
import { useTranscripts } from '@/stores/transcripts.js'
import { reactive, onMounted } from 'vue';

const store = useTranscripts()

const props = defineProps({
  transKey: String
})


onMounted(() => {
  store.fetchTranscriptByKey(props.transKey)
})
</script>

<style scoped lang="scss"></style>
