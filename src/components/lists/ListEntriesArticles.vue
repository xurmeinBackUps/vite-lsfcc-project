<template>
  <div v-for="article in store.articles">
    <entry-about>
      <template #article-title>
        <span>
          {{ article.title }}
        </span>
      </template>
      <template #article-content>
        <div v-html="article.content"></div>
      </template>
    </entry-about>
    <ListItemCrudButtons
      v-if="ui.roleIsAdmin"
      item-type="about"
      :index-item="props.about"
      :index-key="props.key"
      @show="showItem(props.key)"
      @hide="hideItem(props.key)"
      @edit=""
      @save=""
      @destroy="destroyRecord(props.key)"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAbout } from "@/stores/about.js";
import { useUiState } from "@/stores/uiState.js";
import EntryAbout from "@/layout/EntryAbout.vue";
import ListItemCrudButtons from "@/components/admin/ListItemCrudButtons.vue";

const ui = useUiState();
const store = useAbout();

const props = defineProps({
  about: Object,
  key: String,
});

onMounted(() => {
  store.fetchArticles();
});
</script>

<style lang="scss" scoped></style>
