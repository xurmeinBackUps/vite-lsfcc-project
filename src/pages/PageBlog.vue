<template>
  <content-wrapper>S
    <template #base-component>
      Anonymous Blog
      <BlogsIndex />
      <v-divider class="my-9"></v-divider>
      <BlogFormNew v-if="uiState.getCurrentUserRole === 'blogger'"/>
      <IndexItemAdminControls v-else-if="permissions.admin === true" />
      <ButtonOpenModal
        v-else
        target-modal="TheContactFormModal"
      />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import BlogsIndex from "@/components/BlogsIndex.vue";
import ButtonOpenModal from "@/components/ButtonOpenModal.vue";
import { useUiState } from "@/stores/uiState.js";
import BlogFormNew from"@/components/BlogFormNew.vue"
import IndexItemAdminControls from "../components/IndexItemAdminControls.vue";
import { onMounted, onUpdated, reactive } from "vue";

const permissions = reactive({
  admin: Boolean
})

const uiState = useUiState()

function permissionsCheck(role) {
  switch (role) {
    case 'admin':
      permissions.admin = true
      break;
    case 'hudson':
      permissions.admin = true
      break;
    case 'blogger':
      permissions.admin = false
      break;
    default:
      permissions.admin = false
      break;
  }
}

onMounted(() => {
  let role =  uiState.getCurrentUserRole
  permissionsCheck(role)
  console.log(permissions.admin)
})

onUpdated(() => {
  let role =  uiState.getCurrentUserRole
  permissionsCheck(role)
  console.log(permissions.admin)
})
</script>
