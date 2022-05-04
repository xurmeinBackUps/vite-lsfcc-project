<template>
  <v-row v-if="auth.userRole === 'admin' || auth.userRole === 'hudson'">
    <v-col >
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
import { useAuth } from '@/stores/userAuth.js'

import { ref, onMounted, onUpdated, reactive } from 'vue'

const auth = useAuth()

defineProps({
  dbRef: String
})

</script>

<style scoped lang="scss"></style>
