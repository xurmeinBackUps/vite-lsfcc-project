<template>
  <div class="w-100">
    <p><span class="float-left">{{ doc.title }}</span><span class="float-right">{{ doc.date }}</span></p>
    <br />
    <p class="blog-content">{{ doc.content }}</p>
    <IndexItemAdminControls v-if="auth.userRole === 'admin' || auth.userRole === 'hudson'" />
  </div>
</template>

<script setup>
import IndexItemAdminControls from './IndexItemAdminControls.vue';
import { useAuth } from '@/stores/userAuth.js'

const auth = useAuth()

defineProps({
  doc: Object
})
</script>

<style lang="scss" scoped>
.blog-content {
  overflow-wrap: break-word;
}
</style>
