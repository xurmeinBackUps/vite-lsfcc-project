import { defineStore } from "pinia";

export const useBuildings = defineStore('buildings', {
	state: () => {
		return {
			id: 1,
			entries: [
				{
					year: 'xxxx',

				}
			]
		}
	}
})
