<template>
  <div v-if="!entry.private">
    <p class="text-subtitle-1">{{ entry.dates }}</p>
    <p class="text-body-2" v-html="entry.text"></p>
    <br />
    <IndexItemAdminControls :index-item="entry" :index-key="eKey" />
    <br/>
  </div>
</template>

<script setup>
import IndexItemAdminControls from '@/layout/IndexItemAdminControls.vue';

defineProps({
  entry: Object,
  eKey: [String, Number]
});
</script>

<style></style>
