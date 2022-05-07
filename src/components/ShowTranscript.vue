<template>
  <v-card>
    <div v-if="store.trans" :class="privateStyles">
      <p>{{ store.trans.speaker }}</p>
      <br />
      <p>{{ store.trans.text }}</p>
      <hr />
      <IndexItemAdminControls
        @show="showItem(props.transKey)"
        @hide="hideItem(props.transKey)"
        @destroy="deleteRecord(props.transKey)"
        :index-item="store.trans"
        :item-key="props.transKey"
      />
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
import { useTranscripts } from "@/stores/transcripts.js";
import { onMounted, onUnmounted, computed } from "vue";
import { RouterLink } from "vue-router";
import IndexItemAdminControls from "../layout/IndexItemAdminControls.vue";
import { useUiState } from "../stores/uiState";

const store = useTranscripts();
const ui = useUiState();

const props = defineProps({
  transKey: String,
});

const privateStyles = computed(() => ({
  "d-none": store.trans.private && !ui.adminUser,
  "font-italic text-grey": store.trans.private && ui.adminUser,
}));

function deleteRecord(key) {
  store.deleteTranscript(key);
}

function showItem(key) {
  store.setPrivateFalse(key);
}

function hideItem(key) {
  store.setPrivateTrue(key);
}

onMounted(() => {
  store.fetchTranscriptByKey(props.transKey);
});

onUnmounted(() => {
  store.trans = {};
});
</script>

<style scoped lang="scss"></style>
