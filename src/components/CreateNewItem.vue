<template>
  <v-row>
    <v-btn color="primary">Add New {{ itemType }} to Database</v-btn>
  </v-row>
</template>

<script setup>
defineProps({
  itemType: String
})
</script>

<style lang="scss" scoped></style>
