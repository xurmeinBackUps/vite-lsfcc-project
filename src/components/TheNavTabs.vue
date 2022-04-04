<template>
	<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
		<div class="mdc-tab-bar">
			<router-link to="/about">
				<button class="mdc-tab mdc-button">
					<span class="mdc-tab__content">About</span>
					<span class="mdc-button__ripple"></span>
				</button>
			</router-link>
			<router-link to="/partners">
				<button class="mdc-tab mdc-button">
					<span class="mdc-tab__content">Partners</span>
					<span class="mdc-button__ripple"></span>
				</button>
			</router-link>
		</div>
	</section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.mdc-tab-bar {
	display: inline-flex;
	width: fit-content;
}

.mdc-tab__content {
  color: $white;
}
</style>
