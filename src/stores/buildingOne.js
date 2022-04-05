import { defineStore } from "pinia";
import { db } from '../firebase.config.js'
import { ref, onValue } from 'firebase/database'

export const useBuildingOne = defineStore('building1', {
	state: () => {
		return {
			name: '',
			entries: []
		}
	},

	actions: {
		async fetchB1Data() {
			const b1Blob = ref(db, '/schools/building1/')
			onValue(b1Blob, (snapshot) => {
				snapshot.toJSON()
			})
		}
	}
})
