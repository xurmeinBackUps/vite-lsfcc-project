<template>
  <div>
    <p class="text-subtitle-1">{{ entry.dates }}</p>
    <p class="text-body-2" v-html="entry.text"></p>
    <br />
    <IndexItemAdminControls v-if="auth.userRole === 'admin' || auth.userRole === 'hudson'" />
    <br/>
  </div>
</template>

<script setup>
import IndexItemAdminControls from './IndexItemAdminControls.vue';

import { useAuth } from '@/stores/userAuth.js'

const auth = useAuth()

defineProps({
  entry: Object,
});
</script>

<style></style>
