<template>
  <content-wrapper>
    <template #base-component>
    <v-card-title>
      Memorabilia & Images
    </v-card-title>
    <ShowMemorabilia />
    <ButtonContact
      @click="ui.contactForm = true"
      class="contact-btn"
    />
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ButtonContact from "@/components/ButtonContact.vue";
import ShowMemorabilia from "@/components/ShowMemorabilia.vue";
</script>

<style lang="scss" scoped>

</style>
