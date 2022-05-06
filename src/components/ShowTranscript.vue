<template>
  <v-card>
  <div v-if="store.trans">
    <p>{{ store.trans.speaker }}</p>
    <br/>
    <p>{{ store.trans.text }}</p>
    <hr />
    <IndexItemAdminControls @destroy="deleteRecord(props.transKey)" :index-item="store.trans" :item-key="props.transKey" />
  </div>
  <div v-else>
    <router-link :to="{ name: 'transcripts' }">
      <v-btn size="x-large" color="amber">
        <span class="mdi mdi-arrow-left-bold"></span>
        Go back, this transcript has been deleted
      </v-btn>
    </router-link>
  </div>
  </v-card>
</template>

<script setup>
import { useTranscripts } from '@/stores/transcripts.js'
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import IndexItemAdminControls from '../layout/IndexItemAdminControls.vue';

const store = useTranscripts()

const props = defineProps({
  transKey: String
})

function deleteRecord(key) {
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
