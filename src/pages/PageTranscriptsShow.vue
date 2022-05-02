<template>
  <content-wrapper>
    <template #base-component>
      Page Transcipts Show
      <ShowTranscript :trans-key="this.$route.params.objKey" />
      <IndexItemAdminControls v-if="auth.userRole === 'admin' || auth.userRole === 'hudson'" />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ShowTranscript from "../components/ShowTranscript.vue";
import IndexItemAdminControls from "../components/IndexItemAdminControls.vue";
import { useAuth } from '@/stores/userAuth.js'

const auth = useAuth()
</script>

<style lang="scss" scoped></style>
