<template>
  <div class="w-100">
    <p><span class="float-left">{{ props.doc.title }}</span><span class="float-right">{{ props.doc.date }}</span></p>
    <br />
    <p class="blog-content">{{ props.doc.content }}</p>
    <IndexItemAdminControls :index-item="props.doc" />
  </div>
</template>

<script setup>
import IndexItemAdminControls from '@/layout/IndexItemAdminControls.vue';
import { useAuth } from '@/stores/userAuth.js'
import { computed } from 'vue';

const auth = useAuth()

const props = defineProps({
  doc: Object
})
</script>

<style lang="scss" scoped>
.blog-content {
  overflow-wrap: break-word;
}
</style>
