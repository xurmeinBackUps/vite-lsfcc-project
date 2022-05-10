<template>
  <content-wrapper>
    <template #base-component>
      Page Transcipts Index
      <ListAllTranscripts />

      <create-new-item v-if="auth.adminUser" item-type="transcript" >
        <template #transcript-form>
          <FormNewTranscript />
        </template>
      </create-new-item>
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ListAllTranscripts from "@/components/ListAllTranscripts.vue";
import CreateNewItem from "@/layout/CreateNewItem.vue";
import FormNewTranscript from "../components/FormNewTranscript.vue";
import { useAuth } from "@/stores/userAuth.js";

const auth = useAuth()
</script>
