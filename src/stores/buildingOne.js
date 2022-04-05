import { defineStore } from "pinia";
import { db } from '../firebase.config.js'
import { ref } from 'firebase/database'

export const useBuildingOne = defineStore('building1', {
	state: () => {
		return {
			name: ref(db, '/schools/building1/name'),
			entries: ref(db, '/schools/building1/entries')
		}
	}
})
