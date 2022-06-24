<template>
  <v-form
    id="fs-frm"
    name="simple-contact-form"
    accept-charset="utf-8"
    method="POST"
    class="modal-form"
  >
    <v-container>
      <fieldset id="fs-frm-inputs">
        <v-row>
          <v-col>
            <label for="message">Message</label>
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Your message here!"
              v-model="message"
              required
            ></textarea>
          </v-col>
        </v-row>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="LSFCC Contact Form Submission"
        />
      </fieldset>
      <v-btn @click="sendForm(e)">Submit</v-btn>
    </v-container>
  </v-form>
</template>

<script setup>
import $axios from 'axios';
import { ref } from 'vue'

const message = ref('')

async function sendForm(e) {
  const data = {
    message: message
  }

  const respsonse = await $axios.post('https://formspree.io/f/mpzbbega', data)
  return respsonse
}
</script>

<style lang="scss" scoped></style>
