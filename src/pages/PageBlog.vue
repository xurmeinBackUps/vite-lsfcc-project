<template>
  <content-wrapper>S
    <template #base-component>
      Anonymous Blog
      <IndexBlog />
      <v-divider class="my-9"></v-divider>
      <FormNewBlog v-if="uiState.currentUserRole === 'blogger'"/>
      <ButtonOpenModal
        v-else
        target-modal="TheContactFormModal"
      />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import IndexBlog from "@/components/IndexBlog.vue";
import ButtonOpenModal from "@/components/ButtonOpenModal.vue";
import { useUiState } from "@/stores/uiState.js";
import FormNewBlog from"@/components/FormNewBlog.vue"
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
  let role =  uiState.currentUserRole
  permissionsCheck(role)
  console.log(permissions.admin)
})

onUpdated(() => {
  let role =  uiState.currentUserRole
  permissionsCheck(role)
  console.log(permissions.admin)
})
</script>
