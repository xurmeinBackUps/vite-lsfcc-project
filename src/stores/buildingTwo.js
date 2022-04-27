import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue } from 'firebase/database'

export const useBuildingTwo = defineStore('building2', {
  state: () => ({
    name: '',
    entries: [],
  }),

  getters: {
    years: (state) => {
      const entriesData = state.entries
      return entriesData.forEach((entry) => {
        entry['dates']
      })
    },
  },

  actions: {
    fetchName() {
      const dbRef = ref(rtdb, 'schools/building2/name')
      onValue(dbRef, (snapshot) => {
        this.name = snapshot.val()
      })
    },
    fetchEntries() {
      const dbRef = ref(rtdb, 'schools/building2/entries')
      onValue(dbRef, (snapshot) => {
        this.entries = snapshot.val()
      })
    },
  },
})
