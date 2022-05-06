<template>
  <content-wrapper>
    <template #base-component>
      Anonymous Blog
      <IndexBlog />
      <v-divider class="my-9"></v-divider>
      <FormNewBlog v-if="auth.userRole === 'blogger' || auth.userRole === 'admin'"/>
      <ButtonContact @click="ui.contactForm = true"/>
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import IndexBlog from "@/components/IndexBlog.vue";
import { useUiState } from "@/stores/uiState.js";
import { useAuth } from '@/stores/userAuth.js'
import ButtonContact from "../components/ButtonContact.vue";
import FormNewBlog from "../components/FormNewBlog.vue";

const ui = useUiState()
const auth = useAuth()
</script>
