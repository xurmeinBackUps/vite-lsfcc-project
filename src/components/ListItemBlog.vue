<template>
  <div class="w-100" :class="privateStyles">
    <p>
      <span class="float-left"
        ><strong>{{ props.blog.title }}</strong></span
      >
      <span class="float-right">{{ props.blog.date }}</span>
    </p>
    <br />
    <p class="blog-content">{{ props.blog.content }}</p>
    <IndexItemAdminControls
      v-if="ui.roleIsAdmin"
      @hide="hideItem(bKey)"
      @show="showItem(bKey)"
      @destroy="destroyRecord(bKey)"
      item-type="blog"
      :index-item="blog"
      :item-key="bKey"
    />
  </div>
</template>

<script setup>
import IndexItemAdminControls from "@/layout/IndexItemAdminControls.vue";
import { useUiState } from "../stores/uiState.js";
import { useAnonBlog } from "../stores/blog.js";
import { computed } from "vue";

const store = useAnonBlog();
const ui = useUiState();

const props = defineProps({
  blog: Object,
  bKey: String,
});

function confirmDelete() {
  window.confirm(`Click OK to delete this blog entry record from the database`);
}

function destroyRecord(key) {
  confirmDelete();
  store.deleteBlog(key);
}

const privateStyles = computed(() => ({
  "d-none": props.blog.private && !ui.adminUser,
  "font-italic text-grey": props.blog.private && ui.adminUser,
}));

function showItem(key) {
  store.setPrivateFalse(key);
}

function hideItem(key) {
  store.setPrivateTrue(key);
}
</script>

<style lang="scss" scoped>
.blog-content {
  overflow-wrap: break-word;
}
</style>
