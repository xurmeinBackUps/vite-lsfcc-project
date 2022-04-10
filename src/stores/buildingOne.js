import { defineStore } from "pinia";
import { rtdb } from '../firebase.config.js'
import { ref, onValue } from 'firebase/database'

export const useBuildingOne = defineStore('building1', {
	state: () => ({
		name: '',
		entries: []
	}),
	actions: {
		fetchName() {
			const $name = ref(rtdb, '/schools/building1/name')
			onValue($name, async (snapshot) => {
				this.$state.name = await snapshot.val()
			})
		},
		fetchEntries() {
			const $entries = ref(rtdb, 'schools/building1/entries')
			onValue($entries, async (snapshot) => {
				this.$state.entries = await snapshot.val()
			})
		},
	}
})
