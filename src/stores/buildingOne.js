import { defineStore } from "pinia";
import { rtdb } from '../firebase.config.js'
import { ref, onValue } from 'firebase/database'

export const useBuildingOne = defineStore('building1', {
	state () {
		return {
			name: '',
			years: [],
			entries: []
		}
	},

	actions: {
	  async fetchName() {
			const b1Name = ref(rtdb, '/schools/building1/name')
			onValue(b1Name,  (snapshot) => {
				this.$state.name = snapshot.val()
			})
		},
    async fetchYears(){
      const yearIndex = ref(rtdb, '/schools/building1/entries')
      onValue(yearIndex, (snapshot) => {
        snapshot.forEach((idx) => {
          const year = idx.key
          const entry = idx.val()
          this.$state.years.push(year)
          this.$state.entries.push(entry)
        })
      })
    },

	}
})
