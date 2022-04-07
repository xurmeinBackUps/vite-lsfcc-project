<template>
	<div class="mdc-card">
		b1Store:
		<br />
		{{ store }}
	</div>
</template>

<script setup>
import { useBuildingOne } from '@/stores/buildingOne.js'

const store = useBuildingOne
// export default {
// 	beforeMount
// }

</script>
