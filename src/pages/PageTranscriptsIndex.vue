<template>
  <content-wrapper>
    <template #base-component>
      Page Transcipts Index
      <TranscriptsList />
      <v-row v-if="auth.userRole === 'admin' || auth.userRole === 'hudson'">
        <v-col>
          <CreateNewItem item-type="transcript" />
        </v-col>
      </v-row>
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import TranscriptsList from "@/components/TranscriptsList.vue";
import CreateNewItem from "@/components/CreateNewItem.vue";
import { useAuth } from '@/stores/userAuth.js'

const auth = useAuth()
</script>

<style lang="scss" scoped></style>
