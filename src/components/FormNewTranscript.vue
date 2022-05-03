<template>

    <v-card>
      <v-form>
        <input type="text" label="test" placeholder="test" />
        <input type="text" label="test" placeholder="test" />
        <input type="text" label="test" placeholder="test" />
        <input type="text" label="test" placeholder="test" />

            <v-btn
              @click.prevent="ui.newTransForm = false">Submit</v-btn>

            <v-btn @click.prevent="ui.newTransForm = false">Cancel</v-btn>

      </v-form>
    </v-card>

</template>

<script setup>
import { useUiState } from '../stores/uiState.js';

const ui = useUiState()
</script>

<style lang="scss" scoped></style>
