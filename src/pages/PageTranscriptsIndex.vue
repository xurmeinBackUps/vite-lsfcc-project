<template>
  <content-wrapper>
    <template #base-component>
      <v-card-title> The Transciptions Index </v-card-title>
      <ListAllTranscripts />

      <create-new-item v-if="ui.roleIsAdmin" item-type="transcript" class="form">
        <template #transcript-form>
          <FormNewTranscript />
        </template>
      </create-new-item>
    </template>
  </content-wrapper>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import ContentWrapper from "@/layout/ContentWrapper.vue";
import CreateNewItem from "@/layout/admin/CreateNewItem.vue";
import ListAllTranscripts from "@/components/ListAllTranscripts.vue";
import FormNewTranscript from "@/components/FormNewTranscript.vue";

const ui = useUiState();
</script>

<style lang="scss" scoped>
.form {
  width: 67vw;
}
</style>
