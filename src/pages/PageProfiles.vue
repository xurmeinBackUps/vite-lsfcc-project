<template>
  <content-wrapper>
    <template #base-component>
    Faculty & Staff Profiles
      <ListAllProfiles />
       <create-new-item item-type="transcript" v-if="auth.adminUser">
        <template #transcript-form>
          <FormNewProfile />
        </template>
      </create-new-item>
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ListAllProfiles from "@/components/ListAllProfiles.vue";
import CreateNewItem from "@/layout/CreateNewItem.vue";
import FormNewProfile from "../components/FormNewProfile.vue";
import { useAuth } from "@/stores/userAuth.js";

const auth = useAuth();
</script>

<style lang="scss" scoped></style>
