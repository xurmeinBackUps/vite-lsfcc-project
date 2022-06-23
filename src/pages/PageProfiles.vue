<template>
  <content-wrapper>
    <template #base-component>
      <v-card-title> Faculty & Staff Profiles </v-card-title>
      <ListAllProfiles />
      <create-new-item v-if="ui.roleIsAdmin" item-type="profile" class="form">
        <template #profile-form>
          <FormNewProfile />
        </template>
      </create-new-item>
    </template>
  </content-wrapper>
</template>

<script setup>
import { useUiState } from "@/stores/uiState.js";
import ContentWrapper from "@/layout/ContentWrapper.vue";
import CreateNewItem from "@/layout/admin/CreateNewItem.vue";
import ListAllProfiles from "@/components/ListAllProfiles.vue";
import FormNewProfile from "@/components/FormNewProfile.vue";

const ui = useUiState();
</script>

<style lang="scss" scoped>
.form {
  width: 67vw;
}
</style>
