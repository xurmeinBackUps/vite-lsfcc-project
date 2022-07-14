<template>
  <v-form
    id="fs-frm"
    name="simple-contact-form"
    accept-charset="utf-8"

    method="POST"
    class="form"
  >
    <v-container>
      <fieldset id="fs-frm-inputs">
            <label for="email">Email</label>
              <v-row>
          <v-col>
            <v-text-field
              placeholder="Your email (optional)"
              v-model="email"
            ></v-text-field>
          </v-col>
        </v-row>
            <label for="message">Message</label>
        <v-row>
          <v-col>
            <v-textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Your message here!"
              v-model="message"
              required
            ></v-textarea>
          </v-col>
        </v-row>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="LSFCC Contact Form Submission"
        />
      </fieldset>
      <v-btn @click="sendForm">Submit</v-btn>
      <v-btn @click="ui.closeContact()">Cancel</v-btn>
    </v-container>
  </v-form>
</template>

<script setup>
import $axios from 'axios';
import { ref } from 'vue'
import { useUiState } from '@/stores/uiState.js'

const ui = useUiState()
const message = ref('')
const email = ref('')


async function sendForm(e) {
  console.log("sendForm!!!!")
  const data = {
    message: message,
    email: email
  }

  const respsonse = await $axios.post('https://formspree.io/f/mpzbbega', data)
  return respsonse
}
</script>

<style lang="scss" scoped>
.form {
  width: 67vw;
}
</style>
