<template>
  <content-wrapper>
    <template #base-component>
      Page Transcipts Index
      <ListTranscripts />

          <create-new-item item-type="transcript" v-if="auth.userRole === 'admin' || auth.userRole === 'hudson'">
            <template #transcript-form>
              <FormNewTranscript />
            </template>
          </create-new-item>

    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ListTranscripts from "@/components/ListTranscripts.vue";
import CreateNewItem from "@/layout/CreateNewItem.vue";
import { useAuth } from '@/stores/userAuth.js'
import FormNewTranscript from "../components/FormNewTranscript.vue";

const auth = useAuth()
</script>
