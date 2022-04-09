<template>
  <div>
    <ProfilesList />
  </div>
</template>

<script setup>
import ProfilesList from "@/components/ProfilesList.vue";

defineProps({
  category: String,
});
</script>
