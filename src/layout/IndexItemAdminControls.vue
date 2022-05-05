<template>
  <v-row v-if="auth.userRole === 'admin' || auth.userRole === 'hudson'">
    <v-col>
      <v-btn @click="editing = true" color="yellow">
      <!-- Need to change above line to emit and event that changes ref in parent -->
        Edit
      </v-btn>
    </v-col>
    <v-col>
      <v-btn @click="editing = false" color="green">
        Save
      </v-btn>
    </v-col>
    <v-col>
    <!-- buttons below need to update rtdb references -->
      <v-btn v-if="!indexItem.private" color="blue" @click="indexItem.private = true">
        Hide
      </v-btn>
      <v-btn v-else color="indigo" @click="indexItem.private = false">
        show
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
  indexItem: Object
})

</script>

<style scoped lang="scss"></style>
