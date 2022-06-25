<template>
    <v-form>
      <v-text-field
        v-model="query.apiKey"
        variant="outlined"
        label="API Key"
        disabled
      ></v-text-field>

      <v-text-field
        v-model="query.mode"
        variant="outlined"
        label="Mode"
        disabled
      ></v-text-field>

      <v-text-field
        v-model="query.continueUrl"
        variant="outlined"
        label="Continue URL"
        disabled
      ></v-text-field>
      <v-text-field
        v-model="query.oobCode"
        variant="outlined"
        label="One-time Code"
        disabled
      ></v-text-field>

      <v-text-field
        v-if="auth.currentUser.email"
        v-model="auth.currentUser.email"
        variant="outlined"
        label="Verified email address"
        disabled
      ></v-text-field>

      <v-text-field
        v-else
        id="verification-email"
        v-model="email"
        variant="filled"
        label="Verify your email"
      ></v-text-field>
      <v-btn color="green">Submit</v-btn>
    </v-form>
</template>

<script setup>
import { onMounted, onBeforeMount, reactive, ref, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '@/stores/userAuth.js';

const route = useRoute()

const auth = useAuth()

const query = reactive({
  apiKey: '',
  continueUrl: '',
  mode: '',
  oobCode: ''
})

const email = ref('')

onBeforeMount(() => {
  let continueUrl = route.query.continueUrl
  let href = continueUrl.replace(`${location.origin}`, '')

  query.apiKey = route.query.apiKey
  query.continueUrl = href
  query.mode = route.query.mode
  query.oobCode = route.query.oobCode
})

onMounted(() => {
  auth.bloggerVerifyLoginLink(window.location.href, query.continueUrl)
})

</script>

<style langs="scss" scoped></style>
