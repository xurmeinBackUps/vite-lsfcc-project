<template>
  <content-wrapper>
    <template #base-component>
      <v-row>
        <v-col>
          <v-card-title> Memorabilia & Images </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ShowMemorabilia />
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row>
        <v-col>
          <ButtonContact @click="ui.contact = true" />
        </v-col>
      </v-row>
    </template>
  </content-wrapper>
</template>

<script setup>
import ContentWrapper from "@/layout/ContentWrapper.vue";
import ButtonContact from "@/components/ButtonContact.vue";
import ShowMemorabilia from "@/components/ShowMemorabilia.vue";
import { useUiState } from '@/stores/uiState.js'

const ui = useUiState()
</script>
