import { defineStore } from "pinia";
import { rtdb } from '../firebase.config.js'
import { ref, onValue } from 'firebase/database'

export const useBuildingOne = defineStore('building1', {
	state: () => {
		return {
			name: '',
			entries: []
		}
	},

	actions: {
		fetchName() {
			const $name = ref(rtdb, '/schools/building1/name')
			onValue($name, async (snapshot) => {
				this.$state.name = await snapshot.val()
			})
		},
		fetchEntries() {
			const $entry = ref(rtdb, 'schools/building1/entries')
			onValue($entry, async (snapshot) => {
				this.$state.entries = await snapshot.val()
			})
		}
	}
})
