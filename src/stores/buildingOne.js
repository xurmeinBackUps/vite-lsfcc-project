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
		fetchB1Data() {
			const $name = ref(rtdb, '/schools/building1/name')
			onValue($name, async (snapshot) => {
				state.name = await snapshot.val()
			})
		}
	}
})
