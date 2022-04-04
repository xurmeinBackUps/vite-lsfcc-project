import { defineStore } from "pinia";
import { getDatabase, ref } from '@firebase/database'

const db = getDatabase()


export const useBuildingOne = defineStore('building1', {
	state: () => {
		return {
			name: db.ref(`/schools/${id}/name`),
			entries: db.ref(`/schools/${id}/entries`)
		}
	}
})
