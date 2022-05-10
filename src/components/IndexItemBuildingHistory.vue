<template>
  <v-card class="pa-5 ma-3" :class="privateStyles">
    <p class="text-subtitle-1">{{ entry.dates }}</p>
    <p class="text-body-2" v-html="entry.text"></p>
    <IndexItemAdminControls :index-item="entry" :index-key="eKey" />
  </v-card>
</template>

<script setup>
import IndexItemAdminControls from "@/layout/IndexItemAdminControls.vue";
import { useAuth } from "../stores/userAuth.js";
import { computed } from "vue";

const auth = useAuth();

const props = defineProps({
  entry: Object,
  eKey: [String, Number],
});

const privateStyles = computed(() => ({
  "d-none": props.entry.private && !auth.adminUser,
  "font-italic text-grey": props.entry.private && auth.adminUser,
}));
</script>

<style></style>
