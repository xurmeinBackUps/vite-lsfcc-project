<template>
	<div class="mdc-card">
		<span>{{ store.name }}</span>
		<br />
		<span>{{ store.entries }}</span>
	</div>
</template>
<script >
import { useBuildingOne } from '@/stores/buildingOne.js'

export default {
	setup() {

		const store = useBuildingOne()
		store.fetchName()
		store.fetchEntries()

		return {
			store,
		}

	}
}

// export default {
// 	beforeMount
// }</script>
<style></style>
