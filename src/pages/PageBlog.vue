<template>
  <content-wrapper>
    <template #base-component>
      Anonymous Blog
      <IndexBlog />
      <v-divider class="my-9"></v-divider>
      <!-- <FormNewBlog v-if="uiState.currentUserRole === 'blogger'"/> -->
      <ButtonContact @click="ui.contactForm = true"/>
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import IndexBlog from "@/components/IndexBlog.vue";
import { useUiState } from "@/stores/uiState.js";
import ButtonContact from "../components/ButtonContact.vue";

const ui = useUiState()
</script>
