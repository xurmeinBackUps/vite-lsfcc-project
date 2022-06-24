<template>
  <v-form
    id="fs-frm"
    name="simple-contact-form"
    accept-charset="utf-8"
    action="https://formspree.io/f/mpzbbega"
    method="POST"
    class="modal-form"
  >
    <v-container>
      <fieldset id="fs-frm-inputs">
        <v-row>
          <v-col>
            <label for="email-address">Email Address</label>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="your.email@website.url"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label for="message">Message</label>
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Your message here!"
              required
            ></textarea>
          </v-col>
        </v-row>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="LSFCC Contact Form"
        />
      </fieldset>
      <input type="submit" value="Submit" />
    </v-container>
  </v-form>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
