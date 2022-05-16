<template>
    <v-form>
      <v-text-field v-model="state.query.apiKey" variant="outlined" label="API Key"></v-text-field>

      <v-text-field v-model="state.query.mode" variant="outlined" label="Mode"></v-text-field>

      <v-text-field v-model="state.query.continueUrl" variant="outlined" label="Continue URL"></v-text-field>
      <v-text-field v-model="state.query.oobCode" variant="outlined" label="Ont-time Code"></v-text-field>

    </v-form>
</template>


<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const state = reactive({
  query: {
    apiKey: '',
    continueUrl: '',
    mode: '',
    oobCode: ''
  }
})

onMounted(() => {
  state.query.apiKey = route.query.apiKey
  state.query.continueUrl = route.query.continueUrl
  state.query.mode = route.query.mode
  state.query.oobCode = route.query.oobCode
})
</script>

<style lang="scss" scoped></style>
