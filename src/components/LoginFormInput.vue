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
        aria-labelledby="input-type"
      />
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    inputType: String
})

const userVal = ref("")

</script>

<style scoped lang="scss">
.wrap {
  padding: 10px;
}
</style>
