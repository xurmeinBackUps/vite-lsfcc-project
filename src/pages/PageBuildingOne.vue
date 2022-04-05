<template>
	<div class="mdc-card"></div>
</template>

<script setup>
import { useBuildingOne } from '@/stores/buildingOne.js'
import { ref } from 'vue';

const b1Store = useBuildingOne()
const b1Data = await b1Store.fetchB1Data()

const data = ref(b1Data)
</script>
