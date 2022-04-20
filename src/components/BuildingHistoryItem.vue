<template>
  <div>
    <div class="mdc-touch-target-wrapper">
      <div class="mdc-radio mdc-radio--touch">
        <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" checked>
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        <div class="mdc-radio__ripple"></div>
      </div>
      <label>{{ entry.dates }}</label>
    </div>
     <p v-html="entry.text"></p>
  </div>
</template>

<script setup>
defineProps({
  entry: Object,
});
</script>

<style></style>
