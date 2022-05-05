<template>
  <div class="w-100" >
    <p><span class="float-left">{{ blog.title }}</span><span class="float-right">{{ blog.date }}</span></p>
    <br />
    <p class="blog-content">{{ blog.content }}</p>
    <IndexItemAdminControls @destroy="destroyRecord(bKey)" :index-item="blog" :item-key="bKey"/>
  </div>
</template>

<script setup>
import IndexItemAdminControls from '@/layout/IndexItemAdminControls.vue';
import { useUiState } from '../stores/uiState.js';
import { useAnonBlog } from '../stores/blog.js';

const store = useAnonBlog()
const ui = useUiState()

defineProps({
  blog: Object,
  bKey: String
})

function destroyRecord(key) {
  console.log(key)
  store.deleteBlog(key)
}
</script>

<style lang="scss" scoped>
.blog-content {
  overflow-wrap: break-word;
}
</style>
