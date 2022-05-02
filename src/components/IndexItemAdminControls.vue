<template>
  <v-row>
    <v-col>
      <v-btn color="yellow">
        Edit
      </v-btn>
    </v-col>
    <v-col>
      <v-btn color="green">
        Save
      </v-btn>
    </v-col>
    <v-col>
      <v-btn color="blue">
        Hide
      </v-btn>
    </v-col>
    <v-col>
      <v-btn color="red">
        REMOVE FROM SITE
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { useAuth } from '../stores/userAuth.js'
import { ref, reactive, onMounted, onUpdated } from 'vue'

const auth = useAuth()
const activeRole = ref('')

// const

onMounted(() => {
  auth.userRole = activeRole
})

onUpdated(() => {
  auth.userRole = activeRole
})
</script>

<style scoped lang="scss"></style>
