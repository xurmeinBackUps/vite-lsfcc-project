<template>
	<div>
		<BuildingHistory />
	</div>
</template>


<script setup>
import BuildingHistory from '@/components/BuildingHistory.vue'

defineProps({
	bId: String
})
</script>
