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
        v-if="!auth.verifiedEmail"
        v-model="email"
        id="verification-email"
        variant="outlined"
        label="Verify email address"
      ></v-text-field>
      <v-btn color="green">Submit</v-btn>
    </v-form>
</template>

<script setup>
import { onMounted, onBeforeMount, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuth } from '@/stores/userAuth.js';

const route = useRoute()
const router = useRouter()

const auth = useAuth()

const query = reactive({
    apiKey: '',
    continueUrl: '',
    mode: '',
    oobCode: ''
})

const email = ref('')

function submitVerify() {
  if (email === auth.currentUser.email) return router.push({path: query.continueUrl})
}

onBeforeMount(() => {
  query.apiKey = route.query.apiKey
  query.continueUrl = route.query.continueUrl
  query.mode = route.query.mode
  query.oobCode = route.query.oobCode
})

onMounted(() => {
  auth.bloggerVerifyLoginLink(window.location.href)

  if (auth.currentUser.email) {
    email = auth.currentUser.email
    submitVerify()
  } else {
    window.prompt('uh-oh!')
    router.push({path: '/'})
  }
})
</script>

<style lang="scss" scoped></style>
