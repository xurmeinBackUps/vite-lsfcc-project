<template>
  <v-row>
    <v-col cols="3">
      <v-btn color="yellow">
        Edit
      </v-btn>
    </v-col>
    <v-col cols="3">
      <v-btn color="green">
        Save
      </v-btn>
    </v-col>
    <v-col cols="3">
      <v-btn color="blue">
        Hide
      </v-btn>
    </v-col>
    <v-col cols="3">
      <v-btn color="red">
        REMOVE FROM SITE
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { useAuth } from '../stores/userAuth.js'

const auth = useAuth()
</script>

<style scoped lang="scss"></style>
