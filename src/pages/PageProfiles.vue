<template>
  <content-wrapper>
    <template #base-component>
      <v-card-title> Faculty & Staff Profiles </v-card-title>
      <ListAllProfiles />
      <create-new-item v-if="ui.roleIsAdmin" item-type="profile">
        <template #profile-form-new>
          <FormNewProfile />
        </template>
      </create-new-item>
    </template>
  </content-wrapper>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import ContentWrapper from "@/layout/ContentWrapper.vue";
import CreateNewItem from "@/components/admin/CreateNewItem.vue";
import ListAllProfiles from "@/components/lists/ListAllProfiles.vue";
import FormNewProfile from "@/components/forms/new/FormNewProfile.vue";

const ui = useUiState();
</script>
