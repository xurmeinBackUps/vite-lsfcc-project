import { defineStore } from 'pinia'
import { rtdb } from '../firebaseApp.config.js'
import { ref, onValue } from 'firebase/database'

export const useBuildingTwo = defineStore('building2', {
  state: () => ({
    name: '',
    entries: [],
  }),

  getters: {
    entriesCount: (state) => {
      return state.entries.length
    },

    newId() {
      return this.entriesCount + 1
    }
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

    addEntry(dates, text) {
      set(
        ref(rtdb, 'schools/building1/entries' + this.newId),
        {
          dates: dates,
          text: text
        }
      )
    },

    updateEntry() {},
  },
})
