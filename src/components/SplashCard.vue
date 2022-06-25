<template>
  <v-card height="375" class="rounded-xl">
    <v-card-title class="link text-yellow rounded-b-xl">{{ cardTitle }}</v-card-title>
  </v-card>
</template>

<script setup>
defineProps({
  cardTitle: String,
});
</script>

<style lang="scss" scoped>

.link {
  font-family: "Forum";
  justify-content: center;
  width: 100%;
  background: #0001117e;
  position: absolute;
  bottom: 0;
}
</style>
