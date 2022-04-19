<template>
  <div class="wrap">
    <label class="mdc-text-field mdc-text-field--outlined">
      <span class="mdc-notched-outline">
       <span class="mdc-notched-outline__leading"></span>
       <span class="mdc-notched-outline__notch">
          <span id="input-type" class="mdc-floating-label">
            {{ props.inputType }}
          </span>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>
      <input
        v-model="userVal"
        class="mdc-text-field__input"
        type="text"
      />
    </label>
  </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue';
import { useAuth } from '@/stores/userAuth.js'

const users = useAuth()

const props = defineProps({
    inputType: String
})

const userVal = ref("")

function setCredential(val, type) {
  if(type === 'email') {
    users.credentials.email = val
  }

  if(type === 'password'){
        users.credentials.password = val
  }
}

onUpdated(() => {
  setCredential(userVal, props.inputType)
})
</script>

<style scoped lang="scss">
.wrap {
  padding: 10px;
}
</style>
