import { defineStore } from "pinia";
import { rtdb } from '../firebase.config.js'
import { ref, onValue } from 'firebase/database'

export const useBuildingTwo = defineStore('building2', {
	state: () => ({
		name: '',
		entries: []
	}),
	actions: {
		fetchName() {
			const $name = ref(rtdb, '/schools/building2/name')
			onValue($name, (snapshot) => {
				this.$state.name = snapshot.val()
			})
		},
		fetchEntries() {
			const $entries = ref(rtdb, 'schools/building2/entries')
			onValue($entries, (snapshot) => {
				this.$state.entries = snapshot.val()
			})
		},
	}
})
