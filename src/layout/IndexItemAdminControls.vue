<template>
  <v-row v-if="auth.userRole === 'admin' || auth.userRole === 'hudson'">
    <v-col>
      <v-btn @click="emit('edit', itemKey)" color="yellow">
      <!-- Need to change above line to emit and event that changes ref in parent -->
        Edit
      </v-btn>
    </v-col>
    <v-col>
      <v-btn @click="emit('save', itemKey)" color="green">
        Save
      </v-btn>
    </v-col>
    <v-col>
    <!-- buttons below need to update rtdb references -->
      <v-btn v-if="!indexItem.private" color="blue" @click="emit('hide', itemKey)">
        Hide
      </v-btn>
      <v-btn v-else color="indigo" @click="emit('show', itemKey)">
        show
      </v-btn>
    </v-col>
    <v-col>
      <v-btn color="red" @click="emit('destroy', itemKey)">
        REMOVE FROM SITE
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { useAuth } from '@/stores/userAuth.js'

const auth = useAuth()

defineProps({
  indexItem: Object,
  itemKey: String
})

const emit = defineEmits([
  'edit',
  'save',
  'hide',
  'show',
  'destroy'
])
</script>

<style scoped lang="scss"></style>
