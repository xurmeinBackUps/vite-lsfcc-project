<template>
  <v-card class="pa-3">
    <div v-if="store.trans" :class="privateStyles">
      <p>{{ store.trans.speaker }}</p>
      <br />
      <p>{{ store.trans.text }}</p>
      <list-item-crud-buttons
        v-if="ui.roleIsAdmin"
        @edit="changeRecord(props.transKey)"
        @show="showItem(props.transKey)"
        @hide="hideItem(props.transKey)"
        @destroy="deleteRecord(props.transKey)"
        :index-item="store.trans"
        :item-key="props.transKey"
        item-type="transcript"
      >
        <template #transcript-form-edit>
          <FormEditTranscript />
        </template>
      </list-item-crud-buttons>
    </div>
    <div v-else>
      <router-link :to="{ name: 'transcripts' }">
        <v-btn size="x-large" color="amber">
          <MdiArrowLeftBold />
          Go back, this transcript has been deleted
        </v-btn>
      </router-link>
    </div>
  </v-card>
</template>

<script setup>
import { onMounted, onUnmounted, computed } from "vue";
import { RouterLink } from "vue-router";
import { useTranscripts } from "@/stores/transcripts.js";
import { useUiState } from "@/stores/uiState.js";
import ListItemCrudButtons from "@/components/admin/ListItemCrudButtons.vue";
import MdiArrowLeftBold from "./icons/MdiArrowLeftBold.vue";
import FormEditTranscript from './forms/edit/FormEditTranscript.vue';

const store = useTranscripts();
const ui = useUiState();

const props = defineProps({
  transKey: String,
});

const privateStyles = computed(() => ({
  "d-none": store.trans.private && !ui.roleIsAdmin,
  "font-italic text-grey": store.trans.private && ui.roleIsAdmin,
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

function changeRecord(key) {
  ui.editForm = true;
}

onMounted(() => {
  store.fetchTranscriptByKey(props.transKey);
});

onUnmounted(() => {
  store.trans = {};
});
</script>
