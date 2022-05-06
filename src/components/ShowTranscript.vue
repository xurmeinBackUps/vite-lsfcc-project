<template>
  <div v-if="store.trans">
    <p>{{ store.trans.speaker }}</p>
    <br/>
    <p>{{ store.trans.text }}</p>
    <hr />
    <IndexItemAdminControls @destroy="deleteRecord(props.transKey)" :index-item="store.trans" :item-key="props.transKey" />
  </div>
</template>

<script setup>
import { useTranscripts } from '@/stores/transcripts.js'
import { onMounted, onUnmounted } from 'vue';
import IndexItemAdminControls from '../layout/IndexItemAdminControls.vue';

const store = useTranscripts()

const props = defineProps({
  transKey: String
})

// function confirmDelete(){

//   window.confirm('This record will be deleted from the database')
// }

function deleteRecord(key) {
  // confirmDelete()
  store.deleteTranscript(key)
}

onMounted(() => {
  store.fetchTranscriptByKey(props.transKey)
})

onUnmounted(() => {
  store.trans = {}
})
</script>

<style scoped lang="scss"></style>
